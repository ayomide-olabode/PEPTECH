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
    <div className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0c1e3d] to-[#0f2847]">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#FFC527]/20 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFC527]/15 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0c1e3d]/60 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '14s', animationDelay: '6s' }} />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        {/* Hexagon pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFC527' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, #FFC527 50px, #FFC527 52px)`
        }} />
      </div>

      {/* Particle Effect Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFC527] rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 border-4 border-[#FFC527]/10 rounded-full animate-spin-slow" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 border-4 border-[#FFC527]/15 rounded-full animate-spin-reverse" />
        
        {/* Triangle */}
        <div className="absolute top-1/4 left-10 w-48 h-48 opacity-5 animate-float">
          <div className="w-0 h-0 border-l-[96px] border-l-transparent border-r-[96px] border-r-transparent border-b-[166px] border-b-[#FFC527]" />
        </div>
        
        {/* Small squares */}
        <div className="absolute top-1/3 right-20 w-16 h-16 border-4 border-[#FFC527]/20 rotate-45 animate-pulse" 
             style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 left-32 w-20 h-20 border-4 border-[#FFC527]/15 animate-spin-slow" />
        
        {/* Circles */}
        <div className="absolute top-2/3 right-1/4 w-12 h-12 bg-[#FFC527]/10 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-20 right-1/3 w-8 h-8 border-2 border-[#FFC527]/20 rounded-full" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#FFC527 1px, transparent 1px), linear-gradient(90deg, #FFC527 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFC527]/90 to-[#ffb700]/90 backdrop-blur-xl rounded-full mb-8 shadow-2xl border-2 border-[#FFC527]/50 transform hover:scale-105 transition-transform duration-300">
            <HiBookOpen className="w-6 h-6 text-[#0c1e3d]" />
            <span className="text-sm font-black text-[#0c1e3d] tracking-widest uppercase">Featured Research</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFC527] to-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
            Groundbreaking Publications
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Explore cutting-edge research from our world-class faculty and doctoral researchers
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative h-[750px] lg:h-[650px] mb-16">
          {/* Main Active Card */}
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-5xl transform transition-all duration-700 ease-out">
              {/* Card Stack Effect - Background Cards */}
              <div className="absolute inset-0 -z-10 transform translate-y-4 translate-x-4 bg-gradient-to-br from-[#FFC527]/20 to-[#0c1e3d]/20 rounded-3xl blur-sm" />
              <div className="absolute inset-0 -z-20 transform translate-y-8 translate-x-8 bg-gradient-to-br from-[#FFC527]/10 to-[#0c1e3d]/10 rounded-3xl blur-md" />

              {/* Main Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border-2 border-[#FFC527]/30 hover:border-[#FFC527]/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,197,39,0.3)]">
                <div className="grid lg:grid-cols-5">
                  {/* Left Column - Featured Content */}
                  <div className="lg:col-span-3 bg-gradient-to-br from-[#0c1e3d] via-[#1a2f4d] to-[#0c1e3d] p-8 lg:p-12 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC527]/10 rounded-full blur-3xl animate-pulse" 
                         style={{ animationDuration: '8s' }} />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" 
                         style={{ animationDuration: '10s', animationDelay: '2s' }} />
                    
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, transparent 20%, rgba(255,197,39,0.1) 21%, rgba(255,197,39,0.1) 30%, transparent 31%)`,
                      backgroundSize: '50px 50px'
                    }} />
                    
                    <div className="relative space-y-6">
                      {/* Category & Meta */}
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="px-5 py-2.5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                          <span className="text-xs font-black text-[#0c1e3d] uppercase tracking-widest">
                            {currentPub.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 text-[#FFC527] text-sm">
                          <BiCalendar className="w-4 h-4" />
                          <span className="font-bold">{currentPub.year}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 text-[#FFC527] text-sm">
                          <HiBookOpen className="w-4 h-4" />
                          <span className="font-bold">{currentPub.readTime} read</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="space-y-3">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
                          {currentPub.title}
                        </h3>
                        <p className="text-xl lg:text-2xl text-[#FFC527] font-bold drop-shadow-lg">
                          {currentPub.subtitle}
                        </p>
                      </div>

                      {/* Authors */}
                      <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                        <FaUserFriends className="w-6 h-6 text-[#FFC527] mt-0.5 flex-shrink-0" />
                        <p className="text-sm lg:text-base text-gray-200 font-semibold leading-relaxed">
                          {currentPub.authors}
                        </p>
                      </div>

                      {/* Journal & Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/30 shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-[#FFC527]/50">
                          <div className="text-3xl font-black text-[#FFC527] drop-shadow-lg">{currentPub.impact}</div>
                          <div className="text-xs text-gray-300 font-bold uppercase mt-2 tracking-wider">Impact Factor</div>
                        </div>
                        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/30 shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-[#FFC527]/50">
                          <div className="text-3xl font-black text-[#FFC527] drop-shadow-lg">{currentPub.citations}</div>
                          <div className="text-xs text-gray-300 font-bold uppercase mt-2 tracking-wider">Citations</div>
                        </div>
                        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/30 shadow-xl col-span-2 sm:col-span-1 transform hover:scale-105 transition-all duration-300 hover:border-[#FFC527]/50">
                          <FaStar className="w-7 h-7 text-[#FFC527] mb-2 animate-pulse" />
                          <div className="text-xs text-gray-300 font-bold uppercase tracking-wider">High Impact</div>
                        </div>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex items-center gap-3 pt-6">
                        {publications.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-500 transform hover:scale-110 ${
                              index === currentIndex 
                                ? 'w-16 bg-gradient-to-r from-[#FFC527] to-[#ffb700] shadow-lg shadow-[#FFC527]/50' 
                                : 'w-2.5 bg-white/30 hover:bg-white/60'
                            }`}
                            aria-label={`Go to publication ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details Card */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl p-8 lg:p-10 flex flex-col justify-between">
                    {/* Published In */}
                    <div className="space-y-6">
                      <div className="pb-5 border-b-2 border-[#0c1e3d]/20">
                        <div className="text-xs font-black text-[#0c1e3d]/60 uppercase tracking-widest mb-3">
                          Published In
                        </div>
                        <div className="text-xl lg:text-2xl font-black text-[#0c1e3d]">
                          {currentPub.journal}
                        </div>
                      </div>

                      {/* Abstract */}
                      <div className="space-y-4">
                        <div className="text-xs font-black text-[#0c1e3d]/60 uppercase tracking-widest">
                          Abstract
                        </div>
                        <div className="relative pl-8">
                          <FaQuoteLeft className="absolute left-0 top-1 w-6 h-6 text-[#FFC527]/40" />
                          <p className="text-base text-gray-700 leading-relaxed font-medium">
                            {currentPub.abstract}
                          </p>
                        </div>
                      </div>

                      {/* Next Preview */}
                      <div className="p-5 bg-gradient-to-br from-[#0c1e3d]/10 to-[#0c1e3d]/5 rounded-2xl border-2 border-[#FFC527]/30 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="text-xs font-black text-[#0c1e3d]/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span>Up Next</span>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#FFC527]/30 to-transparent" />
                        </div>
                        <div className="text-sm font-black text-[#0c1e3d] line-clamp-2 mb-2">
                          {nextPub.title}
                        </div>
                        <div className="inline-block px-3 py-1 bg-[#FFC527]/20 text-[#0c1e3d] rounded-lg text-xs font-bold">
                          {nextPub.category}
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-4 mt-8">
                      <a
                        href="/research/publications"
                        className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#0c1e3d] to-[#1a2f4d] text-white font-black rounded-2xl hover:from-[#1a2f4d] hover:to-[#0c1e3d] shadow-2xl hover:shadow-[0_0_30px_rgba(255,197,39,0.3)] transition-all duration-500 border-2 border-[#FFC527]/30 transform hover:scale-105"
                      >
                        <span className="text-base">Read Full Paper</span>
                        <HiExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      </a>
                      
                      <a
                        href="/research"
                        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black rounded-2xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                      >
                        <span className="text-base">View All Publications</span>
                        <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_30px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] hover:scale-110 group"
            aria-label="Previous publication"
          >
            <HiChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_30px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] hover:scale-110 group"
            aria-label="Next publication"
          >
            <HiChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="group text-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-3 drop-shadow-lg">500+</div>
            <div className="text-sm font-bold text-gray-300 uppercase tracking-wider">Publications</div>
          </div>
          <div className="group text-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-3 drop-shadow-lg">150+</div>
            <div className="text-sm font-bold text-gray-300 uppercase tracking-wider">Researchers</div>
          </div>
          <div className="group text-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-3 drop-shadow-lg">25+</div>
            <div className="text-sm font-bold text-gray-300 uppercase tracking-wider">Research Areas</div>
          </div>
          <div className="group text-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl shadow-xl border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC527]/20">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFC527] mb-3 drop-shadow-lg">100K+</div>
            <div className="text-sm font-bold text-gray-300 uppercase tracking-wider">Citations</div>
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturedPub;