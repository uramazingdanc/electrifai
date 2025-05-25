
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, TrendingUp, TrendingDown, Clock } from 'lucide-react';

export const ConsumptionStats = () => {
  const stats = [
    {
      title: 'Real-time Usage',
      value: '1.24 kW',
      change: '+3.2%',
      isIncrease: true,
      icon: Zap,
      color: 'text-electricblue',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Today\'s Total',
      value: '12.5 kWh',
      change: '+5.6%',
      isIncrease: true,
      icon: Clock,
      color: 'text-electricblue',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Month to Date',
      value: '245 kWh',
      change: '-2.3%',
      isIncrease: false,
      icon: TrendingDown,
      color: 'text-electricgreen',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Est. Monthly Bill',
      value: '₱2,450',
      change: '+4.2%',
      isIncrease: true,
      icon: TrendingUp,
      color: 'text-electricred',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card h-full">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 font-inter">{stat.title}</p>
                <p className="text-2xl font-bold mt-1 font-dm-sans">{stat.value}</p>
                <div className="flex items-center mt-1">
                  {stat.isIncrease ? (
                    <TrendingUp className="h-4 w-4 mr-1 text-electricred" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1 text-electricgreen" />
                  )}
                  <span className={`${stat.isIncrease ? 'text-electricred' : 'text-electricgreen'} font-inter`}>
                    {stat.change} from last period
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
  );
};
