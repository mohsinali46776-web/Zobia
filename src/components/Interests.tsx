import React from 'react';
import { RESEARCH_INTERESTS } from '../data/cvData';
import { FlaskConical, Dna, Hexagon, Stethoscope, Cpu, ShieldAlert, Binary, Microscope } from 'lucide-react';

export const Interests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return FlaskConical;
      case 'Dna': return Dna;
      case 'Hexagon': return Hexagon;
      case 'Stethoscope': return Stethoscope;
      case 'Cpu': return Cpu;
      case 'ShieldAlert': return ShieldAlert;
      case 'Binary': return Binary;
      case 'Microscope': return Microscope;
      default: return FlaskConical;
    }
  };

  return (
    <section id="interests" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Core Scientific Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Research Domains & Specializations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Integrating synthetic bench chemistry with computational drug design to discover highly specific enzyme inhibitors and heterocyclic therapeutic leads.
          </p>
        </div>

        {/* 8 Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_INTERESTS.map((interest) => {
            const IconComponent = getIcon(interest.icon);
            return (
              <div
                key={interest.id}
                className="bg-[#FAFAFA] rounded-xl p-6 border border-slate-200/90 hover:bg-white hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center border border-navy-700 shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-800 group-hover:text-emerald-700 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                  {interest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-600 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
