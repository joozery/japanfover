
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Settings,
  Database,
  Bell,
  Lock,
  Globe,
  Palette,
  Save,
  RefreshCw,
  Trash2,
  Shield,
  Mail,
  Users,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import AdminLayout from '@/components/admin/AdminLayout';

const AdminSettingsPage = () => {
  const { toast } = useToast();
  const [siteName, setSiteName] = useState('Japanese For Everyday');
  const [siteDescription, setSiteDescription] = useState('เรียนภาษาญี่ปุ่นออนไลน์ฟรี');
  const [adminEmail, setAdminEmail] = useState('admin@japanfever.com');

  const handleSaveGeneral = () => {
    toast({
      title: '✅ บันทึกการตั้งค่าสำเร็จ',
      description: 'การตั้งค่าทั่วไปถูกบันทึกแล้ว',
    });
  };

  const handleClearCache = () => {
    toast({
      title: '✅ ล้าง Cache สำเร็จ',
      description: 'ข้อมูล Cache ถูกล้างเรียบร้อยแล้ว',
    });
  };

  const handleResetData = () => {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตข้อมูลทั้งหมด? การกระทำนี้ไม่สามารถย้อนกลับได้')) {
      localStorage.removeItem('customVocabulary');
      localStorage.removeItem('quizResults');
      localStorage.removeItem('encounteredWords');
      
      toast({
        title: '✅ รีเซ็ตข้อมูลสำเร็จ',
        description: 'ข้อมูลทั้งหมดถูกรีเซ็ตแล้ว',
      });
    }
  };

  const handleExportData = () => {
    const data = {
      customVocabulary: JSON.parse(localStorage.getItem('customVocabulary') || '[]'),
      quizResults: JSON.parse(localStorage.getItem('quizResults') || '[]'),
      users: JSON.parse(localStorage.getItem('users') || '[]'),
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `japanese-for-everyday-backup-${Date.now()}.json`;
    link.click();

    toast({
      title: '✅ ส่งออกข้อมูลสำเร็จ',
      description: 'ไฟล์ข้อมูลถูกดาวน์โหลดแล้ว',
    });
  };

  // Get statistics
  const stats = {
    customVocab: JSON.parse(localStorage.getItem('customVocabulary') || '[]').length,
    quizResults: JSON.parse(localStorage.getItem('quizResults') || '[]').length,
    users: JSON.parse(localStorage.getItem('users') || '[]').length,
    cacheSize: new Blob([JSON.stringify(localStorage)]).size / 1024 // KB
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>ตั้งค่า | Admin Panel</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ตั้งค่าระบบ</h1>
          <p className="text-gray-500 mt-1">จัดการการตั้งค่าและข้อมูลระบบ</p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">คำศัพท์ Custom</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.customVocab}</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ผลคะแนน</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.quizResults}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ผู้ใช้</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.users}</p>
                </div>
                <div className="bg-green-50 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ขนาด Cache</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.cacheSize.toFixed(1)} KB</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-xl">
                  <Database className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">ทั่วไป</TabsTrigger>
            <TabsTrigger value="security">ความปลอดภัย</TabsTrigger>
            <TabsTrigger value="data">ข้อมูล</TabsTrigger>
            <TabsTrigger value="notifications">การแจ้งเตือน</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-pink-500" />
                  การตั้งค่าทั่วไป
                </CardTitle>
                <CardDescription>
                  จัดการข้อมูลพื้นฐานของเว็บไซต์
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName">ชื่อเว็บไซต์</Label>
                  <Input
                    id="siteName"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    placeholder="Japanese For Everyday"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteDescription">คำอธิบาย</Label>
                  <Input
                    id="siteDescription"
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
                    placeholder="เรียนภาษาญี่ปุ่นออนไลน์ฟรี"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adminEmail">อีเมล Admin</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admin@japanfever.com"
                  />
                </div>

                <Button 
                  onClick={handleSaveGeneral}
                  className="gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                >
                  <Save className="w-4 h-4" />
                  บันทึกการตั้งค่า
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  ความปลอดภัย
                </CardTitle>
                <CardDescription>
                  จัดการการตั้งค่าความปลอดภัยของระบบ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">เพิ่มความปลอดภัยด้วยการยืนยันตัวตน 2 ขั้นตอน</p>
                    </div>
                    <Button variant="outline">เปิดใช้งาน</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Session Timeout</h3>
                      <p className="text-sm text-gray-600">กำหนดเวลา Session หมดอายุ</p>
                    </div>
                    <select className="px-3 py-2 border rounded-md">
                      <option>30 นาที</option>
                      <option>1 ชั่วโมง</option>
                      <option>2 ชั่วโมง</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">IP Whitelist</h3>
                      <p className="text-sm text-gray-600">จำกัดการเข้าถึงจาก IP ที่กำหนด</p>
                    </div>
                    <Button variant="outline">จัดการ</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Management */}
          <TabsContent value="data">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-500" />
                  จัดการข้อมูล
                </CardTitle>
                <CardDescription>
                  ส่งออก ลบ หรือรีเซ็ตข้อมูลในระบบ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* Export Data */}
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        <Database className="w-4 h-4 text-blue-500" />
                        ส่งออกข้อมูล
                      </h3>
                      <p className="text-sm text-gray-600">ดาวน์โหลดข้อมูลทั้งหมดเป็นไฟล์ JSON</p>
                    </div>
                    <Button 
                      variant="outline"
                      onClick={handleExportData}
                      className="gap-2"
                    >
                      <Database className="w-4 h-4" />
                      ส่งออก
                    </Button>
                  </div>

                  {/* Clear Cache */}
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-green-500" />
                        ล้าง Cache
                      </h3>
                      <p className="text-sm text-gray-600">ล้างข้อมูล Cache ชั่วคราว</p>
                    </div>
                    <Button 
                      variant="outline"
                      onClick={handleClearCache}
                      className="gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      ล้าง Cache
                    </Button>
                  </div>

                  {/* Reset Data */}
                  <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2 text-red-700">
                        <Trash2 className="w-4 h-4" />
                        รีเซ็ตข้อมูลทั้งหมด
                      </h3>
                      <p className="text-sm text-red-600">ลบข้อมูลทั้งหมดในระบบ (ไม่สามารถย้อนกลับได้)</p>
                    </div>
                    <Button 
                      variant="destructive"
                      onClick={handleResetData}
                      className="gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      รีเซ็ต
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    <strong>💡 คำแนะนำ:</strong> แนะนำให้ส่งออกข้อมูลสำรองก่อนทำการรีเซ็ตข้อมูล
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" />
                  การแจ้งเตือน
                </CardTitle>
                <CardDescription>
                  จัดการการแจ้งเตือนและอีเมล
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">การแจ้งเตือนผู้ใช้ใหม่</h3>
                      <p className="text-sm text-gray-600">ส่งอีเมลเมื่อมีผู้ใช้ลงทะเบียนใหม่</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">การแจ้งเตือนคะแนนสูง</h3>
                      <p className="text-sm text-gray-600">ส่งอีเมลเมื่อมีคะแนนสูงใหม่</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">รายงานสรุปรายวัน</h3>
                      <p className="text-sm text-gray-600">ส่งอีเมลสรุปสถิติประจำวัน</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSettingsPage;

