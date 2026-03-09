import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  DocumentTextIcon, 
  EnvelopeIcon,
  Cog6ToothIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { path: '/', name: 'Profile', icon: HomeIcon },
    { path: '/about', name: 'About Me', icon: UserIcon },
    { path: '/services', name: 'Services', icon: Cog6ToothIcon },
    { path: '/projects', name: 'Projects', icon: BriefcaseIcon },
    { path: '/cv', name: 'Resume', icon: DocumentTextIcon },
    { path: '/contact', name: 'Contact', icon: EnvelopeIcon },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/beckernir',
      icon: (className) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/becker-niringiyimana-007291228',
      icon: (className) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/home',
      icon: (className) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.405-12.379c0-.212-.005-.424-.015-.636A9.936 9.936 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  // Theme classes
  const sidebarClasses = isDarkMode 
    ? 'bg-secondary border-accent' 
    : 'bg-gray-50 border-gray-200';

  const textClasses = isDarkMode 
    ? 'text-white' 
    : 'text-gray-800';

  const subTextClasses = isDarkMode 
    ? 'text-gray-400' 
    : 'text-gray-600';

  const borderClasses = isDarkMode 
    ? 'border-accent' 
    : 'border-gray-200';

  const navLinkClasses = isDarkMode
    ? 'text-gray-400 hover:bg-accent hover:text-white'
    : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900';

  const activeNavLinkClasses = isDarkMode
    ? 'bg-white text-black'
    : 'bg-gray-800 text-white';

  const socialIconClasses = isDarkMode
    ? 'text-gray-500 hover:text-white'
    : 'text-gray-400 hover:text-gray-800';

  const footerTextClasses = isDarkMode
    ? 'text-gray-600'
    : 'text-gray-400';

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className={`fixed left-0 top-0 h-screen w-72 ${sidebarClasses} border-r ${borderClasses} flex flex-col`}>
      {/* Logo/Profile Section */}
      <div className={`flex flex-col items-center justify-center py-8 border-b ${borderClasses} flex-shrink-0`}>
        <div className="w-24 h-24 rounded-full overflow-hidden mb-3 ring-2 ring-offset-2 ring-offset-secondary ring-gray-400">
          <img 
           src="/src/assets/Profile.jpeg"  // Full path from root
             alt="Becker Niringiyimana"
              className="w-full h-full object-cover"
                onError={(e) => {
              e.target.onerror = null;
              //e.target.src = "https://via.placeholder.com/150/111111/ffffff?text=BN";
            }}
          />
        </div>
        <h2 className={`text-lg font-bold ${textClasses} tracking-wide text-center`}>Becker Niringiyimana</h2>
        <p className={`text-xs ${subTextClasses} font-light`}>Full Stack Developer</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 px-4 py-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                  isActive 
                    ? activeNavLinkClasses
                    : navLinkClasses
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className={`border-t ${borderClasses} p-4 flex-shrink-0`}>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 mb-4 ${
            isDarkMode ? 'bg-accent hover:bg-opacity-80' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <span className={`text-sm ${textClasses}`}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
          {isDarkMode ? (
            <SunIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <MoonIcon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-3">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              onClick={() => handleSocialClick(social.url)}
              className={`${socialIconClasses} transition-colors cursor-pointer hover:scale-110 transform transition-transform`}
              title={social.name}
              aria-label={social.name}
            >
              {social.icon('w-4 h-4')}
            </button>
          ))}
        </div>
        <p className={`text-xs ${footerTextClasses} text-center`}>© 2026 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;