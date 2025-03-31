
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell, Clock, Shield, Smartphone } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    billing: true,
    usage: true,
    alerts: true,
    tips: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    sessionTimeout: 30
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <MainLayout userRole="consumer">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="m-0">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+63 912 345 6789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-id">Account ID</Label>
                    <Input id="account-id" defaultValue="ELEC-123456789" readOnly className="bg-gray-50" />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="bg-[#0099FF] hover:bg-blue-600">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="m-0">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <Switch 
                      checked={notifications.email} 
                      onCheckedChange={() => handleNotificationChange('email')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">Push Notifications</h3>
                      <p className="text-sm text-gray-500">Receive notifications on your device</p>
                    </div>
                    <Switch 
                      checked={notifications.push} 
                      onCheckedChange={() => handleNotificationChange('push')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">Billing Notifications</h3>
                      <p className="text-sm text-gray-500">Get notified about billing updates</p>
                    </div>
                    <Switch 
                      checked={notifications.billing} 
                      onCheckedChange={() => handleNotificationChange('billing')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">Usage Reports</h3>
                      <p className="text-sm text-gray-500">Weekly and monthly consumption reports</p>
                    </div>
                    <Switch 
                      checked={notifications.usage} 
                      onCheckedChange={() => handleNotificationChange('usage')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">Anomaly Alerts</h3>
                      <p className="text-sm text-gray-500">Get alerted about unusual energy patterns</p>
                    </div>
                    <Switch 
                      checked={notifications.alerts} 
                      onCheckedChange={() => handleNotificationChange('alerts')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <h3 className="font-medium">Energy Saving Tips</h3>
                      <p className="text-sm text-gray-500">Receive personalized energy-saving advice</p>
                    </div>
                    <Switch 
                      checked={notifications.tips} 
                      onCheckedChange={() => handleNotificationChange('tips')}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="m-0">
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <Switch 
                      checked={securitySettings.twoFactor} 
                      onCheckedChange={() => setSecuritySettings(prev => ({
                        ...prev,
                        twoFactor: !prev.twoFactor
                      }))}
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Password</h3>
                    <Button variant="outline">Change Password</Button>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="font-medium mb-2">Session Timeout</h3>
                    <div className="flex items-center gap-4">
                      <Input 
                        type="number" 
                        min="5" 
                        max="60" 
                        value={securitySettings.sessionTimeout}
                        onChange={(e) => setSecuritySettings(prev => ({
                          ...prev,
                          sessionTimeout: parseInt(e.target.value)
                        }))}
                        className="w-24"
                      />
                      <span>minutes</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Automatically log out after period of inactivity
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Login History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: 'Today, 10:23 AM', device: 'Chrome on Windows', location: 'Manila, Philippines' },
                    { date: 'Yesterday, 6:45 PM', device: 'Safari on iPhone', location: 'Manila, Philippines' },
                    { date: 'Aug 15, 2023, 2:30 PM', device: 'Chrome on MacOS', location: 'Manila, Philippines' }
                  ].map((login, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{login.date}</h3>
                          <p className="text-sm text-gray-500">{login.device}</p>
                        </div>
                        <div className="text-sm text-gray-500">
                          {login.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="devices" className="m-0">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Connected Devices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Smart Meter #SM-12345', status: 'Connected', lastSync: '2 minutes ago' },
                    { name: 'Home Energy Display', status: 'Connected', lastSync: '15 minutes ago' },
                    { name: 'Smart Thermostat', status: 'Disconnected', lastSync: '3 days ago' }
                  ].map((device, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{device.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className={`w-2 h-2 rounded-full ${
                              device.status === 'Connected' ? 'bg-green-500' : 'bg-red-500'
                            }`}></div>
                            <p className="text-sm text-gray-500">
                              {device.status} • Last sync: {device.lastSync}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          {device.status === 'Connected' ? 'Disconnect' : 'Connect'}
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button className="bg-[#0099FF] hover:bg-blue-600">
                    Add New Device
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
