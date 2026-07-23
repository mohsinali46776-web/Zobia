import React from 'react';
import { RESEARCH_PROJECTS } from '../data/cvData';
import { FlaskConical, Award, ShieldCheck, Microscope, Cpu, ArrowRight, UserCheck } from 'lucide-react';

export const Research: React.FC = () => {
  const hecProject = RESEARCH_PROJECTS.find(p => p.id === 'hec-nrpu-2021');

  return (
    <section id="research" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Funded Grants & Doctoral Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Research Projects & HEC Fellowship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Investigating synthetic chalcone heterocyclic derivatives to address enzyme inhibition pathways, combining bench laboratory synthesis with state-of-the-art computational docking.
          </p>
        </div>

        {/* Featured HEC Funded Project Card */}
        {hecProject && (
          <div className="bg-[#FAFAFA] rounded-2xl border-2 border-emerald-500/40 p-6 sm:p-10 shadow-md mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-xs">
              HEC NRPU Funded Grant
            </div>

            <div className="space-y-6">
              
              {/* Project Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="bg-navy-800 text-gold-400 font-mono px-3 py-1 rounded font-bold">
                  {hecProject.projectNumber}
                </span>
                <span className="bg-slate-200 text-slate-800 font-semibold px-3 py-1 rounded">
                  {hecProject.fundingAgency}
                </span>
                <span className="bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 rounded flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{hecProject.duration}</span>
                </span>
              </div>

              {/* Title & Supervisor */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-800 leading-snug mb-3">
                  {hecProject.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-200 inline-flex">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Supervisor:</strong> {hecProject.supervisor} (Associate Professor, GCWUS)</span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                {hecProject.description}
              </p>

              {/* Integrated Methodology Workflow */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Four-Stage Research Methodology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { step: "01", name: "Chemical Synthesis", detail: "Claisen-Schmidt condensation & heterocycle cyclization", icon: FlaskConical },
                    { step: "02", name: "Spectroscopic Profiling", detail: "FTIR, UV-Vis absorbance & structural elucidation", icon: Microscope },
                    { step: "03", name: "In Vitro Assays", detail: "Tyrosinase enzyme kinetics & IC50 determination", icon: ShieldCheck },
                    { step: "04", name: "In Silico Docking", detail: "AutoDock simulations in CuA/CuB catalytic site", icon: Cpu },
                  ].map((m) => {
                    const IconComp = m.icon;
                    return (
                      <div key={m.step} className="bg-white p-4 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between text-xs text-emerald-700 font-bold mb-1">
                          <span>STAGE {m.step}</span>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h5 className="font-serif font-bold text-navy-800 text-sm mb-1">{m.name}</h5>
                        <p className="text-xs text-slate-600 leading-snug">{m.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Outcomes & Deliverables */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-800">
                  Verified Research Outcomes
                </h4>
                <ul className="space-y-2">
                  {hecProject.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                      <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-navy-800 border-l-4 border-navy-800 pl-3">
            Doctoral & Master's Thesis Portfolio
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {RESEARCH_PROJECTS.filter(p => p.id !== 'hec-nrpu-2021').map((proj) => (
              <div key={proj.id} className="bg-[#FAFAFA] rounded-xl p-6 border border-slate-200/90 hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-navy-800 text-white">{proj.role}</span>
                  <span className="text-slate-500 font-medium">{proj.duration}</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-navy-800 mb-2 leading-snug">{proj.title}</h4>
                <p className="text-xs text-emerald-700 font-medium mb-3">{proj.fundingAgency}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                  {proj.technologies.map(tech => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-white text-slate-700 text-[11px] border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
