
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Bot, User, Download, Shield } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  confidence?: number;
}

export const CUCopilotModule = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm CU Copilot, your AI assistant for credit union policies and procedures. How can I help you today?",
      sender: 'bot',
      timestamp: '9:00 AM',
      confidence: 98
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const predefinedQuestions = [
    "What's our overdraft policy?",
    "How do I process a loan modification?",
    "What are the requirements for opening a business account?",
    "What's the maximum daily withdrawal limit?"
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on our current policy manual, here's what I found...",
        "According to section 4.2 of our procedures, you'll need to...",
        "Our policy states that members can...",
        "For this type of request, please follow these steps..."
      ];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)] + " [This is a simulated response based on internal knowledge base]",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        confidence: Math.round(88 + Math.random() * 10)
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleDownloadReport = () => {
    setReportDownloaded(true);
    console.log('Generating chat session report...');
    setTimeout(() => setReportDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-400 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">CU Copilot</h1>
            <p className="text-slate-600">AI assistant for policies, procedures, and staff questions</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-xs text-slate-600">Internal Use Only</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3 transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              Chat Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-96 bg-slate-50 rounded-lg p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg transition-all duration-200 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-400 text-white' 
                        : 'bg-white border border-slate-200 hover:shadow-sm'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        {message.sender === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        <span className="text-xs opacity-75">{message.timestamp}</span>
                        {message.confidence && (
                          <span className="text-xs opacity-75">• {message.confidence}%</span>
                        )}
                      </div>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-1">
                        <Bot className="w-4 h-4" />
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about policies, procedures, or guidelines..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
                />
                <Button 
                  onClick={() => handleSendMessage()}
                  className="bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <Button 
                onClick={handleDownloadReport}
                variant="outline" 
                size="sm" 
                className="w-full transition-all duration-200 hover:bg-slate-50"
              >
                <Download className="w-4 h-4 mr-2" />
                {reportDownloaded ? 'Chat Report Saved ✓' : 'Download Chat Report'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-sm">Quick Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {predefinedQuestions.map((question, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start h-auto p-2 text-xs transition-all duration-200 hover:bg-slate-50"
                  onClick={() => handleSendMessage(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-xs font-medium text-indigo-800 mb-1">Knowledge Base</p>
              <p className="text-xs text-indigo-600">
                Connected to latest policy documents and procedures
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
