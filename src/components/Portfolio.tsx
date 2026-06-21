import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Award, Sun, Moon } from 'lucide-react';
import TypingEffect from './TypingEffect';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import SkillCard from './SkillCard';
import TimelineItem from './TimelineItem';
import profileImage from '@/assets/profile.png';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;

      const systemPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPreferred ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
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
    },
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
      title: 'Campus Connect',
      description: 'An AI-powered Campus Connect platform designed to streamline communication, event updates, and student collaboration through a smart, centralized system.',
      technologies: 'MERN Stack, JavaScript, Gemini API',
      // liveUrl: '#',
      codeUrl: 'https://github.com/saiteja859/Campus-Connect.git'
    },
    {
      title: 'Cine Track',
      description: 'CineTrack is a movie and series tracking platform that helps users organize watchlists, discover content, and manage entertainment schedules efficiently.',
      technologies: 'Google AI Studio, Firebase , MERN',
      liveUrl: 'https://cinetrack-781z.vercel.app/',
      codeUrl: 'https://github.com/saiteja859/cinetrack.git'
    },
    {
      title: 'Job Link Tracker',
      description: 'Job Link Sharing made easy. Share, track, and discover opportunities in one place. Vibe coded with UI, duplicate detection, and seamless mobile-friendly experience.',
      technologies: 'Google AI Studio, Firebase , MERN',
      liveUrl: 'https://job-link-tracker-635172016859.asia-southeast1.run.app',
      //codeUrl: 'https:'
    },
    {
      title: 'True Captures',
      description: 'A vibe-coded photography portfolio website designed to showcase stunning moments through a clean, modern, and responsive gallery experience across desktop and mobile devices.',
      technologies: 'Google AI Studio, Firebase , MERN',
      liveUrl: 'https://truecaptures.vercel.app/',
      codeUrl: 'https://github.com/saiteja859/truecaptures.git'
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
    <div className="min-h-screen bg-background relative overflow-hidden bg-grid-pattern">
      {/* Ambient Background Glows */}
      <div className="mesh-gradient">
        <div className="mesh-blob-1"></div>
        <div className="mesh-blob-2"></div>
        <div className="mesh-blob-3"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-black bg-gradient-primary bg-clip-text text-transparent tracking-widest uppercase">
              Sai Teja
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary dark:text-slate-300 dark:hover:text-white font-bold text-sm tracking-wide transition-colors duration-300 relative py-1.5 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}

              {/* Theme Toggle Button Desktop */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:scale-[1.05] transition-all duration-300 shadow-sm"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Theme Toggle Button Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:scale-[1.05] transition-all duration-300 shadow-sm"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                className="border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground dark:text-white hover:text-primary dark:hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-black/5 dark:border-white/5 glass-panel rounded-xl px-4">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-muted-foreground dark:text-slate-300 hover:text-primary dark:hover:text-white font-bold text-sm tracking-wide transition-colors duration-300 py-2.5 px-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
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
      <section className="pt-24 pb-12 min-h-screen flex items-center relative z-10 overflow-hidden">
        <div className="bg-hero-subtle absolute inset-0 w-full h-full pointer-events-none z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xs md:text-sm font-extrabold tracking-widest text-primary uppercase">
                    Hi There, I'm
                  </h2>
                  <h1 className="text-6xl md:text-8xl font-black bg-gradient-primary bg-clip-text text-transparent tracking-tighter leading-none pb-2 drop-shadow-sm">
                    Sai Teja
                  </h1>
                  <div className="text-2xl md:text-4xl font-extrabold text-foreground">
                    <TypingEffect
                      text="Full Stack Developer"
                      speed={100}
                      delay={1000}
                      className="font-extrabold bg-gradient-primary bg-clip-text text-transparent"
                    />
                  </div>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-xl font-medium">
                  Passionate about coding, MERN stack, and building amazing applications.
                  Let's create something incredible together!
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                    className="border-black/15 dark:border-white/15 bg-white dark:bg-slate-900 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.03] active:scale-[0.97] text-foreground dark:text-white font-extrabold tracking-wide transition-all duration-300 rounded-2xl px-10 py-7 text-sm uppercase shadow-sm hover:text-primary dark:hover:text-white"
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('projects')}
                    className="border-black/15 dark:border-white/15 bg-white dark:bg-slate-900 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.03] active:scale-[0.97] text-foreground dark:text-white font-extrabold tracking-wide transition-all duration-300 rounded-2xl px-10 py-7 text-sm uppercase shadow-sm hover:text-primary dark:hover:text-white"
                  >
                    View My Work
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Profile Image */}
            <AnimatedSection animation="fade-in-right" className="order-1 lg:order-2">
              <div className="relative flex justify-center items-center">
                {/* Colorful Ambient aura glow */}
                <div className="absolute w-[420px] h-[420px] bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />

                {/* Cyber Rotating Ring 1 */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-primary/40 animate-spin-slow pointer-events-none" />

                {/* Cyber Rotating Ring 2 */}
                <div className="absolute w-[340px] h-[340px] rounded-full border-2 border-dotted border-secondary/35 animate-spin-reverse-slow pointer-events-none" />

                {/* Profile Photo Wrapper */}
                <div className="relative p-2.5 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 animate-float shadow-elevated z-10">
                  <img
                    src={profileImage}
                    alt="Sai Teja Profile"
                    className="relative w-80 h-80 object-cover rounded-full border border-black/5"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text left-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          INFO
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-tight">
                About Me
              </h2>
              <p className="text-lg md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
                I'm Sai Teja, Full Stack Developer from Vizag, India. Passionate about coding,
                MERN stack, and building applications.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="glass-panel glass-panel-hover border-black/5 dark:border-white/5 shadow-card hover:scale-[1.03] rounded-2xl shadow-[0_15px_30px_rgba(99,102,241,0.03)] transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-xl mb-2">Phone</h3>
                  <p className="text-muted-foreground text-base font-semibold">+91 6300193528</p>
                </CardContent>
              </Card>

              <Card className="glass-panel glass-panel-hover border-black/5 dark:border-white/5 shadow-card hover:scale-[1.03] rounded-2xl shadow-[0_15px_30px_rgba(99,102,241,0.03)] transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-xl mb-2">Email</h3>
                  <p className="text-muted-foreground text-base font-semibold break-all">viswanadamsaiteja@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="glass-panel glass-panel-hover border-black/5 dark:border-white/5 shadow-card hover:scale-[1.03] rounded-2xl shadow-[0_15px_30px_rgba(99,102,241,0.03)] transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-xl mb-2">Location</h3>
                  <p className="text-muted-foreground text-base font-semibold">Gajapathinagaram, India</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                className="border-black/10 dark:border-white/10 bg-white dark:bg-slate-900 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] text-foreground dark:text-white font-bold tracking-wide transition-all duration-300 rounded-xl px-8 py-5 uppercase text-xs shadow-sm hover:text-primary dark:hover:text-white"
                onClick={() => window.open('https://www.linkedin.com/in/saitejaviswanadham/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="border-black/10 dark:border-white/10 bg-white dark:bg-slate-900 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] text-foreground dark:text-white font-bold tracking-wide transition-all duration-300 rounded-xl px-8 py-5 uppercase text-xs shadow-sm hover:text-primary dark:hover:text-white"
                onClick={() => window.open('https://github.com/saiteja859', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text right-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          TECH
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-tight">
                Skills & Technologies
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Technologies I work with to bring ideas to life
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {skills.map((skillItem, index) => (
                <div key={index} style={{ animationDelay: `${index * 40}ms` }}>
                  <SkillCard skill={skillItem.skill} category={skillItem.category} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text left-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          PATH
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-tight">
                Education
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
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
      <section id="projects" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text right-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          WORK
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-tight">
                Featured Projects
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Some of the projects I've built recently
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} style={{ animationDelay: `${index * 80}ms` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text left-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          ROLE
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-tight">
                Work Experience
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
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
      <section id="certifications" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text right-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          AWARD
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-tight">
                Certifications
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Verified achievements and credentials
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} style={{ animationDelay: `${index * 60}ms` }}>
                  <Card className="glass-panel glass-panel-hover border-black/5 dark:border-white/5 shadow-card hover:scale-[1.03] rounded-2xl overflow-hidden h-full flex flex-col justify-between shadow-[0_15px_35px_rgba(99,102,241,0.03)] hover:shadow-[0_20px_45px_rgba(99,102,241,0.1)] transition-all duration-500">
                    <CardHeader className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="text-foreground font-black text-lg flex items-center gap-2.5 leading-snug">
                            <Award className="w-5 h-5 text-primary flex-shrink-0" />
                            {cert.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground font-semibold">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                        <span className="text-xs font-bold text-primary px-3 py-1.5 bg-primary/5 border border-primary/15 rounded-full whitespace-nowrap">
                          {cert.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-0 mt-auto">
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-1.5" />
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
      <section id="resume" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text left-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          FILE
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-tight">
                Resume
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Download my complete resume
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="text-center">
            <Card className="glass-panel max-w-md mx-auto border-black/5 dark:border-white/5 shadow-elevated rounded-2xl relative overflow-hidden group shadow-[0_20px_40px_rgba(99,102,241,0.04)] hover:shadow-[0_30px_60px_rgba(99,102,241,0.12)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-all duration-500" />
              <CardContent className="p-10 relative z-10">
                <div className="w-16 h-16 bg-gradient-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight">Sai Teja - Resume</h3>
                <p className="text-muted-foreground mb-8 max-w-xs mx-auto text-sm leading-relaxed font-semibold">
                  Complete overview of my skills, experience, and projects
                </p>
                <Button
                  className="bg-gradient-primary hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] text-white font-extrabold transition-all duration-300 w-full rounded-xl py-6 uppercase tracking-wide text-xs"
                  onClick={() => {
                    // Create a download link for resume
                    const link = document.createElement('a');
                    link.href = 'https://drive.google.com/file/d/10vzdUgCsMr-HP3i1uKZoJOQfEpIPSITW/view?usp=sharing'; // Would be actual resume file URL
                    link.download = 'Sai_Teja_Resume.pdf';
                    link.click();
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 relative overflow-hidden z-10">
        <div className="watermark-text left-6 top-6 text-9xl md:text-[11rem] font-black text-slate-200/30 dark:text-slate-800/15 select-none pointer-events-none absolute leading-none">
          TALK
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-tight">
                Get In Touch
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Let's discuss your next project
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-2xl mx-auto">
            <Card className="glass-panel border-black/5 dark:border-white/5 shadow-elevated rounded-2xl relative overflow-hidden shadow-[0_20px_45px_rgba(99,102,241,0.04)]">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
              <CardHeader className="p-8 pb-4 relative z-10">
                <CardTitle className="text-foreground text-2xl font-black tracking-tight">Send me a message</CardTitle>
                <CardDescription className="text-muted-foreground mt-2 font-medium">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-foreground/90">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white dark:bg-slate-950 border-black/10 dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl h-11 transition-all duration-300 shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-bold text-foreground/90">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white dark:bg-slate-950 border-black/10 dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl h-11 transition-all duration-300 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-foreground/90">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white dark:bg-slate-950 border-black/10 dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl h-11 transition-all duration-300 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-foreground/90">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white dark:bg-slate-950 border-black/10 dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl transition-all duration-300 resize-none p-3 shadow-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] text-white font-extrabold tracking-wide transition-all duration-300 rounded-xl h-12 mt-2 uppercase text-xs"
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
      <footer className="py-14 bg-card/10 border-t border-black/5 relative z-10 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 uppercase tracking-wide">
                Sai Teja
              </h3>
              <p className="text-muted-foreground font-semibold text-sm">Full Stack Developer</p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/saiteja859"
                className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/saitejaviswanadham/"
                className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:viswanadamsaiteja@gmail.com"
                className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-black/5 text-center">
            <p className="text-muted-foreground/60 text-xs">
              © 2025 Sai Teja. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;