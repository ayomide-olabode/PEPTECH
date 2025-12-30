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
      image: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
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
      image: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      category: 'Achievement',
      featured: true
    },
    {
      id: 3,
      type: 'news',
      title: 'New State-of-the-Art Laboratory Opens',
      excerpt: 'The department inaugurates a ₦500M advanced materials research facility equipped with cutting-edge instrumentation.',
      date: 'Dec 8, 2024',
      image: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
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
      image: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
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
      image: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%)',
      category: 'Event',
      featured: false
    },
    {
      id: 6,
      type: 'news',
      title: 'Department Partners with Tech Giants',
      excerpt: 'New collaborations with Microsoft and Google to advance AI-driven physics research and student internships.',
      date: 'Nov 28, 2024',
      image: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      category: 'News',
      featured: false
    }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-16 lg:py-24 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 border-4 border-amber-400/10 rounded-full" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-950/5 to-transparent rounded-full blur-3xl" />
        
        {/* Triangle shape */}
        <div className="absolute bottom-40 left-20 w-48 h-48 opacity-5">
          <div className="w-0 h-0 border-l-[96px] border-l-transparent border-r-[96px] border-r-transparent border-b-[166px] border-b-blue-950" />
        </div>
        
        {/* Small decorative elements */}
        <div className="absolute top-1/3 left-10 w-16 h-16 border-4 border-amber-500/20 rotate-45" />
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-amber-400/10 rounded-full" />
        <div className="absolute top-2/3 right-10 w-20 h-20 border-4 border-blue-950/10 rounded-full" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#1e3a8a 1.5px, transparent 1.5px), linear-gradient(90deg, #1e3a8a 1.5px, transparent 1.5px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-950 to-blue-900 rounded-full mb-6 shadow-xl border border-amber-400/30">
            <HiNewspaper className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white tracking-wider uppercase">Latest Updates</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 mb-4 tracking-tight">
            News & Events
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest happenings, achievements, and opportunities in our department
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'events', 'news', 'achievements', 'announcements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-lg scale-105 border-2 border-amber-400/30'
                  : 'bg-white text-blue-950 hover:bg-blue-50 shadow-md border-2 border-blue-950/10'
              }`}
            >
              {tab === 'all' ? 'All Updates' : tab}
            </button>
          ))}
        </div>

        {/* Featured News - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredNews.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-amber-400/20 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: item.image }}
              >
                {/* Overlay pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, transparent 20%, rgba(255,255,255,0.1) 21%, rgba(255,255,255,0.1) 30%, transparent 31%)`,
                  backgroundSize: '50px 50px'
                }} />
              </div>

              {/* Content */}
              <div className="relative p-8 lg:p-10 min-h-[400px] flex flex-col justify-between">
                {/* Top Section */}
                <div className="space-y-4">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                    <FaBullhorn className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-black text-blue-950 uppercase tracking-wider">
                      {item.category}
                    </span>
                    {item.featured && (
                      <>
                        <div className="w-1 h-1 bg-blue-950 rounded-full" />
                        <HiTrendingUp className="w-4 h-4 text-blue-950" />
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-2xl">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-lg text-white/90 leading-relaxed drop-shadow-lg">
                    {item.excerpt}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4 mt-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-white/90">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg">
                      <HiCalendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{item.date}</span>
                    </div>
                    {item.time && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg">
                        <HiClock className="w-4 h-4" />
                        <span className="text-sm font-semibold">{item.time}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={`/news/${item.id}`}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-blue-950 font-bold rounded-xl hover:bg-amber-400 hover:text-white shadow-lg hover:shadow-2xl transition-all duration-300 group/btn"
                  >
                    <span>Read More</span>
                    <HiArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-bl-full" />
            </div>
          ))}
        </div>

        {/* Regular News - Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-950/10 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image/Gradient Header */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ background: item.image }}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
                }} />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                    <span className="text-xs font-black text-blue-950 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <HiCalendar className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold">{item.date}</span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-blue-950 leading-tight group-hover:text-amber-600 transition-colors duration-200">
                  {item.title}
                </h4>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-blue-950 font-bold text-sm hover:text-amber-600 hover:gap-3 transition-all duration-200 group/link"
                >
                  <span>Read Full Story</span>
                  <FaArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href="/news"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-950 to-blue-900 text-white font-bold text-lg rounded-xl hover:from-blue-900 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-400/30 group"
          >
            <BiNews className="w-6 h-6" />
            <span>View All News & Events</span>
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
      `}</style>
    </div>
  );
};

export default NewsHome;