
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, PartyPopper } from 'lucide-react'; // Added PartyPopper icon
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { levels } from '@/data/vocabularyData';

const LevelTestPage = () => {
  const navigate = useNavigate();
  const { user, updateUserLevel } = useAuth();
  const { toast } = useToast();
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levelDescriptions = {
    N5: 'เริ่มต้น - เหมาะสำหรับผู้ที่เพิ่งเริ่มเรียนภาษาญี่ปุ่น',
    N4: 'พื้นฐาน - สามารถสนทนาเรื่องง่ายๆ ในชีวิตประจำวัน',
    N3: 'กลาง - เข้าใจบทสนทนาทั่วไปและข้อความพื้นฐาน',
    N2: 'ค่อนข้างสูง - สามารถใช้ภาษาญี่ปุ่นในสถานการณ์ต่างๆ',
    N1: 'ขั้นสูง - เข้าใจภาษาญี่ปุ่นในระดับสูง'
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleConfirm = () => {
    if (!selectedLevel) {
      toast({
        title: 'กรุณาเลือกระดับ',
        description: 'เลือกระดับที่เหมาะกับคุณก่อนดำเนินการต่อ',
        variant: 'destructive',
      });
      return;
    }

    if (user) {
      updateUserLevel(selectedLevel);
    }

    toast({
      title: (
        <div className="flex items-center gap-2">
          <PartyPopper className="text-yellow-500 w-5 h-5" />
          เยี่ยมเลย!
        </div>
      ),
      description: `คุณเลือกระดับ ${selectedLevel} แล้ว เริ่มเรียนกันเลย!`,
    });

    navigate(`/category/${selectedLevel}`);
  };

  return (
    <>
      <Helmet>
        <title>ทดสอบระดับ | Japanese For Everyday</title>
        <meta name="description" content="ทดสอบระดับภาษาญี่ปุ่นของคุณ" />
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">เลือกระดับของคุณ</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เลือกระดับที่คุณคิดว่าเหมาะกับตัวเอง คุณสามารถเปลี่ยนระดับได้ตลอดเวลา
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {levels.map((level, index) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 border-2 ${
                      selectedLevel === level
                        ? 'border-rose-500 shadow-xl bg-gradient-to-br from-pink-50 to-rose-50'
                        : 'border-gray-200 hover:border-rose-300 hover:shadow-lg'
                    }`}
                    onClick={() => handleLevelSelect(level)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                          {level}
                        </span>
                        {selectedLevel === level && (
                          <CheckCircle className="w-6 h-6 text-rose-500" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{levelDescriptions[level]}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={handleConfirm}
                disabled={!selectedLevel}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-lg px-12 py-6"
              >
                เริ่มเรียนเลย!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelTestPage;
