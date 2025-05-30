
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, DollarSign, Calendar, Download, Shield } from 'lucide-react';

export const FinCoachModule = () => {
  const [formData, setFormData] = useState({
    income: '',
    age: '',
    savingsGoal: '',
    timeframe: '',
    currentSavings: ''
  });
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setRecommendations({
        monthlyTarget: 485,
        riskProfile: "Moderate",
        confidence: 89,
        keyStrategy: "Automated savings plan",
        recommendations: [
          "Open a high-yield savings account",
          "Consider a diversified investment portfolio",
          "Automate your savings transfers",
          "Review and optimize monthly expenses"
        ],
        projectedGrowth: 78500,
        savingsRate: 18.5
      });
      setLoading(false);
    }, 2000);
  };

  const handleDownloadReport = () => {
    setReportDownloaded(true);
    console.log('Generating financial coaching report...');
    setTimeout(() => setReportDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-400 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">FinCoach</h1>
            <p className="text-slate-600">Personalized financial guidance and goal tracking</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-xs text-slate-600">AI Compliant</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Financial Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="income">Annual Income ($)</Label>
                <Input 
                  id="income"
                  placeholder="75,000"
                  value={formData.income}
                  onChange={(e) => setFormData({...formData, income: e.target.value})}
                  className="transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age"
                  placeholder="32"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="savingsGoal">Savings Goal ($)</Label>
                <Input 
                  id="savingsGoal"
                  placeholder="100,000"
                  value={formData.savingsGoal}
                  onChange={(e) => setFormData({...formData, savingsGoal: e.target.value})}
                  className="transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="timeframe">Timeframe (years)</Label>
                <Input 
                  id="timeframe"
                  placeholder="10"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                  className="transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="currentSavings">Current Savings ($)</Label>
              <Input 
                id="currentSavings"
                placeholder="15,000"
                value={formData.currentSavings}
                onChange={(e) => setFormData({...formData, currentSavings: e.target.value})}
                className="transition-all duration-200 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Button 
              onClick={handleAnalyze} 
              className="w-full bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 transition-all duration-200"
              disabled={loading}
            >
              {loading ? 'Generating Plan...' : 'Get Personalized Plan'}
            </Button>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recommendations ? (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">${recommendations.monthlyTarget}</p>
                    <p className="text-xs text-slate-600">Monthly Target</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{recommendations.savingsRate}%</p>
                    <p className="text-xs text-slate-600">Savings Rate</p>
                  </div>
                </div>

                <div className="text-center">
                  <Badge variant="outline" className="mb-2">
                    {recommendations.riskProfile} Risk Profile
                  </Badge>
                  <div className="text-xs text-slate-500 mb-2">
                    <div>Confidence: {recommendations.confidence}%</div>
                    <div>Key Strategy: {recommendations.keyStrategy}</div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Projected Growth: <span className="font-semibold">${recommendations.projectedGrowth.toLocaleString()}</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Personalized Recommendations:</h4>
                  <ul className="space-y-2">
                    {recommendations.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg">
                  <p className="text-sm font-medium text-green-800 mb-1">Goal Achievement</p>
                  <p className="text-xs text-green-600">
                    You're on track to reach your savings goal with consistent monthly contributions
                  </p>
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
                <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Enter your financial information to get personalized guidance</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
