import React from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { BookOpen, Compass, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Biography & Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              Academic Profile & Biography
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight leading-snug">
              Transforming Chemistry Research into Scientific Innovation
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              Miss Zobia Noreen is a PhD Chemistry Scholar, Researcher, and Chemistry Lecturer at Government College Women University Sialkot (GCWUS). With a high academic standing—evidenced by a perfect <strong>4.00/4.00 GP</strong> distinction in her PhD Comprehensive Examination on her first attempt—she brings analytical precision to complex scientific challenges.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              Her doctoral and funded HEC research centers on the synthesis, functionalization, and biological screening of chalcone-based heterocyclic compounds. By combining wet-bench organic synthesis with computer-aided molecular docking, she evaluates enzyme inhibition kinetics targeting tyrosinase and antimicrobial pathways.
            </p>

            {/* Core Values / Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Synthetic Precision", desc: "Claisen-Schmidt condensation & heterocyclic cyclization" },
                { title: "In Silico Modeling", desc: "AutoDock binding poses & binding energy calculations" },
                { title: "Spectroscopic Elucidation", desc: "FTIR absorption bands, UV-Vis kinetics & NMR analysis" },
                { title: "Enzyme Assay Kinetics", desc: "Spectrophotometric tyrosinase inhibition & IC50 mapping" },
              ].map((val) => (
                <div key={val.title} className="p-4 rounded-xl bg-[#FAFAFA] border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-navy-800 font-serif font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 font-sans">{val.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Mission, Vision & Research Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-navy-800 text-white rounded-2xl p-6 sm:p-8 border border-navy-700 shadow-md space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Research Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  To design and synthesize next-generation heterocyclic enzyme inhibitors that address therapeutic needs in medicinal chemistry and pharmacological enzyme regulation.
                </p>
              </div>

              <div className="space-y-2 border-t border-navy-700/80 pt-4">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Scholarly Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  To establish a premier research framework bridging benchtop synthetic organic chemistry with predictive computational drug discovery across international research networks.
                </p>
              </div>

              <div className="space-y-2 border-t border-navy-700/80 pt-4">
                <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Pedagogical Commitment</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  Inspiring student curiosity, rigorous laboratory safety, and literature critical thinking for undergraduate and postgraduate chemistry students.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
