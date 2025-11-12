
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-pink-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/level-test" element={<LevelTestPage />} />
            <Route path="/category/:level" element={<CategoryPage />} />
            <Route path="/quiz/:level/:category" element={<QuizPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            
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
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
