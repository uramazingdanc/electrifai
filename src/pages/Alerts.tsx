
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, BellRing, Clock } from 'lucide-react';

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      title: 'Unusual Energy Consumption',
      description: 'Your energy consumption is 35% higher than your typical usage pattern.',
      time: '2 hours ago',
      severity: 'high',
      icon: AlertCircle
    },
    {
      id: 2,
      title: 'Bill Payment Due',
      description: 'Your electricity bill payment is due in 3 days.',
      time: '1 day ago',
      severity: 'medium',
      icon: BellRing
    },
    {
      id: 3,
      title: 'Smart Meter Maintenance',
      description: 'Scheduled maintenance for your smart meter will occur tomorrow.',
      time: '2 days ago',
      severity: 'low',
      icon: Clock
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <MainLayout userRole="consumer">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Alerts & Notifications</h1>
        
        <div className="grid grid-cols-1 gap-4">
          {alerts.map(alert => (
            <Card key={alert.id} className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${getSeverityColor(alert.severity)}`}>
                    <alert.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{alert.title}</h3>
                      <span className="text-gray-500 text-sm">{alert.time}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{alert.description}</p>
                    <div className="flex gap-2 mt-2">
                      <button className="text-[#0099FF] text-sm hover:underline">
                        View Details
                      </button>
                      <button className="text-gray-500 text-sm hover:underline ml-4">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Alerts;
