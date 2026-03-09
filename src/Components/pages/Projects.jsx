import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      year: '2024',
      description: 'A full-featured e-commerce platform with real-time inventory.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/666666?text=Project+01',
    },
    {
      title: 'Task Management',
      category: 'Productivity App',
      year: '2023',
      description: 'Collaborative task management tool with real-time updates.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/666666?text=Project+02',
    },
    {
      title: 'Weather Dashboard',
      category: 'Data Visualization',
      year: '2023',
      description: 'Real-time weather tracking with interactive maps.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/666666?text=Project+03',
    },
    {
      title: 'Social Analytics',
      category: 'Analytics Tool',
      year: '2024',
      description: 'Social media analytics dashboard for businesses.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/666666?text=Project+04',
    },
  ];

  const headingClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  const subHeadingClasses = isDarkMode
    ? 'text-gray-500'
    : 'text-gray-600';

  const categoryClasses = isDarkMode
    ? 'text-gray-400'
    : 'text-gray-500';

  const titleClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  const descriptionClasses = isDarkMode
    ? 'text-gray-400'
    : 'text-gray-600';

  const yearClasses = isDarkMode
    ? 'text-gray-600'
    : 'text-gray-400';

  const buttonClasses = isDarkMode
    ? 'text-white hover:underline'
    : 'text-gray-900 hover:underline';

  const imageBgClasses = isDarkMode
    ? 'bg-accent'
    : 'bg-gray-200';

  return (
    <div className="space-y-12">
      <div>
        <h2 className={`text-4xl font-light ${headingClasses} tracking-tight`}>Projects</h2>
        <p className={`${subHeadingClasses} mt-2`}>Selected work from 2023-2026</p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 group cursor-pointer">
            <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className={`aspect-w-16 aspect-h-9 ${imageBgClasses} overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <span className={categoryClasses}>{project.category}</span>
                  <span className={yearClasses}>•</span>
                  <span className={yearClasses}>{project.year}</span>
                </div>
                <h3 className={`text-2xl font-medium ${titleClasses}`}>{project.title}</h3>
                <p className={descriptionClasses}>{project.description}</p>
                <button className={`text-sm flex items-center ${buttonClasses} group-hover:underline`}>
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;