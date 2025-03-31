import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
const Index = () => {
  const {
    isAuthenticated
  } = useAuth();
  return <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <div className="flex justify-center mb-8">
            <img src="/lovable-uploads/785a13e0-94fc-4dfe-89fc-b49436ca830c.png" alt="ElectrifAI Logo" className="h-20" />
          </div>
          
          
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? <Link to="/dashboard">
                <Button className="bg-[#0099FF] hover:bg-blue-600 px-8 py-6 text-lg h-auto">
                  Go to Dashboard
                </Button>
              </Link> : <>
                <Link to="/auth">
                  <Button className="bg-[#0099FF] hover:bg-blue-600 text-lg h-auto px-[67px] py-[6px]">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="outline" onClick={() => localStorage.setItem('auth_mode', 'signup')} className="border-[#0099FF] px-8 text-lg h-auto text-slate-50 py-[6px] bg-zinc-950 hover:bg-zinc-800">
                    Create Account
                  </Button>
                </Link>
              </>}
          </div>
        </div>
      </div>
      
      
    </div>;
};
export default Index;