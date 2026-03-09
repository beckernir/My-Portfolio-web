import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleContactMe = () => {
    navigate('/contact');
  };

  const textClasses = isDarkMode 
    ? 'text-white' 
    : 'text-gray-900';

  const subTextClasses = isDarkMode 
    ? 'text-gray-400' 
    : 'text-gray-600';

  const accentTextClasses = isDarkMode
    ? 'text-gray-300'
    : 'text-gray-500';

  const borderClasses = isDarkMode
    ? 'border-accent'
    : 'border-gray-300';

  const statNumberClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  return (
    <div className="min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <p className={`${subTextClasses} tracking-widest text-sm uppercase`}>
            Welcome to my portfolio
          </p>
          <h1 className={`text-6xl font-bold ${textClasses} leading-tight`}>
            Creating digital
            <br />
            <span className={accentTextClasses}>experiences</span> that matter
          </h1>
        </div>
        
        <p className={`${subTextClasses} text-lg max-w-2xl leading-relaxed`}>
          I'm a Full Stack Developer with a passion for building elegant solutions 
          to complex problems. Specializing in modern web technologies and user-centered design.
        </p>

        <div className="flex space-x-4">
          <button 
            onClick={handleViewProjects}
            className={`${
              isDarkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            } px-8 py-3 rounded-none font-medium transition-colors cursor-pointer`}
          >
            View Projects
          </button>

          <button 
            onClick={handleContactMe}
            className={`border ${
              isDarkMode 
                ? 'border-gray-700 text-white hover:bg-accent' 
                : 'border-gray-400 text-gray-900 hover:bg-gray-200'
            } px-8 py-3 rounded-none font-medium transition-colors cursor-pointer`}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className={`flex flex-col items-center ${subTextClasses}`}>
            <span className="text-xs tracking-widest mb-2">SCROLL</span>
            <ArrowDownIcon className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Minimal Stats */}
      <div className={`grid grid-cols-3 gap-8 mt-20 pt-20 border-t ${borderClasses}`}>
        {[
          { number: '1+', label: 'Years Experience' },
          { number: '10+', label: 'Projects' },
          { number: '30+', label: 'Clients' },
        ].map((stat, index) => (
          <div key={index} className="space-y-1">
            <h3 className={`text-3xl font-light ${statNumberClasses}`}>{stat.number}</h3>
            <p className={`text-xs ${subTextClasses} tracking-wider uppercase`}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;