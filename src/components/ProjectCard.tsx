import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
}

const ProjectCard = ({ title, description, technologies, liveUrl, codeUrl, image }: ProjectCardProps) => {
  return (
    <div className="relative rounded-2xl p-[1px] bg-black/5 hover:bg-gradient-primary transition-all duration-500 group shadow-card hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)] hover:scale-[1.02] h-full flex flex-col">
      <Card className="glass-panel border-none h-full flex flex-col justify-between overflow-hidden rounded-[15px] transition-all duration-500">
        <div>
          {image && (
            <div className="aspect-video overflow-hidden bg-black/5 relative">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          )}
          <CardHeader className="p-6">
            <CardTitle className="text-foreground font-black text-xl group-hover:text-primary transition-colors duration-300 tracking-tight leading-snug">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm mt-2 leading-relaxed font-medium">
              {description}
            </CardDescription>
          </CardHeader>
        </div>
        <div>
          <CardContent className="px-6 pb-4">
            <div className="flex flex-wrap gap-1.5">
              {technologies.split(',').map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-bold text-primary px-3 py-1 bg-primary/5 border border-primary/10 rounded-full shadow-sm"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0 gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-primary hover:shadow-glow text-white rounded-xl text-xs transition-all duration-300 font-extrabold h-10 border-0 active:scale-[0.97] flex items-center justify-center uppercase tracking-wider"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Live Demo
                </Button>
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full border-black/10 hover:border-primary/30 bg-white text-foreground hover:bg-black/5 rounded-xl text-xs transition-all duration-300 font-extrabold h-10 active:scale-[0.97] flex items-center justify-center uppercase tracking-wider shadow-sm"
                >
                  <Github className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Code
                </Button>
              </a>
            )}
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
