
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, you'd validate the password. Here we just find the user.
    // For this mock, we'll just create a user if they don't exist.
    const userData = {
      id: Date.now().toString(),
      email,
      name: email.split('@')[0],
      level: 'N5',
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const register = (email, password, name) => {
    const userData = {
      id: Date.now().toString(),
      email,
      name,
      level: 'N5',
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const updateUserLevel = (level) => {
    if (user) {
      const updatedUser = { ...user, level };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUserLevel, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
