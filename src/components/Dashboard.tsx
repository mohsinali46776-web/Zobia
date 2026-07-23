import React, { useState } from 'react';
import { LayoutDashboard, Plus, FileText, BookOpen, Award, Image as ImageIcon, Users, X, Save, ShieldCheck, Lock } from 'lucide-react';
import { PUBLICATIONS_DATA, RESEARCH_PROJECTS, TEACHING_EXPERIENCE, AWARDS_DATA, GALLERY_DATA } from '../data/cvData';

interface DashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'Publications' | 'Projects' | 'Teaching' | 'Awards' | 'Gallery'>('Publications');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#FAFAFA] rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-300">
        
        {/* Admin Header */}
        <div className="bg-navy-900 text-white p-4 px-6 flex items-center justify-between shrink-0 border-b border-navy-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white">Faculty CMS Portal — Private Admin Panel</h3>
              <p className="text-[11px] text-slate-300">Manage Research, Publications, Teaching & Gallery without writing code</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold">
              <Lock className="w-3 h-3" />
              <span>Authenticated</span>
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CMS Body */}
        <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
          
          {/* Admin Sidebar Navigation */}
          <div className="w-full sm:w-60 bg-white border-r border-slate-200 p-4 space-y-1 shrink-0">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
              Content Managers
            </div>
            {[
              { id: 'Publications', icon: FileText, count: PUBLICATIONS_DATA.length },
              { id: 'Projects', icon: BookOpen, count: RESEARCH_PROJECTS.length },
              { id: 'Teaching', icon: Users, count: TEACHING_EXPERIENCE.length },
              { id: 'Awards', icon: Award, count: AWARDS_DATA.length },
              { id: 'Gallery', icon: ImageIcon, count: GALLERY_DATA.length },
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === item.id
                      ? 'bg-navy-800 text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComp className="w-4 h-4" />
                    <span>{item.id}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] ${
                    activeTab === item.id ? 'bg-navy-700 text-gold-400' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Admin Main Content Panel */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            
            {savedSuccess && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3 rounded-lg text-xs font-semibold flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Content updated successfully! Changes reflected across faculty site.</span>
              </div>
            )}

            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h4 className="text-lg font-serif font-bold text-navy-800">Manage {activeTab}</h4>
                <p className="text-xs text-slate-500">Add, edit, or remove entries instantly.</p>
              </div>

              <button
                onClick={handleSave}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New {activeTab.slice(0, -1)}</span>
              </button>
            </div>

            {/* Content List Table Preview */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
              {activeTab === 'Publications' && (
                <div className="divide-y divide-slate-100 text-xs">
                  {PUBLICATIONS_DATA.map((pub) => (
                    <div key={pub.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                      <div className="space-y-1 max-w-xl">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                          {pub.type}
                        </span>
                        <h5 className="font-serif font-bold text-navy-800 text-sm">{pub.title}</h5>
                        <p className="text-slate-500">{pub.journalOrVenue}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={handleSave} className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Projects' && (
                <div className="divide-y divide-slate-100 text-xs">
                  {RESEARCH_PROJECTS.map((proj) => (
                    <div key={proj.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                      <div className="space-y-1 max-w-xl">
                        <span className="px-2 py-0.5 rounded bg-navy-100 text-navy-800 font-bold text-[10px]">
                          {proj.status}
                        </span>
                        <h5 className="font-serif font-bold text-navy-800 text-sm">{proj.title}</h5>
                        <p className="text-slate-500">{proj.fundingAgency}</p>
                      </div>
                      <button onClick={handleSave} className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold">
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Teaching' && (
                <div className="divide-y divide-slate-100 text-xs">
                  {TEACHING_EXPERIENCE.map((exp) => (
                    <div key={exp.role + exp.period} className="p-4 flex items-center justify-between hover:bg-slate-50">
                      <div className="space-y-1">
                        <h5 className="font-serif font-bold text-navy-800 text-sm">{exp.role}</h5>
                        <p className="text-slate-500">{exp.institution}</p>
                      </div>
                      <button onClick={handleSave} className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold">
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Awards' && (
                <div className="divide-y divide-slate-100 text-xs">
                  {AWARDS_DATA.map((award) => (
                    <div key={award.title} className="p-4 flex items-center justify-between hover:bg-slate-50">
                      <div className="space-y-1">
                        <h5 className="font-serif font-bold text-navy-800 text-sm">{award.title}</h5>
                        <p className="text-slate-500">{award.issuer}</p>
                      </div>
                      <button onClick={handleSave} className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold">
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Gallery' && (
                <div className="divide-y divide-slate-100 text-xs">
                  {GALLERY_DATA.map((item) => (
                    <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                      <div className="flex items-center space-x-3">
                        <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded object-cover border" />
                        <div>
                          <h5 className="font-serif font-bold text-navy-800 text-sm">{item.title}</h5>
                          <p className="text-slate-500">{item.category}</p>
                        </div>
                      </div>
                      <button onClick={handleSave} className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold">
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
