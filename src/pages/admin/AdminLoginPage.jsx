
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import logo from '@/assets/logojapanlove.png';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { adminLogin, isAdmin } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Redirect if already logged in as admin
  React.useEffect(() => {
    if (isAdmin()) {
      navigate('/admin/dashboard');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const result = adminLogin(formData.email, formData.password);
      
      if (result) {
        toast({
          title: '✅ เข้าสู่ระบบสำเร็จ',
          description: 'ยินดีต้อนรับสู่ Admin Panel',
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: '❌ เข้าสู่ระบบไม่สำเร็จ',
          description: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
          variant: 'destructive',
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Japanese For Everyday</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-xl shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-2">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Admin Panel
              </CardTitle>
              <CardDescription className="text-gray-400 text-base mt-2">
                Japanese For Everyday
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Admin Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="admin@japanfever.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-pink-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-pink-500"
                    />
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-300">
                    <p className="font-medium mb-1">Demo Credentials:</p>
                    <p className="text-xs text-blue-200">Email: admin@japanfever.com</p>
                    <p className="text-xs text-blue-200">Password: admin123</p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-6 text-base"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>กำลังเข้าสู่ระบบ...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5" />
                      <span>เข้าสู่ระบบ Admin</span>
                    </div>
                  )}
                </Button>

                <div className="text-center pt-4">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => navigate('/')}
                    className="text-gray-400 hover:text-white"
                  >
                    ← กลับไปหน้าหลัก
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default AdminLoginPage;

