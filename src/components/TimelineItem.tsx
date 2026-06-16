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
        return 'bg-gradient-to-r from-primary to-secondary border-primary shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-pulse';
      case 'pursuing':
        return 'bg-violet-500 border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]';
      default:
        return 'bg-slate-300 border-slate-200';
    }
  };

  return (
    <div className="relative flex items-start gap-6 group pb-4">
      {/* Timeline dot */}
      <div className={`
        w-4 h-4 rounded-full border-2 mt-6 flex-shrink-0 z-10
        ${getStatusColor()}
      `} />
      
      {/* Timeline line - only show if not the last item */}
      <div className="absolute left-2 top-10 w-0.5 h-[calc(100%-16px)] bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent group-last:hidden" />
      
      {/* Content */}
      <Card className="flex-1 glass-panel hover:scale-[1.015] hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(99,102,241,0.06)] transition-all duration-300 mb-2 border-black/5 rounded-2xl overflow-hidden shadow-card">
        <CardHeader className="p-6 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-foreground font-black text-lg leading-snug">{title}</CardTitle>
            <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/5 border border-primary/15 rounded-full w-fit whitespace-nowrap shadow-sm">
              {period}
            </span>
          </div>
          <CardDescription className="text-primary/95 font-bold text-sm mt-1 uppercase tracking-wider">
            {subtitle}
          </CardDescription>
        </CardHeader>
        {description && (
          <CardContent className="px-6 pb-6 pt-0">
            <p className="text-muted-foreground/90 font-medium text-sm leading-relaxed">{description}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default TimelineItem;