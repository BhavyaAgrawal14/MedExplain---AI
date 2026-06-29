import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Can MedExplain AI diagnose diseases?",
    answer: "No. MedExplain AI helps you understand your medical reports in simple language. It does not diagnose diseases or prescribe treatments. Always consult a qualified healthcare professional for medical advice."
  },
  {
    question: "Is my medical data secure and private?",
    answer: "Yes. Your uploaded reports are processed securely for analysis and are not stored permanently by MedExplain AI."
  },
  {
    question: "Which report formats are supported?",
    answer: "MedExplain AI currently supports PDF, PNG, JPG, and JPEG medical reports for analysis."
  },
  {
    question: "Which AI model powers MedExplain AI?",
    answer: "MedExplain AI uses the Groq API with the Llama 3.3 70B model to generate simple explanations, health summaries, and lifestyle recommendations."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-5 border border-slate-200">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Find quick answers to common questions about how MedExplain AI works, data privacy, and report support.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isActive 
                    ? 'border-blue-200 shadow-lg shadow-blue-100/50' 
                    : 'border-slate-100 shadow-md shadow-slate-100/50 hover:border-slate-200 hover:shadow-lg'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  <span className={`text-lg font-semibold transition-colors duration-200 ${isActive ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? 'rotate-180 text-blue-600' : 'text-slate-500'
                      }`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;