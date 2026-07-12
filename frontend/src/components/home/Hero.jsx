import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { analyzeReport } from "../../api/reportApi";
import demoAnalysis from "../../data/demoAnalysis";

import {
  Sparkles,
  UploadCloud,
  FileText,
  CheckCircle,
  AlertCircle,
  Activity,
  Loader2,
} from "lucide-react";

const Hero = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setUploadStatus("analyzing");

    try {
      const formData = new FormData();
      formData.append("report", file);

      const result = await analyzeReport(formData);

      if (!result.success) {
        toast.error(result.message);
        setUploadStatus("idle");
        return;
      }

      toast.success("Report analyzed successfully!");

      localStorage.setItem("analysis", JSON.stringify(result.analysis));

      navigate("/dashboard", {
        state: {
          analysis: result.analysis,
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("Upload failed.");
      setUploadStatus("idle");
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-100/50 dark:from-blue-900/20 to-transparent pointer-events-none" />

      <div className="absolute top-20 -left-64 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px] pointer-events-none" />

      <div className="absolute top-40 -right-64 w-[500px] h-[500px] rounded-full bg-teal-400/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* LEFT CONTENT */}

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />

              <span>Powered by Advanced Healthcare AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6">
              Understand Your
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Medical Reports
              </span>{" "}
              with AI.
            </h1>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-lg mb-8">
              Upload your lab reports and receive clear, AI-powered explanations
              in seconds. Understand your health without medical jargon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  localStorage.setItem(
                    "analysis",
                    JSON.stringify(demoAnalysis),
                  );

                  navigate("/dashboard", {
                    state: {
                      analysis: demoAnalysis,
                    },
                  });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                <FileText className="w-5 h-5" />
                View Demo Report
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>100% Secure</span>
              </div>

              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />

              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Private</span>
              </div>

              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />

              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>
          {/* RIGHT CONTENT */}

          <div className="relative w-full h-full min-h-[450px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Upload Card */}

            <div
              id="upload-section"
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-black/40 border border-slate-100 dark:border-slate-800 p-8 z-10 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Upload Your Medical Report
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Get AI-powered insights in seconds.
                </p>
              </div>

              {/* Drag & Drop */}

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50/50 dark:hover:bg-slate-700 hover:border-blue-300 transition-colors group cursor-pointer flex flex-col items-center justify-center py-10 px-6"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                />

                {uploadStatus === "idle" && (
                  <>
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-8 h-8 text-blue-500" />
                    </div>

                    <p className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                      Drag & Drop Your Report
                    </p>

                    <p className="text-sm text-center leading-relaxed text-slate-500 dark:text-slate-400 mb-5">
                      Upload your PDF or image and receive
                      <br />
                      an AI-powered explanation in seconds.
                    </p>

                    <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">
                      Supported Formats
                    </p>

                    <div className="flex justify-center flex-wrap gap-2">
                      <span className="px-2 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-medium text-slate-500 dark:text-slate-400">
                        PDF
                      </span>

                      <span className="px-2 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-medium text-slate-500 dark:text-slate-400">
                        PNG
                      </span>

                      <span className="px-2 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-medium text-slate-500 dark:text-slate-400">
                        JPG
                      </span>
                    </div>
                  </>
                )}

                {uploadStatus === "analyzing" && selectedFile && (
                  <>
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Analyzing...
                    </div>

                    <p className="text-center font-medium text-slate-700 dark:text-slate-200 truncate max-w-full px-4">
                      {selectedFile.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Please wait...
                    </p>
                  </>
                )}

                {uploadStatus === "completed" && selectedFile && (
                  <>
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-emerald-500" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-3">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Analysis Complete
                    </div>

                    <p className="text-center font-medium text-slate-700 dark:text-slate-200 truncate max-w-full px-4">
                      {selectedFile.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Click to analyze another
                    </p>
                  </>
                )}
              </div>
            </div>
            {/* Floating Analysis Preview */}

            <div className="absolute -bottom-10 left-24 w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-xl dark:shadow-black/40 border border-slate-100 dark:border-slate-800 p-5 z-20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-teal-600" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider font-medium text-slate-500 dark:text-slate-400">
                    Health Score
                  </p>

                  <p className="text-xl font-bold text-slate-800 dark:text-white">
                    84
                    <span className="text-sm font-normal text-slate-400">
                      /100
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Hemoglobin
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <CheckCircle className="w-3 h-3" />
                    Normal
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Vitamin D
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                    <AlertCircle className="w-3 h-3" />
                    Low
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Platelets
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <CheckCircle className="w-3 h-3" />
                    Normal
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
