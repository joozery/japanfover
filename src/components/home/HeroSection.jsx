import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// เลือกวิธีที่ต้องการใช้:
// Option 1: พื้นหลังปัจจุบัน (Cherry blossom particles)
// import ThreeHeroBackground from '@/components/ThreeHeroBackground';

// Option 2: ใช้ Sketchfab Embed (iframe)
// import SketchfabEmbed from '@/components/SketchfabEmbed';

// Option 3: ใช้ Three.js GLTF Loader สำหรับ model จาก Sketchfab ⭐ (กำลังใช้อยู่)
import Sketchfab3DBackground from '@/components/Sketchfab3DBackground';

const heroContent = {
  title: "เรียนภาษาญี่ปุ่น",
  subtitle: "แบบสนุกและง่ายดาย",
  description: "เริ่มต้นการเดินทางสู่ความเชี่ยวชาญภาษาญี่ปุ่นของคุณวันนี้"
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[65vh] md:min-h-[70vh] overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6 py-8 px-4 md:px-8">
          
          {/* Left Side - Content (Text + Buttons) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center items-start text-left space-y-6 z-10"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight"
            >
              {heroContent.title}
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                {heroContent.subtitle}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl"
            >
              {heroContent.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              <Button
                size="lg"
                onClick={() => navigate('/level-test')}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                เริ่มทดสอบระดับ
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/category/N5')}
                className="text-lg px-8 py-6 border-2 border-pink-500 text-pink-600 hover:bg-pink-50 transition-all"
              >
                เริ่มเรียนเลย
              </Button>
            </motion.div>

            {/* Optional: Add some stats or features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-6 mt-4 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>5 ระดับภาษา</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span>10 หมวดหมู่</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎮</span>
                <span>เรียนผ่านเกม</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Model */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[550px] relative -mt-8 md:-mt-12 lg:-mt-16"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Sketchfab3DBackground 
                modelUrl="/ultimate_japanese_konbini.glb"
                cameraDistance={4.5}
                autoRotate={true}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;


