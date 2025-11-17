
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import LevelTestPage from '@/pages/LevelTestPage';
import CategoryPage from '@/pages/CategoryPage';
import QuizPage from '@/pages/QuizPage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import VocabularyPage from '@/pages/VocabularyPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import AccountPage from '@/pages/AccountPage';
import ProtectedRoute from '@/components/ProtectedRoute';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute';
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Admin Pages
import AdminLoginPage from '@/pages/admin/AdminLoginPage';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import UsersManagementPage from '@/pages/admin/UsersManagementPage';
import VocabularyManagementPage from '@/pages/admin/VocabularyManagementPage';
import AdminLeaderboardPage from '@/pages/admin/AdminLeaderboardPage';
import AdminSettingsPage from '@/pages/admin/AdminSettingsPage';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      {!isAdminRoute && <Navbar />}
      <main className={!isAdminRoute ? "flex-grow" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/level-test" element={<LevelTestPage />} />
          <Route path="/category/:level" element={<CategoryPage />} />
          <Route path="/quiz/:level/:category" element={<QuizPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          
          {/* Protected User Routes */}
          <Route 
            path="/vocabulary" 
            element={
              <ProtectedRoute>
                <VocabularyPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/account" 
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            } 
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedAdminRoute>
                <AdminDashboardPage />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/users" 
            element={
              <ProtectedAdminRoute>
                <UsersManagementPage />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/vocabulary" 
            element={
              <ProtectedAdminRoute>
                <VocabularyManagementPage />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/leaderboard" 
            element={
              <ProtectedAdminRoute>
                <AdminLeaderboardPage />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/settings" 
            element={
              <ProtectedAdminRoute>
                <AdminSettingsPage />
              </ProtectedAdminRoute>
            } 
          />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
