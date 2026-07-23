import React, { useState } from 'react';
import { PUBLICATIONS_DATA, PERSONAL_INFO } from '../data/cvData';
import { FileText, ExternalLink, Search, Filter, BookOpen, Share2, Award, CheckCircle2 } from 'lucide-react';

export const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tabs = ['All', 'Submitted', 'Accepted', 'Conference', 'Journal', 'Book Chapter'];

  const filteredPublications = PUBLICATIONS_DATA.filter((pub) => {
    const matchesTab = activeTab === 'All' || pub.type === activeTab;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journalOrVenue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="publications" className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-navy-800 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-navy-50 border border-navy-100">
            Scholarly Outputs & Manuscripts
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Publications & Future Repository
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Prepared for ongoing and incoming peer-reviewed journal papers, conference proceedings, and book chapters in synthetic heterocyclic chemistry and enzyme kinetic studies.
          </p>
        </div>

        {/* Academic Profile Badge Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href={PERSONAL_INFO.googleScholar}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:border-navy-700 hover:text-navy-800 shadow-2xs transition-colors"
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Google Scholar Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href={PERSONAL_INFO.orcid}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:border-emerald-600 hover:text-emerald-700 shadow-2xs transition-colors"
          >
            <Award className="w-4 h-4 text-emerald-600" />
            <span>ORCID ID Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href={PERSONAL_INFO.researchGate}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:border-navy-800 hover:text-navy-800 shadow-2xs transition-colors"
          >
            <Share2 className="w-4 h-4 text-gold-600" />
            <span>ResearchGate Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Search & Tab Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === tab
                    ? 'bg-navy-800 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 bg-slate-50/50"
            />
          </div>

        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs hover:border-emerald-500/50 hover:shadow-xs transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                    pub.type === 'Submitted'
                      ? 'bg-gold-50 text-gold-700 border border-gold-200'
                      : pub.type === 'Accepted'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-navy-50 text-navy-800 border border-navy-100'
                  }`}>
                    {pub.type} Manuscript
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">{pub.year}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-navy-800 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  <strong>Authors:</strong> {pub.authors.join(', ')}
                </p>

                <p className="text-xs sm:text-sm italic text-emerald-700 font-medium">
                  {pub.journalOrVenue}
                </p>

                {pub.abstract && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    <strong className="text-slate-700 block mb-0.5">Abstract:</strong>
                    {pub.abstract}
                  </p>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white p-12 rounded-xl border border-slate-200 text-center space-y-2">
              <FileText className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm text-slate-600 font-medium">No publications found matching your filter criteria.</p>
              <button
                onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
                className="text-xs text-emerald-600 font-semibold hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
