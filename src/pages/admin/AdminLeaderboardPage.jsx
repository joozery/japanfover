
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal,
  Crown,
  TrendingUp,
  Calendar,
  Filter,
  Download,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AdminLayout from '@/components/admin/AdminLayout';
import { categories, levels } from '@/data/vocabularyData';

const AdminLeaderboardPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('all'); // all, week, month
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Load leaderboard data from localStorage
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    // Group and sort data
    const groupedData = {};
    quizResults.forEach(result => {
      const key = result.userId || 'guest';
      if (!groupedData[key]) {
        groupedData[key] = {
          userId: key,
          userName: result.userName || `User ${key.slice(0, 6)}`,
          totalScore: 0,
          totalQuizzes: 0,
          avgScore: 0,
          bestScore: 0,
          categories: new Set(),
          levels: new Set()
        };
      }
      
      groupedData[key].totalScore += result.score;
      groupedData[key].totalQuizzes += 1;
      groupedData[key].bestScore = Math.max(groupedData[key].bestScore, result.score);
      groupedData[key].categories.add(result.category);
      groupedData[key].levels.add(result.level);
    });

    // Convert to array and calculate averages
    const dataArray = Object.values(groupedData).map(user => ({
      ...user,
      avgScore: Math.round(user.totalScore / user.totalQuizzes),
      categories: Array.from(user.categories),
      levels: Array.from(user.levels)
    }));

    // Sort by total score
    dataArray.sort((a, b) => b.totalScore - a.totalScore);

    setLeaderboardData(dataArray);
  }, [selectedLevel, selectedCategory, timeRange]);

  const getMedalIcon = (rank) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-lg font-bold text-gray-600">{rank}</span>;
  };

  const getRankColor = (rank) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300';
    if (rank === 2) return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300';
    if (rank === 3) return 'bg-gradient-to-r from-amber-50 to-amber-100 border-amber-300';
    return 'bg-white border-gray-200';
  };

  // Statistics
  const stats = {
    totalPlayers: leaderboardData.length,
    totalQuizzes: leaderboardData.reduce((sum, user) => sum + user.totalQuizzes, 0),
    avgScore: Math.round(leaderboardData.reduce((sum, user) => sum + user.avgScore, 0) / (leaderboardData.length || 1)),
    topScore: leaderboardData.length > 0 ? leaderboardData[0].totalScore : 0
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>กระดานคะแนน | Admin Panel</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">กระดานคะแนน</h1>
            <p className="text-gray-500 mt-1">ติดตามอันดับและผลคะแนนของผู้เรียนทั้งหมด</p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
            <Download className="w-4 h-4" />
            ดาวน์โหลดรายงาน
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ผู้เล่นทั้งหมด</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalPlayers}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">แบบทดสอบทั้งหมด</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalQuizzes}</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">คะแนนเฉลี่ย</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.avgScore}%</p>
                </div>
                <div className="bg-green-50 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">คะแนนสูงสุด</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.topScore}</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-xl">
                  <Crown className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              >
                <option value="all">🎯 ทุกระดับ</option>
                {levels.map((level) => (
                  <option key={level} value={level}>Level {level}</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              >
                <option value="all">📚 ทุกหมวดหมู่</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                ))}
              </select>

              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              >
                <option value="all">📅 ทั้งหมด</option>
                <option value="week">สัปดาห์นี้</option>
                <option value="month">เดือนนี้</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Table */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>🏆 อันดับคะแนน</CardTitle>
            <CardDescription>
              แสดงผู้เล่นทั้งหมด {leaderboardData.length} คน
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboardData.length === 0 ? (
                <div className="text-center py-12">
                  <Trophy className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ยังไม่มีข้อมูลคะแนน</h3>
                  <p className="text-gray-500">เมื่อมีผู้เล่นทำแบบทดสอบจะแสดงที่นี่</p>
                </div>
              ) : (
                leaderboardData.map((user, index) => {
                  const rank = index + 1;
                  return (
                    <motion.div
                      key={user.userId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 ${getRankColor(rank)} transition-all hover:shadow-md`}
                    >
                      {/* Rank */}
                      <div className="flex items-center justify-center w-12 h-12">
                        {getMedalIcon(rank)}
                      </div>

                      {/* Avatar */}
                      <Avatar className="w-12 h-12 border-2 border-pink-200">
                        <AvatarImage src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${user.userName}`} />
                        <AvatarFallback className="bg-pink-100 text-pink-600 font-bold">
                          {user.userName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{user.userName}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>🎯 {user.totalQuizzes} แบบทดสอบ</span>
                          <span>📚 {user.categories.length} หมวด</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex flex-col items-end gap-1">
                        <div className="text-2xl font-bold text-pink-600">{user.totalScore}</div>
                        <div className="text-xs text-gray-500">คะแนนรวม</div>
                      </div>

                      <div className="hidden md:flex flex-col items-end gap-1">
                        <div className="text-xl font-bold text-blue-600">{user.avgScore}%</div>
                        <div className="text-xs text-gray-500">เฉลี่ย</div>
                      </div>

                      <div className="hidden md:flex flex-col items-end gap-1">
                        <div className="text-xl font-bold text-green-600">{user.bestScore}</div>
                        <div className="text-xs text-gray-500">สูงสุด</div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminLeaderboardPage;

