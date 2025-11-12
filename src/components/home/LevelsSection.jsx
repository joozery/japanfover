import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { levels } from '@/data/vocabularyData';

const LevelsSection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">เลือกระดับของคุณ</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {levels.map((level, index) => (
          <motion.div
            key={level}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-pink-300 bg-white"
              onClick={() => navigate(`/category/${level}`)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                  {level}
                </div>
                <div className="text-sm text-gray-600">
                  {index === 0 ? 'เริ่มต้น' : index === 4 ? 'ขั้นสูง' : 'กลาง'}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LevelsSection;

