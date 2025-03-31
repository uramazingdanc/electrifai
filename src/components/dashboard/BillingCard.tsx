
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CreditCard, FileText, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const BillingCard = () => {
  const currentDate = new Date();
  const dueDate = new Date(currentDate);
  dueDate.setDate(dueDate.getDate() + 12);
  
  const billAmount = 2450;
  const previousBill = 2350;
  const percentChange = ((billAmount - previousBill) / previousBill) * 100;
  
  // Calculate billing cycle progress
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const totalDays = (endOfMonth.getTime() - startOfMonth.getTime()) / (1000 * 60 * 60 * 24);
  const daysPassed = (currentDate.getTime() - startOfMonth.getTime()) / (1000 * 60 * 60 * 24);
  const billingProgress = Math.min(100, (daysPassed / totalDays) * 100);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Current Billing</span>
          <FileText className="h-5 w-5 text-electricblue" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Current Amount</p>
            <p className="text-3xl font-bold">₱{billAmount.toLocaleString()}</p>
          </div>
          <Button className="bg-electricblue hover:bg-blue-700">
            Pay Now
          </Button>
        </div>
        
        <div className="flex items-center mb-4">
          <div className={`px-2 py-1 rounded text-white text-xs ${percentChange > 0 ? 'bg-electricred' : 'bg-electricgreen'}`}>
            {percentChange > 0 ? '+' : ''}{percentChange.toFixed(1)}%
          </div>
          <span className="ml-2 text-sm text-gray-500">vs last month</span>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-500">Billing Cycle Progress</span>
              <span className="text-sm font-medium">{Math.round(billingProgress)}%</span>
            </div>
            <Progress value={billingProgress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Billing Period</p>
                <p className="text-sm font-medium">
                  {formatDate(startOfMonth)} - {formatDate(endOfMonth)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2 text-electricred" />
              <div>
                <p className="text-xs text-gray-500">Due Date</p>
                <p className="text-sm font-medium">{formatDate(dueDate)}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">View Payment Methods</span>
              <CreditCard className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
