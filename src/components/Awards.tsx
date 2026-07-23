import React from 'react';
import { AWARDS_DATA } from '../data/cvData';
import { Award, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-navy-800 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-navy-50 border border-navy-100">
            Honours & Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Academic Distinctions & Awards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Recognized by federal and provincial government authorities for sustained high-merit academic and doctoral performance.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AWARDS_DATA.map((award) => (
            <div
              key={award.title}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-gold-500/50 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center border border-navy-700">
                    <Trophy className="w-5 h-5" />
                  </div>
                  {award.year && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-gold-50 text-gold-700 border border-gold-200">
                      {award.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-serif font-bold text-navy-800 leading-snug">
                  {award.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700">{award.issuer}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{award.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Europass Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
