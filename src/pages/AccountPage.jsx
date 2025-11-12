
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Award, Calendar } from 'lucide-react';

const AccountPage = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // Or a loading spinner, this should be handled by ProtectedRoute
  }
  
  const getInitials = (name) => {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Helmet>
        <title>โปรไฟล์ของฉัน - Japanese For Everyday</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="text-center bg-pink-50/50 p-8 rounded-t-lg">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white shadow-md">
                <AvatarImage src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${user.name}`} alt={user.name} />
                <AvatarFallback className="text-4xl bg-pink-100 text-pink-600 font-bold">{getInitials(user.name)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
              <p className="text-gray-500">ผู้เรียนภาษาญี่ปุ่น</p>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">ข้อมูลบัญชี</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <User className="w-5 h-5 text-pink-500" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">ชื่อผู้ใช้</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">อีเมล</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-5 h-5 text-pink-500" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">ระดับปัจจุบัน</p>
                    <p className="font-medium text-lg text-rose-600 bg-rose-100 px-3 py-1 rounded-full w-fit">{user.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-pink-500" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">วันที่เข้าร่วม</p>
                    <p className="font-medium">{formatDate(user.createdAt)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default AccountPage;
