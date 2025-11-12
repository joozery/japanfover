
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Medal, Award, Rat, Utensils, Palette, Hash, Users as UsersIcon, Hand, Cloud, Clock } from 'lucide-react'; // Added category icons
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, levels } from '@/data/vocabularyData';
import { getLeaderboard } from '@/utils/quizUtils';

// Map category IDs to Lucide icons
const categoryIcons = {
  animals: Rat,
  food: Utensils,
  colors: Palette,
  numbers: Hash,
  family: UsersIcon,
  body: Hand,
  weather: Cloud,
  time: Clock
};

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('N5');
  const [selectedCategory, setSelectedCategory] = useState('animals');

  const leaderboard = getLeaderboard(selectedLevel, selectedCategory);
  const categoryData = categories.find(c => c.id === selectedCategory);
  const CategoryIconComponent = categoryIcons[selectedCategory];


  const getRankIcon = (rank) => {
    switch (rank) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Award className="w-6 h-6 text-orange-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center font-bold text-gray-600">{rank + 1}</span>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Leaderboard | Japanese For Everyday</title>
        <meta name="description" content="ดูอันดับคะแนนของผู้เรียนทั้งหมด" />
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
              <Trophy className="w-10 h-10 text-yellow-500" />
              Leaderboard
            </h1>
            <p className="text-gray-600">ดูอันดับคะแนนสูงสุดของแต่ละหมวด</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>เลือกระดับและหมวดหมู่</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">ระดับ</label>
                    <div className="flex gap-2 flex-wrap">
                      {levels.map(level => (
                        <Button
                          key={level}
                          variant={selectedLevel === level ? 'default' : 'outline'}
                          onClick={() => setSelectedLevel(level)}
                          className={selectedLevel === level ? 'bg-gradient-to-r from-pink-500 to-rose-500' : 'border-gray-200 text-gray-700 hover:bg-pink-50 hover:text-rose-500'}
                        >
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">หมวดหมู่</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {categories.map(category => {
                        const IconComponent = categoryIcons[category.id];
                        return (
                          <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? 'default' : 'outline'}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`gap-2 ${selectedCategory === category.id ? 'bg-gradient-to-r from-pink-500 to-rose-500' : 'border-gray-200 text-gray-700 hover:bg-pink-50 hover:text-rose-500'}`}
                          >
                            {IconComponent && <IconComponent className="w-4 h-4" />}
                            {category.name}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {CategoryIconComponent && <CategoryIconComponent className="w-6 h-6 text-rose-500" />}
                  {categoryData?.name} - {selectedLevel}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {leaderboard.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Trophy className="w-16 h-16 mx-auto mb-4 opacity-30" />
                    <p>ยังไม่มีคะแนนในหมวดนี้</p>
                    <p className="text-sm mt-2">เป็นคนแรกที่ทำคะแนนกันเลย!</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {leaderboard.slice(0, 50).map((entry, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          index < 3 ? 'bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-rose-200' : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {getRankIcon(index)}
                          <div>
                            <div className="font-semibold">{entry.userName}</div>
                            <div className="text-sm text-gray-500">
                              {new Date(entry.timestamp).toLocaleDateString('th-TH')}
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                          {entry.score}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
