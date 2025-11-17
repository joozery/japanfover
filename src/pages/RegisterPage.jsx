
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { PartyPopper, Mail, Lock, User, CheckCircle2, Star, Target, Zap } from 'lucide-react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      register(email, password, name);
      toast({
        title: (
          <div className="flex items-center gap-2">
            <PartyPopper className="text-yellow-500 w-5 h-5" />
            <span>สมัครสมาชิกสำเร็จ!</span>
          </div>
        ),
        description: 'เริ่มต้นการเรียนรู้ภาษาญี่ปุ่นกันเลย!',
      });
      navigate('/account');
    } catch (error) {
      toast({
        title: 'เกิดข้อผิดพลาด',
        description: 'ไม่สามารถสร้างบัญชีได้ กรุณาลองใหม่อีกครั้ง',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: CheckCircle2,
      text: 'เรียนฟรี 100% ไม่มีค่าใช้จ่าย'
    },
    {
      icon: Star,
      text: 'บทเรียนที่ออกแบบมาเป็นพิเศษ'
    },
    {
      icon: Target,
      text: 'ติดตามความก้าวหน้าได้ง่าย'
    },
    {
      icon: Zap,
      text: 'เรียนรู้ได้ทุกที่ทุกเวลา'
    }
  ];

  return (
    <>
      <Helmet>
        <title>สมัครสมาชิก - Japanese For Everyday</title>
      </Helmet>
      <div className="min-h-screen flex">
        {/* Left Side - Illustration/Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
        >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-5 h-5 fill-white" />
                <span className="text-sm font-medium">เริ่มต้นฟรี ไม่มีค่าใช้จ่าย</span>
              </div>
              
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                เข้าร่วมกับเรา<br />
                เรียนรู้ภาษาญี่ปุ่น
              </h2>
              <p className="text-xl text-pink-50 mb-12 leading-relaxed">
                ร่วมเป็นส่วนหนึ่งกับนักเรียนนับพัน<br />
                ที่กำลังเรียนรู้ภาษาญี่ปุ่นอย่างสนุกสนาน
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Japanese Characters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 text-9xl font-bold text-white select-none"
            >
              始める
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl mb-4 shadow-lg"
              >
                <PartyPopper className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                สร้างบัญชีใหม่
              </h1>
              <p className="text-gray-600">เริ่มต้นการเดินทางสู่ภาษาญี่ปุ่นวันนี้</p>
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name Input */}
                <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  ชื่อ
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="ชื่อของคุณ"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-11 h-12 border-gray-300 focus:border-pink-500 focus:ring-pink-500 transition-all"
                  />
                </div>
              </div>

              {/* Email Input */}
                <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  อีเมล
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-11 h-12 border-gray-300 focus:border-pink-500 focus:ring-pink-500 transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
                <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  รหัสผ่าน
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="สร้างรหัสผ่านที่ปลอดภัย"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="pl-11 h-12 border-gray-300 focus:border-pink-500 focus:ring-pink-500 transition-all"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร</p>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <p>
                  การสมัครสมาชิก คุณยอมรับ
                  <Link to="#" className="text-pink-600 hover:text-pink-700 font-medium"> เงื่อนไขการใช้งาน</Link>
                  {' '}และ
                  <Link to="#" className="text-pink-600 hover:text-pink-700 font-medium"> นโยบายความเป็นส่วนตัว</Link>
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>กำลังสร้างบัญชี...</span>
                  </div>
                ) : (
                  'สร้างบัญชีฟรี'
                )}
                </Button>
            </motion.form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">หรือ</span>
              </div>
            </div>

            {/* Login Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="text-gray-600">
                มีบัญชีอยู่แล้ว?{' '}
                <Link
                  to="/login"
                  className="font-semibold text-pink-600 hover:text-pink-700 transition-colors"
                >
                  เข้าสู่ระบบที่นี่
                </Link>
              </p>
            </motion.div>
          </motion.div>
              </div>
      </div>
    </>
  );
};

export default RegisterPage;
