import React, { useState } from 'react';
import { HiArrowRight, HiCalendar, HiClock, HiNewspaper, HiTrendingUp } from 'react-icons/hi';
import { FaArrowRight, FaBullhorn } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';

const NewsHome = () => {
  const [activeTab, setActiveTab] = useState('all');

  const newsItems = [
    {
      id: 1,
      type: 'event',
      title: 'International Physics Symposium 2024',
      excerpt: 'Join us for three days of groundbreaking presentations, workshops, and networking with leading physicists from around the globe.',
      date: 'Dec 15, 2024',
      time: '9:00 AM',
      location: 'OAU Main Auditorium',
      image: 'linear-gradient(135deg, #0c1e3d 0%, #1e3a5f 100%)',
      category: 'Event',
      featured: true
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Research Team Wins National Innovation Award',
      excerpt: 'Our Quantum Physics research team has been recognized for their breakthrough work in room-temperature superconductivity.',
      date: 'Dec 10, 2024',
      author: 'Dr. A. Okonkwo',
      image: 'linear-gradient(135deg, #FFC527 0%, #ffb700 100%)',
      category: 'Achievement',
      featured: true
    },
    {
      id: 3,
      type: 'news',
      title: 'New State-of-the-Art Laboratory Opens',
      excerpt: 'The department inaugurates a ₦500M advanced materials research facility equipped with cutting-edge instrumentation.',
      date: 'Dec 8, 2024',
      image: 'linear-gradient(135deg, #0c1e3d 0%, #FFC527 50%, #0c1e3d 100%)',
      category: 'News',
      featured: false
    },
    {
      id: 4,
      type: 'announcement',
      title: 'PhD Program Applications Now Open',
      excerpt: 'Applications are invited for the 2025/2026 academic session. Apply now for fully-funded research positions.',
      date: 'Dec 5, 2024',
      deadline: 'Jan 31, 2025',
      image: 'linear-gradient(135deg, #1e3a5f 0%, #0c1e3d 100%)',
      category: 'Announcement',
      featured: false
    },
    {
      id: 5,
      type: 'event',
      title: 'Guest Lecture: The Future of Quantum Computing',
      excerpt: 'Prof. James Chen from MIT will deliver a special lecture on quantum algorithm development and applications.',
      date: 'Dec 20, 2024',
      time: '2:00 PM',
      image: 'linear-gradient(135deg, #0c1e3d 0%, #2a4a6f 100%)',
      category: 'Event',
      featured: false
    },
    {
      id: 6,
      type: 'news',
      title: 'Department Partners with Tech Giants',
      excerpt: 'New collaborations with Microsoft and Google to advance AI-driven physics research and student internships.',
      date: 'Nov 28, 2024',
      image: 'linear-gradient(135deg, #FFC527 0%, #ffd45a 100%)',
      category: 'News',
      featured: false
    }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0c1e3d] to-[#0f2847]">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFC527]/20 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#FFC527]/15 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#0c1e3d]/50 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFC527' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #FFC527 40px, #FFC527 42px)`
        }} />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#FFC527 1px, transparent 1px), linear-gradient(90deg, #FFC527 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FFC527]/90 to-[#ffb700]/90 backdrop-blur-xl rounded-full mb-5 sm:mb-8 shadow-2xl border-2 border-[#FFC527]/50 transform hover:scale-105 transition-transform duration-300">
            <HiNewspaper className="w-4 h-4 sm:w-6 sm:h-6 text-[#0c1e3d]" />
            <span className="text-xs sm:text-sm font-black text-[#0c1e3d] tracking-widest uppercase">Latest Updates</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFC527] to-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-2xl">
            News & Events
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Stay informed about the latest happenings, achievements, and opportunities in our department
          </p>
        </div>

        {/* Filter Tabs - Scrollable on mobile */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex overflow-x-auto gap-2 sm:gap-3 lg:gap-4 pb-4 sm:pb-0 sm:flex-wrap sm:justify-center hide-scrollbar">
            {['all', 'events', 'news', 'achievements', 'announcements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-bold sm:font-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest transition-all duration-500 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] shadow-2xl shadow-[#FFC527]/50 scale-105 border-2 border-[#FFC527]'
                    : 'bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 shadow-xl border-2 border-white/10 hover:border-[#FFC527]/30'
                }`}
              >
                <span className="relative whitespace-nowrap">
                  {tab === 'all' ? 'All Updates' : tab}
                  {activeTab === tab && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0c1e3d] rounded-full" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured News - Single column on mobile, 2 cols on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {featuredNews.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-[#FFC527]/30 hover:border-[#FFC527] transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,197,39,0.3)] hover:scale-[1.02] transform"
            >
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: item.image }}
              >
                {/* Animated overlay pattern */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, transparent 20%, rgba(255,197,39,0.15) 21%, rgba(255,197,39,0.15) 30%, transparent 31%)`,
                  backgroundSize: '60px 60px'
                }} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 lg:p-12 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] flex flex-col justify-between">
                {/* Top Section */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-[#FFC527]/20">
                    <FaBullhorn className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFC527]" />
                    <span className="text-[10px] sm:text-xs font-black text-[#0c1e3d] uppercase tracking-widest">
                      {item.category}
                    </span>
                    {item.featured && (
                      <>
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FFC527] rounded-full animate-pulse" />
                        <HiTrendingUp className="w-3 h-3 sm:w-5 sm:h-5 text-[#FFC527] animate-pulse" />
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-tight drop-shadow-2xl group-hover:text-[#FFC527] transition-colors duration-500">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed drop-shadow-lg font-medium line-clamp-3 sm:line-clamp-none">
                    {item.excerpt}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="space-y-3 sm:space-y-5 mt-6 sm:mt-8">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-xl rounded-lg sm:rounded-xl border border-white/30 shadow-lg">
                      <HiCalendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC527]" />
                      <span className="text-xs sm:text-sm font-bold text-white">{item.date}</span>
                    </div>
                    {item.time && (
                      <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-xl rounded-lg sm:rounded-xl border border-white/30 shadow-lg">
                        <HiClock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC527]" />
                        <span className="text-xs sm:text-sm font-bold text-white">{item.time}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white to-white/95 text-[#0c1e3d] font-black text-sm sm:text-base rounded-xl sm:rounded-2xl hover:from-[#FFC527] hover:to-[#ffb700] hover:text-white shadow-2xl hover:shadow-[0_0_30px_rgba(255,197,39,0.5)] transition-all duration-500 transform hover:scale-105 group/btn"
                  >
                    <span>Read Full Story</span>
                    <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-bl from-[#FFC527]/30 to-transparent rounded-bl-[80px] sm:rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-tr from-[#FFC527]/20 to-transparent rounded-tr-[80px] sm:rounded-tr-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Regular News - 2 columns on mobile, 3 on larger screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {regularNews.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC527]/20 hover:-translate-y-2 transform"
            >
              {/* Image/Gradient Header */}
              <div 
                className="h-32 sm:h-40 lg:h-56 relative overflow-hidden"
                style={{ background: item.image }}
              >
                {/* Animated pattern overlay */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,.08) 15px, rgba(255,255,255,.08) 30px)`
                }} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Category badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                  <div className="px-2 sm:px-4 py-1 sm:py-2 bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl shadow-2xl border border-[#FFC527]/20 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[10px] sm:text-xs font-black text-[#0c1e3d] uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e3d] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-7 space-y-3 sm:space-y-4 lg:space-y-5">
                {/* Date */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  <HiCalendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FFC527]" />
                  <span className="font-bold text-gray-300">{item.date}</span>
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-black text-white leading-tight group-hover:text-[#FFC527] transition-colors duration-300 line-clamp-2 sm:line-clamp-3">
                  {item.title}
                </h4>

                {/* Excerpt - Hidden on mobile */}
                <p className="hidden sm:block text-xs lg:text-sm xl:text-base text-gray-300 leading-relaxed line-clamp-2 lg:line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[#FFC527] font-black text-xs sm:text-sm hover:text-white hover:gap-3 sm:hover:gap-4 transition-all duration-300 group/link pt-1 sm:pt-2"
                >
                  <span>Read More</span>
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:animate-pulse" />
                </a>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-[#FFC527] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-24">
          <a
            href="/news"
            className="inline-flex items-center gap-2 sm:gap-3 lg:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_50px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] transform hover:scale-105 group"
          >
            <BiNews className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide">View All News</span>
            <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
          animation: spin-slow 20s linear infinite;
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

export default NewsHome;