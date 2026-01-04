import React from 'react';
import { HiArrowRight, HiChevronRight, HiSparkles } from 'react-icons/hi';
import { FaAtom, FaFlask, FaMicroscope } from 'react-icons/fa';

const GettingStarted = () => {
  const departments = [
    {
      id: 'physics',
      title: 'Physics',
      subtitle: 'The Foundation of Natural Philosophy',
      description: 'Explore the fundamental laws governing our universe. From quantum mechanics to astrophysics, our Physics program offers comprehensive undergraduate and postgraduate studies that prepare students for cutting-edge research and innovation.',
      highlights: [
        'BSc & MSc/PhD Programs',
        'World-Class Research Facilities',
        'International Collaborations',
        'Industry Partnerships'
      ],
      icon: FaAtom,
      color: 'from-[#FFC527] to-[#ffb700]',
      textColor: 'text-[#FFC527]',
      bgGradient: 'from-[#0c1e3d] via-[#1a2f4d] to-[#0c1e3d]',
      route: '/academics/physics',
      isPrimary: true
    },
    {
      id: 'engineering-physics',
      title: 'Engineering Physics',
      subtitle: 'Where Science Meets Innovation',
      description: 'Bridge the gap between pure physics and practical engineering. Develop solutions to real-world problems through advanced physics principles and engineering methodologies.',
      highlights: [
        'Applied Physics Research',
        'Technical Problem Solving',
        'Industrial Applications'
      ],
      icon: FaFlask,
      color: 'from-[#FFC527] to-[#ffb700]',
      textColor: 'text-[#FFC527]',
      bgGradient: 'from-[#0f2847] to-[#1a2f4d]',
      route: '/academics/engineering-physics',
      isPrimary: false
    },
    {
      id: 'slt',
      title: 'Science Laboratory Technology',
      subtitle: 'Precision in Practice',
      description: 'Master the technical skills essential for modern scientific research. Learn cutting-edge laboratory techniques and instrumentation that drive scientific discovery.',
      highlights: [
        'Hands-On Training',
        'Modern Instrumentation',
        'Industry-Ready Skills'
      ],
      icon: FaMicroscope,
      color: 'from-[#FFC527] to-[#ffb700]',
      textColor: 'text-[#FFC527]',
      bgGradient: 'from-[#0f2847] to-[#1a2f4d]',
      route: '/academics/slt',
      isPrimary: false
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0c1e3d] to-[#0f2847]">
        {/* Layered gradient orbs for depth */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FFC527]/15 via-[#FFC527]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFC527]/10 via-[#FFC527]/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#0c1e3d]/80 via-[#FFC527]/5 to-[#0c1e3d]/80 rounded-full blur-3xl" />
        
        {/* Additional ambient light */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#FFC527]/8 to-transparent blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#FFC527]/6 to-transparent blur-2xl" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFC527' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#FFC527 1px, transparent 1px), linear-gradient(90deg, #FFC527 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FFC527]/90 to-[#ffb700]/90 backdrop-blur-xl rounded-full mb-5 sm:mb-8 shadow-2xl border-2 border-[#FFC527]/50 transform hover:scale-105 transition-transform duration-300">
            <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#0c1e3d]" />
            <span className="text-xs sm:text-sm font-black text-[#0c1e3d] tracking-widest uppercase">Academic Excellence</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-5 sm:mb-8 leading-tight tracking-tight px-2">
            Discover Your Path in
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFC527] via-[#ffd45a] to-[#FFC527] bg-clip-text text-transparent drop-shadow-2xl">
              Physics & Beyond
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Choose from three distinguished programs at the Department of Physics, 
            Obafemi Awolowo University. Each pathway offers unique opportunities 
            for academic growth and professional excellence.
          </p>
        </div>

        {/* Primary Department - Physics (DOMINANT but Compact on Mobile) */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          {departments
            .filter(dept => dept.isPrimary)
            .map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="group relative bg-gradient-to-br from-[#0c1e3d] via-[#1a2f4d] to-[#0c1e3d] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(255,197,39,0.3)] transition-all duration-700 border-2 border-[#FFC527]/30 hover:border-[#FFC527]/50 hover:scale-[1.01] transform"
                >
                  {/* Static gradient overlay with shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFC527]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Radial pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, transparent 20%, rgba(255,197,39,0.15) 21%, rgba(255,197,39,0.15) 30%, transparent 31%)`,
                    backgroundSize: '60px 60px'
                  }} />

                  <div className="relative p-6 sm:p-8 lg:p-14 space-y-5 sm:space-y-8">
                    {/* Icon and Title - Horizontal on Mobile */}
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${dept.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0c1e3d]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-2xl leading-tight">
                          {dept.title}
                        </h2>
                        <p className="text-[#FFC527] text-sm sm:text-base lg:text-xl font-bold mt-1 sm:mt-2">
                          {dept.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description - Shorter on Mobile */}
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                      {dept.description}
                    </p>

                    {/* Highlights Grid - 2 columns on Mobile */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                      {dept.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-5 py-2.5 sm:py-4 border border-white/30 hover:bg-white/15 hover:border-[#FFC527]/50 transition-all duration-300 shadow-lg group/item"
                        >
                          <HiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC527] flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-200" />
                          <span className="text-xs sm:text-sm lg:text-base text-white font-semibold leading-tight">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button - Full Width on Mobile */}
                    <a
                      href={dept.route}
                      className="flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black text-base sm:text-lg lg:text-xl rounded-xl sm:rounded-2xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_40px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] transform hover:scale-105 group/btn w-full sm:w-auto"
                    >
                      <span>Explore Physics Program</span>
                      <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Secondary Departments - COMPACT 2-Column Grid on Mobile */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {departments
            .filter(dept => !dept.isPrimary)
            .map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className={`group relative bg-gradient-to-br ${dept.bgGradient} rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FFC527]/20 transition-all duration-500 border-2 border-white/10 hover:border-[#FFC527]/40 transform hover:scale-[1.02] hover:-translate-y-1`}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-[#FFC527]/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,197,39,.1) 20px, rgba(255,197,39,.1) 40px)`
                  }} />

                  <div className="relative p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-5 lg:space-y-6">
                    {/* Icon and Title - Stacked & Centered on Mobile */}
                    <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4 lg:gap-5">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${dept.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#0c1e3d]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-2xl font-black text-white mb-1 drop-shadow-lg leading-tight">
                          {dept.title}
                        </h3>
                        <p className={`text-[10px] sm:text-xs lg:text-sm font-bold ${dept.textColor}`}>
                          {dept.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description - Line Clamp on Mobile */}
                    <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed font-medium line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
                      {dept.description}
                    </p>

                    {/* Highlights - Compact Dots on Mobile */}
                    <div className="space-y-2 sm:space-y-3">
                      {dept.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-[10px] sm:text-xs lg:text-sm text-gray-200 font-medium group/highlight"
                        >
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${dept.color} shadow-lg shadow-[#FFC527]/50 group-hover/highlight:scale-125 transition-transform duration-300 flex-shrink-0`} />
                          <span className="line-clamp-1">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link - Compact */}
                    <a
                      href={dept.route}
                      className={`inline-flex items-center gap-2 ${dept.textColor} font-black text-xs sm:text-sm lg:text-base hover:gap-3 transition-all duration-300 group/link pt-2`}
                    >
                      <span className="whitespace-nowrap">Learn More</span>
                      <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-[#FFC527] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;