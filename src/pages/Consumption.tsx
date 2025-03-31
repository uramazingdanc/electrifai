
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ConsumptionChart } from '@/components/dashboard/ConsumptionChart';
import { Zap, Clock, Calendar } from 'lucide-react';

const Consumption = () => {
  const consumptionData = {
    current: '1.24 kW',
    today: '12.5 kWh',
    thisWeek: '85.2 kWh',
    thisMonth: '245 kWh',
    previousMonth: '238 kWh',
    change: '+2.9%'
  };

  return (
    <MainLayout userRole="consumer">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Energy Consumption</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Current Usage</p>
                  <p className="text-2xl font-bold mt-1">{consumptionData.current}</p>
                  <p className="text-sm text-gray-500 mt-1">Real-time consumption</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <Zap className="h-5 w-5 text-[#0099FF]" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Today's Usage</p>
                  <p className="text-2xl font-bold mt-1">{consumptionData.today}</p>
                  <p className="text-sm text-gray-500 mt-1">Updated hourly</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <Clock className="h-5 w-5 text-[#0099FF]" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Month to Date</p>
                  <p className="text-2xl font-bold mt-1">{consumptionData.thisMonth}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {consumptionData.change} vs last month
                  </p>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <Calendar className="h-5 w-5 text-[#0099FF]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="daily" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="m-0">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Daily Consumption</CardTitle>
              </CardHeader>
              <CardContent>
                <ConsumptionChart />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="weekly" className="m-0">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Weekly Consumption</CardTitle>
              </CardHeader>
              <CardContent>
                <ConsumptionChart />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monthly" className="m-0">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Monthly Consumption</CardTitle>
              </CardHeader>
              <CardContent>
                <ConsumptionChart />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="yearly" className="m-0">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Yearly Consumption</CardTitle>
              </CardHeader>
              <CardContent>
                <ConsumptionChart />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Usage Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#0099FF] rounded-full"></div>
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0099FF] w-[40%]"></div>
                  </div>
                  <span className="font-medium">40%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00CC66] rounded-full"></div>
                  <span>Kitchen Appliances</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00CC66] w-[25%]"></div>
                  </div>
                  <span className="font-medium">25%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF6633] rounded-full"></div>
                  <span>Lighting</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF6633] w-[15%]"></div>
                  </div>
                  <span className="font-medium">15%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#9966FF] rounded-full"></div>
                  <span>Electronics</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#9966FF] w-[20%]"></div>
                  </div>
                  <span className="font-medium">20%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Consumption;
