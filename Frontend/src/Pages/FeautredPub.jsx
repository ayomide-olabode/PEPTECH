import React, { useState, useEffect } from 'react';
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiBookOpen, HiExternalLink } from 'react-icons/hi';
import { FaQuoteLeft, FaUserFriends, FaStar } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';

const FeaturedPub = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const publications = [
    {
      id: 1,
      title: 'Quantum Entanglement in Nanoscale Systems',
      subtitle: 'A Comprehensive Analysis',
      authors: 'Dr. A. Okonkwo, Prof. B. Adeyemi, Dr. C. Nwankwo',
      journal: 'Nature Physics',
      year: '2024',
      impact: '19.6',
      abstract: 'This groundbreaking research explores quantum entanglement phenomena in nanoscale semiconductor systems, offering new insights into quantum computing applications and fundamental physics.',
      citations: '127',
      category: 'Quantum Physics',
      readTime: '12 min',
    },
    {
      id: 2,
      title: 'Advanced Materials for Renewable Energy',
      subtitle: 'Tropical Climate Applications',
      authors: 'Prof. E. Oladipo, Dr. F. Ibrahim, Dr. G. Chukwuma',
      journal: 'Energy & Environmental Science',
      year: '2024',
      impact: '32.4',
      abstract: 'A novel approach to developing sustainable energy materials optimized for high-temperature and high-humidity environments, with significant implications for renewable energy deployment in Africa.',
      citations: '89',
      category: 'Applied Physics',
      readTime: '15 min',
    },
    {
      id: 3,
      title: 'Machine Learning in Astrophysical Modeling',
      subtitle: 'Binary Star Systems Prediction',
      authors: 'Dr. H. Musa, Prof. I. Olayinka, Dr. J. Eze',
      journal: 'The Astrophysical Journal',
      year: '2023',
      impact: '5.6',
      abstract: 'Integration of machine learning algorithms with traditional astrophysical modeling techniques to predict binary star system evolution with unprecedented accuracy.',
      citations: '156',
      category: 'Astrophysics',
      readTime: '10 min',
    },
    {
      id: 4,
      title: 'Room Temperature Magnetoresistance',
      subtitle: 'Novel 2D Materials Discovery',
      authors: 'Dr. K. Adebayo, Prof. L. Okafor, Dr. M. Yusuf',
      journal: 'Physical Review Letters',
      year: '2024',
      impact: '8.1',
      abstract: 'Discovery of significant magnetoresistance effects in newly synthesized two-dimensional materials operating at room temperature, opening pathways for next-generation electronic devices.',
      citations: '203',
      category: 'Condensed Matter',
      readTime: '14 min',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % publications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + publications.length) % publications.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentPub = publications[currentIndex];
  const nextPub = publications[(currentIndex + 1) % publications.length];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20 py-16 lg:py-24 relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle */}
        <div className="absolute -top-48 -right-48 w-96 h-96 border-[3px] border-amber-400/20 rounded-full" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-950/5 to-transparent rounded-full blur-3xl" />
        
        {/* Triangle */}
        <div className="absolute top-1/4 left-10 w-32 h-32 opacity-10">
          <div className="w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-b-[110px] border-b-amber-500" />
        </div>
        
        {/* Bottom shapes */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-blue-950/10 rotate-45" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-950 to-blue-900 rounded-full mb-6 shadow-xl border border-amber-400/30">
            <HiBookOpen className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white tracking-wider uppercase">Featured Research</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 mb-4 tracking-tight">
            Groundbreaking Publications
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge research from our world-class faculty and doctoral researchers
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative h-[700px] lg:h-[600px] mb-12">
          {/* Main Active Card */}
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-5xl transform transition-all duration-700 ease-out">
              {/* Card Stack Effect - Background Cards */}
              <div className="absolute inset-0 -z-10 transform translate-y-4 translate-x-4 bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-3xl blur-sm" />
              <div className="absolute inset-0 -z-20 transform translate-y-8 translate-x-8 bg-gradient-to-br from-blue-900/10 to-blue-800/10 rounded-3xl blur-md" />

              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-400/30">
                <div className="grid lg:grid-cols-5">
                  {/* Left Column - Featured Content */}
                  <div className="lg:col-span-3 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 p-8 lg:p-12 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                    
                    <div className="relative space-y-6">
                      {/* Category & Meta */}
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="px-4 py-2 bg-amber-500 rounded-lg shadow-lg">
                          <span className="text-xs font-black text-blue-950 uppercase tracking-wider">
                            {currentPub.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-amber-300 text-sm">
                          <BiCalendar className="w-4 h-4" />
                          <span className="font-semibold">{currentPub.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-amber-300 text-sm">
                          <HiBookOpen className="w-4 h-4" />
                          <span className="font-semibold">{currentPub.readTime} read</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="space-y-2">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                          {currentPub.title}
                        </h3>
                        <p className="text-xl lg:text-2xl text-amber-300 font-medium">
                          {currentPub.subtitle}
                        </p>
                      </div>

                      {/* Authors */}
                      <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                        <FaUserFriends className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm lg:text-base text-gray-200 font-medium leading-relaxed">
                          {currentPub.authors}
                        </p>
                      </div>

                      {/* Journal & Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="text-2xl font-black text-amber-400">{currentPub.impact}</div>
                          <div className="text-xs text-gray-300 font-semibold uppercase mt-1">Impact Factor</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="text-2xl font-black text-amber-400">{currentPub.citations}</div>
                          <div className="text-xs text-gray-300 font-semibold uppercase mt-1">Citations</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 col-span-2 sm:col-span-1">
                          <FaStar className="w-6 h-6 text-amber-400 mb-1" />
                          <div className="text-xs text-gray-300 font-semibold uppercase">High Impact</div>
                        </div>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex items-center gap-2 pt-4">
                        {publications.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentIndex 
                                ? 'w-12 bg-amber-500' 
                                : 'w-2 bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Go to publication ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details Card */}
                  <div className="lg:col-span-2 bg-white p-8 lg:p-10 flex flex-col justify-between">
                    {/* Published In */}
                    <div className="space-y-6">
                      <div className="pb-4 border-b-2 border-blue-950/10">
                        <div className="text-xs font-black text-blue-950/60 uppercase tracking-wider mb-2">
                          Published In
                        </div>
                        <div className="text-xl lg:text-2xl font-black text-blue-950">
                          {currentPub.journal}
                        </div>
                      </div>

                      {/* Abstract */}
                      <div className="space-y-3">
                        <div className="text-xs font-black text-blue-950/60 uppercase tracking-wider">
                          Abstract
                        </div>
                        <div className="relative pl-6">
                          <FaQuoteLeft className="absolute left-0 top-1 w-5 h-5 text-amber-500/30" />
                          <p className="text-base text-gray-700 leading-relaxed">
                            {currentPub.abstract}
                          </p>
                        </div>
                      </div>

                      {/* Next Preview */}
                      <div className="p-4 bg-blue-950/5 rounded-xl border-2 border-blue-950/10">
                        <div className="text-xs font-black text-blue-950/60 uppercase tracking-wider mb-2">
                          Up Next
                        </div>
                        <div className="text-sm font-bold text-blue-950 line-clamp-2">
                          {nextPub.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {nextPub.category}
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3 mt-6">
                      <a
                        href="/research/publications"
                        className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-blue-950 to-blue-900 text-white font-bold rounded-xl hover:from-blue-900 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400/30"
                      >
                        <span>Read Full Paper</span>
                        <HiExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      </a>
                      
                      <a
                        href="/research"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-amber-500 text-blue-950 font-bold rounded-xl hover:bg-amber-400 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <span>View All Publications</span>
                        <HiArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-blue-950 to-blue-900 text-amber-400 rounded-full flex items-center justify-center shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 border-2 border-amber-400/30 hover:scale-110 group"
            aria-label="Previous publication"
          >
            <HiChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-blue-950 to-blue-900 text-amber-400 rounded-full flex items-center justify-center shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 border-2 border-amber-400/30 hover:scale-110 group"
            aria-label="Next publication"
          >
            <HiChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-950/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="text-4xl font-black text-blue-950 mb-2">500+</div>
            <div className="text-sm font-bold text-gray-600 uppercase">Publications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-950/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="text-4xl font-black text-blue-950 mb-2">150+</div>
            <div className="text-sm font-bold text-gray-600 uppercase">Researchers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-950/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="text-4xl font-black text-blue-950 mb-2">25+</div>
            <div className="text-sm font-bold text-gray-600 uppercase">Research Areas</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-950/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="text-4xl font-black text-blue-950 mb-2">100K+</div>
            <div className="text-sm font-bold text-gray-600 uppercase">Citations</div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default FeaturedPub;