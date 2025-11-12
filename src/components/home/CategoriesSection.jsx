import React from 'react';
import { motion } from 'framer-motion';
import { Rat, Utensils, Palette, Hash, Users, Hand, Cloud, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/vocabularyData';

const categoryIcons = {
  animals: Rat,
  food: Utensils,
  colors: Palette,
  numbers: Hash,
  family: Users,
  body: Hand,
  weather: Cloud,
  time: Clock
};

const CategoriesSection = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl py-16 px-4 min-h-[600px]">
      {/* Beautiful Japan-themed Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-0">
        {/* Background Image - Japan Theme */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2069)',
          }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/80 via-rose-500/70 to-purple-600/80 animate-gradient" />
        {/* Additional texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow-2xl">
          หมวดหมู่ที่มีให้เรียน
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.id];
            return (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-pink-400 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    {IconComponent && <IconComponent className="w-12 h-12 mx-auto mb-3 text-pink-600" />}
                    <div className="font-semibold text-gray-800">{category.name}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoriesSection;

