
import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Check for authentication token in localStorage
    const hasToken = localStorage.getItem('auth_token');
    setIsAuthenticated(!!hasToken);
    setIsLoading(false);
  }, []);
  
  const login = () => {
    localStorage.setItem('auth_token', 'demo_token');
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  };
  
  return { 
    isAuthenticated, 
    isLoading,
    login,
    logout
  };
}
