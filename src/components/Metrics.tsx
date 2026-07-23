import React from 'react';
import { VERIFIED_METRICS } from '../data/cvData';
import { Award, ShieldCheck, BookOpen, GraduationCap } from 'lucide-react';

export const Metrics: React.FC = () => {
  const icons = [Award, ShieldCheck, GraduationCap, BookOpen];

  return (
    <section className="py-10 bg-navy-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-navy-700/80 mb-8">
          <div>
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">Empirical Integrity</span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">Verified Academic Milestones</h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 sm:mt-0 max-w-md">
            All achievements are officially recorded and verified in academic transcripts and university records.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_METRICS.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={metric.label}
                className="bg-navy-900/70 border border-navy-700/70 rounded-xl p-5 hover:border-emerald-500/50 transition-colors group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center border border-navy-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold">
                    {metric.badge}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-1 group-hover:text-gold-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">{metric.label}</div>
                <p className="text-xs text-slate-400 leading-snug">{metric.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
