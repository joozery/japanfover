
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/assets/logojapanlove.png';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white border-t border-gray-100 py-8 mt-12"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <Link to="/" className="flex items-center gap-2 text-rose-500 hover:text-pink-600 transition-colors">
            <img src={logo} alt="Japanese For Everyday" className="w-8 h-8 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-bold">
                Japanese
              </span>
              <span className="text-xs sm:text-sm font-semibold">
                For Everyday
              </span>
            </div>
          </Link>

          <nav className="flex space-x-6">
            <Link to="/leaderboard" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">
              <span className="font-medium">Leaderboard</span>
            </Link>
            <Link to="/vocabulary" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">
              <span className="font-medium">คำศัพท์ของฉัน</span>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors text-sm" onClick={() => alert('🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀')}>
              <span className="font-medium">ติดต่อเรา</span>
            </Link>
          </nav>
        </div>

        <div className="mt-8 text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            สร้างด้วยความ 
            <Heart className="w-4 h-4 text-red-500" /> 
            เพื่อผู้เรียนภาษาญี่ปุ่นทุกท่าน
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Japanese For Everyday. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
