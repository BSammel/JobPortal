import React from 'react';
import { Navigate, Outlet , useLocation } from 'react-router-dom';

const ProtectedRoute = ({ requiredRoles }) => {
  
  return <Outlet />;
};

export default ProtectedRoute;