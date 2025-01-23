import React, { useState } from 'react';
import { Github, Linkedin, ArrowUp, Mail, Menu, X, Phone, FileText, ExternalLink } from 'lucide-react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('education');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to email client with pre-filled email
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:arthur.oliveira@saintleo.edu?subject=${subject}&body=${body}`;
    // Clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const renderAboutContent = () => {
    switch (activeSection) {
      case 'education':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-100 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-purple-700">Saint Leo University</h4>
              <p className="text-slate-600 mt-2">
                Graduated with a 3.8 GPA, consistently recognized on the Dean's List for all semesters. Honored as a member of the President's Club in 2023, demonstrating academic excellence and leadership as a Resident Assistant for my floor. Coursework includes Java, C++, Python, SQL, HTML/CSS, AI, and Software Engineering.
              </p>
            </div>
            <div className="p-6 bg-slate-100 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-purple-700">Alura</h4>
              <p className="text-slate-600 mt-2">
                Alura is a prestigious online Brazilian platform offering various courses in technology. I obtained my certification in Power BI and enhanced my skills in JavaScript, Excel, and GitHub while developing a solid foundation in data analytics, data-driven decision-making, and software engineering.
              </p>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="p-6 bg-slate-100 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-purple-700 mb-6">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="font-medium text-purple-600 mb-2">Data Analysis</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600">Power BI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600">Excel</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="font-medium text-purple-600 mb-2">Programming</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600">Python</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600">JavaScript</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="font-medium text-purple-600 mb-2">Web Development</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600">HTML/CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600">GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 bg-slate-100 rounded-lg shadow-md">
              <h4 className="text-xl font-medium text-purple-700 mb-6">Soft Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-medium text-purple-600 mb-3">Communication & Collaboration</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">Strong Communication</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">Effective Teamwork</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">Collaborative Mindset</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-medium text-purple-600 mb-3">Professional Attributes</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">Time Management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">Adaptability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">People Skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-600">Attention to Detail</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-6">
            {/* Resident Assistant */}
            <div className="p-6 bg-slate-100 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium text-purple-700">Resident Assistant</h4>
                <span className="text-sm text-purple-600">2023-2024</span>
              </div>
              <p className="text-sm text-purple-600 mb-2">Saint Leo University</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Managed and mentored a floor of student residents</li>
                <li>Organized and facilitated community events</li>
                <li>Developed strong leadership and conflict resolution skills</li>
                <li>Balanced multiple responsibilities while maintaining a 3.8 GPA</li>
              </ul>
            </div>

            {/* Bridge Program Tutor */}
            <div className="p-6 bg-slate-100 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium text-purple-700">Bridge Program Tutor</h4>
                <span className="text-sm text-purple-600">January 2022 – May 2023</span>
              </div>
              <p className="text-sm text-purple-600 mb-2">Saint Leo University</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Assisted international students in a preparatory course to improve their English language proficiency before beginning regular coursework</li>
                <li>Guided students from diverse backgrounds in adapting to the American education system, providing academic and cultural support</li>
                <li>Transitioned from a participant to a tutor, enhancing my own communication and leadership skills while helping others develop their English language abilities</li>
              </ul>
            </div>

            {/* Soccer Experience */}
            <div className="p-6 bg-slate-100 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium text-purple-700">Soccer Career & Coaching</h4>
                <span className="text-sm text-purple-600">2016 – Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>High-level soccer player in the academy of Flamengo (Brazil) from U14 to U18, receiving awards such as the top scorer of the club in 2016 and 2017</li>
                <li>Used this background to negotiate scholarships with soccer coaches across the US to come as a student-athlete with zero English proficiency</li>
                <li>Started coaching in the US, providing private soccer lessons for children and teenagers, focusing on skill development and performance training</li>
                <li>Developed strong communication and problem-solving skills while working with children and their parents, including designing training plans and presenting long-term goals</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const projects = [
    {
      id: 1,
      title: "Power BI Dashboard",
      summary: "Alura Final Project: A comprehensive Power BI dashboard for a beauty store",
      description: "Alura Final Project: A comprehensive Power BI dashboard for a beauty store (make-up, hair, skin, perfume) that aims to enter the data-driven culture. This project helped me acquire the ability to create interactive visualizations, implement data modeling, and derive meaningful business intelligence.",
      technologies: ["Power BI", "Power Query", "DAX", "Data Modeling"],
      outcomes: [
        "Enabled the owner to visualize data more effectively",
        "Created iterative filters for enhanced data analysis",
        "Organized data for clearer insights"
      ],
      mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      additionalImages: [
        "https://i.ibb.co/dmPMVww/power-Bi-1.png",
        "https://i.ibb.co/3f3DBv2/power-BI-2.png"
      ]
    },
    {
      id: 2,
      title: "Personal Website Portfolio",
      summary: "Modern portfolio website built with cutting-edge technologies",
      description: "Built a personal website portfolio utilizing ChatGPT and Bolt.new to highlight my personal skills.",
      technologies: ["Bolt", "ChatGPT", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "JavaScript", "HTML", "CSS"],
      outcomes: [
        "Showcased skills effectively through an interactive design",
        "Ensured responsiveness for optimal viewing on all devices",
        "Enhanced content creation efficiency using ChatGPT"
      ],
      mainImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
      additionalImages: [
        "https://i.ibb.co/n7v6Xq5/PWP-1.png",
        "https://i.ibb.co/DGYY9zN/PWP-2.png"
      ]
    },
    {
      id: 3,
      title: "Excel Worksheet for Personal Finances",
      summary: "Simple yet powerful Excel solution for personal finance management",
      description: "A simple Excel worksheet that helps users track their finances, investments, and budgets. It features automated calculations and investment portfolio analysis.",
      technologies: ["Excel", "VBA", "Financial Modeling", "Data Analysis"],
      outcomes: [
        "Automated monthly budget tracking for ease of use",
        "Visualization of investment portfolio performance",
        "Customizable expense categories for personalized tracking"
      ],
      mainImage: "https://images.unsplash.com/photo-1579170053380-58064b2dee67?w=800&h=400&fit=crop",
      additionalImages: [
        "https://i.ibb.co/p1L1Hmb/Financial-Worksheet-1.png",
        "https://i.ibb.co/xChWL5x/Financial-worksheet-2.png"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-800 shadow-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-purple-400">AI Arthur's Portfolio</span>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-200 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-slate-200 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24">
        <header className="bg-gradient-to-r from-slate-900 to-purple-900 text-white">
          <div className="container mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Arthur Oliveira</h1>
                <p className="text-xl text-slate-200 mb-8">
                  Computer Science graduate passionate about AI, Data Analytics, and software engineering, combining technical expertise with strong communication skills. Trilingual and reliable, I thrive on problem-solving and I am committed to continuous learning and professional growth.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    See Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-transparent border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-md hover:bg-purple-900 transition-colors"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="md:w-1/3">
                <img
                  src="https://i.ibb.co/dtgYkYV/dtgYkYV.jpg"
                  alt="Profile"
                  className="rounded-full w-64 h-64 object-cover object-[center_40%] border-4 border-purple-400 shadow-lg"
                />
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 p-8 bg-slate-100 rounded-lg shadow-md">
              <p className="text-lg text-slate-700 leading-relaxed">
                I am passionate about Data Analytics, data visualization, and utilizing AI to create innovative solutions. Software engineering has also become a key interest, especially in JavaScript, Python, HTML, and CSS, enhanced by the application of AI. My training at Alura | Online Technology School has further complemented the skills I acquired in college, equipping me for real-world challenges. I am eager to contribute to dynamic projects that leverage the power of AI.
              </p>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              {['education', 'skills', 'experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    activeSection === section
                      ? 'bg-purple-700 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-purple-100'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {renderAboutContent()}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-100 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.summary}</p>
                  <button
                    className="text-purple-700 hover:text-purple-800 font-medium flex items-center gap-2"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-slate-100 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-slate-100 p-6 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-800">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6">
                {projects.find(p => p.id === selectedProject) && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-slate-800">Overview</h4>
                      <p className="text-slate-600">
                        {projects.find(p => p.id === selectedProject)?.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-slate-800">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects.find(p => p.id === selectedProject)?.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-slate-800">Key Outcomes</h4>
                      <ul className="list-disc list-inside text-slate-600 space-y-2">
                        {projects.find(p => p.id === selectedProject)?.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-slate-800">Project Gallery</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.find(p => p.id === selectedProject)?.additionalImages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`Project image ${index + 1}`}
                            className="rounded-lg shadow-md w-full h-48 object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Contact Me</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-slate-800">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <Mail size={20} />
                      <span>arthur.oliveira@saintleo.edu</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <Phone size={20} />
                      <span>(407) 575-3572</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="https://docs.google.com/document/d/1pMu4RAzShmhHMoXEUOmAMex-V2aDU4zp/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition-colors w-full"
                  >
                    <FileText size={20} />
                    <span>View Resume</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/arthur--oliveira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-slate-700 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-colors w-full"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">Phone: (407) 575-3572</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/arthur--oliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:arthur.oliveira@saintleo.edu"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-colors"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;