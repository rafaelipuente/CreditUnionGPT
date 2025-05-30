
import React from 'react';
import { LoanRiskModule } from './modules/LoanRiskModule';
import { FraudSenseModule } from './modules/FraudSenseModule';
import { DocParserModule } from './modules/DocParserModule';
import { CUCopilotModule } from './modules/CUCopilotModule';
import { FinCoachModule } from './modules/FinCoachModule';

interface MainContentProps {
  activeModule: string;
}

export const MainContent = ({ activeModule }: MainContentProps) => {
  const renderModule = () => {
    switch (activeModule) {
      case 'loan-risk':
        return <LoanRiskModule />;
      case 'fraud-sense':
        return <FraudSenseModule />;
      case 'doc-parser':
        return <DocParserModule />;
      case 'cu-copilot':
        return <CUCopilotModule />;
      case 'fin-coach':
        return <FinCoachModule />;
      default:
        return <LoanRiskModule />;
    }
  };

  return (
    <main className="flex-1 p-6 overflow-auto">
      {renderModule()}
    </main>
  );
};
