import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

const CV = () => {
  const { isDarkMode } = useTheme();
  const [pdfError, setPdfError] = useState(false);

  const experiences = [
    {
      period: '2021 — Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      description: 'Leading development of multiple web applications and mentoring junior developers.',
    },
    {
      period: '2019 — 2021',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive web applications using React and modern CSS frameworks.',
    },
    {
      period: '2018 — 2019',
      title: 'Junior Developer',
      company: 'StartUp Inc',
      description: 'Assisted in building and maintaining client websites and applications.',
    },
  ];

  const education = [
    {
      period: '2014 — 2018',
      degree: 'B.Sc. in Computer Science',
      institution: 'University of Technology',
      description: 'Graduated with honors, focus on web technologies and software engineering.',
    },
  ];

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/NILBecker CV.pdf'; 
    link.href ='/DOBA0.pdf'
    // If PDF is in public folder
    // OR use this if PDF is in assets:
    // link.href = '/src/assets/NILBecker CV.pdf';
    link.download = 'Becker_Niringiyimana_CV.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const headingClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  const subHeadingClasses = isDarkMode
    ? 'text-gray-500'
    : 'text-gray-600';

  const sectionTitleClasses = isDarkMode
    ? 'text-gray-400'
    : 'text-gray-500';

  const periodClasses = isDarkMode
    ? 'text-gray-500'
    : 'text-gray-400';

  const titleClasses = isDarkMode
    ? 'text-white'
    : 'text-gray-900';

  const companyClasses = isDarkMode
    ? 'text-gray-400'
    : 'text-gray-600';

  const descriptionClasses = isDarkMode
    ? 'text-gray-500'
    : 'text-gray-600';

  const borderClasses = isDarkMode
    ? 'border-accent'
    : 'border-gray-300';

  const buttonClasses = isDarkMode
    ? 'border-gray-700 text-white hover:bg-accent'
    : 'border-gray-400 text-gray-900 hover:bg-gray-200';

  const listItemClasses = isDarkMode
    ? 'text-gray-400'
    : 'text-gray-600';

  const pdfContainerClasses = isDarkMode
    ? 'bg-secondary border-accent'
    : 'bg-gray-50 border-gray-300';

  return (
    <div className="space-y-8">
      {/* Header with Download Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`text-4xl font-light ${headingClasses} tracking-tight`}>Curriculum Vitae</h2>
          <p className={`${subHeadingClasses} mt-2`}>My professional resume</p>
        </div>
        <button 
          onClick={handleDownloadPDF}
          className={`flex items-center border px-6 py-3 transition-colors ${buttonClasses}`}
        >
          <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>

      {/* PDF Viewer */}
      <div className={`border ${pdfContainerClasses} rounded-lg overflow-hidden`}>
        <div className="p-4 border-b border-inherit flex justify-between items-center">
          <h3 className={`text-sm font-medium ${headingClasses}`}>NILBecker CV.pdf</h3>
          <span className={`text-xs ${subHeadingClasses}`}>Page 1 of 1</span>
        </div>
        
        {!pdfError ? (
          <div className="w-full h-[800px]">
            <object
              data="/NILBecker CV.pdf#toolbar=1&navpanes=1&scrollbar=1"
              type="application/pdf"
              className="w-full h-full"
              onError={() => setPdfError(true)}
            >
              <div className={`flex flex-col items-center justify-center h-full ${pdfContainerClasses}`}>
                <p className={`text-lg ${subHeadingClasses} mb-4`}>
                  Unable to display PDF directly.
                </p>
                <button
                  onClick={handleDownloadPDF}
                  className={`flex items-center border px-6 py-3 transition-colors ${buttonClasses}`}
                >
                  <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                  Click to Download
                </button>
              </div>
            </object>
          </div>
        ) : (
          <div className={`flex flex-col items-center justify-center h-[800px] ${pdfContainerClasses}`}>
            <p className={`text-lg ${subHeadingClasses} mb-4`}>
              PDF preview is not available.
            </p>
            <button
              onClick={handleDownloadPDF}
              className={`flex items-center border px-6 py-3 transition-colors ${buttonClasses}`}
            >
              <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
              Click to Download PDF
            </button>
          </div>
        )}
      </div>

      {/* Traditional CV Content (Optional - keep as backup) */}
      <div className="space-y-8 mt-8">
        <section className="space-y-6">
          <h3 className={`text-sm font-medium ${sectionTitleClasses} uppercase tracking-wider`}>Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`border-l ${borderClasses} pl-6`}>
                <span className={`text-xs ${periodClasses}`}>{exp.period}</span>
                <h4 className={`text-lg font-medium ${titleClasses} mt-1`}>{exp.title}</h4>
                <p className={`text-sm ${companyClasses} mb-2`}>{exp.company}</p>
                <p className={`text-sm ${descriptionClasses}`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className={`text-sm font-medium ${sectionTitleClasses} uppercase tracking-wider`}>Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`border-l ${borderClasses} pl-6`}>
                <span className={`text-xs ${periodClasses}`}>{edu.period}</span>
                <h4 className={`text-lg font-medium ${titleClasses} mt-1`}>{edu.degree}</h4>
                <p className={`text-sm ${companyClasses} mb-2`}>{edu.institution}</p>
                <p className={`text-sm ${descriptionClasses}`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;