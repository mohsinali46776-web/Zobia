import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, User, Award, Microscope, GraduationCap, LayoutDashboard, Mail, Eye, Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

interface NavbarProps {
  onOpenCVModal: () => void;
  onOpenDashboard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal, onOpenDashboard }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Interests', href: '#interests', icon: Microscope },
    { name: 'Timeline', href: '#timeline', icon: GraduationCap },
    { name: 'Research', href: '#research', icon: BookOpen },
    { name: 'Publications', href: '#publications', icon: FileText },
    { name: 'Skills', href: '#skills', icon: Microscope },
    { name: 'Teaching', href: '#teaching', icon: GraduationCap },
    { name: 'Awards', href: '#awards', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Institution & Faculty Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-navy-800 text-gold-400 flex items-center justify-center font-serif text-lg font-bold shadow-md border border-gold-500/30 group-hover:scale-105 transition-transform">
              ZN
            </div>
            <div>
              <span className="block font-serif font-bold text-navy-800 text-lg sm:text-xl leading-tight group-hover:text-emerald-600 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-xs font-medium text-slate-500">
                PhD Chemistry Scholar • GCWUS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-xs font-medium text-slate-700 hover:text-navy-800 hover:bg-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Preview CV, Download CV, CMS Dashboard */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview CV</span>
            </button>

            <a
              href="/docs/CV_Zobia_Noreen.pdf"
              download="Zobia_Noreen_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-navy-800 text-white hover:bg-navy-700 shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-gold-400" />
              <span>Get CV</span>
            </a>

            <button
              onClick={onOpenDashboard}
              title="Future CMS Admin Dashboard"
              className="p-1.5 rounded-lg text-slate-500 hover:text-navy-800 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
            >
              <LayoutDashboard className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenCVModal}
              className="p-2 rounded-md text-emerald-700 bg-emerald-50 text-xs font-medium border border-emerald-200"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-navy-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full py-2 px-4 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-semibold text-center border border-emerald-200"
            >
              Preview Interactive CV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDashboard();
              }}
              className="w-full py-2 px-4 rounded-lg bg-slate-100 text-navy-800 text-sm font-semibold text-center border border-slate-200 flex items-center justify-center space-x-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Admin Dashboard (CMS)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
