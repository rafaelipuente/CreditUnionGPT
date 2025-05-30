
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, Check, Clock, Download, Shield, Info } from 'lucide-react';

export const DocParserModule = () => {
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const handleUpload = () => {
    setProcessing(true);
    setTimeout(() => {
      setResults({
        documentType: "Auto Loan Application",
        confidence: 94,
        extractedData: {
          name: "Michael Rodriguez",
          ssn: "***-**-1234",
          accountType: "Checking",
          income: "$78,500",
          address: "1425 Oak Street, Springfield, IL",
          phone: "(555) 123-4567",
          employmentStatus: "Full-time",
          requestedAmount: "$32,000"
        },
        validationStatus: "Verified",
        keyFeature: "Clear document quality"
      });
      setProcessing(false);
    }, 3000);
  };

  const handleDownloadReport = () => {
    setReportDownloaded(true);
    console.log('Generating document parsing report...');
    setTimeout(() => setReportDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">DocParser</h1>
            <p className="text-slate-600">Intelligent document processing and data extraction</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-xs text-slate-600">Secure AI Processing</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Document Upload
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center relative">
                <div className="absolute top-2 right-2 group">
                  <Info className="w-4 h-4 text-slate-400 cursor-help" />
                  <div className="absolute right-0 top-6 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded shadow-lg w-48 z-10">
                    Your data is processed securely and not stored permanently
                  </div>
                </div>
                <FileText className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                <p className="text-slate-600 mb-4">Upload PDF or image documents for AI processing</p>
                <p className="text-sm text-slate-500 mb-4">Supported: PDF, JPG, PNG (Max 10MB)</p>
                <Button 
                  onClick={handleUpload}
                  disabled={processing}
                  className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 transition-all duration-200"
                >
                  {processing ? 'Processing...' : 'Simulate Upload'}
                </Button>
              </div>

              {processing && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-500 animate-spin" />
                    <div>
                      <p className="font-medium text-blue-800">Processing Document</p>
                      <p className="text-sm text-blue-600">AI is extracting and validating data...</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              Extracted Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{results.documentType}</Badge>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">
                      {results.confidence}% Confidence
                    </Badge>
                    <Badge variant="default" className="bg-green-500">
                      {results.validationStatus}
                    </Badge>
                  </div>
                </div>

                <div className="text-xs text-slate-500 text-center">
                  Key Factor: {results.keyFeature}
                </div>

                <div className="space-y-3">
                  {Object.entries(results.extractedData).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-2 bg-slate-50 rounded transition-all duration-200 hover:bg-slate-100">
                      <span className="text-sm font-medium text-slate-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-sm font-semibold">{value as string}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Document processed successfully
                    </span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    All required fields extracted and validated
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
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Upload a document to see extracted data</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
