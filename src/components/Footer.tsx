import React from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { BookOpen, Award, Share2, GraduationCap, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Brand & Institution Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-navy-800 text-gold-400 flex items-center justify-center font-serif text-lg font-bold border border-gold-500/40">
                ZN
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Miss Zobia Noreen</h3>
                <p className="text-xs text-slate-400">PhD Chemistry Scholar • GCWUS Pakistan</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md font-sans">
              Dedicated to synthetic organic chemistry, heterocyclic chalcone derivatives, and computational drug discovery for target enzyme inhibition.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Department of Chemistry, Government College Women University Sialkot</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>noreenzobia102@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-400 uppercase tracking-wider">
              Faculty Sections
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Biography & Overview</a></li>
              <li><a href="#interests" className="hover:text-emerald-400 transition-colors">Research Domains</a></li>
              <li><a href="#timeline" className="hover:text-emerald-400 transition-colors">Academic Timeline</a></li>
              <li><a href="#research" className="hover:text-emerald-400 transition-colors">HEC Project & Research</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Publications Hub</a></li>
              <li><a href="#teaching" className="hover:text-emerald-400 transition-colors">Teaching Portfolio</a></li>
            </ul>
          </div>

          {/* Academic Profiles & Profiles */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-400 uppercase tracking-wider">
              Research Identifiers
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={PERSONAL_INFO.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-navy-900 border border-navy-800 hover:border-emerald-500/50 text-slate-200 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Google Scholar Profile</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Scholar ID</span>
              </a>

              <a
                href={PERSONAL_INFO.orcid}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-navy-900 border border-navy-800 hover:border-emerald-500/50 text-slate-200 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>ORCID Registry</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">ORCID ID</span>
              </a>

              <a
                href={PERSONAL_INFO.researchGate}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-navy-900 border border-navy-800 hover:border-emerald-500/50 text-slate-200 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Share2 className="w-4 h-4 text-gold-400" />
                  <span>ResearchGate Profile</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">ResearchGate</span>
              </a>
            </div>
          </div>

        </div>

        {/* Institutional Copyright & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Miss Zobia Noreen. All Rights Reserved. GC Women University Sialkot.</p>
          <div className="flex items-center space-x-2 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Stanford & MIT Faculty Profile Design Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
