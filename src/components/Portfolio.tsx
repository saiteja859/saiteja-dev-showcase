import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Award } from 'lucide-react';
import TypingEffect from './TypingEffect';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import SkillCard from './SkillCard';
import TimelineItem from './TimelineItem';
import profileImage from '@/assets/profile.png';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { skill: 'ReactJS', category: 'frontend' as const },
    { skill: 'HTML5', category: 'frontend' as const },
    { skill: 'CSS3', category: 'frontend' as const },
    { skill: 'JavaScript', category: 'frontend' as const },
    { skill: 'TailwindCSS', category: 'frontend' as const },
    { skill: 'Bootstrap', category: 'frontend' as const },
    { skill: 'NodeJS', category: 'backend' as const },
    { skill: 'ExpressJS', category: 'backend' as const },
    { skill: 'MongoDB', category: 'database' as const },
    { skill: 'MySQL', category: 'database' as const },
    { skill: 'Java', category: 'languages' as const },
    { skill: 'Python', category: 'languages' as const },
    { skill: 'C++', category: 'languages' as const },
    { skill: 'Git', category: 'tools' as const },
    { skill: 'GitHub', category: 'tools' as const },
    { skill: 'Netlify', category: 'tools' as const },
    { skill: 'WordPress', category: 'tools' as const },
    { skill: 'UiPath', category: 'tools' as const },
    { skill: 'Vercel', category: 'tools' as const },
    { skill: 'Render', category: 'tools' as const },
  ];

  const projects = [
    {
      title: 'Easy Bookings',
      description: 'A rental property listing platform built with modern web technologies.',
      technologies: 'Express.js, MongoDB, JavaScript, EJS',
      // liveUrl: '#',
      codeUrl: 'https://github.com/saiteja859/EASYBOOKINGS'
    },
    {
      title: 'Volume Controller',
      description: 'AI-based gesture volume control system using computer vision.',
      technologies: 'Python, OpenCV, MediaPipe, AI/ML',
      // liveUrl: '#',
      codeUrl: 'https://github.com/saiteja859/Touchless_controller'
    },
    {
      title: 'Equipment Rental',
      description: 'Complete platform for renting various types of equipment online.',
      technologies: 'MERN Stack, MongoDB, React, Node.js',
      // liveUrl: '#',
      codeUrl: 'https://github.com/saiteja859/equipment-rental'
    },
    {
  title: 'Dark UX Detector',
  description: 'Browser extension + web dashboard that detects dark UX/UI patterns (misleading buttons, hidden costs, forced sign-ups) on any website.',
  technologies: 'MERN Stack, JavaScript, DOM Parsing',
  // liveUrl: '#',
  codeUrl: 'https://github.com/KarthikeyaTadiparti/SankalpHackathon'
},
{
  title: 'AI Resume Analyzer',
  description: 'AI-powered resume analysis web app that evaluates ATS compatibility, keyword optimization,personalized OpenAI-powered feedback.',
  technologies: 'MERN Stack, OpenAI API, NLP',
   liveUrl: 'https://ai-resume-analyzer-free-three.vercel.app/',
  codeUrl: 'https://github.com/saiteja859/ai-resume-analyzer'
},
{
  title: 'Document Intelligence',
  description: 'An AI-powered PDF summarization platform built using RAG and Gemini API to deliver accurate, context-aware document insights',
  technologies: 'MERN Stack, Gemini API, RAG',
   liveUrl: 'https://document-intelligence-hub-one.vercel.app/login',
  codeUrl: 'https://github.com/saiteja859/document-intelligence-hub'
}

  ];

  const education = [
    {
      title: 'Bachelor of Technology - Computer Science And Engineering',
      subtitle: 'MVGR College of Engineering',
      period: '2023 - 2026',
      status: 'pursuing' as const,
      description: 'Currently pursuing BTech in Computer Science And Engineering with focus on full-stack development and modern technologies.'
    },
    {
      title: 'Diploma in Computer Science',
      subtitle: 'Balajee Polytechnic',
      period: '2020 - 2023',
      status: 'completed' as const,
      description: 'Completed diploma with strong foundation in programming and computer science fundamentals.'
    },
    {
      title: 'Secondary School Certificate (SSC)',
      subtitle: 'Sri Krishna Vidyaa Peet',
      period: '2020',
      status: 'completed' as const,
      description: 'Completed secondary education with excellent academic performance.'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      subtitle: 'Self Employed',
      period: 'Feb 2025 - Present',
      status: 'current' as const,
      description: 'Working on various full-stack projects using MERN stack and modern web technologies.'
    },
    {
      title: 'Web Developer Intern',
      subtitle: 'Eduskills',
      period: 'June 2024 - Dec 2024',
      status: 'completed' as const,
      description: 'Gained hands-on experience in web development, working with React, Node.js, and database technologies.'
    }
  ];

  const certifications = [
    {
      title: 'Full Stack',
      issuer: 'Wipro',
      period: '2025',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_successfully-completed-java-full-stack-program-activity-7407688598818496514-2ZB8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Web Development',
      issuer: 'EduSkills',
      period: '2025',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_web-development-activity-7330851664486158336-Kn6X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'AI-ML',
      issuer: 'All India Council for Technical Education (AICTE) ',
      period: '2025',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_google-ai-ml-virtual-internship-certificate-activity-7307326140505800705-Pqkl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Palo Alto Cybersecurity',
      issuer: 'APSCHE',
      period: '2025',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_cyber-security-short-term-internship-activity-7286684712373305344-oLzY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Generative Al and Google Cloud Technologies',
      issuer: 'GDSC',
      period: '2025',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_generative-al-and-google-cloud-technologies-activity-7279691164671164416-y0po?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: ' Cloud Computing ',
      issuer: 'NPTEL',
      period: '2025',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_cloudcomputing-swayam-nptel-activity-7268433016018878465-zyct?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Python and Django Framework And HTML 5',
      issuer: 'Udemy',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_udemy-fullstack-html-activity-7232768513621315586-IDSM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Prompt design in vertex AI and Gen AI',
      issuer: 'GDSC-MVGR',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_gdsc-activity-7230853343722532864-ariu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Python 101 for Data Science',
      issuer: 'Cognitive Class',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_hey-linkedin-community-i-am-excited-to-activity-7230518876541739008-7WGk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'SQL and Relational Databases 101',
      issuer: 'Cognitive Class',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_hey-linkedin-community-i-am-excited-to-activity-7223519515374931968-HH4g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Employability Skills',
      issuer: 'APSSDC & IBM',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_employabilityskills-internship-careerdevelopment-activity-7217885925463195648-jsqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'UI/UX Design',
      issuer: 'Guvi',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_im-thrilled-to-announce-my-new-certificate-activity-7171525148880068609-obQ7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: ' Introduction to Networks',
      issuer: 'CISCO',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_cisco-networking-netcad-activity-7194584557633900545-O2v_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'GEN-AI and GCCF path ways',
      issuer: 'GDSC - MVGR',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_completed-gen-ai-and-gccf-path-ways-activity-7132924702674583552-pYZ0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
    {
      title: 'Android Developer ',
      issuer: 'AICTE & Eduskills',
      period: '2024',
      credentialUrl: 'https://www.linkedin.com/posts/saitejaviswanadham_aicte-eduskills-googlefordevelopers-activity-7204731332453703682-ZGxT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESN5SABm5_yH7wQ30QUMovz-5UYWTPRrus'
    },
  ];

  const navigationItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Sai Teja
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Hi There, I'm
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Sai Teja
                  </h1>
                  <div className="text-xl md:text-2xl text-muted-foreground">
                    <TypingEffect 
                      text="Full Stack Developer"
                      speed={100}
                      delay={1000}
                      className="font-semibold"
                    />
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about coding, MERN stack, and building amazing applications. 
                  Let's create something incredible together!
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    Get In Touch
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => scrollToSection('projects')}
                    className="border-primary text-primary "
                  >
                    View My Work
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Profile Image */}
            <AnimatedSection animation="fade-in-right" className="order-1 lg:order-2">
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow-pulse" />
                  <img
                    src={profileImage}
                    alt="Sai Teja Profile"
                    className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/30 shadow-elevated animate-float"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm Sai Teja, Full Stack Developer from Vizag, India. Passionate about coding, 
                MERN stack, and building applications.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/80 border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm">+91 6300193528</p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">viswanadamsaiteja@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm">Gajapathinagaram, India</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline"
                className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/saitejaviswanadham/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline"
                className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://github.com/saiteja859', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Technologies I work with to bring ideas to life
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.map((skillItem, index) => (
                <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                  <SkillCard skill={skillItem.skill} category={skillItem.category} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-xl text-muted-foreground">
                My educational journey and achievements
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  period={item.period}
                  status={item.status}
                  description={item.description}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Some of the projects I've built recently
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Work Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                My professional journey and roles
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  period={item.period}
                  status={item.status}
                  description={item.description}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Verified achievements and credentials
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <CardTitle className="text-primary text-lg flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            {cert.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">{cert.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View credential
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Resume
              </h2>
              <p className="text-xl text-muted-foreground">
                Download my complete resume
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="text-center">
            <Card className="bg-card/80 border-border shadow-elevated max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Sai Teja - Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Complete overview of my skills, experience, and projects
                </p>
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground"
                  onClick={() => {
                    // Create a download link for resume
                    const link = document.createElement('a');
                    link.href = 'https://drive.google.com/file/d/1uRoi--vLT2AIVX__QaXx6tVG7iNY--Dk/view?usp=sharing'; // Would be actual resume file URL
                    link.download = 'Sai_Teja_Resume.pdf';
                    link.click();
                  }}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your next project
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-2xl mx-auto">
            <Card className="bg-card/50 border-border shadow-elevated">
              <CardHeader>
                <CardTitle className="text-primary">Send me a message</CardTitle>
                <CardDescription>
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-input/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-subtle border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Sai Teja
              </h3>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/saiteja859" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/saitejaviswanadham/" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:viswanadamsaiteja@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Sai Teja. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;