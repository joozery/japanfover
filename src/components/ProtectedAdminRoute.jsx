
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ProtectedAdminRoute = ({ children }) => {
  const { user, isAdmin } = useAuth();

  if (!user || !isAdmin()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;

