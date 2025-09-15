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
    <Card className="group bg-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105 overflow-hidden">
      {image && (
        <div className="aspect-video overflow-hidden bg-gradient-glow">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-primary group-hover:text-primary-glow transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-accent font-medium">{technologies}</p>
      </CardContent>
      <CardFooter className="gap-3">
        {liveUrl && (
          <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Live
          </Button>
        )}
        {codeUrl && (
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;