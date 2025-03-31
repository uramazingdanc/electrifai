
import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { BottomNavBar } from './BottomNavBar';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type MainLayoutProps = {
  children: React.ReactNode;
  userRole?: 'consumer' | 'admin';
};

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  userRole = 'consumer' 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close sidebar on desktop by default
  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <TopBar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={handleToggleSidebar} 
        userRole={userRole}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          open={sidebarOpen} 
          userRole={userRole} 
          onClose={handleCloseSidebar}
        />
        <main className={cn(
          "flex-1 overflow-y-auto p-4 transition-all duration-300",
          isMobile ? "pb-20" : "",
          !isMobile && sidebarOpen ? "md:ml-64" : !isMobile ? "md:ml-20" : ""
        )}>
          {children}
        </main>
      </div>
      <BottomNavBar onOpenSidebar={handleToggleSidebar} />
    </div>
  );
};
