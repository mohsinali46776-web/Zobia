import React from 'react';
import { EDUCATION_DATA } from '../data/cvData';
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps = [
    { title: "BS Research", detail: "GCWUS (2016-2020) • Organic Chemistry Foundation • CGPA 3.607", icon: GraduationCap },
    { title: "MS Thesis", detail: "GCWUS (2020-2022) • Synthesis & Antimicrobial Evaluation • CGPA 3.606", icon: BookOpen },
    { title: "HEC Project", detail: "NRPU Project #20-15800 • Tyrosinase Inhibitor Synthesis (1.5 Yrs)", icon: Award },
    { title: "Research Assistant", detail: "HEC NRPU Fellow • Advanced Experiments & Spectroscopic Analysis", icon: CheckCircle2 },
    { title: "Visiting Lecturer", detail: "GCWUS & Superior College Pasrur • Undergraduate Chemistry", icon: GraduationCap },
    { title: "PhD Research", detail: "GCWUS (2023-Present) • Distinction GP 4.00/4.00 • Enzyme Inhibitors", icon: Sparkles, active: true },
  ];

  return (
    <section id="timeline" className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-navy-800 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-navy-50 border border-navy-100">
            Academic & Research Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Research & Education Timeline
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A continuous progression of scholarly rigor, from undergraduate synthetic chemistry training to funded HEC research and doctoral enzyme inhibitor modeling.
          </p>
        </div>

        {/* Clean Horizon Connected Pathway */}
        <div className="mb-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
            Sequential Scholarly Progression
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`relative p-4 rounded-xl border transition-all ${
                    step.active
                      ? 'bg-emerald-50/80 border-emerald-400 ring-2 ring-emerald-500/20 shadow-md'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-navy-800 text-white">
                      Step 0{idx + 1}
                    </span>
                    <Icon className={`w-4 h-4 ${step.active ? 'text-emerald-600' : 'text-slate-500'}`} />
                  </div>
                  <h4 className="font-serif font-bold text-navy-800 text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-snug font-sans">{step.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Education Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-navy-800 border-l-4 border-emerald-600 pl-3">
            Academic Degrees & Qualifications
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.degree}
                className={`bg-white rounded-xl p-6 border transition-all ${
                  edu.highlight
                    ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold uppercase mb-1 ${
                      edu.status === 'Current' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {edu.status === 'Current' ? 'Current Doctoral Work' : 'Completed Degree'}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-navy-800">{edu.degree}</h4>
                  </div>
                  <span className="text-xs font-bold text-navy-800 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-emerald-700 mb-2">{edu.institution}</p>
                
                <div className="bg-[#FAFAFA] p-3 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-xs font-bold text-navy-800 block">Academic Standing:</span>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{edu.grade}</span>
                </div>

                {edu.synopsis && (
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    <strong className="text-slate-800 block mb-0.5">Research Topic / Synopsis:</strong>
                    <span className="italic text-slate-700">"{edu.synopsis}"</span>
                  </div>
                )}
                {edu.details && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
