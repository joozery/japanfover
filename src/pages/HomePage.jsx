
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import LevelsSection from '@/components/home/LevelsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import SakuraFalling from '@/components/SakuraFalling';

const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Japanese For Everyday - เรียนภาษาญี่ปุ่นออนไลน์ฟรี</title>
        <meta name="description" content="เรียนภาษาญี่ปุ่นออนไลน์ฟรี ตั้งแต่ N5 ถึง N1 พร้อมระบบคะแนนและ Leaderboard" />
      </Helmet>

      {/* Sakura Falling Animation */}
      <SakuraFalling />

      <div>
        <HeroSection />

        <section className="container mx-auto px-4 py-16">
          <FeaturesSection />
          <LevelsSection />
          <CategoriesSection />
        </section>
      </div>
    </>
  );
};

export default HomePage;
