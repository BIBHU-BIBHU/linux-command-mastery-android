
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from '../data/commandsData';
import { useProgressStore } from '../store/progressStore';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface CommandCardProps {
  command: Command;
}

const CommandCard: React.FC<CommandCardProps> = ({ command }) => {
  const navigate = useNavigate();
  const isCommandCompleted = useProgressStore((state) => state.isCommandCompleted);
  const completed = isCommandCompleted(command.id);
  const isMobile = useIsMobile();

  return (
    <Card 
      className={`hover:shadow-md transition-all cursor-pointer relative ${
        completed ? 'border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800' : ''
      } ${isMobile ? 'touch-manipulation' : ''}`}
      onClick={() => navigate(`/command/${command.id}`)}
    >
      {completed && (
        <div className="absolute top-3 right-3">
          <CheckCircle className="h-5 w-5 text-green-500" />
        </div>
      )}
      <CardHeader className={`pb-2 ${isMobile ? 'p-3' : 'p-6'}`}>
        <CardTitle className={`${isMobile ? 'text-base' : 'text-lg'} font-mono`}>
          {command.name}
        </CardTitle>
        <CardDescription className="text-xs">
          {command.tags.join(' • ')}
        </CardDescription>
      </CardHeader>
      <CardContent className={isMobile ? 'p-3 pt-0' : ''}>
        <p className="text-sm">{command.description}</p>
      </CardContent>
    </Card>
  );
};

export default CommandCard;
