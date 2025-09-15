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
    <div className="rounded-xl p-[2px] bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300">
      <Card className="group bg-white border-none hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-xl">
        {image && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-600 font-medium">{technologies}</p>
        </CardContent>
        <CardFooter className="gap-3">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white "
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Button>
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-blue-500 text-blue-600 "
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
