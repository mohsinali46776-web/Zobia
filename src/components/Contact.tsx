import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { Mail, Phone, MapPin, Send, CheckCircle2, UserCheck, BookOpen, ExternalLink, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic Inquiry / Collaboration',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Academic Inquiry / Collaboration', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Professional Correspondence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Academic Contact & Referee Details
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out for research collaborations, academic inquiries, guest lecturing opportunities, or doctoral thesis correspondence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Referee Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <h3 className="text-lg font-serif font-bold text-navy-800 border-b border-slate-200 pb-3">
                Official Departmental Contact
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start space-x-3 text-slate-700 hover:text-emerald-700 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-slate-400">Institutional Email</span>
                    <span className="font-semibold text-navy-800 group-hover:underline">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start space-x-3 text-slate-700 hover:text-emerald-700 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-slate-400">Phone / WhatsApp</span>
                    <span className="font-semibold text-navy-800 group-hover:underline">{PERSONAL_INFO.phone}</span>
                  </div>
                </a>

                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-slate-400">Department Address</span>
                    <span className="font-semibold text-navy-800">
                      Department of Chemistry, GC Women University Sialkot (GCWUS), Sialkot 52356, Punjab, Pakistan
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Academic Referee Card */}
            <div className="bg-navy-800 text-white rounded-2xl p-6 sm:p-8 border border-navy-700 shadow-md space-y-4">
              <div className="flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Academic Referee / Supervisor</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-white">{PERSONAL_INFO.referee.name}</h4>
              <p className="text-xs text-slate-300 font-medium">{PERSONAL_INFO.referee.designation}</p>
              <p className="text-xs text-slate-400">{PERSONAL_INFO.referee.institution}</p>
              <div className="pt-3 border-t border-navy-700/80 text-xs">
                <span className="text-slate-400 block mb-0.5">Referee Email:</span>
                <a
                  href={`mailto:${PERSONAL_INFO.referee.email}`}
                  className="font-mono text-emerald-400 hover:underline font-semibold"
                >
                  {PERSONAL_INFO.referee.email}
                </a>
              </div>
            </div>

            {/* Google Map Embedding */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 shadow-2xs">
              <iframe
                title="GC Women University Sialkot Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.102377310574!2d74.5298!3d32.4972!2m3!10f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eea23f2f81ed3%3A0x8673a5a73e4dbd1!2sGovernment%20College%20Women%20University%20Sialkot!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="lg:col-span-7 bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Inquiry Portal</span>
              <h3 className="text-2xl font-serif font-bold text-navy-800 mt-1">Send an Academic Message</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in the form below to initiate correspondence regarding research, guest lectures, or academic collaboration.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-emerald-900">Message Delivered</h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Thank you for reaching out. Miss Zobia Noreen will review your academic message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 block">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alexander Wright"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-navy-800 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 block">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alexander@university.edu"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-navy-800 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Subject / Purpose *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-navy-800 bg-white text-xs sm:text-sm"
                  >
                    <option>Academic Inquiry / Collaboration</option>
                    <option>Research Paper / Pre-print Request</option>
                    <option>Guest Lecture / Seminar Invitation</option>
                    <option>PhD / Postdoctoral Opportunity</option>
                    <option>Student Mentorship Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your detailed correspondence message here..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-navy-800 bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-navy-800 text-white font-semibold hover:bg-navy-700 shadow-md transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Send Professional Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
