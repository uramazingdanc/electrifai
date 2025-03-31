
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, BarChart3, AlertCircle, FileText, Settings, 
  User, Users, Battery, Zap, MessageCircle, LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarProps = {
  open: boolean;
  userRole: 'consumer' | 'admin';
};

type MenuItem = {
  icon: React.FC<any>;
  label: string;
  path: string;
  adminOnly?: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({ open, userRole }) => {
  const menuItems: MenuItem[] = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: AlertCircle, label: 'Alerts', path: '/alerts' },
    { icon: FileText, label: 'Billing', path: '/billing' },
    { icon: Zap, label: 'Consumption', path: '/consumption' },
    { icon: Battery, label: 'Efficiency', path: '/efficiency' },
    { icon: MessageCircle, label: 'Support', path: '/support' },
    { icon: Users, label: 'User Management', path: '/users', adminOnly: true },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const filteredItems = menuItems.filter(item => 
    !item.adminOnly || (item.adminOnly && userRole === 'admin')
  );

  return (
    <aside className={cn(
      "bg-white fixed inset-y-0 left-0 z-10 flex flex-col transition-all duration-300 border-r",
      open ? "w-64" : "w-20"
    )}>
      <div className="flex items-center justify-center h-16 border-b">
        {open ? (
          <h1 className="text-xl font-bold text-electricblue">ElectrifAI</h1>
        ) : (
          <span className="text-2xl font-bold text-electricblue">E</span>
        )}
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {filteredItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className="flex items-center p-2 rounded-md hover:bg-electricgray group"
              >
                <item.icon className="h-5 w-5 text-electricblue" />
                {open && (
                  <span className="ml-3">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <Link to="/profile" className={cn(
          "flex items-center p-2 rounded-md hover:bg-electricgray",
          !open && "justify-center"
        )}>
          <User className="h-5 w-5 text-gray-600" />
          {open && <span className="ml-3">Profile</span>}
        </Link>
        <button className={cn(
          "flex items-center p-2 rounded-md hover:bg-electricgray w-full mt-2",
          !open && "justify-center"
        )}>
          <LogOut className="h-5 w-5 text-gray-600" />
          {open && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
