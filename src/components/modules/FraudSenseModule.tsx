
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Upload, AlertTriangle, CheckCircle, Clock, Download, Info } from 'lucide-react';

export const FraudSenseModule = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const mockTransactions = [
    { id: 1, amount: 2500, merchant: "Electronics Store", time: "2:34 AM", risk: "high" },
    { id: 2, amount: 45, merchant: "Gas Station", time: "8:15 AM", risk: "low" },
    { id: 3, amount: 1200, merchant: "Unknown Vendor", time: "11:45 PM", risk: "medium" },
    { id: 4, amount: 89, merchant: "Grocery Store", time: "6:30 PM", risk: "low" },
  ];

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResults({
        flaggedTransactions: 2,
        totalTransactions: 247,
        riskScore: 73,
        confidence: 91,
        topPattern: "Late-night high-value transactions",
        alerts: [
          "Unusual late-night transaction pattern detected",
          "Transaction amount exceeds normal spending",
          "New merchant location flagged"
        ]
      });
      setAnalyzing(false);
    }, 3000);
  };

  const handleDownloadReport = () => {
    setReportDownloaded(true);
    console.log('Generating fraud detection report...');
    setTimeout(() => setReportDownloaded(false), 3000);
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'high': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'medium': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getRiskBadge = (risk: string) => {
    const variants = { high: 'destructive', medium: 'secondary', low: 'default' } as const;
    return <Badge variant={variants[risk as keyof typeof variants]}>{risk.toUpperCase()}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-400 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">FraudSense</h1>
            <p className="text-slate-600">Real-time fraud detection and transaction monitoring</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-xs text-slate-600">Secure AI Processing</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Transaction Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center relative">
                <div className="absolute top-2 right-2 group">
                  <Info className="w-4 h-4 text-slate-400 cursor-help" />
                  <div className="absolute right-0 top-6 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded shadow-lg w-48 z-10">
                    Your data is processed securely and not stored permanently
                  </div>
                </div>
                <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                <p className="text-slate-600 mb-3">Upload transaction logs or simulate analysis</p>
                <Button 
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500 transition-all duration-200"
                >
                  {analyzing ? 'Analyzing...' : 'Simulate Analysis'}
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Recent Transactions</h4>
                {mockTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg transition-all duration-200 hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      {getRiskIcon(transaction.risk)}
                      <div>
                        <p className="font-medium">{transaction.merchant}</p>
                        <p className="text-sm text-slate-500">{transaction.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${transaction.amount}</p>
                      {getRiskBadge(transaction.risk)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle>Fraud Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-4 animate-fade-in">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-400 rounded-full mx-auto flex items-center justify-center mb-3">
                    <span className="text-white font-bold">{results.riskScore}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Risk Score</p>
                  <div className="text-xs text-slate-500">
                    <div>Confidence: {results.confidence}%</div>
                    <div className="mt-1">Pattern: {results.topPattern}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-600">{results.flaggedTransactions}</p>
                    <p className="text-xs text-slate-600">Flagged</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{results.totalTransactions}</p>
                    <p className="text-xs text-slate-600">Total</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Active Alerts:</h4>
                  <div className="space-y-2">
                    {results.alerts.map((alert: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{alert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleDownloadReport}
                  variant="outline" 
                  size="sm" 
                  className="w-full transition-all duration-200 hover:bg-slate-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {reportDownloaded ? 'Report Saved ✓' : 'Download Report'}
                </Button>
              </div>
            ) : (
              <div className="text-center text-slate-500 py-8">
                <Shield className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Run analysis to see fraud detection results</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
