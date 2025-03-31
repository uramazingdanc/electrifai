
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
            <div className="text-4xl font-bold flex items-baseline">
              <span className="text-black">ELECTRIF</span>
              <span className="text-[#0066CC]">AI</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="Username/Email" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-white shadow-sm h-14 rounded-lg border border-gray-200"
            />
          </div>
          
          <div className="space-y-2">
            <Input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white shadow-sm h-14 rounded-lg border border-gray-200"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#0066CC] hover:bg-blue-700 h-12 rounded-lg font-medium"
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
