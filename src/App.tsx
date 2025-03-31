
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import Billing from "./pages/Billing";
import Consumption from "./pages/Consumption";
import Efficiency from "./pages/Efficiency";
import Settings from "./pages/Settings";
import { useAuth } from "./hooks/use-auth";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  useEffect(() => {
    // Check if there's a preferred auth mode (signup vs login)
    const authMode = localStorage.getItem('auth_mode');
    if (authMode) {
      // Clear it after use
      localStorage.removeItem('auth_mode');
    }
  }, []);
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  const { isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Public routes */}
          <Route path="/auth" element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          } />
          
          {/* Landing page */}
          <Route path="/" element={<Index />} />
          
          {/* Protected routes */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          } />
          <Route path="/alerts" element={
            <ProtectedRoute>
              <Alerts />
            </ProtectedRoute>
          } />
          <Route path="/billing" element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          } />
          <Route path="/consumption" element={
            <ProtectedRoute>
              <Consumption />
            </ProtectedRoute>
          } />
          <Route path="/efficiency" element={
            <ProtectedRoute>
              <Efficiency />
            </ProtectedRoute>
          } />
          <Route path="/chat" element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
