
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, X } from 'lucide-react';

type EnergyAnomalyAlertProps = {
  onDismiss: () => void;
};

export const EnergyAnomalyAlert: React.FC<EnergyAnomalyAlertProps> = ({ onDismiss }) => {
  return (
    <Alert className="bg-electricred/10 border-electricred mb-4 relative">
      <AlertCircle className="h-4 w-4 text-electricred" />
      <div className="flex-1">
        <AlertTitle className="text-electricred">Energy Anomaly Detected</AlertTitle>
        <AlertDescription className="text-gray-700">
          Unusual energy pattern detected at 2:15 PM today. Consumption increased by 300% compared to your typical usage.
        </AlertDescription>
        <div className="flex gap-2 mt-2">
          <Button size="sm" variant="outline" className="border-electricred text-electricred hover:bg-electricred/10">
            View Details
          </Button>
          <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
            Report Issue
          </Button>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onDismiss}
        className="absolute top-2 right-2"
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  );
};
