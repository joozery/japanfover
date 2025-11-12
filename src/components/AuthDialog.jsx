
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, PartyPopper } from 'lucide-react'; // Added icons

const AuthDialog = ({ open, onOpenChange }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        login(email, password);
        toast({
          title: (
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              เข้าสู่ระบบสำเร็จ!
            </div>
          ),
          description: 'ยินดีต้อนรับกลับมา!',
        });
      } else {
        register(email, password, name);
        toast({
          title: (
            <div className="flex items-center gap-2">
              <PartyPopper className="text-yellow-500 w-5 h-5" />
              สมัครสมาชิกสำเร็จ!
            </div>
          ),
          description: 'เริ่มต้นการเรียนรู้ภาษาญี่ปุ่นกันเลย!',
        });
      }
      onOpenChange(false);
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      toast({
        title: 'เกิดข้อผิดพลาด',
        description: 'กรุณาลองใหม่อีกครั้ง',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
          </DialogTitle>
          <DialogDescription>
            {isLogin 
              ? 'เข้าสู่ระบบเพื่อบันทึกความก้าวหน้าของคุณ' 
              : 'สร้างบัญชีเพื่อปลดล็อกฟีเจอร์พิเศษ'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">ชื่อ</Label>
              <Input
                id="name"
                type="text"
                placeholder="ชื่อของคุณ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">อีเมล</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">รหัสผ่าน</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
            {isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-rose-500 hover:text-rose-600 font-medium"
            >
              {isLogin ? 'ยังไม่มีบัญชี? สมัครสมาชิก' : 'มีบัญชีแล้ว? เข้าสู่ระบบ'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
