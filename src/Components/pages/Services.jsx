import { useTheme } from '../../context/ThemeContext';

const Services = () => {
  const { isDarkMode } = useTheme();

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      number: '01',
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that provide native-like experience.',
      number: '02',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on usability and aesthetics.',
      number: '03',
    },
    {
      title: 'API Development',
      description: 'Scalable and secure APIs for seamless integration.',
      number: '04',
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud-native applications designed for scalability and performance.',
      number: '05',
    },
    {
      title: 'Technical Consulting',
      description: 'Expert advice on technology stack and architecture decisions.',
      number: '06',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on usability and aesthetics.',
      number: '07',
    },
    {
      title: 'Figma Design',
      description: 'Expertise in creating intuitive and visually appealing user interfaces.',
      number: '08',
    },
  ];

  const headingClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  const subHeadingClasses = isDarkMode
    ? 'text-gray-500'
    : 'text-gray-600';

  const numberClasses = isDarkMode
    ? 'text-gray-600 group-hover:text-gray-400'
    : 'text-gray-400 group-hover:text-gray-600';

  const titleClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  const descriptionClasses = isDarkMode
    ? 'text-gray-400'
    : 'text-gray-600';

  const bgClasses = isDarkMode
    ? 'bg-primary hover:bg-secondary'
    : 'bg-white hover:bg-gray-50';

  const gridBorderClasses = isDarkMode
    ? 'bg-accent'
    : 'bg-gray-300';

  return (
    <div className="space-y-12">
      <div>
        <h2 className={`text-4xl font-light ${headingClasses} tracking-tight`}>Services</h2>
        <p className={`${subHeadingClasses} mt-2`}>What I can do for you</p>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${gridBorderClasses}`}>
        {services.map((service, index) => (
          <div key={index} className={`${bgClasses} p-8 transition-colors group`}>
            <span className={`text-4xl font-light ${numberClasses} transition-colors`}>
              {service.number}
            </span>
            <h3 className={`text-xl font-medium ${titleClasses} mt-4 mb-2`}>{service.title}</h3>
            <p className={`${descriptionClasses} text-sm leading-relaxed`}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;