import React from 'react';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiArrowRight,
  HiAcademicCap,
  HiBookOpen,
  HiUserGroup,
  HiNewspaper
} from 'react-icons/hi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaAtom
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Department', href: '/about' },
    { name: 'Academic Programs', href: '/academics' },
    { name: 'Research', href: '/research' },
    { name: 'Faculty & Staff', href: '/people' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const programs = [
    { name: 'B.Sc. Physics', href: '/academics/physics' },
    { name: 'B.Sc. Engineering Physics', href: '/academics/engineering-physics' },
    { name: 'B.Sc. Science Lab Technology', href: '/academics/slt' },
    { name: 'M.Sc. Physics', href: '/academics/msc' },
    { name: 'Ph.D. Physics', href: '/academics/phd' }
  ];

  const resources = [
    { name: 'Research Publications', href: '/research/publications' },
    { name: 'Laboratories', href: '/facilities/labs' },
    { name: 'Student Portal', href: '/portal' },
    { name: 'Events & Seminars', href: '/events' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Alumni Network', href: '/alumni' }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:bg-[#1877f2]' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-[#1da1f2]' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#515bd4]' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-[#ff0000]' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0a1628] via-[#0c1e3d] to-[#0f2847] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FFC527]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFC527]/8 to-transparent rounded-full blur-3xl" />
        
        {/* Hexagon pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFC527' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#FFC527 1px, transparent 1px), linear-gradient(90deg, #FFC527 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                {/* <div className="w-14 h-14 bg-gradient-to-br from-[#FFC527] to-[#ffb700] rounded-xl flex items-center justify-center shadow-2xl shadow-[#FFC527]/30">
                 
                </div> */}
                <img src="/images/peplogo.png" className='w-14 h-14' alt="" />
                <div>
                  <h3 className="text-xl font-black text-white">Physics Dept.</h3>
                  <p className="text-xs text-[#FFC527] font-bold">OAU, Ile-Ife</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Pioneering excellence in physics education and research since 1962. 
                Shaping the future of science, one discovery at a time.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center border border-white/20 hover:border-[#FFC527]/50 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#ffb700] rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium"
                    >
                      <HiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-200" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Programs */}
            <div className="space-y-5">
              <h4 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#ffb700] rounded-full" />
                Programs
              </h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href={program.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium"
                    >
                      <HiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-200" />
                      <span>{program.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Resources */}
            <div className="space-y-6">
              <div className="space-y-5">
                <h4 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#FFC527] to-[#ffb700] rounded-full" />
                  Contact
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-9 h-9 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-[#FFC527]/50 transition-colors duration-200">
                      <HiLocationMarker className="w-4 h-4 text-[#FFC527]" />
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      Department of Physics<br />
                      Obafemi Awolowo University<br />
                      Ile-Ife, Osun State, Nigeria
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-[#FFC527]/50 transition-colors duration-200">
                      <HiPhone className="w-4 h-4 text-[#FFC527]" />
                    </div>
                    <a href="tel:+2348012345678" className="text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium">
                      +234 (0) 801 234 5678
                    </a>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-[#FFC527]/50 transition-colors duration-200">
                      <HiMail className="w-4 h-4 text-[#FFC527]" />
                    </div>
                    <a href="mailto:physics@oauife.edu.ng" className="text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium">
                      physics@oauife.edu.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-12">
          <div className="bg-gradient-to-r from-[#0c1e3d]/50 to-[#1a2f4d]/50 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-[#FFC527]/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl lg:text-3xl font-black text-white mb-3">
                  Stay Updated
                </h4>
                <p className="text-gray-400 text-sm lg:text-base font-medium">
                  Subscribe to our newsletter for the latest research, events, and academic opportunities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC527]/50 transition-colors duration-200 font-medium"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black rounded-xl hover:from-[#ffb700] hover:to-[#FFC527] shadow-xl shadow-[#FFC527]/20 hover:shadow-2xl hover:shadow-[#FFC527]/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="border-t border-white/10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#FFC527]/30 transition-all duration-300 group">
              <HiAcademicCap className="w-10 h-10 text-[#FFC527] mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-black text-white mb-1">500+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Students</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#FFC527]/30 transition-all duration-300 group">
              <HiUserGroup className="w-10 h-10 text-[#FFC527] mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-black text-white mb-1">50+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Faculty</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#FFC527]/30 transition-all duration-300 group">
              <HiBookOpen className="w-10 h-10 text-[#FFC527] mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-black text-white mb-1">1000+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Publications</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#FFC527]/30 transition-all duration-300 group">
              <HiNewspaper className="w-10 h-10 text-[#FFC527] mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-black text-white mb-1">60+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Years Legacy</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left font-medium">
              © {currentYear} Department of Physics, Obafemi Awolowo University. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium">
                Terms of Use
              </a>
              <a href="/sitemap" className="text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium">
                Sitemap
              </a>
              <a href="/accessibility" className="text-sm text-gray-400 hover:text-[#FFC527] transition-colors duration-200 font-medium">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* OAU Credit */}
        <div className="border-t border-white/10 py-6">
          <div className="text-center">
            <p className="text-xs text-gray-500 font-medium">
              Part of{' '}
              <a 
                href="https://oauife.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FFC527] hover:text-[#ffb700] font-bold transition-colors duration-200"
              >
                Obafemi Awolowo University
              </a>
              {' '}• A Premier Nigerian University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;