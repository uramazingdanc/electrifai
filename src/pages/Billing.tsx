
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Download, ChevronRight, CalendarClock } from 'lucide-react';

const Billing = () => {
  const currentBill = {
    amount: 2450,
    dueDate: 'September 30, 2023',
    status: 'Pending',
    period: 'August 1 - August 31, 2023'
  };

  const billHistory = [
    {
      id: 1,
      period: 'July 2023',
      amount: 2325,
      status: 'Paid',
      date: 'July 29, 2023'
    },
    {
      id: 2,
      period: 'June 2023',
      amount: 2150,
      status: 'Paid',
      date: 'June 30, 2023'
    },
    {
      id: 3,
      period: 'May 2023',
      amount: 1950,
      status: 'Paid',
      date: 'May 28, 2023'
    }
  ];

  return (
    <MainLayout userRole="consumer">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Billing & Payments</h1>
        
        <Card className="shadow-card mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Bill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold">₱{currentBill.amount.toLocaleString()}</h2>
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-md text-xs">
                    {currentBill.status}
                  </span>
                </div>
                <p className="text-gray-500 mt-1">Due date: {currentBill.dueDate}</p>
                <p className="text-gray-500">Billing period: {currentBill.period}</p>
              </div>
              <div className="flex gap-3 mt-4 lg:mt-0">
                <Button className="bg-[#0099FF] hover:bg-blue-600">Pay Now</Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billHistory.map(bill => (
                <div key={bill.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{bill.period}</h3>
                      <p className="text-gray-500 text-sm">Paid on {bill.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">₱{bill.amount.toLocaleString()}</span>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Billing;
