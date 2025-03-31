
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
    { id: 2, text: 'I have a question about my energy usage.', sender: 'user' },
    { id: 3, text: 'I\'d be happy to help with that. What would you like to know about your energy usage?', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage = { 
      id: messages.length + 1, 
      text: newMessage, 
      sender: 'user' 
    };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate bot response (this would be replaced with actual API call to backend)
    setTimeout(() => {
      const botMessage = { 
        id: messages.length + 2, 
        text: "I'm connecting to the database to provide you with relevant information. In a full implementation, this would use RAG to retrieve accurate data based on your query.", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] pb-16 md:pb-0">
        <div className="text-xl font-bold mb-4">Support Chat</div>
        
        <Card className="flex-1 overflow-hidden flex flex-col">
          <CardContent className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-electricblue text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </CardContent>
          
          <div className="p-4 border-t flex gap-2">
            <Input 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <Button 
              onClick={handleSendMessage}
              size="icon"
              className="bg-electricblue hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Chat;
