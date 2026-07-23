import React from 'react';
import { SEMINARS_DATA } from '../data/cvData';
import { Calendar, Building, Sparkles, Award } from 'lucide-react';

export const Conferences: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Academic Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Conferences, Seminars & Workshops
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Active participation in scientific symposiums, career development panels, and postgraduate literature research workshops.
          </p>
        </div>

        {/* Seminars List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SEMINARS_DATA.map((sem, idx) => (
            <div
              key={sem.title}
              className="bg-[#FAFAFA] rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-emerald-500/40 hover:shadow-xs transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-navy-800 text-gold-400 font-semibold">
                    {sem.type}
                  </span>
                  <span className="text-slate-500 font-mono flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{sem.date}</span>
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-navy-800 leading-snug">
                  "{sem.title}"
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center space-x-2 text-xs text-slate-600">
                <Building className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{sem.organizer}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
