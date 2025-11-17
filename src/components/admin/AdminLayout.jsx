
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Trophy, 
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import logo from '@/assets/logojapanlove.png';

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'แดชบอร์ด', path: '/admin/dashboard' },
  { id: 'users', icon: Users, label: 'จัดการผู้ใช้', path: '/admin/users' },
  { id: 'vocabulary', icon: BookOpen, label: 'จัดการคำศัพท์', path: '/admin/vocabulary' },
  { id: 'leaderboard', icon: Trophy, label: 'กระดานคะแนน', path: '/admin/leaderboard' },
  { id: 'settings', icon: Settings, label: 'ตั้งค่า', path: '/admin/settings' },
];

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo & Brand */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <Link to="/admin/dashboard" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          {sidebarOpen && (
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Admin Panel
              </span>
              <span className="text-xs text-gray-500">Japanese For Everyday</span>
            </div>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hidden lg:flex"
        >
          <ChevronLeft className={`w-5 h-5 transition-transform ${!sidebarOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className={`flex items-center gap-3 mb-3 ${sidebarOpen ? '' : 'justify-center'}`}>
          <Avatar className="w-10 h-10 border-2 border-pink-200">
            <AvatarImage src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${user?.name}`} />
            <AvatarFallback className="bg-pink-100 text-pink-600">A</AvatarFallback>
          </Avatar>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          )}
        </div>
        <Button
          variant="outline"
          onClick={handleLogout}
          className={`w-full gap-2 text-red-600 border-red-200 hover:bg-red-50 ${
            sidebarOpen ? '' : 'px-0'
          }`}
        >
          <LogOut className="w-4 h-4" />
          {sidebarOpen && <span>ออกจากระบบ</span>}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white z-50 lg:hidden shadow-2xl">
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between lg:justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </Button>
          
          <div className="flex items-center gap-4">
            <Link to="/" target="_blank">
              <Button variant="outline" className="gap-2">
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">ดูเว็บไซต์</span>
              </Button>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

