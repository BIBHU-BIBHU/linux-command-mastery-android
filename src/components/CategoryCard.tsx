
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../data/commandsData';
import { useProgressStore } from '../store/progressStore';
import { Progress } from '@/components/ui/progress';
import { Terminal, Code, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const navigate = useNavigate();
  const getProgress = useProgressStore((state) => state.getProgress);
  const progress = getProgress(category.level as 'beginner' | 'intermediate' | 'advanced');

  const getIcon = () => {
    switch (category.icon) {
      case 'terminal':
        return <Terminal className="h-8 w-8 text-terminal-green" />;
      case 'code':
        return <Code className="h-8 w-8 text-terminal-blue" />;
      case 'settings':
        return <Settings className="h-8 w-8 text-terminal-teal" />;
      default:
        return <Terminal className="h-8 w-8 text-terminal-green" />;
    }
  };

  return (
    <Card 
      className="relative overflow-hidden hover:shadow-lg transition-all cursor-pointer border-2"
      onClick={() => navigate(`/category/${category.id}`)}
    >
      <div 
        className={`absolute top-0 left-0 w-1 h-full ${
          category.level === 'beginner' ? 'bg-terminal-green' : 
          category.level === 'intermediate' ? 'bg-terminal-blue' : 
          'bg-terminal-teal'
        }`} 
      />
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{category.name}</CardTitle>
          {getIcon()}
        </div>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{category.commandCount} commands</p>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <div className="flex justify-between mb-1 text-xs">
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
