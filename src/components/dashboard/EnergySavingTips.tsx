
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LightbulbIcon, Flame, Fan, Refrigerator } from 'lucide-react';

export const EnergySavingTips = () => {
  const tips = [
    {
      icon: LightbulbIcon,
      title: 'Switch to LED Lighting',
      description: 'LED bulbs use up to 75% less energy than incandescent lighting.',
      saving: 'Save up to ₱500/year'
    },
    {
      icon: Refrigerator,
      title: 'Optimize Refrigerator Settings',
      description: 'Keep your refrigerator at 3-5°C and freezer at -18°C for optimal efficiency.',
      saving: 'Save up to ₱700/year'
    },
    {
      icon: Fan,
      title: 'Use Fans Instead of AC',
      description: 'Ceiling fans use a fraction of the energy of air conditioners.',
      saving: 'Save up to ₱1,500/year'
    },
    {
      icon: Flame,
      title: 'Efficient Cooking Methods',
      description: 'Cover pots while cooking to retain heat and cook faster.',
      saving: 'Save up to ₱300/year'
    }
  ];

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Energy Saving Tips</span>
          <span className="text-sm text-electricgreen">
            Potential Savings: ₱3,000/year
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start p-3 border rounded-lg">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <tip.icon className="h-5 w-5 text-electricblue" />
              </div>
              <div>
                <h3 className="text-sm font-medium">{tip.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{tip.description}</p>
                <p className="text-xs font-medium text-electricgreen mt-1">{tip.saving}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
