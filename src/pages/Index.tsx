
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/commandsData';
import CategoryCard from '../components/CategoryCard';
import TerminalAnimation from '../components/TerminalAnimation';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-20">
      <div className="flex flex-col items-center mb-8 mt-4">
        <div className="flex items-center mb-2">
          <Terminal className="h-8 w-8 text-terminal-green mr-2" />
          <h1 className="text-3xl font-bold">Linux Command Mastery</h1>
        </div>
        <p className="text-gray-600 text-center max-w-md">
          Learn Linux commands from beginner to advanced with interactive examples
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <TerminalAnimation 
          text="Welcome to Linux Command Mastery" 
          className="mb-4"
        />
        
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate('/tutorial')} 
            className="bg-terminal-dark hover:bg-gray-800 text-white"
          >
            Start Learning
          </Button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Command Categories</h2>
        <div className="grid gap-6 md:grid-cols-1">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
