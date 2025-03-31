
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ConsumptionChart } from '@/components/dashboard/ConsumptionChart';

const Analytics = () => {
  const [period, setPeriod] = useState('lastMonth');
  
  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">Energy Analytics</h1>
          
          <div className="flex items-center gap-4">
            <Select defaultValue={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lastWeek">Last 7 days</SelectItem>
                <SelectItem value="lastMonth">Last 30 days</SelectItem>
                <SelectItem value="lastQuarter">Last 90 days</SelectItem>
                <SelectItem value="lastYear">Last 365 days</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">Export Data</Button>
          </div>
        </div>
        
        <Tabs defaultValue="consumption" className="mb-6">
          <TabsList>
            <TabsTrigger value="consumption">Consumption</TabsTrigger>
            <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
            <TabsTrigger value="comparison">Peer Comparison</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
          </TabsList>
          
          <TabsContent value="consumption" className="mt-6">
            <div className="grid gap-6">
              <ConsumptionChart />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Consumption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">245 kWh</div>
                    <p className="text-sm text-gray-500">+3.2% from previous period</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Peak Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.7 kW</div>
                    <p className="text-sm text-gray-500">March 15, 7:30 PM</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Average Daily</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8.2 kWh</div>
                    <p className="text-sm text-gray-500">-1.5% from previous period</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">CO₂ Emissions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">176 kg</div>
                    <p className="text-sm text-gray-500">+2.8% from previous period</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cost">
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Cost analysis data will be available soon.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="comparison">
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Peer comparison data will be available soon.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="efficiency">
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Efficiency analytics will be available soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Analytics;
