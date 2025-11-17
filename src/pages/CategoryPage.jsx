
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Rat, Utensils, Palette, Hash, Users, Cloud, MessageCircle, Briefcase, Flower2, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { categories } from '@/data/vocabularyData';

// Map category IDs to Lucide icons
const categoryIcons = {
  greetings: MessageCircle,
  family: Users,
  animals: Rat,
  work: Briefcase,
  numbers: Hash,
  food: Utensils,
  seasons: Flower2,
  colors: Palette,
  vehicles: Car,
  weather: Cloud
};

const CategoryPage = () => {
  const { level } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{`เลือกหมวดหมู่ - ${level} | Japanese For Everyday`}</title>
        <meta name="description" content={`เลือกหมวดหมู่คำศัพท์ภาษาญี่ปุ่นระดับ ${level}`} />
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
            <h1 className="text-4xl font-bold mb-4">
              เลือกหมวดหมู่สำหรับ <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{level}</span>
            </h1>
            <p className="text-gray-600">เลือกหมวดที่คุณต้องการฝึกฝน</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const IconComponent = categoryIcons[category.id];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className="cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-rose-300 h-full"
                    onClick={() => navigate(`/quiz/${level}/${category.id}`)}
                  >
                    <CardHeader className="text-center pb-4">
                      {IconComponent && <IconComponent className="w-12 h-12 mx-auto mb-4 text-rose-500" />} {/* Replaced emoji with icon */}
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 gap-2">
                        <Play className="w-4 h-4" />
                        เริ่มเรียน
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
