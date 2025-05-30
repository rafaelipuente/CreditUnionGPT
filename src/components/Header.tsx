
import React, { useState } from 'react';
import { Bell, User, Menu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onToggleSidebar}
          className="lg:hidden transition-all duration-200 hover:bg-slate-100"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CU</span>
          </div>
          <h1 className="text-xl font-semibold text-slate-800">CreditUnionGPT</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 transition-all duration-200 hover:bg-slate-100"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
        
        <Button variant="ghost" size="sm" className="p-2 relative transition-all duration-200 hover:bg-slate-100">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
        </Button>

        <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-700">Sarah Johnson</p>
            <p className="text-xs text-slate-500">Loan Officer</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 ml-4 text-xs text-slate-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Internal Use Only</span>
        </div>
      </div>
    </header>
  );
};
