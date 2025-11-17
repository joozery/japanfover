import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ThreeHeroBackground from '@/components/ThreeHeroBackground';

const heroContent = {
  title: "เรียนภาษาญี่ปุ่น",
  subtitle: "แบบสนุกและง่ายดาย",
  description: "เริ่มต้นการเดินทางสู่ความเชี่ยวชาญภาษาญี่ปุ่นของคุณวันนี้"
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Three.js 3D Background */}
        <ThreeHeroBackground />
        
        {/* Pink to White gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-rose-100/50 to-white/60 z-20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-800 p-4 z-30">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {heroContent.title} <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">{heroContent.subtitle}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-gray-700 mb-8 max-w-2xl"
          >
            {heroContent.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button
              size="lg"
              onClick={() => navigate('/level-test')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-lg px-8 py-6"
            >
              เริ่มทดสอบระดับ
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/category/N5')}
              className="text-lg px-8 py-6 border-gray-800 text-gray-800 hover:bg-gray-800/10"
            >
              เริ่มเรียนเลย
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


