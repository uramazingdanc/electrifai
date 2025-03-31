
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, signup } = useAuth();

  // Check localStorage for auth_mode when component mounts
  useEffect(() => {
    const authMode = localStorage.getItem('auth_mode');
    if (authMode === 'signup') {
      setIsLoginMode(false);
      // Clear the auth_mode after using it
      localStorage.removeItem('auth_mode');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isLoginMode) {
        await login(username, password);
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
      } else {
        await signup(username, password);
        toast({
          title: "Account created!",
          description: "Your account has been successfully created.",
        });
      }
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: isLoginMode ? "Login failed" : "Sign up failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-6">
            <img 
              src="/lovable-uploads/785a13e0-94fc-4dfe-89fc-b49436ca830c.png" 
              alt="ElectrifAI Logo" 
              className="h-16" 
            />
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username">Username/Email</Label>
            <Input 
              id="username"
              type="text" 
              placeholder="Enter your username or email" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-white shadow-sm h-14 rounded-lg border border-gray-200"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password"
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white shadow-sm h-14 rounded-lg border border-gray-200"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#0099FF] hover:bg-blue-600 h-12 rounded-lg font-medium mt-6"
            disabled={isLoading}
          >
            {isLoading 
              ? (isLoginMode ? "Signing In..." : "Signing Up...") 
              : (isLoginMode ? "Sign In" : "Sign Up")}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {isLoginMode ? "No account yet?" : "Already have an account?"}{' '}
              <button 
                type="button"
                onClick={toggleMode} 
                className="text-[#0099FF] hover:underline font-medium"
              >
                {isLoginMode ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
