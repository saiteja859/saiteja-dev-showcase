import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  skill: string;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card className="
      relative bg-gradient-to-br from-blue-50/50 to-indigo-50/30 
      hover:from-blue-500/10 hover:to-indigo-500/10
      border border-blue-100 hover:border-blue-350
      hover:scale-[1.05] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)]
      transition-all duration-300 backdrop-blur-md rounded-2xl overflow-hidden pl-4 shadow-sm
    ">
      {/* Category Indicator Strip */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400" />
      
      <CardContent className="p-5 text-left flex items-center justify-between">
        <span className="font-extrabold text-sm md:text-base tracking-wide uppercase text-blue-900">
          {skill}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
      </CardContent>
    </Card>
  );
};

export default SkillCard;