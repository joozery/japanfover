
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Trophy, Clock, CheckCircle, PartyPopper } from 'lucide-react'; // Added icons
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { getVocabularyByCategory, categories } from '@/data/vocabularyData';
import { generateQuizQuestions, calculateScore, saveQuizResult, saveEncounteredWord } from '@/utils/quizUtils';

const QuizPage = () => {
  const { level, category } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const categoryData = categories.find(c => c.id === category);

  useEffect(() => {
    const vocabulary = getVocabularyByCategory(category, level);
    if (vocabulary.length === 0) {
      toast({
        title: 'ไม่พบคำศัพท์',
        description: 'หมวดนี้ยังไม่มีคำศัพท์สำหรับระดับที่เลือก',
        variant: 'destructive',
      });
      navigate(`/category/${level}`);
      return;
    }
    const quizQuestions = generateQuizQuestions(vocabulary, 10);
    setQuestions(quizQuestions);
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
  }, [category, level, navigate, toast]);

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }

    if (user) {
      saveEncounteredWord(questions[currentQuestion].id, user.id);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setQuestionStartTime(Date.now());
      } else {
        const totalTime = Date.now() - startTime;
        const finalScore = calculateScore(correctAnswers + (isCorrect ? 1 : 0), questions.length, totalTime);
        saveQuizResult(level, category, finalScore, user?.id || 'guest');
        setShowResult(true);
      }
    }, 1500);
  };

  const playAudio = () => {
    toast({
      title: '🔊 เสียงกำลังเล่น',
      description: 'ฟีเจอร์เสียงจะพร้อมใช้งานเร็วๆ นี้!',
    });
  };

  if (questions.length === 0) {
    return null;
  }

  if (showResult) {
    const totalTime = Date.now() - startTime;
    const finalScore = calculateScore(correctAnswers, questions.length, totalTime);

    return (
      <>
        <Helmet>
          <title>ผลคะแนน | Japanese For Everyday</title>
        </Helmet>
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Card className="border-2 border-rose-200">
                <CardContent className="p-12">
                  <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
                  <h1 className="text-4xl font-bold mb-4">เยี่ยมมาก! <PartyPopper className="inline-block w-8 h-8 text-yellow-500" /></h1> {/* Added icon */}
                  <div className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-6">
                    {finalScore} คะแนน
                  </div>
                  <p className="text-xl text-gray-600 mb-8">
                    คุณตอบถูก {correctAnswers} จาก {questions.length} ข้อ
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button
                      onClick={() => navigate('/leaderboard')}
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    >
                      ดู Leaderboard
                    </Button>
                    <Button
                      onClick={() => window.location.reload()}
                      variant="outline"
                      className="border-rose-300 text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                    >
                      เล่นอีกครั้ง
                    </Button>
                    <Button
                      onClick={() => navigate(`/category/${level}`)}
                      variant="outline"
                      className="border-rose-300 text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                    >
                      เลือกหมวดอื่น
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Helmet>
        <title>{`${categoryData?.name} - ${level} | Japanese For Everyday`}</title>
      </Helmet>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate(`/category/${level}`)}
            className="mb-6 gap-2 text-gray-700 hover:text-rose-500"
          >
            <ArrowLeft className="w-4 h-4" />
            กลับ
          </Button>

          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  คำถามที่ {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {Math.floor((Date.now() - startTime) / 1000)}s
                </span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <Card className="mb-8 border-2 border-rose-200">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <img 
                        src={question.image}
                        alt={question.thai}
                        className="w-64 h-64 mx-auto rounded-xl object-cover mb-6 shadow-lg"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1595872018818-97555653a011';
                        }}
                      />
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <h2 className="text-5xl font-bold japanese-text">{question.japanese}</h2>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={playAudio}
                          className="hover:bg-pink-100"
                        >
                          <Volume2 className="w-6 h-6 text-rose-500" />
                        </Button>
                      </div>
                      <p className="text-2xl text-gray-600 japanese-text">{question.hiragana}</p>
                      <p className="text-lg text-gray-500 mt-2">{question.romaji}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {question.choices.map((choice, index) => {
                        const isSelected = selectedAnswer === choice;
                        const isCorrect = choice === question.correctAnswer;
                        const showCorrect = selectedAnswer && isCorrect;
                        const showWrong = isSelected && !isCorrect;

                        return (
                          <motion.div
                            key={index}
                            whileHover={!selectedAnswer ? { scale: 1.02 } : {}}
                            whileTap={!selectedAnswer ? { scale: 0.98 } : {}}
                          >
                            <Button
                              onClick={() => handleAnswerSelect(choice)}
                              disabled={!!selectedAnswer}
                              className={`w-full h-20 text-lg font-medium transition-all ${
                                showCorrect
                                  ? 'bg-green-500 hover:bg-green-600 text-white'
                                  : showWrong
                                  ? 'bg-red-500 hover:bg-red-600 text-white'
                                  : 'bg-white hover:bg-pink-50 text-gray-800 border-2 border-gray-200 hover:border-rose-300'
                              }`}
                            >
                              {choice}
                            </Button>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
