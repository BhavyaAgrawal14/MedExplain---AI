import React from 'react';
import { Upload, FileSearch, Brain, HeartPulse } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload Report',
    description: 'Securely upload your medical test results or lab reports in PDF, JPG, or PNG formats.',
    icon: Upload,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    stepColor: 'text-blue-200'
  },
  {
    number: '02',
    title: 'Extract Data',

description: 'OCR and PDF parsing automatically extract the contents of your medical report.',
    icon: FileSearch,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    stepColor: 'text-indigo-200'
  },
  {
    number: '03',
    title: 'AI Analysis',

description: 'Our AI explains medical terms, summarizes your report, and identifies important health parameters.',
    icon: Brain,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
    stepColor: 'text-violet-200'
  },
  {
    number: '04',
    title: 'Get Insights',

description: 'Receive health insights, lifestyle recommendations, and questions to ask your doctor.',
    icon: HeartPulse,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100',
    stepColor: 'text-teal-200'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-sm font-medium mb-5 border border-blue-100">
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">MedExplain AI</span> Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Upload your report, let AI analyze the contents, and receive easy-to-understand explanations, health insights, and lifestyle recommendations in seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                {/* Step Number Background */}
                <div className={`absolute top-4 right-6 text-5xl font-extrabold opacity-30 select-none ${step.stepColor} transition-opacity duration-300 group-hover:opacity-60`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-full ${step.bgColor} ${step.borderColor} border-4 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;