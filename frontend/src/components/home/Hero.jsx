import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  UploadCloud, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Activity,
  Loader2
} from 'lucide-react';

const Hero = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus("analyzing");
      setTimeout(() => {
        setUploadStatus("completed");
      }, 2000);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none" />
      <div className="absolute top-20 -left-64 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 -right-64 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Powered by Advanced Healthcare AI</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Understand Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Medical Reports
              </span> with AI.
            </h1>
            
            {/* Description */}
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Upload your lab results or medical reports and get simple, easy-to-understand explanations in seconds. Stop guessing and start understanding your health.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <UploadCloud className="w-5 h-5" />
                Upload Report
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0">
                <FileText className="w-5 h-5 text-slate-400" />
                View Sample Analysis
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>100% Secure</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Private</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Elements */}
          <div className="relative w-full h-full min-h-[450px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            
            {/* Premium Upload Card */}
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 z-10 transition-transform hover:scale-[1.02] duration-300">
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-slate-800">Analyze New Report</h3>
                <p className="text-sm text-slate-500 mt-1">Drop your file here to get started</p>
              </div>

              {/* Drag & Drop Area */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 hover:bg-blue-50/50 hover:border-blue-300 transition-colors group cursor-pointer flex flex-col items-center justify-center py-10 px-6"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept=".pdf,.png,.jpg,.jpeg" 
                  onChange={handleFileChange} 
                />
                
                {uploadStatus === "idle" && (
                  <>
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <UploadCloud className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="text-slate-700 font-medium mb-1">Drag & drop your file</p>
                    <p className="text-slate-400 text-sm mb-5">or click to browse from device</p>
                    
                    {/* Supported Formats */}
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-white border border-slate-200 rounded md text-xs font-medium text-slate-500 shadow-sm">PDF</span>
                      <span className="px-2 py-1 bg-white border border-slate-200 rounded md text-xs font-medium text-slate-500 shadow-sm">PNG</span>
                      <span className="px-2 py-1 bg-white border border-slate-200 rounded md text-xs font-medium text-slate-500 shadow-sm">JPG</span>
                    </div>
                  </>
                )}

                {uploadStatus === "analyzing" && selectedFile && (
                  <>
                    <div className="w-16 h-16 bg-blue-50 rounded-full shadow-sm border border-blue-100 flex items-center justify-center mb-4">
                      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Analyzing...
                    </div>
                    <p className="text-slate-700 font-medium text-center truncate max-w-full px-4">{selectedFile.name}</p>
                    <p className="text-slate-400 text-sm mt-1">Please wait</p>
                  </>
                )}

                {uploadStatus === "completed" && selectedFile && (
                  <>
                    <div className="w-16 h-16 bg-emerald-50 rounded-full shadow-sm border border-emerald-100 flex items-center justify-center mb-4 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Analysis Complete
                    </div>
                    <p className="text-slate-700 font-medium text-center truncate max-w-full px-4">{selectedFile.name}</p>
                    <p className="text-slate-400 text-sm mt-1">Click to analyze another</p>
                  </>
                )}
              </div>
            </div>

            {/* Small Analysis Preview Card - Floating over the left side of the upload card */}
            <div className="absolute -bottom-6 -left-2 sm:-left-8 lg:-left-12 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 p-5 z-20 transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Health Score</p>
                  <p className="text-xl font-bold text-slate-800">84<span className="text-sm text-slate-400 font-normal">/100</span></p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Hemoglobin</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" /> Normal
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Vitamin D</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
                    <AlertCircle className="w-3 h-3" /> Low
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Platelets</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" /> Normal
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
