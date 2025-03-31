
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const dailyData = [
  { time: '12 AM', consumption: 0.8, average: 0.7 },
  { time: '2 AM', consumption: 0.5, average: 0.6 },
  { time: '4 AM', consumption: 0.4, average: 0.5 },
  { time: '6 AM', consumption: 1.2, average: 1.0 },
  { time: '8 AM', consumption: 1.8, average: 1.5 },
  { time: '10 AM', consumption: 1.5, average: 1.4 },
  { time: '12 PM', consumption: 1.7, average: 1.5 },
  { time: '2 PM', consumption: 1.9, average: 1.7 },
  { time: '4 PM', consumption: 2.3, average: 2.0 },
  { time: '6 PM', consumption: 2.7, average: 2.5 },
  { time: '8 PM', consumption: 2.2, average: 2.2 },
  { time: '10 PM', consumption: 1.5, average: 1.4 },
];

const weeklyData = [
  { time: 'Mon', consumption: 21.5, average: 19.8 },
  { time: 'Tue', consumption: 20.1, average: 19.5 },
  { time: 'Wed', consumption: 22.3, average: 19.7 },
  { time: 'Thu', consumption: 18.9, average: 19.4 },
  { time: 'Fri', consumption: 23.2, average: 20.1 },
  { time: 'Sat', consumption: 25.7, average: 22.5 },
  { time: 'Sun', consumption: 24.8, average: 21.7 },
];

const monthlyData = [
  { time: 'Jan', consumption: 620, average: 580 },
  { time: 'Feb', consumption: 590, average: 570 },
  { time: 'Mar', consumption: 610, average: 585 },
  { time: 'Apr', consumption: 650, average: 590 },
  { time: 'May', consumption: 680, average: 610 },
  { time: 'Jun', consumption: 720, average: 630 },
  { time: 'Jul', consumption: 750, average: 650 },
  { time: 'Aug', consumption: 730, average: 660 },
  { time: 'Sep', consumption: 700, average: 650 },
  { time: 'Oct', consumption: 680, average: 630 },
  { time: 'Nov', consumption: 650, average: 620 },
  { time: 'Dec', consumption: 630, average: 600 },
];

const tabData = {
  daily: { data: dailyData, unit: 'kWh' },
  weekly: { data: weeklyData, unit: 'kWh' },
  monthly: { data: monthlyData, unit: 'kWh' },
};

export const ConsumptionChart = () => {
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Energy Consumption</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          
          {(Object.keys(tabData) as Array<keyof typeof tabData>).map((key) => (
            <TabsContent key={key} value={key} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={tabData[key].data}>
                  <defs>
                    <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066CC" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#0066CC" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00CC66" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#00CC66" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis 
                    domain={['auto', 'auto']}
                    label={{ 
                      value: tabData[key].unit, 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="consumption"
                    stroke="#0066CC"
                    fillOpacity={1}
                    fill="url(#colorConsumption)"
                    name="Your Consumption"
                  />
                  <Area
                    type="monotone"
                    dataKey="average"
                    stroke="#00CC66"
                    fillOpacity={1}
                    fill="url(#colorAverage)"
                    name="Average Consumption"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};
