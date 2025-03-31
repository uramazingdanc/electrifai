
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { cn } from '@/lib/utils';

type MainLayoutProps = {
  children: React.ReactNode;
  userRole?: 'consumer' | 'admin';
};

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  userRole = 'consumer' 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      <TopBar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        userRole={userRole}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} userRole={userRole} />
        <main className={cn(
          "flex-1 overflow-y-auto p-4 transition-all duration-300",
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
};
