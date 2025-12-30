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
      color: 'from-amber-400 to-amber-600',
      textColor: 'text-amber-500',
      bgGradient: 'from-blue-950/90 to-blue-900/80',
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
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-400',
      bgGradient: 'from-slate-800/70 to-slate-700/60',
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
      color: 'from-emerald-400 to-emerald-600',
      textColor: 'text-emerald-400',
      bgGradient: 'from-slate-800/70 to-slate-700/60',
      route: '/academics/slt',
      isPrimary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-950/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-950/3 via-transparent to-amber-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-950 to-blue-900 rounded-full mb-6 shadow-lg">
            <HiSparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-white tracking-wide">Academic Excellence</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-950 mb-6 leading-tight">
            Discover Your Path in
            <span className="block mt-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-clip-text text-transparent">
              Physics & Beyond
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose from three distinguished programs at the Department of Physics, 
            Obafemi Awolowo University. Each pathway offers unique opportunities 
            for academic growth and professional excellence.
          </p>
        </div>

        {/* Primary Department - Physics (Hero Card) */}
        <div className="mb-12 lg:mb-16">
          {departments
            .filter(dept => dept.isPrimary)
            .map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="group relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-[1.01]"
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                    {/* Content Side */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-blue-950" />
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                            {dept.title}
                          </h2>
                          <p className="text-amber-300 text-sm lg:text-base font-medium mt-1">
                            {dept.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                        {dept.description}
                      </p>

                      {/* Highlights Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                        {dept.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 hover:bg-white/15 transition-colors duration-200"
                          >
                            <HiChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            <span className="text-sm lg:text-base text-white font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href={dept.route}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-blue-950 font-bold text-lg rounded-xl hover:from-amber-400 hover:to-amber-500 shadow-lg hover:shadow-amber-500/50 transition-all duration-300 group/btn mt-4"
                      >
                        <span>Explore Physics Program</span>
                        <HiArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>

                    {/* Visual Side */}
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div className="relative w-full h-full min-h-[400px]">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-64 h-64 xl:w-80 xl:h-80 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full blur-3xl animate-pulse" />
                        </div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-48 h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-2xl" />
                            <div className="absolute inset-0 w-48 h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl -rotate-12 group-hover:-rotate-6 transition-transform duration-500 backdrop-blur-sm border border-white/30" />
                            <FaAtom className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 xl:w-32 xl:h-32 text-white group-hover:scale-110 transition-transform duration-300" />
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {departments
            .filter(dept => !dept.isPrimary)
            .map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className={`group relative bg-gradient-to-br ${dept.bgGradient} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10`}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-6 lg:p-8 space-y-5">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                        <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                          {dept.title}
                        </h3>
                        <p className={`text-sm font-medium ${dept.textColor}`}>
                          {dept.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {dept.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {dept.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-200"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${dept.color}`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <a
                      href={dept.route}
                      className={`inline-flex items-center gap-2 ${dept.textColor} font-semibold text-sm lg:text-base hover:gap-3 transition-all duration-200 group/link mt-2`}
                    >
                      <span>Learn More</span>
                      <HiArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl p-8 lg:p-12 shadow-2xl border border-amber-500/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-300 text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Explore our admission requirements, course descriptions, and career prospects. 
              Join a legacy of excellence in scientific education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/academics"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-blue-950 font-bold text-base lg:text-lg rounded-xl hover:from-amber-400 hover:to-amber-500 shadow-lg hover:shadow-amber-500/50 transition-all duration-300 w-full sm:w-auto"
              >
                View All Programs
              </a>
              <a
                href="/our-department/mission"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base lg:text-lg rounded-xl hover:bg-white/20 border border-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                Our Mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;