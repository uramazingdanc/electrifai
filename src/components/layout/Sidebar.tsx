
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, AlertCircle, FileText, Settings, User, Battery, Zap, MessageCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useAuth } from '@/hooks/use-auth';

type SidebarProps = {
  open: boolean;
  userRole: 'consumer' | 'admin';
  onClose: () => void;
};

type MenuItem = {
  icon: React.FC<any>;
  label: string;
  path: string;
  adminOnly?: boolean;
  color?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({
  open,
  userRole,
  onClose
}) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { logout } = useAuth();
  
  const menuItems: MenuItem[] = [
    {
      icon: Home,
      label: 'Dashboard',
      path: '/dashboard',
      color: '#0099FF'
    },
    {
      icon: BarChart3,
      label: 'Analytics',
      path: '/analytics'
    },
    {
      icon: AlertCircle,
      label: 'Alerts',
      path: '/alerts'
    },
    {
      icon: FileText,
      label: 'Billing',
      path: '/billing'
    },
    {
      icon: Zap,
      label: 'Consumption',
      path: '/consumption'
    },
    {
      icon: Battery,
      label: 'Efficiency',
      path: '/efficiency'
    },
    {
      icon: MessageCircle,
      label: 'Chat',
      path: '/chat'
    },
    {
      icon: Settings,
      label: 'Settings',
      path: '/settings'
    }
  ];

  const profileItems: MenuItem[] = [
    {
      icon: User,
      label: 'Profile',
      path: '/profile'
    }
  ];

  const filteredItems = menuItems.filter(item => !item.adminOnly || (item.adminOnly && userRole === 'admin'));

  const handleLogout = () => {
    logout();
    onClose();
  };

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-64 bg-[#f2f6fa]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-16 px-4 border-b bg-white">
              <div className="flex items-center">
                <img src="/lovable-uploads/453df1e7-c7ae-414d-a94a-e8126da5f274.png" alt="Smart Energy Logo" className="h-8 mr-2" />
                <span className="text-xl font-bold text-[#0099FF]">Smart Energy</span>
              </div>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-2">
                {filteredItems.map(item => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className={cn(
                        "flex items-center p-2 rounded-md hover:bg-white group",
                        location.pathname === item.path && "bg-white text-[#0099FF]"
                      )}
                      onClick={onClose}
                    >
                      <item.icon className={cn(
                        "h-5 w-5",
                        location.pathname === item.path ? "text-[#0099FF]" : "text-gray-500"
                      )} />
                      <span className={cn(
                        "ml-3",
                        location.pathname === item.path && "font-medium"
                      )}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="border-t">
              <ul className="px-2 pt-2">
                {profileItems.map(item => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className={cn(
                        "flex items-center p-2 rounded-md hover:bg-white",
                        location.pathname === item.path && "bg-white text-[#0099FF]"
                      )}
                      onClick={onClose}
                    >
                      <item.icon className={cn(
                        "h-5 w-5",
                        location.pathname === item.path ? "text-[#0099FF]" : "text-gray-600"
                      )} />
                      <span className={cn(
                        "ml-3",
                        location.pathname === item.path && "font-medium"
                      )}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button 
                className="flex items-center p-2 rounded-md hover:bg-white w-full mt-1 mx-2"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 text-gray-600" />
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className={cn(
      "bg-[#f2f6fa] fixed inset-y-0 left-0 z-10 flex flex-col transition-all duration-300 border-r", 
      open ? "w-64" : "w-20"
    )}>
      <div className="flex items-center justify-center h-16 border-b">
        {open ? (
          <div className="flex items-center">
            <img src="/lovable-uploads/453df1e7-c7ae-414d-a94a-e8126da5f274.png" alt="Smart Energy Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold text-[#0099FF]">Smart Energy</span>
          </div>
        ) : (
          <img src="/lovable-uploads/453df1e7-c7ae-414d-a94a-e8126da5f274.png" alt="Smart Energy Logo" className="h-8" />
        )}
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {filteredItems.map(item => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-white group",
                  !open && "justify-center",
                  location.pathname === item.path && "bg-white text-[#0099FF]"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  location.pathname === item.path ? "text-[#0099FF]" : "text-gray-500"
                )} />
                {open && (
                  <span className={cn(
                    "ml-3",
                    location.pathname === item.path && "font-medium"
                  )}>
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-2 border-t">
        <ul className="space-y-1">
          {profileItems.map(item => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-white",
                  !open && "justify-center",
                  location.pathname === item.path && "bg-white text-[#0099FF]"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  location.pathname === item.path ? "text-[#0099FF]" : "text-gray-600"
                )} />
                {open && (
                  <span className={cn(
                    "ml-3",
                    location.pathname === item.path && "font-medium"
                  )}>
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <button 
          className={cn(
            "flex items-center p-2 rounded-md hover:bg-white w-full mt-2",
            !open && "justify-center"
          )}
          onClick={logout}
        >
          <LogOut className="h-5 w-5 text-gray-600" />
          {open && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
