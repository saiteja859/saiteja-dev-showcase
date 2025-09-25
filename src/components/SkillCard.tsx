import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  skill: string;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
}

const SkillCard = ({ skill, category = 'frontend' }: SkillCardProps) => {
  const getCategoryColors = () => {
    switch (category) {
      case 'frontend':
        return 'from-primary/15 to-secondary/15 border-primary/20 hover:border-secondary/40';
      case 'backend':
        return 'from-primary/15 to-secondary/15 border-primary/20 hover:border-secondary/40';
      case 'database':
        return 'from-primary/15 to-secondary/15 border-primary/20 hover:border-secondary/40';
      case 'tools':
        return 'from-primary/15 to-secondary/15 border-primary/20 hover:border-secondary/40';
      case 'languages':
        return 'from-primary/15 to-secondary/15 border-primary/20 hover:border-secondary/40';
      default:
        return 'from-primary/15 to-secondary/15 border-primary/20 hover:border-secondary/40';
    }
  };

  return (
    <Card className={`
      bg-gradient-to-br ${getCategoryColors()} 
      hover:scale-105 hover:shadow-glow transition-all duration-300 
      border backdrop-blur-sm
    `}>
      <CardContent className="p-4 text-center">
        <span className="font-medium text-foreground text-sm lg:text-base">
          {skill}
        </span>
      </CardContent>
    </Card>
  );
};

export default SkillCard;