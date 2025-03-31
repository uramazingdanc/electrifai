
import React, { useState } from 'react';
import { 
  Menu, Bell, Moon, Sun, Globe, ChevronDown, 
  MessageCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

type TopBarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  userRole: 'consumer' | 'admin';
};

export const TopBar: React.FC<TopBarProps> = ({ 
  sidebarOpen, 
  setSidebarOpen,
  userRole
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'english' | 'tagalog'>('english');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'tagalog' : 'english');
  };

  return (
    <header className="bg-white h-16 border-b flex items-center px-4 sticky top-0 z-10">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 rounded-md hover:bg-gray-100 mr-4"
      >
        <Menu className="h-5 w-5" />
      </button>
      
      <div className="flex-1">
        <h1 className="text-xl font-bold text-electricblue md:hidden">
          ElectrifAI
        </h1>
        <div className="hidden md:block">
          <span className="text-sm font-medium">
            {userRole === 'admin' ? 'Admin Portal' : 'Consumer Dashboard'}
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* Language Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setLanguage('english')}>
              English {language === 'english' && '✓'}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage('tagalog')}>
              Tagalog {language === 'tagalog' && '✓'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-gray-600"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
        
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-electricred"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem className="flex flex-col items-start">
                <span className="font-medium">Unusual Activity Detected</span>
                <span className="text-sm text-gray-500">
                  Spike in consumption detected at 2:15 PM
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  5 minutes ago
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start">
                <span className="font-medium">Bill Payment Reminder</span>
                <span className="text-sm text-gray-500">
                  Your bill is due in 3 days
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  2 hours ago
                </span>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-electricblue">
              View All
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Support Chat */}
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-5 w-5" />
        </Button>
        
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-electricblue text-white flex items-center justify-center">
                {userRole === 'admin' ? 'A' : 'U'}
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              {userRole === 'admin' ? 'Admin User' : 'Juan Cruz'}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            {userRole === 'consumer' && (
              <DropdownMenuItem className="text-electricblue">
                Upgrade to Premium
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
