
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Battery, Signal, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SmartMeterStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [signalStrength, setSignalStrength] = useState(4); // 1-5
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);
  
  // Simulate updates from the smart meter
  useEffect(() => {
    const interval = setInterval(() => {
      // Update last update time
      setLastUpdate(new Date());
      
      // Randomly adjust battery level (slow drain)
      setBatteryLevel(prev => Math.max(0, prev - Math.random() * 0.5));
      
      // Randomly fluctuate signal strength between 2-5
      setSignalStrength(Math.max(2, Math.min(5, 
        Math.floor(Math.random() * 2) + signalStrength
      )));
      
      // Small chance of going offline
      setIsOnline(Math.random() > 0.05);
    }, 15000);
    
    return () => clearInterval(interval);
  }, [signalStrength]);
  
  const getBatteryIcon = () => {
    if (batteryLevel > 80) return "battery";
    if (batteryLevel > 40) return "battery-medium";
    return "battery-low";
  };
  
  const getSignalBars = () => {
    return Array(5).fill(0).map((_, i) => (
      <div 
        key={i}
        className={cn(
          "w-1 rounded-sm",
          i < signalStrength 
            ? "bg-electricblue" 
            : "bg-gray-200",
          { "h-2": i === 0, "h-3": i === 1, "h-4": i === 2, "h-5": i === 3, "h-6": i === 4 }
        )}
      />
    ));
  };
  
  const formatTimeAgo = () => {
    const seconds = Math.floor((new Date().getTime() - lastUpdate.getTime()) / 1000);
    
    if (seconds < 60) return `${seconds} seconds ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    return `${Math.floor(seconds / 3600)} hours ago`;
  };
  
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">ElectrifAI EA1 Smart Meter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {isOnline ? (
              <CheckCircle2 className="h-5 w-5 text-electricgreen mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-electricred mr-2" />
            )}
            <span className={isOnline ? "text-electricgreen" : "text-electricred"}>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Last update: {formatTimeAgo()}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-3">
            <div className="text-sm text-gray-500 mb-1">Battery Level</div>
            <div className="flex items-center">
              <Battery className="h-5 w-5 mr-2 text-electricblue" />
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={cn(
                    "h-2.5 rounded-full",
                    batteryLevel > 50 ? "bg-electricgreen" : 
                    batteryLevel > 20 ? "bg-amber-500" : "bg-electricred"
                  )}
                  style={{ width: `${batteryLevel}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm font-medium">{Math.round(batteryLevel)}%</span>
            </div>
          </div>
          
          <div className="border rounded-lg p-3">
            <div className="text-sm text-gray-500 mb-1">Signal Strength</div>
            <div className="flex items-center">
              <Signal className="h-5 w-5 mr-2 text-electricblue" />
              <div className="flex space-x-1 items-end">
                {getSignalBars()}
              </div>
              <span className="ml-2 text-sm font-medium">
                {signalStrength > 3 ? "Excellent" : 
                 signalStrength > 2 ? "Good" : "Poor"}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col space-y-2">
          <div className="flex justify-between items-center py-1 border-b">
            <span className="text-sm text-gray-500">Meter ID</span>
            <span className="text-sm font-medium">EA1-238745-PH</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b">
            <span className="text-sm text-gray-500">Firmware Version</span>
            <span className="text-sm font-medium">v2.3.1</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b">
            <span className="text-sm text-gray-500">Installation Date</span>
            <span className="text-sm font-medium">January 15, 2023</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
