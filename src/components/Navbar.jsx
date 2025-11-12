
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, BookMarked, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from '@/assets/logojapanlove.png';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Japanese For Everyday" className="w-10 h-10 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Japanese
              </span>
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                For Everyday
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/leaderboard">
              <Button variant="ghost" className="gap-2 text-gray-700 hover:text-rose-500">
                <Trophy className="w-5 h-5" />
                <span className="hidden sm:inline">Leaderboard</span>
              </Button>
            </Link>

            {user && (
              <Link to="/vocabulary">
                <Button variant="ghost" className="gap-2 text-gray-700 hover:text-rose-500">
                  <BookMarked className="w-5 h-5" />
                  <span className="hidden sm:inline">คำศัพท์ของฉัน</span>
                </Button>
              </Link>
            )}

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border-2 border-pink-200">
                      <AvatarImage src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${user.name}`} alt={user.name} />
                      <AvatarFallback className="bg-pink-100 text-pink-600 font-bold">{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/account')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>โปรไฟล์</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-600 focus:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>ออกจากระบบ</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                 <Button variant="ghost" onClick={() => navigate('/login')}>
                    เข้าสู่ระบบ
                 </Button>
                 <Button onClick={() => navigate('/register')} className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                    สมัครสมาชิก
                 </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
