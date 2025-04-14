
import React, { useEffect, useState } from 'react';

interface TerminalAnimationProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const TerminalAnimation: React.FC<TerminalAnimationProps> = ({ 
  text, 
  typingSpeed = 70,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <div className={`font-mono p-4 bg-terminal-dark text-terminal-green rounded-md ${className}`}>
      <div className="flex mb-2 items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex">
        <span className="text-blue-400 mr-2">$</span>
        <span>{displayText}</span>
        <span className={`ml-px h-5 w-2 bg-terminal-green inline-block ${isComplete ? 'animate-cursor-blink' : 'opacity-0'}`}></span>
      </div>
    </div>
  );
};

export default TerminalAnimation;
