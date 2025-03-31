
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <div className="text-5xl font-bold flex items-baseline justify-center mb-8">
            <span className="text-black">ELECTRIF</span>
            <span className="text-[#0066CC]">AI</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Smart Energy Management</h1>
          <p className="text-lg text-gray-600 mb-8">
            Monitor and optimize your energy consumption with AI-powered insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button className="bg-[#0066CC] hover:bg-blue-700 px-8 py-6 text-lg h-auto">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth">
                  <Button className="bg-[#0066CC] hover:bg-blue-700 px-8 py-6 text-lg h-auto">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button 
                    variant="outline" 
                    className="border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white px-8 py-6 text-lg h-auto"
                    onClick={() => localStorage.setItem('auth_mode', 'signup')}
                  >
                    Create Account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      <footer className="bg-white p-6 text-center border-t">
        <p className="text-gray-600">© 2023 ElectrifAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
