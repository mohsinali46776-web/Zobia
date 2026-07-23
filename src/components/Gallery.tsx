import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/cvData';
import { Image as ImageIcon, Filter, Maximize2, X } from 'lucide-react';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Laboratory', 'Experiments', 'Conferences', 'Certificates', 'Research Posters', 'University Events'];

  const filteredGallery = GALLERY_DATA.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Visual Documentation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Research & Campus Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Photographic documentation of chemical synthesis experiments, spectroscopic kinetics, university seminars, and academic certification.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-[#FAFAFA] border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-3"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-navy-800 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-navy-800/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="font-serif font-bold text-navy-800 text-base">{item.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-serif font-bold text-navy-800">{selectedImage.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
