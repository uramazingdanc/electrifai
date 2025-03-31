
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  username: string;
  role: 'consumer' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check for authentication token in localStorage
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData) as User;
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error) {
        console.error('Error parsing user data:', error);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      }
    } else {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false
      });
    }
  }, []);
  
  const login = async (username: string, password: string): Promise<void> => {
    // Simulate API call to backend
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // In a real app, this would be an API call to verify credentials
        if (username && password) {
          // Mock successful login
          const mockUser: User = {
            id: `user_${Math.random().toString(36).substr(2, 9)}`,
            username,
            role: 'consumer',
          };
          
          localStorage.setItem('auth_token', `mock_token_${Date.now()}`);
          localStorage.setItem('user_data', JSON.stringify(mockUser));
          
          setAuthState({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false
          });
          
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 800); // Simulate network delay
    });
  };
  
  const signup = async (username: string, password: string): Promise<void> => {
    // Simulate API call to backend for registration
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if user already exists
        const existingUsers = localStorage.getItem('registered_users');
        const users = existingUsers ? JSON.parse(existingUsers) : [];
        
        const userExists = users.some((user: {username: string}) => 
          user.username === username
        );
        
        if (userExists) {
          reject(new Error('User already exists'));
          return;
        }
        
        // Create new user
        const newUser: User = {
          id: `user_${Math.random().toString(36).substr(2, 9)}`,
          username,
          role: 'consumer',
        };
        
        // Store in "database"
        users.push({username, password: btoa(password)});
        localStorage.setItem('registered_users', JSON.stringify(users));
        
        // Log in the new user
        localStorage.setItem('auth_token', `mock_token_${Date.now()}`);
        localStorage.setItem('user_data', JSON.stringify(newUser));
        
        setAuthState({
          user: newUser,
          isAuthenticated: true,
          isLoading: false
        });
        
        resolve();
      }, 800);
    });
  };
  
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    navigate('/');
  };
  
  return { 
    user: authState.user,
    isAuthenticated: authState.isAuthenticated, 
    isLoading: authState.isLoading,
    login,
    signup,
    logout
  };
}
