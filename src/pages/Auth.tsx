
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This would be replaced with actual API call to backend
      setTimeout(() => {
        toast({
          title: isLoginMode ? "Welcome back!" : "Account created!",
          description: isLoginMode 
            ? "You have successfully logged in."
            : "Your account has been successfully created.",
        });
        navigate('/');
      }, 1000);
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
    <div className="min-h-screen flex items-center justify-center bg-[#f2f6fa] p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white shadow-sm h-14 rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white shadow-sm h-14 rounded-lg"
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
