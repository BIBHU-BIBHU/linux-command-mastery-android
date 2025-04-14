
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from '../data/commandsData';
import { useProgressStore } from '../store/progressStore';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CommandCardProps {
  command: Command;
}

const CommandCard: React.FC<CommandCardProps> = ({ command }) => {
  const navigate = useNavigate();
  const isCommandCompleted = useProgressStore((state) => state.isCommandCompleted);
  const completed = isCommandCompleted(command.id);

  return (
    <Card 
      className={`hover:shadow-md transition-all cursor-pointer relative ${
        completed ? 'border-green-200 bg-green-50' : ''
      }`}
      onClick={() => navigate(`/command/${command.id}`)}
    >
      {completed && (
        <div className="absolute top-3 right-3">
          <CheckCircle className="h-5 w-5 text-green-500" />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-mono">
          {command.name}
        </CardTitle>
        <CardDescription className="text-xs">
          {command.tags.join(' • ')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{command.description}</p>
      </CardContent>
    </Card>
  );
};

export default CommandCard;
