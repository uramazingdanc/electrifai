import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BarChart3, AlertCircle, FileText, Settings, User, Users, Battery, Zap, MessageCircle, LogOut, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from '@/components/ui/sheet';
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
};
export const Sidebar: React.FC<SidebarProps> = ({
  open,
  userRole,
  onClose
}) => {
  const isMobile = useIsMobile();
  const menuItems: MenuItem[] = [{
    icon: Home,
    label: 'Dashboard',
    path: '/'
  }, {
    icon: BarChart3,
    label: 'Analytics',
    path: '/analytics'
  }, {
    icon: AlertCircle,
    label: 'Alerts',
    path: '/alerts'
  }, {
    icon: FileText,
    label: 'Billing',
    path: '/billing'
  }, {
    icon: Zap,
    label: 'Consumption',
    path: '/consumption'
  }, {
    icon: Battery,
    label: 'Efficiency',
    path: '/efficiency'
  }, {
    icon: MessageCircle,
    label: 'Support',
    path: '/support'
  }, {
    icon: Users,
    label: 'User Management',
    path: '/users',
    adminOnly: true
  }, {
    icon: Settings,
    label: 'Settings',
    path: '/settings'
  }];
  const filteredItems = menuItems.filter(item => !item.adminOnly || item.adminOnly && userRole === 'admin');
  if (isMobile) {
    return <Sheet open={open} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-64 bg-[#f2f6fa]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-16 px-4 border-b bg-white">
              <div className="flex items-center">
                <img src="/lovable-uploads/453df1e7-c7ae-414d-a94a-e8126da5f274.png" alt="Smart Energy Logo" className="h-8 mr-2" />
                
              </div>
              <button onClick={onClose} className="p-1">
                
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-2">
                {filteredItems.map(item => <li key={item.path}>
                    <Link to={item.path} className="flex items-center p-2 rounded-md hover:bg-white group" onClick={onClose}>
                      <item.icon className="h-5 w-5 text-electricblue" />
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </li>)}
              </ul>
            </nav>
            
            <div className="p-4 border-t">
              <Link to="/profile" className="flex items-center p-2 rounded-md hover:bg-white" onClick={onClose}>
                <User className="h-5 w-5 text-gray-600" />
                <span className="ml-3">Profile</span>
              </Link>
              <button className="flex items-center p-2 rounded-md hover:bg-white w-full mt-2">
                <LogOut className="h-5 w-5 text-gray-600" />
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>;
  }
  return <aside className={cn("bg-[#f2f6fa] fixed inset-y-0 left-0 z-10 flex flex-col transition-all duration-300 border-r", open ? "w-64" : "w-20")}>
      <div className="flex items-center justify-center h-16 border-b">
        {open ? <div className="flex items-center">
            <img src="/lovable-uploads/453df1e7-c7ae-414d-a94a-e8126da5f274.png" alt="Smart Energy Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold text-electricblue">Smart Energy</span>
          </div> : <img src="/lovable-uploads/453df1e7-c7ae-414d-a94a-e8126da5f274.png" alt="Smart Energy Logo" className="h-8" />}
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {filteredItems.map(item => <li key={item.path}>
              <Link to={item.path} className="flex items-center p-2 rounded-md hover:bg-white group">
                <item.icon className="h-5 w-5 text-electricblue" />
                {open && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>)}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <Link to="/profile" className={cn("flex items-center p-2 rounded-md hover:bg-white", !open && "justify-center")}>
          <User className="h-5 w-5 text-gray-600" />
          {open && <span className="ml-3">Profile</span>}
        </Link>
        <button className={cn("flex items-center p-2 rounded-md hover:bg-white w-full mt-2", !open && "justify-center")}>
          <LogOut className="h-5 w-5 text-gray-600" />
          {open && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>;
};