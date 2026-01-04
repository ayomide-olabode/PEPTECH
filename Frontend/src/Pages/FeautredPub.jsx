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
    <div className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0c1e3d] to-[#0f2847]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#FFC527]/20 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFC527]/15 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '3s' }} />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFC527' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#FFC527 1px, transparent 1px), linear-gradient(90deg, #FFC527 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FFC527]/90 to-[#ffb700]/90 backdrop-blur-xl rounded-full mb-5 sm:mb-8 shadow-2xl border-2 border-[#FFC527]/50 transform hover:scale-105 transition-transform duration-300">
            <HiBookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-[#0c1e3d]" />
            <span className="text-xs sm:text-sm font-black text-[#0c1e3d] tracking-widest uppercase">Featured Research</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFC527] to-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-2xl px-2">
            Groundbreaking Publications
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Explore cutting-edge research from our world-class faculty and doctoral researchers
          </p>
        </div>

        {/* Cards Container - Relative positioning for mobile */}
        <div className="relative mb-10 sm:mb-12 lg:mb-16">
          {/* Card Stack Effect - Hidden on mobile */}
          <div className="hidden lg:block absolute inset-0 -z-10 transform translate-y-4 translate-x-4 bg-gradient-to-br from-[#FFC527]/20 to-[#0c1e3d]/20 rounded-3xl blur-sm" />
          <div className="hidden lg:block absolute inset-0 -z-20 transform translate-y-8 translate-x-8 bg-gradient-to-br from-[#FFC527]/10 to-[#0c1e3d]/10 rounded-3xl blur-md" />

          {/* Main Card - Vertical on mobile, grid on desktop */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-[#FFC527]/30 hover:border-[#FFC527]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,197,39,0.3)]">
            <div className="flex flex-col lg:grid lg:grid-cols-5">
              {/* Left/Top Column - Featured Content */}
              <div className="lg:col-span-3 bg-gradient-to-br from-[#0c1e3d] via-[#1a2f4d] to-[#0c1e3d] p-5 sm:p-8 lg:p-12 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#FFC527]/10 rounded-full blur-3xl animate-pulse" 
                     style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-2xl animate-pulse" 
                     style={{ animationDuration: '10s', animationDelay: '2s' }} />
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, transparent 20%, rgba(255,197,39,0.1) 21%, rgba(255,197,39,0.1) 30%, transparent 31%)`,
                  backgroundSize: '50px 50px'
                }} />
                
                <div className="relative space-y-4 sm:space-y-6">
                  {/* Category & Meta */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] rounded-lg sm:rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] sm:text-xs font-black text-[#0c1e3d] uppercase tracking-widest">
                        {currentPub.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-xl rounded-md sm:rounded-lg border border-white/20 text-[#FFC527] text-xs sm:text-sm">
                      <BiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-bold">{currentPub.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-xl rounded-md sm:rounded-lg border border-white/20 text-[#FFC527] text-xs sm:text-sm">
                      <HiBookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-bold">{currentPub.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
                      {currentPub.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FFC527] font-bold drop-shadow-lg">
                      {currentPub.subtitle}
                    </p>
                  </div>

                  {/* Authors */}
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-5 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/30 shadow-xl">
                    <FaUserFriends className="w-4 h-4 sm:w-6 sm:h-6 text-[#FFC527] mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-semibold leading-relaxed">
                      {currentPub.authors}
                    </p>
                  </div>

                  {/* Journal & Stats - 3 columns on mobile */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/30 shadow-xl transform hover:scale-105 transition-all duration-300">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#FFC527] drop-shadow-lg">{currentPub.impact}</div>
                      <div className="text-[9px] sm:text-xs text-gray-300 font-bold uppercase mt-1 sm:mt-2 tracking-wider leading-tight">Impact</div>
                    </div>
                    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/30 shadow-xl transform hover:scale-105 transition-all duration-300">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#FFC527] drop-shadow-lg">{currentPub.citations}</div>
                      <div className="text-[9px] sm:text-xs text-gray-300 font-bold uppercase mt-1 sm:mt-2 tracking-wider leading-tight">Citations</div>
                    </div>
                    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/30 shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
                      <FaStar className="w-5 h-5 sm:w-7 sm:h-7 text-[#FFC527] mb-1 animate-pulse" />
                      <div className="text-[9px] sm:text-xs text-gray-300 font-bold uppercase tracking-wider leading-tight text-center">High Impact</div>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 pt-4 sm:pt-6">
                    {publications.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                          index === currentIndex 
                            ? 'w-12 sm:w-16 bg-gradient-to-r from-[#FFC527] to-[#ffb700] shadow-lg shadow-[#FFC527]/50' 
                            : 'w-2 sm:w-2.5 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Go to publication ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right/Bottom Column - Details Card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl p-5 sm:p-8 lg:p-10">
                <div className="space-y-4 sm:space-y-6">
                  {/* Published In */}
                  <div className="pb-4 sm:pb-5 border-b-2 border-[#0c1e3d]/20">
                    <div className="text-[10px] sm:text-xs font-black text-[#0c1e3d]/60 uppercase tracking-widest mb-2 sm:mb-3">
                      Published In
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#0c1e3d]">
                      {currentPub.journal}
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-[10px] sm:text-xs font-black text-[#0c1e3d]/60 uppercase tracking-widest">
                      Abstract
                    </div>
                    <div className="relative pl-6 sm:pl-8">
                      <FaQuoteLeft className="absolute left-0 top-1 w-4 h-4 sm:w-6 sm:h-6 text-[#FFC527]/40" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                        {currentPub.abstract}
                      </p>
                    </div>
                  </div>

                  {/* Next Preview */}
                  <div className="p-4 sm:p-5 bg-gradient-to-br from-[#0c1e3d]/10 to-[#0c1e3d]/5 rounded-xl sm:rounded-2xl border-2 border-[#FFC527]/30 shadow-lg">
                    <div className="text-[10px] sm:text-xs font-black text-[#0c1e3d]/70 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
                      <span>Up Next</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#FFC527]/30 to-transparent" />
                    </div>
                    <div className="text-xs sm:text-sm font-black text-[#0c1e3d] line-clamp-2 mb-2">
                      {nextPub.title}
                    </div>
                    <div className="inline-block px-2 sm:px-3 py-1 bg-[#FFC527]/20 text-[#0c1e3d] rounded-lg text-[10px] sm:text-xs font-bold">
                      {nextPub.category}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3 sm:space-y-4 pt-2">
                    <a
                      href="/research/publications"
                      className="group flex items-center justify-center gap-2 sm:gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#0c1e3d] to-[#1a2f4d] text-white font-black text-sm sm:text-base rounded-xl sm:rounded-2xl hover:from-[#1a2f4d] hover:to-[#0c1e3d] shadow-2xl hover:shadow-[0_0_30px_rgba(255,197,39,0.3)] transition-all duration-500 border-2 border-[#FFC527]/30 transform hover:scale-105"
                    >
                      <span>Read Full Paper</span>
                      <HiExternalLink className="w-4 h-4 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                    
                    <a
                      href="/research"
                      className="flex items-center justify-center gap-2 sm:gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black text-sm sm:text-base rounded-xl sm:rounded-2xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    >
                      <span>View All Publications</span>
                      <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Smaller on mobile, positioned better */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_30px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] hover:scale-110 group"
            aria-label="Previous publication"
          >
            <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:-translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_30px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] hover:scale-110 group"
            aria-label="Next publication"
          >
            <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Stats Section - 2x2 Grid on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="group text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-2 sm:mb-3 drop-shadow-lg">500+</div>
            <div className="text-[10px] sm:text-sm font-bold text-gray-300 uppercase tracking-wider leading-tight">Publications</div>
          </div>
          <div className="group text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-2 sm:mb-3 drop-shadow-lg">150+</div>
            <div className="text-[10px] sm:text-sm font-bold text-gray-300 uppercase tracking-wider leading-tight">Researchers</div>
          </div>
          <div className="group text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-2 sm:mb-3 drop-shadow-lg">25+</div>
            <div className="text-[10px] sm:text-sm font-bold text-gray-300 uppercase tracking-wider leading-tight">Research Areas</div>
          </div>
          <div className="group text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-2 sm:mb-3 drop-shadow-lg">100K+</div>
            <div className="text-[10px] sm:text-sm font-bold text-gray-300 uppercase tracking-wider leading-tight">Citations</div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
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