
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { BrainCircuit, Zap, AlertTriangle, Mic, Bot } from 'lucide-react';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <div className="flex justify-center mb-8">
            <img src="/lovable-uploads/785a13e0-94fc-4dfe-89fc-b49436ca830c.png" alt="ElectrifAI Logo" className="h-20" />
          </div>
          
          <h1 className="text-4xl font-bold mb-2 font-dm-sans">Smart Energy Management</h1>
          <h2 className="text-2xl mb-6 font-dm-sans">Powered by <span className="text-[#0099FF]">Eli</span>, Your Energy AI</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#0099FF] rounded-full p-3">
                <Bot className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 font-dm-sans">Meet Eli - Your Autonomous Energy Manager</h3>
            <p className="text-gray-700 mb-4 font-inter">
              Eli optimizes your energy usage in real-time, predicting weather patterns, 
              managing battery storage, and detecting anomalies to save you up to 20% on energy costs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Zap className="h-5 w-5 text-[#0099FF]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold font-dm-sans">Energy Optimization</h4>
                  <p className="text-sm text-gray-600 font-inter">Predicts energy needs and optimizes usage based on weather forecasts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <AlertTriangle className="h-5 w-5 text-[#0099FF]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold font-dm-sans">Anomaly Detection</h4>
                  <p className="text-sm text-gray-600 font-inter">Identifies unusual patterns that might indicate theft or equipment issues</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <BrainCircuit className="h-5 w-5 text-[#0099FF]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold font-dm-sans">Personalized Routines</h4>
                  <p className="text-sm text-gray-600 font-inter">Learns your habits and schedules appliances to run at optimal times</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Mic className="h-5 w-5 text-[#0099FF]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold font-dm-sans">Voice Control</h4>
                  <p className="text-sm text-gray-600 font-inter">Seamlessly integrates with smart home assistants for voice commands</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button className="bg-[#0099FF] hover:bg-blue-600 px-8 py-6 text-lg h-auto font-inter">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth">
                  <Button className="text-lg h-auto px-[67px] py-[6px] rounded-lg text-blue-50 bg-blue-600 hover:bg-blue-500 font-inter">
                    Start 
                  </Button>
                </Link>
                <Link to="/auth">
                  
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
