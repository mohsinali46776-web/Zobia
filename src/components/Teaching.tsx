import React from 'react';
import { TEACHING_EXPERIENCE } from '../data/cvData';
import { GraduationCap, BookOpen, Users, Award, CheckCircle, Sparkles } from 'lucide-react';

export const Teaching: React.FC = () => {
  return (
    <section id="teaching" className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-navy-800 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-navy-50 border border-navy-100">
            Pedagogical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Teaching Portfolio & Mentorship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fostering critical scientific inquiry, active laboratory safety, and conceptual mastery in organic and physical chemistry across university degree programs.
          </p>
        </div>

        {/* 4 Pillars of Teaching Portfolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Teaching Philosophy",
              desc: "Emphasizing conceptual chemical reaction mechanisms rather than rote memorization, pairing theoretical lectures with hands-on bench synthesis.",
              icon: BookOpen
            },
            {
              title: "Courses Taught",
              desc: "Delivering core undergraduate and graduate modules including Organic Chemistry, Heterocyclic Syntheses, and Analytical Spectroscopic Methods.",
              icon: GraduationCap
            },
            {
              title: "Student Mentoring",
              desc: "Guiding undergraduate research projects, exam preparation strategies, and post-graduate career pathways.",
              icon: Users
            },
            {
              title: "Lab Supervision",
              desc: "Enforcing strict chemical laboratory safety protocols, waste disposal guidelines, and apparatus maintenance.",
              icon: Award
            }
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-navy-800 text-base">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Verified Teaching Experience Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-navy-800 border-l-4 border-emerald-600 pl-3">
            Official Higher Education Teaching Appointments
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TEACHING_EXPERIENCE.map((exp) => (
              <div key={exp.role + exp.period} className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 uppercase">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-navy-800 leading-snug">{exp.role}</h4>
                  <p className="text-xs font-semibold text-emerald-700">{exp.institution}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{exp.description}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">Courses & Modules</span>
                  <ul className="space-y-1">
                    {exp.courses.map((course) => (
                      <li key={course} className="flex items-center space-x-1.5 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
