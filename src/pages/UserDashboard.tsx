
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ConsumptionStats } from '@/components/dashboard/ConsumptionStats';
import { ConsumptionChart } from '@/components/dashboard/ConsumptionChart';
import { TheftDetectionWrapper } from '@/components/dashboard/TheftDetectionWrapper';
import { SmartMeterStatus } from '@/components/dashboard/SmartMeterStatus';
import { BillingCard } from '@/components/dashboard/BillingCard';
import { EnergyAnomalyAlert } from '@/components/dashboard/EnergyAnomalyAlert';
import { EnergySavingTips } from '@/components/dashboard/EnergySavingTips';

const UserDashboard = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <MainLayout userRole="consumer">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Welcome to ElectrifAI</h1>
        
        {showAlert && (
          <EnergyAnomalyAlert onDismiss={() => setShowAlert(false)} />
        )}
        
        <ConsumptionStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="lg:col-span-2">
            <ConsumptionChart />
          </div>
          <div>
            <TheftDetectionWrapper />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <SmartMeterStatus />
          <BillingCard />
        </div>
        
        <div className="mt-4">
          <EnergySavingTips />
        </div>
      </div>
    </MainLayout>
  );
};

export default UserDashboard;
