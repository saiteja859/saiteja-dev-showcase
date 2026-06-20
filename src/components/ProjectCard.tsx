import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder, Code2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
}

const ProjectCard = ({ title, description, technologies, liveUrl, codeUrl }: ProjectCardProps) => {
  return (
    <div className="relative rounded-2xl p-[1px] bg-black/5 dark:bg-white/5 hover:bg-gradient-primary transition-all duration-500 group shadow-card hover:shadow-[0_20px_45px_rgba(99,102,241,0.12)] hover:scale-[1.02] hover:-translate-y-1.5 h-full flex flex-col">
      <Card className="glass-panel border-none h-full flex flex-col justify-between overflow-hidden rounded-[15px] transition-all duration-500">
        <div>
          {/* Header area with modern folder badge and category tag */}
          <CardHeader className="p-6 pb-3">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/30 text-primary shadow-sm">
                <Folder className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <Code2 className="w-3.5 h-3.5" />
                Project
              </div>
            </div>
            
            <CardTitle className="text-foreground font-black text-xl group-hover:text-primary transition-colors duration-300 tracking-tight leading-snug mb-3">
              {title}
            </CardTitle>
            
            <CardDescription className="text-muted-foreground/90 dark:text-slate-350/95 text-[13.5px] leading-relaxed font-medium line-clamp-3">
              {description}
            </CardDescription>
          </CardHeader>
        </div>

        <div>
          {/* Technologies badge area */}
          <CardContent className="px-6 pb-5 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {technologies.split(',').map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-[11px] font-bold text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/30 dark:border-blue-900/30 rounded-lg shadow-sm"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </CardContent>

          {/* Action buttons */}
          <CardFooter className="px-6 pb-6 pt-0 gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  size="sm"
                  variant="outline"
                  className="w-full border-black/10 dark:border-white/10 hover:border-primary/30 bg-white dark:bg-slate-900 text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl text-xs transition-all duration-300 font-extrabold h-10 active:scale-[0.97] flex items-center justify-center uppercase tracking-wider shadow-sm hover:text-primary dark:hover:text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Live Demo
                </Button>
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full border-black/10 dark:border-white/10 hover:border-primary/30 bg-white dark:bg-slate-900 text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl text-xs transition-all duration-300 font-extrabold h-10 active:scale-[0.97] flex items-center justify-center uppercase tracking-wider shadow-sm hover:text-primary dark:hover:text-white"
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
