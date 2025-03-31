
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-electricgray">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <img 
            src="/lovable-uploads/453df1e7-c7ae-414d-a94a-e8126da5f274.png" 
            alt="ElectrifAI Logo" 
            className="h-24 mx-auto mb-6" 
          />
          <h1 className="text-4xl font-bold mb-6 text-electricblue">
            Welcome to ElectrifAI
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            The AI-powered energy management platform designed for electricity distribution cooperatives in the Philippines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button className="bg-electricblue hover:bg-blue-700 text-white px-6 py-2 text-lg">
                Consumer Dashboard
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" className="border-electricblue text-electricblue hover:bg-electricblue hover:text-white px-6 py-2 text-lg">
                Admin Portal
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="bg-white p-6 text-center">
        <p className="text-gray-600">
          © 2023 ElectrifAI - AI-powered energy management for electricity distribution cooperatives
        </p>
      </footer>
    </div>
  );
};

export default Index;
