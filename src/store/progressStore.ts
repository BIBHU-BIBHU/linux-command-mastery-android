
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getAllCommands } from '../data/commandsData';

interface CompletedCommand {
  id: string;
  completedAt: number;
}

interface ProgressState {
  completedCommands: CompletedCommand[];
  markCommandComplete: (commandId: string) => void;
  isCommandCompleted: (commandId: string) => boolean;
  getProgress: (category: 'beginner' | 'intermediate' | 'advanced') => number;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedCommands: [],
      
      markCommandComplete: (commandId: string) => {
        set((state) => {
          // Don't add duplicates
          if (state.completedCommands.some(cmd => cmd.id === commandId)) {
            return state;
          }
          
          return {
            completedCommands: [...state.completedCommands, {
              id: commandId,
              completedAt: Date.now()
            }]
          };
        });
      },
      
      isCommandCompleted: (commandId: string) => {
        return get().completedCommands.some(cmd => cmd.id === commandId);
      },
      
      getProgress: (category: 'beginner' | 'intermediate' | 'advanced') => {
        const allCommandsInCategory = getAllCommands().filter(cmd => cmd.category === category);
        const completedInCategory = get().completedCommands.filter(
          completed => allCommandsInCategory.some(cmd => cmd.id === completed.id)
        );
        
        if (allCommandsInCategory.length === 0) return 0;
        return (completedInCategory.length / allCommandsInCategory.length) * 100;
      },
      
      resetProgress: () => {
        set({ completedCommands: [] });
      }
    }),
    {
      name: 'linux-tutorial-progress'
    }
  )
);
