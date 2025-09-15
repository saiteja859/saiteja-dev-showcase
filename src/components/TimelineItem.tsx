import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  status?: 'completed' | 'pursuing' | 'current';
}

const TimelineItem = ({ title, subtitle, period, description, status = 'completed' }: TimelineItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'current':
        return 'bg-primary border-primary shadow-glow animate-glow-pulse';
      case 'pursuing':
        return 'bg-secondary border-secondary';
      default:
        return 'bg-accent border-accent';
    }
  };

  return (
    <div className="relative flex items-start gap-4 group">
      {/* Timeline dot */}
      <div className={`
        w-4 h-4 rounded-full border-2 mt-6 flex-shrink-0 z-10
        ${getStatusColor()}
      `} />
      
      {/* Timeline line - only show if not the last item */}
      <div className="absolute left-2 top-10 w-0.5 h-full bg-border group-last:hidden" />
      
      {/* Content */}
      <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02] mb-6">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <CardTitle className="text-primary text-lg">{title}</CardTitle>
            <span className="text-sm text-muted-foreground font-medium">{period}</span>
          </div>
          <CardDescription className="text-accent font-medium">
            {subtitle}
          </CardDescription>
        </CardHeader>
        {description && (
          <CardContent>
            <p className="text-muted-foreground text-sm">{description}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default TimelineItem;