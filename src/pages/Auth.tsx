
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This would be replaced with actual API call to backend
      setTimeout(() => {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
        navigate('/');
      }, 1000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // This would be replaced with actual API call to backend
      setTimeout(() => {
        toast({
          title: "Account created!",
          description: "Your account has been successfully created.",
        });
        navigate('/');
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f6fa] p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-2">
            <span className="text-4xl font-bold bg-gradient-electric text-gradient">AI</span>
          </div>
        </div>
        
        <form onSubmit={isLoginMode ? handleLogin : handleSignup} className="space-y-4">
          {!isLoginMode && (
            <div className="space-y-2">
              <Input 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLoginMode}
                className="bg-white shadow-sm h-12"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Username/Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white shadow-sm h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white shadow-sm h-12"
            />
          </div>
          
          {!isLoginMode && (
            <div className="space-y-2">
              <Input 
                type="password" 
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={!isLoginMode}
                className="bg-white shadow-sm h-12"
              />
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-[#0066CC] hover:bg-blue-700 h-12"
            disabled={isLoading}
          >
            {isLoading 
              ? (isLoginMode ? "Logging in..." : "Creating account...") 
              : (isLoginMode ? "Sign In" : "Sign Up")}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {isLoginMode ? "No account yet?" : "Already have an account?"}{' '}
              <button 
                type="button"
                onClick={toggleMode} 
                className="text-[#0066CC] hover:underline font-medium"
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
