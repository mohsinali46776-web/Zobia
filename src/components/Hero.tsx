import React from 'react';
import { Eye, Download, BookOpen, GraduationCap, MapPin, Building, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-[#FAFAFA] border-b border-slate-200/60 overflow-hidden">
      
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#102542_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Academic Credentials & Overview */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Institutional Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-navy-800 text-xs font-semibold tracking-wide">
              <Building className="w-3.5 h-3.5 text-emerald-600" />
              <span>Government College Women University Sialkot</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-800 tracking-tight leading-tight">
                Miss Zobia Noreen
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-600 tracking-wide">
                PhD Chemistry Scholar • Researcher • Chemistry Lecturer
              </p>
            </div>

            {/* Department & Location Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 border-y border-slate-200/80 py-3">
              <span className="flex items-center space-x-1.5">
                <GraduationCap className="w-4 h-4 text-navy-700" />
                <strong className="text-slate-800">Department:</strong> Chemistry
              </span>
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <strong className="text-slate-800">Location:</strong> Sialkot, Pakistan
              </span>
              <span className="flex items-center space-x-1.5 text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded border border-gold-200 font-semibold text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PhD Comprehensive GP: 4.00 / 4.00</span>
              </span>
            </div>

            {/* Synopsis / Research Statement */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Focusing on synthetic organic chemistry, derivative heterocyclic chemistry, and computational drug discovery. Currently investigating novel chalcone-based heterocycles as potent tyrosinase enzyme inhibitors through integrated in vitro assays and in silico molecular docking.
            </p>

            {/* Key Research Focus Tags */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Expertise</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Organic Chemistry",
                  "Medicinal Chemistry",
                  "Chalcone Scaffolds",
                  "Heterocyclic Compounds",
                  "Tyrosinase Inhibitors",
                  "Molecular Docking",
                  "In Vitro Assays"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 text-xs font-medium shadow-2xs hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-navy-800 text-white text-sm font-semibold hover:bg-navy-700 shadow-md hover:shadow-lg transition-all"
              >
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span>View Research</span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 shadow-sm transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Preview CV</span>
              </button>

              <a
                href="/docs/CV_Zobia_Noreen.pdf"
                download="Zobia_Noreen_CV.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white text-slate-700 border border-slate-300 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Stanford/MIT Academic Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-navy-800 via-emerald-600 to-gold-500 opacity-20 blur-md"></div>

              {/* Main Portrait Frame Card */}
              <div className="relative rounded-2xl bg-white p-4 shadow-xl border border-slate-200/80">
                
                {/* Academic Portrait Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Miss Zobia Noreen Academic Portrait"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge over photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/90 backdrop-blur-xs text-xs font-bold uppercase tracking-wider mb-1">
                      Faculty Profile
                    </span>
                    <h3 className="font-serif font-bold text-lg leading-snug">Miss Zobia Noreen</h3>
                    <p className="text-xs text-slate-200">Department of Chemistry, GCWUS</p>
                  </div>
                </div>

                {/* Institutional Credentials Footnote */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs pt-2 border-t border-slate-100">
                  <div className="p-2 bg-slate-50 rounded border border-slate-100">
                    <span className="block text-slate-400 font-medium text-[10px]">CURRENT ROLE</span>
                    <span className="font-bold text-navy-800">PhD Researcher</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded border border-slate-100">
                    <span className="block text-slate-400 font-medium text-[10px]">AFFILIATION</span>
                    <span className="font-bold text-emerald-700">GCWUS Pakistan</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
