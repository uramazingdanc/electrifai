
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Shield, ShieldAlert, Check } from 'lucide-react';

export const TheftDetection = () => {
  const [anomalyRisk, setAnomalyRisk] = useState(15);
  const [pulsing, setPulsing] = useState(false);
  
  // Simulate changing anomaly risk over time
  useEffect(() => {
    const interval = setInterval(() => {
      // Random value between -5 and +5, but keep between 5 and 85
      const change = Math.floor(Math.random() * 11) - 5;
      setAnomalyRisk(prev => {
        const newValue = prev + change;
        return Math.max(5, Math.min(85, newValue));
      });
      
      // Occasionally trigger a pulse effect
      if (Math.random() > 0.7) {
        setPulsing(true);
        setTimeout(() => setPulsing(false), 2000);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getRiskLevel = () => {
    if (anomalyRisk < 20) return { level: 'Low', color: 'text-electricgreen' };
    if (anomalyRisk < 50) return { level: 'Medium', color: 'text-amber-500' };
    return { level: 'High', color: 'text-electricred' };
  };
  
  const getProgressColor = () => {
    if (anomalyRisk < 20) return 'bg-electricgreen';
    if (anomalyRisk < 50) return 'bg-amber-500';
    return 'bg-electricred';
  };
  
  const risk = getRiskLevel();
  const isHigh = risk.level === 'High';
  
  return (
    <Card className={`shadow-card ${pulsing ? 'animate-pulse-slow' : ''}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Smart Theft Detection</span>
          <Shield className={`h-5 w-5 ${risk.color}`} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span>Anomaly Risk</span>
            <span className={`font-medium ${risk.color}`}>{risk.level}</span>
          </div>
          <div className="relative w-full">
            <Progress value={anomalyRisk} className={`h-2`} />
            <div 
              className={`absolute top-0 left-0 h-2 ${getProgressColor()} rounded-full transition-all`} 
              style={{ width: `${anomalyRisk}%` }}
            ></div>
          </div>
        </div>
        
        {isHigh && (
          <Alert variant="destructive" className="mb-4">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Potential Theft Detected</AlertTitle>
            <AlertDescription>
              Unusual pattern detected in your consumption. Possible energy diversion.
            </AlertDescription>
          </Alert>
        )}
        
        <div className="text-sm space-y-2">
          <div className="flex items-center">
            <Check className="h-4 w-4 text-electricgreen mr-2" />
            <span>Meter seal integrity confirmed</span>
          </div>
          <div className="flex items-center">
            <Check className="h-4 w-4 text-electricgreen mr-2" />
            <span>Connection monitoring active</span>
          </div>
          <div className="flex items-center">
            {isHigh ? (
              <AlertTriangle className="h-4 w-4 text-electricred mr-2" />
            ) : (
              <Check className="h-4 w-4 text-electricgreen mr-2" />
            )}
            <span>Consumption pattern analysis</span>
          </div>
        </div>
        
        {isHigh && (
          <Button className="w-full mt-4 bg-electricred hover:bg-red-700">
            Report Issue
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
