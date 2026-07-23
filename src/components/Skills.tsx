import React from 'react';
import { SKILL_CATEGORIES } from '../data/cvData';
import { Microscope, Cpu, FlaskConical, FileCheck2, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Methodological Capability
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Laboratory & Computational Skills Matrix
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hands-on technical proficiency across synthetic organic lab execution, structural spectroscopy, biological assays, and computer-aided molecular modeling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#FAFAFA] rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6"
            >
              <h3 className="text-lg font-serif font-bold text-navy-800 border-b border-slate-200/80 pb-3 flex items-center justify-between">
                <span>{cat.category}</span>
                <Microscope className="w-5 h-5 text-emerald-600" />
              </h3>

              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-800 flex items-center space-x-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-xs font-bold text-navy-800">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-navy-800 to-emerald-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    <p className="text-xs text-slate-500 font-sans">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
