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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFC527]/90 to-[#ffb700]/90 backdrop-blur-xl rounded-full mb-8 shadow-2xl border-2 border-[#FFC527]/50 transform hover:scale-105 transition-transform duration-300">
            <HiSparkles className="w-5 h-5 text-[#0c1e3d]" />
            <span className="text-sm font-black text-[#0c1e3d] tracking-widest uppercase">Academic Excellence</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Discover Your Path in
            <span className="block mt-3 bg-gradient-to-r from-[#FFC527] via-[#ffd45a] to-[#FFC527] bg-clip-text text-transparent drop-shadow-2xl">
              Physics & Beyond
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Choose from three distinguished programs at the Department of Physics, 
            Obafemi Awolowo University. Each pathway offers unique opportunities 
            for academic growth and professional excellence.
          </p>
        </div>

        {/* Primary Department - Physics (Hero Card) */}
        <div className="mb-16 lg:mb-20">
          {departments
            .filter(dept => dept.isPrimary)
            .map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="group relative bg-gradient-to-br from-[#0c1e3d] via-[#1a2f4d] to-[#0c1e3d] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(255,197,39,0.3)] transition-all duration-700 border-2 border-[#FFC527]/30 hover:border-[#FFC527]/50 hover:scale-[1.01] transform"
                >
                  {/* Static gradient overlay with shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFC527]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Radial pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, transparent 20%, rgba(255,197,39,0.15) 21%, rgba(255,197,39,0.15) 30%, transparent 31%)`,
                    backgroundSize: '60px 60px'
                  }} />

                  <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-10 lg:p-14">
                    {/* Content Side */}
                    <div className="flex flex-col justify-center space-y-8">
                      <div className="flex items-center gap-5">
                        <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#0c1e3d]" />
                        </div>
                        <div>
                          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white drop-shadow-2xl">
                            {dept.title}
                          </h2>
                          <p className="text-[#FFC527] text-base lg:text-xl font-bold mt-2">
                            {dept.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-200 text-lg lg:text-xl leading-relaxed font-medium">
                        {dept.description}
                      </p>

                      {/* Highlights Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                        {dept.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-xl px-5 py-4 border border-white/30 hover:bg-white/15 hover:border-[#FFC527]/50 transition-all duration-300 shadow-lg group/item"
                          >
                            <HiChevronRight className="w-5 h-5 text-[#FFC527] flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-200" />
                            <span className="text-base lg:text-lg text-white font-semibold">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href={dept.route}
                        className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black text-xl rounded-2xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_40px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] transform hover:scale-105 group/btn mt-6"
                      >
                        <span>Explore Physics Program</span>
                        <HiArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </a>
                    </div>

                    {/* Visual Side */}
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div className="relative w-full h-full min-h-[450px]">
                        {/* Central glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-80 h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-[#FFC527]/20 via-[#FFC527]/10 to-transparent rounded-full blur-3xl" />
                        </div>
                        
                        {/* Geometric shapes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            {/* Back shape */}
                            <div className="w-56 h-56 xl:w-64 xl:h-64 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-3xl rotate-12 group-hover:rotate-6 transition-transform duration-700 shadow-2xl shadow-[#FFC527]/40" />
                            
                            {/* Front shape */}
                            <div className="absolute inset-0 w-56 h-56 xl:w-64 xl:h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl -rotate-12 group-hover:-rotate-6 transition-transform duration-700 backdrop-blur-xl border-2 border-white/40" />
                            
                            {/* Icon */}
                            <FaAtom className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 xl:w-36 xl:h-36 text-white drop-shadow-2xl group-hover:scale-110 group-hover:rotate-180 transition-all duration-700" />
                            
                            {/* Orbital rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 xl:w-56 xl:h-56 border-2 border-[#FFC527]/30 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 xl:w-72 xl:h-72 border border-[#FFC527]/20 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Secondary Departments Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {departments
            .filter(dept => !dept.isPrimary)
            .map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className={`group relative bg-gradient-to-br ${dept.bgGradient} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FFC527]/20 transition-all duration-500 border-2 border-white/10 hover:border-[#FFC527]/40 transform hover:scale-[1.02] hover:-translate-y-1`}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-[#FFC527]/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,197,39,.1) 20px, rgba(255,197,39,.1) 40px)`
                  }} />

                  <div className="relative p-8 lg:p-10 space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-5">
                      <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center shadow-2xl shadow-[#FFC527]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#0c1e3d]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-2 drop-shadow-lg">
                          {dept.title}
                        </h3>
                        <p className={`text-sm lg:text-base font-bold ${dept.textColor}`}>
                          {dept.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-medium">
                      {dept.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {dept.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm lg:text-base text-gray-200 font-medium group/highlight"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${dept.color} shadow-lg shadow-[#FFC527]/50 group-hover/highlight:scale-125 transition-transform duration-300`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <a
                      href={dept.route}
                      className={`inline-flex items-center gap-3 ${dept.textColor} font-black text-base lg:text-lg hover:gap-5 transition-all duration-300 group/link pt-4`}
                    >
                      <span>Learn More</span>
                      <HiArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-1.5 bg-gradient-to-r from-transparent via-[#FFC527] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 lg:mt-28">
          <div className="relative bg-gradient-to-r from-[#0c1e3d] via-[#1a2f4d] to-[#0c1e3d] rounded-3xl p-10 lg:p-16 shadow-2xl border-2 border-[#FFC527]/30 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, transparent 20%, rgba(255,197,39,0.1) 21%, rgba(255,197,39,0.1) 30%, transparent 31%)`,
              backgroundSize: '50px 50px'
            }} />
            
            {/* Gradient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFC527]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FFC527]/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 drop-shadow-2xl">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-gray-300 text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                Explore our admission requirements, course descriptions, and career prospects. 
                Join a legacy of excellence in scientific education.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a
                  href="/academics"
                  className="px-10 py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black text-lg lg:text-xl rounded-2xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_40px_rgba(255,197,39,0.5)] transition-all duration-500 border-2 border-[#FFC527] w-full sm:w-auto transform hover:scale-105"
                >
                  View All Programs
                </a>
                <a
                  href="/our-department/mission"
                  className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white font-black text-lg lg:text-xl rounded-2xl hover:bg-white/20 border-2 border-white/30 hover:border-[#FFC527]/50 transition-all duration-500 w-full sm:w-auto transform hover:scale-105"
                >
                  Our Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;