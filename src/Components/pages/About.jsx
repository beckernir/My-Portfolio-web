import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  const headingClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  const subHeadingClasses = isDarkMode
    ? 'text-gray-300'
    : 'text-gray-700';

  const textClasses = isDarkMode
    ? 'text-gray-300'
    : 'text-gray-600';

  const metaTextClasses = isDarkMode
    ? 'text-gray-400'
    : 'text-gray-500';

  const labelClasses = isDarkMode
    ? 'text-gray-500'
    : 'text-gray-400';

  const borderClasses = isDarkMode
    ? 'border-accent'
    : 'border-gray-300';

  const skillBarClasses = isDarkMode
    ? 'bg-accent'
    : 'bg-gray-300';

  const skillFillClasses = isDarkMode
    ? 'bg-white'
    : 'bg-gray-800';

  const techTagClasses = isDarkMode
    ? 'bg-accent text-gray-300'
    : 'bg-gray-200 text-gray-700';

  return (
    <div className="space-y-12">
      <h2 className={`text-4xl font-light ${headingClasses} tracking-tight`}>About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className={`${textClasses} leading-relaxed`}>
            I'm a Full Stack Developer based in Kigali, with over 3 years of experience 
            in creating digital solutions. My approach combines technical expertise with 
            a keen eye for design, resulting in applications that are both functional and beautiful.
          </p>
          <p className={`${metaTextClasses} leading-relaxed`}>
            I believe in clean code, intuitive interfaces, and the power of technology to 
            solve real-world problems. When I'm not coding, you'll find me exploring new 
            technologies or contributing to open-source projects.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className={`text-xs ${labelClasses} uppercase tracking-wider mb-1`}>Name</p>
              <p className={headingClasses}>Becker Niringiyimana</p>
            </div>
            <div>
              <p className={`text-xs ${labelClasses} uppercase tracking-wider mb-1`}>Location</p>
              <p className={headingClasses}>Kigali, Rwanda</p>
            </div>
            <div>
              <p className={`text-xs ${labelClasses} uppercase tracking-wider mb-1`}>Email</p>
              <p className={headingClasses}>nibecker002@gmail.com</p>
            </div>
            <div>
              <p className={`text-xs ${labelClasses} uppercase tracking-wider mb-1`}>Availability</p>
              <p className={headingClasses}>Open to work</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6">
          <h3 className={`text-xl font-medium ${headingClasses}`}>Skills & Expertise</h3>
          {[
            { name: 'Frontend Development', level: 75 },
            { name: 'Backend Development', level: 30 },
            { name: 'UI/UX Design', level: 90 },
            { name: 'Database Management', level: 20 },
            { name: 'DevOps', level: 10 },
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className={subHeadingClasses}>{skill.name}</span>
                <span className={labelClasses}>{skill.level}%</span>
              </div>
              <div className={`w-full h-px ${skillBarClasses}`}>
                <div 
                  className={`h-px ${skillFillClasses}`} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}

          {/* Tools */}
          <div className="pt-6">
            <h4 className={`text-sm font-medium ${headingClasses} mb-3`}>Technologies I work with</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'Python', 'Tailwind', 'MySQL', 'Figma',].map((tech, index) => (
                <span key={index} className={`px-3 py-1 ${techTagClasses} text-xs`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;