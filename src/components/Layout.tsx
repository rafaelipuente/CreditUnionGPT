
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MainContent } from './MainContent';

export const Layout = () => {
  const [activeModule, setActiveModule] = useState('loan-risk');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      <Sidebar 
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div className="flex-1 flex flex-col">
        <Header 
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <MainContent activeModule={activeModule} />
      </div>
    </div>
  );
};
