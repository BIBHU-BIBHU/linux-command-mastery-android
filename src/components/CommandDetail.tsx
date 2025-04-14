
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCommandById } from '../data/commandsData';
import { useProgressStore } from '../store/progressStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Copy, Terminal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const CommandDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('syntax');
  
  const command = getCommandById(id || '');
  const markCommandComplete = useProgressStore((state) => state.markCommandComplete);
  const isCommandCompleted = useProgressStore((state) => state.isCommandCompleted);

  if (!command) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Command not found</h2>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  const handleCopyCommand = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied to clipboard",
          description: "Command copied successfully!",
          duration: 2000,
        });
      },
      () => {
        toast({
          title: "Copy failed",
          description: "Failed to copy command to clipboard",
          variant: "destructive",
        });
      }
    );
  };

  const handleMarkComplete = () => {
    markCommandComplete(command.id);
    toast({
      title: "Progress saved",
      description: `You've completed the ${command.name} command!`,
      duration: 3000,
    });
  };

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold font-mono">{command.name}</h1>
        {isCommandCompleted(command.id) && (
          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
        )}
      </div>

      <p className="text-gray-700 mb-6">{command.description}</p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="syntax">Syntax</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="syntax" className="mt-4">
          <Card className="bg-terminal-dark text-white p-4 rounded-md font-mono">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Terminal className="h-4 w-4 mr-2 text-terminal-green" />
                <span>Command Syntax</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => handleCopyCommand(command.syntax)}
                className="h-6 w-6 text-gray-400 hover:text-white"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3 overflow-x-auto">
              <pre className="text-terminal-green">{command.syntax}</pre>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="examples" className="mt-4">
          {command.examples.map((example, index) => (
            <Card key={index} className="bg-terminal-dark text-white p-4 rounded-md font-mono mb-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">{example.description}</p>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleCopyCommand(example.command)}
                  className="h-6 w-6 text-gray-400 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 overflow-x-auto">
                <pre className="text-terminal-green">{example.command}</pre>
              </div>
              {example.output && (
                <div className="mt-4 pt-2 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-1">Output:</p>
                  <pre className="text-gray-300 text-sm overflow-x-auto whitespace-pre-wrap">{example.output}</pre>
                </div>
              )}
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="tips" className="mt-4">
          <Card className="p-4">
            <ul className="list-disc pl-5 space-y-2">
              {command.tips.map((tip, index) => (
                <li key={index} className="text-sm">{tip}</li>
              ))}
            </ul>
          </Card>
        </TabsContent>
      </Tabs>

      {!isCommandCompleted(command.id) && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <Button 
            className="w-full" 
            onClick={handleMarkComplete}
          >
            Mark as Complete
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommandDetail;
