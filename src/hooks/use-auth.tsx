
import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check for authentication token in localStorage (demo only)
    // In a real app, this would validate the token with the backend
    const hasToken = localStorage.getItem('auth_token');
    setIsAuthenticated(!!hasToken);
    
    // For demo purposes, set a token if none exists
    if (!hasToken) {
      localStorage.setItem('auth_token', 'demo_token');
      setIsAuthenticated(true);
    }
  }, []);
  
  return { isAuthenticated, isLoading: isAuthenticated === null };
}
