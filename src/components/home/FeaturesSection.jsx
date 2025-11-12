import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { icon: BookOpen, title: 'เรียนรู้ตามจังหวะของคุณ', description: 'เรียนได้ทุกที่ทุกเวลา' },
  { icon: Zap, title: 'ระบบคะแนนแบบเรียลไทม์', description: 'แข่งขันกับผู้เรียนคนอื่น' },
  { icon: Trophy, title: 'Leaderboard', description: 'ติดตามอันดับของคุณ' },
  { icon: Users, title: 'เรียนฟรี', description: 'ไม่มีค่าใช้จ่าย' }
];

const FeaturesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-pink-200 bg-white">
            <CardContent className="p-6 text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-pink-600" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesSection;

