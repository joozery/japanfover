
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter,
  UserPlus,
  MoreVertical,
  Edit,
  Trash2,
  Mail,
  Calendar,
  Award,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import AdminLayout from '@/components/admin/AdminLayout';

const UsersManagementPage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Add some demo users if empty
    const demoUsers = [
      {
        id: '1',
        name: 'Somchai Prasert',
        email: 'somchai@example.com',
        role: 'user',
        level: 'N5',
        createdAt: '2024-01-15T10:30:00',
        quizzesTaken: 15,
        avgScore: 85
      },
      {
        id: '2',
        name: 'Ploy Wongsakul',
        email: 'ploy@example.com',
        role: 'user',
        level: 'N4',
        createdAt: '2024-01-20T14:20:00',
        quizzesTaken: 23,
        avgScore: 92
      },
      {
        id: '3',
        name: 'Nattapong Khamkhong',
        email: 'nattapong@example.com',
        role: 'user',
        level: 'N3',
        createdAt: '2024-02-01T09:15:00',
        quizzesTaken: 31,
        avgScore: 88
      },
      {
        id: '4',
        name: 'Kanokwan Sriwan',
        email: 'kanokwan@example.com',
        role: 'user',
        level: 'N4',
        createdAt: '2024-02-10T16:45:00',
        quizzesTaken: 18,
        avgScore: 90
      },
      {
        id: '5',
        name: 'Pongsakorn Tanaka',
        email: 'pongsakorn@example.com',
        role: 'user',
        level: 'N5',
        createdAt: '2024-02-15T11:00:00',
        quizzesTaken: 12,
        avgScore: 78
      }
    ];

    setUsers(storedUsers.length > 0 ? storedUsers : demoUsers);
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
    toast({
      title: '✅ ลบผู้ใช้สำเร็จ',
      description: 'ผู้ใช้ถูกลบออกจากระบบแล้ว',
    });
  };

  const getLevelColor = (level) => {
    const colors = {
      N5: 'bg-green-100 text-green-700 border-green-200',
      N4: 'bg-blue-100 text-blue-700 border-blue-200',
      N3: 'bg-purple-100 text-purple-700 border-purple-200',
      N2: 'bg-orange-100 text-orange-700 border-orange-200',
      N1: 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[level] || colors.N5;
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>Users Management | Admin Panel</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
            <p className="text-gray-500 mt-1">Manage and monitor all registered users</p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
            <UserPlus className="w-4 h-4" />
            Add New User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{users.length}</p>
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
                  <p className="text-sm text-gray-600">Active Today</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.floor(users.length * 0.4)}</p>
                </div>
                <div className="bg-green-50 p-3 rounded-xl">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Score</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(users.reduce((sum, u) => sum + (u.avgScore || 0), 0) / users.length || 0)}%
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Quizzes</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {users.reduce((sum, u) => sum + (u.quizzesTaken || 0), 0)}
                  </p>
                </div>
                <div className="bg-pink-50 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <CardDescription>
              Showing {filteredUsers.length} of {users.length} users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="w-12 h-12 border-2 border-pink-200">
                      <AvatarImage src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${user.name}`} />
                      <AvatarFallback className="bg-pink-100 text-pink-600 font-bold">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{user.name}</h3>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${getLevelColor(user.level)}`}>
                          {user.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(user.createdAt).toLocaleDateString('th-TH')}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Quizzes</p>
                        <p className="text-lg font-bold text-gray-900">{user.quizzesTaken}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Avg Score</p>
                        <p className={`text-lg font-bold ${getScoreColor(user.avgScore)}`}>
                          {user.avgScore}%
                        </p>
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="w-4 h-4" />
                        Edit User
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="gap-2 text-red-600 focus:text-red-600"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default UsersManagementPage;

