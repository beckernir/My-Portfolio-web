import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';
const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    { icon: EnvelopeIcon, text: 'nibecker002@gmail.com', label: 'Email' },
    { icon: PhoneIcon, text: '+250 788286790', label: 'Phone' },
    { icon: MapPinIcon, text: 'Kigali, Rwanda', label: 'Location' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-light text-white tracking-tight">Contact</h2>
        <p className="text-gray-500 mt-2">Let's work together</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent">
        {contactInfo.map((item, index) => (
          <div key={index} className="bg-primary p-8 text-center">
            <item.icon className="w-6 h-6 text-gray-400 mx-auto mb-3" />
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
            <p className="text-white text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-secondary p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-0 py-2 bg-transparent border-b border-accent text-white focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-2 bg-transparent border-b border-accent text-white focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-0 py-2 bg-transparent border-b border-accent text-white focus:outline-none focus:border-white transition-colors resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;