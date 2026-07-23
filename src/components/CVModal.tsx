import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, RESEARCH_PROJECTS, TEACHING_EXPERIENCE, AWARDS_DATA, SEMINARS_DATA } from '../data/cvData';
import { Download, Printer, X, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto no-print">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-200">
        
        {/* Top Control Bar */}
        <div className="bg-navy-800 text-white p-4 px-6 flex items-center justify-between shrink-0 no-print border-b border-navy-700">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <h3 className="font-serif font-bold text-lg text-white">Curriculum Vitae Preview — Miss Zobia Noreen</h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-700 hover:bg-navy-600 text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>

            <a
              href="/docs/CV_Zobia_Noreen.pdf"
              download="Zobia_Noreen_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-navy-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Europass / Ivy-League Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-800 font-sans print-only">
          
          {/* CV Document Header */}
          <div className="border-b-2 border-navy-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-navy-800 uppercase tracking-tight">
                Zobia Noreen
              </h1>
              <p className="text-base font-semibold text-emerald-700 mt-1">
                PhD Chemistry Scholar • Researcher • Lecturer
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Government College Women University Sialkot, Pakistan
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-600 sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-emerald-600 pl-3 sm:pl-0 sm:pr-3">
              <p className="font-semibold text-slate-800">Nationality: {PERSONAL_INFO.nationality}</p>
              <p>Email: {PERSONAL_INFO.email}</p>
              <p>Phone/WhatsApp: {PERSONAL_INFO.phone}</p>
              <p>Location: Sialkot 52356, Pakistan</p>
            </div>
          </div>

          {/* Personal Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-800 border-b border-slate-200 pb-1">
              Personal Profile
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-xs text-slate-700 leading-relaxed font-medium">
              <li>Innovative Researcher with proven ability to adopt an analytical approach to solving complex problems.</li>
              <li>A responsible and experienced professional with an extensive background in teaching and research.</li>
              <li>Sense of responsibility and ability to work independently to meet agreed research targets.</li>
            </ol>
          </div>

          {/* Education & Qualifications */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-800 border-b border-slate-200 pb-1">
              Education
            </h2>
            
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.degree} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-navy-800">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span>[{edu.period}]</span>
                  </div>
                  <p className="font-semibold text-emerald-700">{edu.grade}</p>
                  {edu.synopsis && (
                    <p className="text-slate-600 italic">
                      <strong>Synopsis / Thesis Title:</strong> "{edu.synopsis}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience & Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-800 border-b border-slate-200 pb-1">
              Research & Funded Project Experience
            </h2>

            {RESEARCH_PROJECTS.map((proj) => (
              <div key={proj.id} className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-navy-800">
                  <span>{proj.title}</span>
                  <span>[{proj.duration}]</span>
                </div>
                <p className="text-emerald-700 font-semibold">{proj.role} — {proj.fundingAgency}</p>
                {proj.supervisor && <p className="text-slate-600">Supervisor: {proj.supervisor}</p>}
                {proj.projectNumber && <p className="text-slate-500 font-mono">Project Number: {proj.projectNumber}</p>}
                <p className="text-slate-600 leading-relaxed pt-1">{proj.description}</p>
              </div>
            ))}
          </div>

          {/* Teaching Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-800 border-b border-slate-200 pb-1">
              Teaching Experience
            </h2>

            {TEACHING_EXPERIENCE.map((exp) => (
              <div key={exp.role + exp.period} className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-navy-800">
                  <span>{exp.role}</span>
                  <span>[{exp.period}]</span>
                </div>
                <p className="text-emerald-700 font-semibold">{exp.institution}</p>
                <p className="text-slate-600">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Seminars & Workshops */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-800 border-b border-slate-200 pb-1">
              Conferences and Seminars
            </h2>
            <p className="text-xs text-slate-600 mb-2">
              Attended academic seminars at Department of Chemistry, GC Women University Sialkot on topics:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              {SEMINARS_DATA.map((s) => (
                <li key={s.title}>"{s.title}"</li>
              ))}
            </ul>
          </div>

          {/* Honours and Awards */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-800 border-b border-slate-200 pb-1">
              Honours and Awards
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 font-medium">
              {AWARDS_DATA.map((a) => (
                <li key={a.title}>
                  <strong>{a.title}</strong> — {a.issuer} {a.year ? `(${a.year})` : ''}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendation / Referee */}
          <div className="space-y-2 pt-4 border-t border-slate-200">
            <h2 className="text-sm font-bold uppercase tracking-wider text-navy-800">
              Recommendation / Referee
            </h2>
            <div className="text-xs text-slate-700">
              <p className="font-bold text-navy-800">{PERSONAL_INFO.referee.name}</p>
              <p>{PERSONAL_INFO.referee.designation} at GC Women University, Sialkot</p>
              <p className="text-emerald-700 font-mono font-semibold">Email: {PERSONAL_INFO.referee.email}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
