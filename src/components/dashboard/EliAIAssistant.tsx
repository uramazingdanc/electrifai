
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BrainCircuit, Calendar, LightbulbIcon, MessageCircle, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';

export const EliAIAssistant = () => {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: 'Shift Dishwasher Schedule',
      description: 'Moving your dishwasher cycle to 11 PM can save ₱35 this week',
      priority: 'high',
      completed: false,
    },
    {
      id: 2,
      title: 'Optimize AC Temperature',
      description: 'Increasing temperature by 2°C during peak hours (2-4PM) saves ₱120/month',
      priority: 'medium',
      completed: false,
    },
    {
      id: 3,
      title: 'Solar Output Tracking',
      description: 'Your panels are performing 5% below expected levels. Cleaning may help.',
      priority: 'low',
      completed: false,
    }
  ]);

  const toggleRecommendation = (id: number) => {
    setRecommendations(recommendations.map(rec => 
      rec.id === id ? { ...rec, completed: !rec.completed } : rec
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-electricred';
      case 'medium': return 'text-amber-500';
      case 'low': return 'text-electricgreen';
      default: return 'text-gray-500';
    }
  };

  // Simulate Eli's optimization stats
  const energySavings = 23; // percentage
  const batteryOptimization = 78; // percentage
  const nextAction = 'Pre-charging battery for evening peak (3-7PM)';

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="bg-blue-100 rounded-full p-2 mr-3">
            <Bot className="h-5 w-5 text-electricblue" />
          </div>
          <CardTitle className="text-lg font-dm-sans">Eli - Energy AI Assistant</CardTitle>
        </div>
        <div className="flex items-center">
          <Button 
            variant={aiEnabled ? "default" : "outline"} 
            size="sm"
            className={`${aiEnabled ? "bg-electricblue text-white mr-2" : "mr-2"} font-inter`}
            onClick={() => setAiEnabled(!aiEnabled)}
          >
            {aiEnabled ? 'Enabled' : 'Disabled'}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="font-inter">Configure Eli</DropdownMenuItem>
              <DropdownMenuItem className="font-inter">View Learning Model</DropdownMenuItem>
              <DropdownMenuItem className="font-inter">Reset Preferences</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="border rounded-lg p-3">
            <div className="text-sm text-gray-500 mb-1 font-inter">Energy Cost Savings</div>
            <div className="flex items-center">
              <LightbulbIcon className="h-5 w-5 mr-2 text-electricblue" />
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-electricgreen h-2.5 rounded-full"
                  style={{ width: `${energySavings}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm font-medium font-dm-sans">{energySavings}%</span>
            </div>
          </div>
          
          <div className="border rounded-lg p-3">
            <div className="text-sm text-gray-500 mb-1 font-inter">Battery Optimization</div>
            <div className="flex items-center">
              <BrainCircuit className="h-5 w-5 mr-2 text-electricblue" />
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-electricblue h-2.5 rounded-full"
                  style={{ width: `${batteryOptimization}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm font-medium font-dm-sans">{batteryOptimization}%</span>
            </div>
          </div>
          
          <div className="border rounded-lg p-3 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-electricblue" />
            <div>
              <div className="text-sm text-gray-500 font-inter">Current Action</div>
              <div className="text-sm font-medium font-inter">{nextAction}</div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium font-dm-sans">Smart Recommendations</h3>
            <span className="text-sm text-electricblue cursor-pointer hover:underline font-inter">
              View All
            </span>
          </div>
          
          <div className="space-y-2">
            {recommendations.map((rec) => (
              <div 
                key={rec.id} 
                className={`border rounded-lg p-3 ${rec.completed ? 'bg-gray-50' : ''}`}
                onClick={() => toggleRecommendation(rec.id)}
              >
                <div className="flex justify-between">
                  <h4 className={`font-medium font-dm-sans ${rec.completed ? 'line-through text-gray-400' : ''}`}>
                    {rec.title}
                  </h4>
                  <span className={`text-sm ${getPriorityColor(rec.priority)} font-inter`}>
                    {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)} Priority
                  </span>
                </div>
                <p className={`text-sm font-inter ${rec.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                  {rec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <Button className="w-full flex items-center justify-center gap-2 font-inter" variant="outline">
          <MessageCircle className="h-4 w-4" />
          <span>Ask Eli a Question</span>
        </Button>
      </CardContent>
    </Card>
  );
};
