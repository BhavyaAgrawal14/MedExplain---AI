import React from "react";
import { Brain, FileText, Activity, MessageCircle } from "lucide-react";

const features = [
  {
    title: "AI-Powered Explanations",
    description:
      "Understand complex medical terms and lab values in simple, easy-to-understand language.",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    title: "OCR & PDF Processing",

    description:
      "Extract text from scanned medical reports and PDF files accurately using OCR and document parsing.",
    icon: FileText,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
  },
  {
    title: "Health Insights",

    description:
      "Receive a health score and an easy-to-read summary of your medical report.",
    icon: Activity,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
  },
  {
    title: "Doctor Preparation",

    description:
      "Get smart questions to ask your doctor before your appointment based on your report.",
    icon: MessageCircle,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10" />
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-5">
            <span>Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Everything You Need to<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Understand Your Health 
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From extracting report data to generating easy-to-understand explanations, MedExplain AI simplifies every step of understanding your medical reports.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
