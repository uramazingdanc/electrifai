
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ThumbsUp, AlertCircle, Check, Lightbulb, Battery, ArrowUpRight } from 'lucide-react';

const Efficiency = () => {
  const efficiencyScore = 78;
  
  const recommendations = [
    {
      id: 1,
      title: 'Switch to LED Lighting',
      description: 'Replace all incandescent bulbs with LED alternatives to save up to 15% on your energy bill.',
      impact: 'High',
      difficulty: 'Easy',
      icon: Lightbulb
    },
    {
      id: 2,
      title: 'Smart Thermostat Programming',
      description: 'Optimize your thermostat settings to reduce HVAC usage during inactive hours.',
      impact: 'Medium',
      difficulty: 'Medium',
      icon: Battery
    },
    {
      id: 3,
      title: 'Unplug Idle Electronics',
      description: 'Devices on standby still consume power. Unplug them when not in use.',
      impact: 'Low',
      difficulty: 'Easy',
      icon: Battery
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'text-green-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <MainLayout userRole="consumer">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Energy Efficiency</h1>
        
        <Card className="shadow-card mb-6">
          <CardHeader>
            <CardTitle>Your Efficiency Score</CardTitle>
            <CardDescription>How your home compares to similar properties in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-8 border-[#0099FF]">
                <div className="text-4xl font-bold">{efficiencyScore}</div>
                <div className="text-gray-500 text-sm">/ 100</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <ThumbsUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Good Standing</h3>
                  <p className="text-sm text-gray-600">Top 35% in your area</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">Improvement Areas</h3>
                  <p className="text-sm text-gray-600">3 recommendations</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Potential Savings</h3>
                  <p className="text-sm text-gray-600">Up to ₱450/month</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card mb-6">
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Ways to improve your energy efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map(recommendation => (
                <div key={recommendation.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <recommendation.icon className="h-5 w-5 text-[#0099FF]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{recommendation.title}</h3>
                      <p className="text-gray-600 mt-1">{recommendation.description}</p>
                      <div className="flex mt-3 gap-4">
                        <div>
                          <span className="text-xs text-gray-500">Impact</span>
                          <p className={`text-sm font-medium ${getImpactColor(recommendation.impact)}`}>
                            {recommendation.impact}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">Difficulty</span>
                          <p className="text-sm font-medium">{recommendation.difficulty}</p>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="shrink-0">
                      <span>Details</span>
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Energy Efficiency Trends</CardTitle>
            <CardDescription>Your progress over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-medium">This Month</h3>
                    <p className="text-xs text-gray-500">78% efficient</p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 text-sm">+3% from last month</span>
                  </div>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-medium">Last Month</h3>
                    <p className="text-xs text-gray-500">75% efficient</p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 text-sm">+5% from previous</span>
                  </div>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-medium">2 Months Ago</h3>
                    <p className="text-xs text-gray-500">70% efficient</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-600 text-sm">Baseline</span>
                  </div>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Efficiency;
