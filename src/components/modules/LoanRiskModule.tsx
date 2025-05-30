
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { BarChart, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export const LoanRiskModule = () => {
  const [formData, setFormData] = useState({
    income: '',
    loanAmount: '',
    creditScore: '',
    employmentYears: '',
    debtToIncome: ''
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    // Simulate AI analysis
    setTimeout(() => {
      const score = Math.random() * 100;
      let risk = 'low';
      let color = 'bg-green-500';
      if (score > 60) { risk = 'medium'; color = 'bg-yellow-500'; }
      if (score > 80) { risk = 'high'; color = 'bg-red-500'; }
      
      setResult({
        riskScore: Math.round(score),
        riskLevel: risk,
        color: color,
        recommendations: [
          'Consider additional collateral',
          'Review employment history',
          'Verify income documentation'
        ],
        confidence: 87
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
          <BarChart className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Loan Risk AI</h1>
          <p className="text-slate-600">AI-powered loan risk assessment and recommendations</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Loan Application Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="income">Annual Income ($)</Label>
                <Input 
                  id="income"
                  placeholder="65,000"
                  value={formData.income}
                  onChange={(e) => setFormData({...formData, income: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                <Input 
                  id="loanAmount"
                  placeholder="25,000"
                  value={formData.loanAmount}
                  onChange={(e) => setFormData({...formData, loanAmount: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="creditScore">Credit Score</Label>
                <Input 
                  id="creditScore"
                  placeholder="720"
                  value={formData.creditScore}
                  onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="employmentYears">Employment Years</Label>
                <Input 
                  id="employmentYears"
                  placeholder="3.5"
                  value={formData.employmentYears}
                  onChange={(e) => setFormData({...formData, employmentYears: e.target.value})}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="debtToIncome">Debt-to-Income Ratio (%)</Label>
              <Input 
                id="debtToIncome"
                placeholder="28"
                value={formData.debtToIncome}
                onChange={(e) => setFormData({...formData, debtToIncome: e.target.value})}
              />
            </div>
            <Button 
              onClick={handleAnalyze} 
              className="w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze Risk'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Risk Assessment Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className={`w-20 h-20 ${result.color} rounded-full mx-auto flex items-center justify-center mb-3`}>
                    <span className="text-white font-bold text-lg">{result.riskScore}</span>
                  </div>
                  <Badge variant={result.riskLevel === 'low' ? 'default' : result.riskLevel === 'medium' ? 'secondary' : 'destructive'}>
                    {result.riskLevel.toUpperCase()} RISK
                  </Badge>
                  <p className="text-sm text-slate-600 mt-2">Confidence: {result.confidence}%</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">AI Recommendations:</h4>
                  <ul className="space-y-1">
                    {result.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-500 py-8">
                <BarChart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Enter loan details and click "Analyze Risk" to see AI assessment</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
