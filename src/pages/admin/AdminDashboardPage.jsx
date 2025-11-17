
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Trophy, 
  TrendingUp,
  Activity,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import AdminLayout from '@/components/admin/AdminLayout';

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalVocabulary: 0,
    totalQuizzes: 0,
    avgScore: 0,
    growth: 0
  });

  useEffect(() => {
    // Load statistics from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    // Calculate statistics
    const totalUsers = users.length + 1; // +1 for demo
    const activeUsers = Math.floor(totalUsers * 0.7); // 70% active rate
    
    const totalQuizzes = quizResults.length || 156; // Demo value
    const avgScore = quizResults.length > 0 
      ? quizResults.reduce((sum, r) => sum + r.score, 0) / quizResults.length 
      : 85;
    
    setStats({
      totalUsers,
      activeUsers,
      totalVocabulary: 215, // From vocabularyData
      totalQuizzes,
      avgScore: Math.round(avgScore),
      growth: 12.5 // Demo growth percentage
    });
  }, []);

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Active Users',
      value: stats.activeUsers.toLocaleString(),
      change: '+8.2%',
      trend: 'up',
      icon: Activity,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Vocabulary Words',
      value: stats.totalVocabulary.toLocaleString(),
      change: '+5 new',
      trend: 'up',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Total Quizzes',
      value: stats.totalQuizzes.toLocaleString(),
      change: '+23.1%',
      trend: 'up',
      icon: Trophy,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    }
  ];

  const recentActivities = [
    { user: 'Somchai P.', action: 'Completed N5 Animals Quiz', score: 95, time: '2 mins ago' },
    { user: 'Ploy W.', action: 'Completed N4 Food Quiz', score: 88, time: '15 mins ago' },
    { user: 'Nattapong K.', action: 'Registered new account', score: null, time: '30 mins ago' },
    { user: 'Kanokwan S.', action: 'Completed N3 Work Quiz', score: 92, time: '1 hour ago' },
    { user: 'Pongsakorn T.', action: 'Completed Level Test', score: 85, time: '2 hours ago' }
  ];

  const levelDistribution = [
    { level: 'N5', users: 45, percentage: 45, color: 'bg-green-500' },
    { level: 'N4', users: 28, percentage: 28, color: 'bg-blue-500' },
    { level: 'N3', users: 15, percentage: 15, color: 'bg-purple-500' },
    { level: 'N2', users: 8, percentage: 8, color: 'bg-orange-500' },
    { level: 'N1', users: 4, percentage: 4, color: 'bg-red-500' }
  ];

  return (
    <AdminLayout>
      <Helmet>
        <title>Admin Dashboard | Japanese For Everyday</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin! Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">{new Date().toLocaleDateString('th-TH', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <div className="flex items-center gap-1 text-sm">
                          {stat.trend === 'up' ? (
                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-600" />
                          )}
                          <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                            {stat.change}
                          </span>
                          <span className="text-gray-500">vs last month</span>
                        </div>
                      </div>
                      <div className={`${stat.bgColor} p-3 rounded-xl`}>
                        <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-pink-500" />
                  Recent Activities
                </CardTitle>
                <CardDescription>Latest user activities and quiz completions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start justify-between py-3 border-b last:border-0 border-gray-100">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.user}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <div className="ml-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                            {activity.score}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Level Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  User Level Distribution
                </CardTitle>
                <CardDescription>Distribution of users across JLPT levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {levelDistribution.map((level) => (
                    <div key={level.level} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-700">Level {level.level}</span>
                        <span className="text-gray-600">{level.users} users ({level.percentage}%)</span>
                      </div>
                      <Progress value={level.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Average Score</p>
                      <p className="text-2xl font-bold text-pink-600">{stats.avgScore}%</p>
                    </div>
                    <div className={`bg-pink-100 p-3 rounded-xl`}>
                      <Trophy className="w-8 h-8 text-pink-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;

