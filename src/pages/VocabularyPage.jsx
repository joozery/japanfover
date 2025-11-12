
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookMarked, Volume2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { getAllVocabulary } from '@/data/vocabularyData';
import { getEncounteredWords } from '@/utils/quizUtils';

const VocabularyPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [encounteredVocabulary, setEncounteredVocabulary] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    const encounteredIds = getEncounteredWords(user.id);
    const allVocab = getAllVocabulary();
    const encountered = allVocab.filter(word => encounteredIds.includes(word.id));
    setEncounteredVocabulary(encountered);
  }, [user, navigate]);

  const playAudio = () => {
    toast({
      title: '🔊 เสียงกำลังเล่น',
      description: 'ฟีเจอร์เสียงจะพร้อมใช้งานเร็วๆ นี้!',
    });
  };

  const filteredVocabulary = encounteredVocabulary.filter(word =>
    word.japanese.includes(searchTerm) ||
    word.hiragana.includes(searchTerm) ||
    word.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.thai.includes(searchTerm)
  );

  return (
    <>
      <Helmet>
        <title>คำศัพท์ของฉัน | Japanese For Everyday</title>
        <meta name="description" content="ดูคำศัพท์ทั้งหมดที่คุณเคยเจอ" />
      </Helmet>

      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 gap-2 text-gray-700 hover:text-rose-500"
          >
            <ArrowLeft className="w-4 h-4" />
            กลับหน้าหลัก
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <BookMarked className="w-10 h-10 text-rose-500" />
              คำศัพท์ของฉัน
            </h1>
            <p className="text-gray-600">คำศัพท์ทั้งหมดที่คุณเคยเจอในแบบทดสอบ</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ค้นหาคำศัพท์..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {filteredVocabulary.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <BookMarked className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">
                    {searchTerm ? 'ไม่พบคำศัพท์ที่ค้นหา' : 'คุณยังไม่มีคำศัพท์ที่บันทึกไว้'}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {!searchTerm && 'เริ่มทำแบบทดสอบเพื่อสะสมคำศัพท์กันเลย!'}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVocabulary.map((word, index) => (
                  <motion.div
                    key={word.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-rose-200">
                      <CardContent className="p-6">
                        <img 
                          src={word.image}
                          alt={word.thai}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1691097097104-5d1d91ebba42';
                          }}
                        />
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-3xl font-bold japanese-text">{word.japanese}</h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={playAudio}
                              className="hover:bg-pink-100"
                            >
                              <Volume2 className="w-5 h-5 text-rose-500" />
                            </Button>
                          </div>
                          <p className="text-xl text-gray-600 japanese-text">{word.hiragana}</p>
                          <p className="text-sm text-gray-500">{word.romaji}</p>
                          <p className="text-lg font-medium text-rose-500">{word.thai}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredVocabulary.length > 0 && (
              <div className="mt-8 text-center text-gray-600">
                แสดง {filteredVocabulary.length} คำศัพท์
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VocabularyPage;
