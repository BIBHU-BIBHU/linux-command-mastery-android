
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCommandsByCategory, categories } from '../data/commandsData';
import { useProgressStore } from '../store/progressStore';
import CommandCard from '../components/CommandCard';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const getProgress = useProgressStore(state => state.getProgress);
  
  const category = categories.find(c => c.id === categoryId);
  const commands = getCommandsByCategory(
    categoryId as 'beginner' | 'intermediate' | 'advanced'
  );
  
  const progress = category 
    ? getProgress(category.level as 'beginner' | 'intermediate' | 'advanced')
    : 0;

  if (!category) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Category not found</h2>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    );
  }

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">{category.name} Commands</h1>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-2">{category.description}</p>
        <div className="flex justify-between items-center text-sm mb-1">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid gap-4 pb-4">
        {commands.length > 0 ? (
          commands.map(command => (
            <CommandCard key={command.id} command={command} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            No commands available in this category yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
