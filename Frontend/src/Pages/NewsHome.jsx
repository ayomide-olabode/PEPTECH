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
    <div className="relative py-20 lg:py-32 overflow-hidden">
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
        {/* Hexagon pattern */}
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

      {/* Particle Effect Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFC527] rounded-full opacity-20 animate-pulse"
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
        {/* Large circle */}
        <div className="absolute top-20 -right-32 w-96 h-96 border-4 border-[#FFC527]/10 rounded-full animate-spin-slow" />
        
        {/* Triangle */}
        <div className="absolute bottom-40 -left-20 w-64 h-64 opacity-5 animate-float">
          <div className="w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-b-[221px] border-b-[#FFC527]" />
        </div>
        
        {/* Small squares */}
        <div className="absolute top-1/4 left-20 w-16 h-16 border-4 border-[#FFC527]/20 rotate-45 animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-32 w-20 h-20 border-4 border-[#FFC527]/15 animate-spin-slow" />
        
        {/* Circles */}
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-[#FFC527]/10 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-32 left-1/3 w-8 h-8 border-2 border-[#FFC527]/20 rounded-full" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#FFC527 1px, transparent 1px), linear-gradient(90deg, #FFC527 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFC527]/90 to-[#ffb700]/90 backdrop-blur-xl rounded-full mb-8 shadow-2xl border-2 border-[#FFC527]/50 transform hover:scale-105 transition-transform duration-300">
            <HiNewspaper className="w-6 h-6 text-[#0c1e3d]" />
            <span className="text-sm font-black text-[#0c1e3d] tracking-widest uppercase">Latest Updates</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFC527] to-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
            News & Events
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Stay informed about the latest happenings, achievements, and opportunities in our department
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'events', 'news', 'achievements', 'announcements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`group px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-500 transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] shadow-2xl shadow-[#FFC527]/50 scale-105 border-2 border-[#FFC527]'
                  : 'bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 shadow-xl border-2 border-white/10 hover:border-[#FFC527]/30'
              }`}
            >
              <span className="relative">
                {tab === 'all' ? 'All Updates' : tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0c1e3d] rounded-full" />
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Featured News - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredNews.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border-2 border-[#FFC527]/30 hover:border-[#FFC527] transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,197,39,0.3)] hover:scale-[1.02] transform"
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
              <div className="relative p-10 lg:p-12 min-h-[450px] flex flex-col justify-between">
                {/* Top Section */}
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-[#FFC527]/20">
                    <FaBullhorn className="w-4 h-4 text-[#FFC527]" />
                    <span className="text-xs font-black text-[#0c1e3d] uppercase tracking-widest">
                      {item.category}
                    </span>
                    {item.featured && (
                      <>
                        <div className="w-1.5 h-1.5 bg-[#FFC527] rounded-full animate-pulse" />
                        <HiTrendingUp className="w-5 h-5 text-[#FFC527] animate-pulse" />
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight drop-shadow-2xl group-hover:text-[#FFC527] transition-colors duration-500">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-lg font-medium">
                    {item.excerpt}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="space-y-5 mt-8">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 shadow-lg">
                      <HiCalendar className="w-5 h-5 text-[#FFC527]" />
                      <span className="text-sm font-bold text-white">{item.date}</span>
                    </div>
                    {item.time && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 shadow-lg">
                        <HiClock className="w-5 h-5 text-[#FFC527]" />
                        <span className="text-sm font-bold text-white">{item.time}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={`/news/${item.id}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-white/95 text-[#0c1e3d] font-black rounded-2xl hover:from-[#FFC527] hover:to-[#ffb700] hover:text-white shadow-2xl hover:shadow-[0_0_30px_rgba(255,197,39,0.5)] transition-all duration-500 transform hover:scale-105 group/btn"
                  >
                    <span className="text-base">Read Full Story</span>
                    <HiArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#FFC527]/30 to-transparent rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#FFC527]/20 to-transparent rounded-tr-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Regular News - Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl shadow-xl overflow-hidden border-2 border-white/10 hover:border-[#FFC527]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC527]/20 hover:-translate-y-2 transform"
            >
              {/* Image/Gradient Header */}
              <div 
                className="h-56 relative overflow-hidden"
                style={{ background: item.image }}
              >
                {/* Animated pattern overlay */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,.08) 15px, rgba(255,255,255,.08) 30px)`
                }} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-4 py-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-[#FFC527]/20 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-black text-[#0c1e3d] uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e3d] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-7 space-y-5">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm">
                  <HiCalendar className="w-5 h-5 text-[#FFC527]" />
                  <span className="font-bold text-gray-300">{item.date}</span>
                </div>

                {/* Title */}
                <h4 className="text-xl lg:text-2xl font-black text-white leading-tight group-hover:text-[#FFC527] transition-colors duration-300 min-h-[3.5rem]">
                  {item.title}
                </h4>

                {/* Excerpt */}
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-[#FFC527] font-black text-sm hover:text-white hover:gap-4 transition-all duration-300 group/link pt-2"
                >
                  <span>Read Full Story</span>
                  <FaArrowRight className="w-4 h-4 group-hover/link:animate-pulse" />
                </a>
              </div>

              {/* Bottom accent line */}
              <div className="h-1.5 bg-gradient-to-r from-transparent via-[#FFC527] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-20 lg:mt-24">
          <a
            href="/news"
            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black text-lg rounded-2xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_50px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] transform hover:scale-105 group"
          >
            <BiNews className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide">View All News & Events</span>
            <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
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