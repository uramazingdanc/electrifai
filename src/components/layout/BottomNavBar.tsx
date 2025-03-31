
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, MessageCircle, User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

type BottomNavBarProps = {
  onOpenSidebar: () => void;
};

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ onOpenSidebar }) => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: MessageCircle, label: 'Chat', path: '/chat' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Menu, label: 'Menu', path: '#', onClick: onOpenSidebar },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t md:hidden">
      <div className="flex justify-between px-4">
        {navItems.map((item) => {
          const isActive = item.path !== '#' && location.pathname === item.path;
          
          if (item.onClick) {
            return (
              <button 
                key={item.label}
                onClick={item.onClick}
                className="flex flex-col items-center p-3 flex-1"
              >
                <item.icon className={cn(
                  "h-6 w-6",
                  isActive ? "text-electricblue" : "text-gray-500"
                )} />
                <span className={cn(
                  "text-xs mt-1",
                  isActive ? "text-electricblue font-medium" : "text-gray-500"
                )}>
                  {item.label}
                </span>
              </button>
            );
          }
          
          return (
            <Link 
              key={item.label} 
              to={item.path}
              className="flex flex-col items-center p-3 flex-1"
            >
              <item.icon className={cn(
                "h-6 w-6",
                isActive ? "text-electricblue" : "text-gray-500"
              )} />
              <span className={cn(
                "text-xs mt-1",
                isActive ? "text-electricblue font-medium" : "text-gray-500"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
