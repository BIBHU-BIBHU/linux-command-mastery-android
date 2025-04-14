
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Book, Terminal } from 'lucide-react';
import TerminalAnimation from '../components/TerminalAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TutorialPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Linux Tutorial</h1>
      </div>

      <div className="mb-8">
        <TerminalAnimation 
          text="Let's learn Linux commands step by step" 
          className="mb-6"
        />
        
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Terminal className="h-6 w-6 text-terminal-green" />
            <CardTitle>What is Linux?</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <p>
              Linux is a free and open-source operating system kernel first released in 1991 by Linus Torvalds. 
              It serves as the foundation for various Linux distributions ("distros") like Ubuntu, Fedora, and Debian.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Terminal className="h-6 w-6 text-terminal-blue" />
            <CardTitle>Why Learn Linux Commands?</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>Powerful control over your system</li>
              <li>Essential for server administration</li>
              <li>Automation capabilities</li>
              <li>Valuable skill for IT professionals</li>
              <li>Customization and flexibility</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Book className="h-6 w-6 text-terminal-teal" />
            <CardTitle>How to Use This App</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p>Start with <strong>Beginner</strong> commands to learn the basics</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p>Progress to <strong>Intermediate</strong> and <strong>Advanced</strong> levels</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p>Try examples in your own Linux terminal</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <p>Mark commands as complete to track your progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={() => navigate('/category/beginner')} 
          className="bg-terminal-green hover:bg-green-600 text-white"
        >
          Start with Beginner Commands
        </Button>
      </div>
    </div>
  );
};

export default TutorialPage;
