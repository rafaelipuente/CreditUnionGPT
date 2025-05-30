
import React from 'react';
import { 
  BarChart, 
  Shield, 
  FileText, 
  MessageSquare, 
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const modules = [
  {
    id: 'loan-risk',
    name: 'Loan Risk AI',
    icon: BarChart,
    description: 'AI-powered loan risk assessment'
  },
  {
    id: 'fraud-sense',
    name: 'FraudSense',
    icon: Shield,
    description: 'Real-time fraud detection'
  },
  {
    id: 'doc-parser',
    name: 'DocParser',
    icon: FileText,
    description: 'Intelligent document processing'
  },
  {
    id: 'fin-coach',
    name: 'FinCoach',
    icon: Target,
    description: 'Personalized financial guidance'
  },
  {
    id: 'cu-copilot',
    name: 'CU Copilot',
    icon: MessageSquare,
    description: 'AI assistant for policies'
  }
];

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = ({ activeModule, setActiveModule, collapsed, setCollapsed }: SidebarProps) => {
  return (
    <div className={cn(
      "bg-white border-r border-slate-200 transition-all duration-300 shadow-lg",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-green-500 rounded"></div>
            <span className="font-semibold text-slate-700">AI Modules</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hidden lg:flex"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      <nav className="p-2">
        {modules.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule === module.id;
          
          return (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 mb-1",
                isActive 
                  ? "bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <div className="text-left">
                  <div className="font-medium text-sm">{module.name}</div>
                  <div className={cn(
                    "text-xs opacity-75",
                    isActive ? "text-blue-100" : "text-slate-500"
                  )}>
                    {module.description}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-slate-700">AI Status</span>
            </div>
            <p className="text-xs text-slate-600">All systems operational</p>
          </div>
        </div>
      )}
    </div>
  );
};
