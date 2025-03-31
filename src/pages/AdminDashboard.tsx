
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  AlertTriangle, 
  Users, 
  Zap, 
  DollarSign, 
  MapPin, 
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const AdminDashboard = () => {
  // Sample data for admin dashboard
  const regionData = [
    { name: 'Metro Manila', consumers: 1200000, consumption: 320000, revenue: 3200000, theft: 2.4 },
    { name: 'Central Luzon', consumers: 850000, consumption: 240000, revenue: 2400000, theft: 3.7 },
    { name: 'Calabarzon', consumers: 950000, consumption: 280000, revenue: 2800000, theft: 4.2 },
    { name: 'Western Visayas', consumers: 720000, consumption: 210000, revenue: 2100000, theft: 5.8 },
    { name: 'Central Visayas', consumers: 680000, consumption: 200000, revenue: 2000000, theft: 6.1 },
    { name: 'Davao Region', consumers: 520000, consumption: 150000, revenue: 1500000, theft: 7.5 },
  ];
  
  const theftAlerts = [
    { id: 1, region: 'Calabarzon', substation: 'Laguna Substation 3', anomalyLevel: 85, timestamp: '2 hours ago' },
    { id: 2, region: 'Western Visayas', substation: 'Iloilo Feeder 7', anomalyLevel: 76, timestamp: '4 hours ago' },
    { id: 3, region: 'Davao Region', substation: 'Davao City Grid 2', anomalyLevel: 92, timestamp: '1 day ago' },
    { id: 4, region: 'Central Luzon', substation: 'Pampanga Line 5', anomalyLevel: 68, timestamp: '1 day ago' },
  ];
  
  const pieData = [
    { name: 'Residential', value: 65 },
    { name: 'Commercial', value: 25 },
    { name: 'Industrial', value: 10 },
  ];
  
  const pieColors = ['#0066CC', '#00CC66', '#FFB74D'];
  
  const systemStats = [
    {
      title: 'Total Consumers',
      value: '5.7M',
      change: '+2.3%',
      icon: Users,
      isIncrease: true,
      color: 'text-electricblue',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Monthly Consumption',
      value: '1.4B kWh',
      change: '+5.6%',
      icon: Zap,
      isIncrease: true,
      color: 'text-electricblue',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Revenue',
      value: '₱14.2B',
      change: '+3.8%',
      icon: DollarSign,
      isIncrease: true,
      color: 'text-electricgreen',
      bgColor: 'bg-green-100'
    },
    {
      title: 'System Loss',
      value: '5.2%',
      change: '-0.7%',
      icon: TrendingDown,
      isIncrease: false,
      color: 'text-electricgreen',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <MainLayout userRole="admin">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Administrator Dashboard</h1>
        
        {/* System Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {systemStats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      {stat.isIncrease ? (
                        <TrendingUp className="h-4 w-4 mr-1 text-electricred" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1 text-electricgreen" />
                      )}
                      <span className={stat.isIncrease ? 'text-electricred' : 'text-electricgreen'}>
                        {stat.change} from last month
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Region Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="lg:col-span-2">
            <Card className="shadow-card h-full">
              <CardHeader>
                <CardTitle>Regional Consumption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="consumption" name="Consumption (MWh)" fill="#0066CC" />
                      <Bar dataKey="revenue" name="Revenue (₱1000)" fill="#00CC66" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-card h-full">
              <CardHeader>
                <CardTitle>Consumption Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex flex-col justify-center">
                  <ResponsiveContainer width="100%" height="70%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center space-x-4 mt-4">
                    {pieData.map((entry, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-3 h-3 mr-1 rounded-sm" 
                          style={{ backgroundColor: pieColors[index] }}
                        ></div>
                        <span className="text-xs">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Theft Detection and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-electricred" />
                <span>Theft Detection Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {theftAlerts.map(alert => (
                  <div key={alert.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{alert.substation}</h3>
                        <p className="text-sm text-gray-500">{alert.region}</p>
                      </div>
                      <div className={`py-1 px-2 rounded text-white text-xs ${
                        alert.anomalyLevel > 80 ? 'bg-electricred' : 
                        alert.anomalyLevel > 60 ? 'bg-amber-500' : 'bg-electricgreen'
                      }`}>
                        {alert.anomalyLevel}% Anomaly
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">{alert.timestamp}</span>
                      <button className="text-electricblue text-sm hover:underline">Investigate</button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Regional Theft Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={regionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="theft" 
                      name="Theft Indicators (%)" 
                      stroke="#CC3300" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Regional Map (Placeholder) */}
        <Card className="shadow-card mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Regional Coverage</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="text-center">
                <p className="text-lg font-medium">Philippines Regional Monitoring</p>
                <p className="text-sm text-gray-500">Interactive map with real-time data</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
