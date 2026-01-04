import React from 'react';

const Spotlight = () => {
  const spotlightPeople = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      achievement: "Breakthrough in Quantum Computing",
      description: "Led the team that achieved quantum supremacy with a 1000-qubit processor, opening new frontiers in computational science.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      category: "Science & Technology"
    },
    {
      id: 2,
      name: "Marcus Thompson",
      achievement: "Revolutionary Clean Energy Solution",
      description: "Developed an affordable solar technology that increased efficiency by 300%, making renewable energy accessible to underserved communities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      category: "Innovation"
    },
    {
      id: 3,
      name: "Prof. Amara Okafor",
      achievement: "Educational Reform Pioneer",
      description: "Transformed education for over 50,000 students through innovative STEM programs in developing regions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      category: "Education"
    },
    {
      id: 4,
      name: "Dr. James Rodriguez",
      achievement: "Medical Innovation Excellence",
      description: "Pioneered a new treatment protocol that reduced recovery time by 60% for critical cardiac patients.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      category: "Healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628] relative overflow-hidden py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700] opacity-3 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjE1LDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase px-4 py-2 bg-[#FFD700] bg-opacity-10 rounded-full border border-[#FFD700] border-opacity-30">
              Excellence Recognized
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            In The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">Spotlight</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Celebrating extraordinary individuals whose remarkable achievements have made a lasting impact on our world
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
            <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#FFD700]"></div>
          </div>
        </div>

        {/* Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {spotlightPeople.map((person, index) => (
            <div
              key={person.id}
              className="group relative bg-gradient-to-br from-[#1a2744] to-[#0f1d35] rounded-2xl overflow-hidden border border-[#FFD700] border-opacity-20 hover:border-opacity-50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFD700]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-transparent opacity-10 rounded-bl-full"></div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#FFD700] ring-opacity-30 group-hover:ring-opacity-60 transition-all duration-300">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Spotlight effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#FFD700] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="inline-block mb-2">
                      <span className="text-xs font-semibold text-[#FFD700] bg-[#FFD700] bg-opacity-10 px-3 py-1 rounded-full border border-[#FFD700] border-opacity-30">
                        {person.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                      {person.name}
                    </h3>
                    <h4 className="text-lg font-semibold text-[#FFD700] mb-3">
                      {person.achievement}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {person.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#FFD700] to-transparent transition-all duration-700 rounded-full"></div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-20 bg-gradient-to-r from-[#1a2744] via-[#0f1d35] to-[#1a2744] rounded-2xl p-12 border border-[#FFD700] border-opacity-20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Know Someone Extraordinary?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nominate an individual whose achievements deserve recognition and inspire others to excellence
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0a1628] font-bold rounded-full hover:shadow-lg hover:shadow-[#FFD700]/50 transform hover:scale-105 transition-all duration-300">
            Submit Nomination
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Spotlight;