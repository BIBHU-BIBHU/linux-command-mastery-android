
export interface Command {
  id: string;
  name: string;
  description: string;
  syntax: string;
  examples: Example[];
  tips: string[];
  category: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface Example {
  command: string;
  description: string;
  output?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  commandCount: number;
}

export const categories: Category[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'Start your Linux journey with essential commands',
    icon: 'terminal',
    level: 'beginner',
    commandCount: 12
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    description: 'Expand your skills with more complex commands',
    icon: 'code',
    level: 'intermediate',
    commandCount: 15
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Master advanced Linux techniques',
    icon: 'settings',
    level: 'advanced',
    commandCount: 10
  }
];

export const beginnerCommands: Command[] = [
  {
    id: 'ls',
    name: 'ls',
    description: 'Lists files and directories in the current directory',
    syntax: 'ls [options] [file/directory]',
    examples: [
      {
        command: 'ls',
        description: 'List files and directories in the current directory',
        output: 'Documents Downloads Pictures Music'
      },
      {
        command: 'ls -l',
        description: 'List files and directories in long format',
        output: 'drwxr-xr-x 2 user user 4096 Apr 14 10:00 Documents\ndrwxr-xr-x 2 user user 4096 Apr 14 10:00 Downloads'
      },
      {
        command: 'ls -a',
        description: 'List all files including hidden ones',
        output: '. .. .bashrc Documents Downloads'
      }
    ],
    tips: [
      'Use ls -la to show all files with details',
      'Use ls -h to show file sizes in human-readable format',
      'Use ls --color to add colors to the output'
    ],
    category: 'beginner',
    tags: ['file', 'directory', 'listing']
  },
  {
    id: 'cd',
    name: 'cd',
    description: 'Change the current directory',
    syntax: 'cd [directory]',
    examples: [
      {
        command: 'cd Documents',
        description: 'Change to the Documents directory',
      },
      {
        command: 'cd ..',
        description: 'Move up one directory level',
      },
      {
        command: 'cd ~',
        description: 'Go to the home directory',
      }
    ],
    tips: [
      'Use cd - to go back to the previous directory',
      'Use cd without arguments to go to your home directory',
      'Use tab completion to quickly navigate directories'
    ],
    category: 'beginner',
    tags: ['navigation', 'directory']
  },
  {
    id: 'pwd',
    name: 'pwd',
    description: 'Print the current working directory',
    syntax: 'pwd',
    examples: [
      {
        command: 'pwd',
        description: 'Display the full path of the current directory',
        output: '/home/user/Documents'
      }
    ],
    tips: [
      'Use pwd when you need to confirm your current location',
      'The path is absolute from the root directory'
    ],
    category: 'beginner',
    tags: ['directory', 'path']
  },
  {
    id: 'mkdir',
    name: 'mkdir',
    description: 'Create a new directory',
    syntax: 'mkdir [options] directory',
    examples: [
      {
        command: 'mkdir Projects',
        description: 'Create a directory named Projects',
      },
      {
        command: 'mkdir -p Projects/Web/HTML',
        description: 'Create nested directories including parents',
      }
    ],
    tips: [
      'Use mkdir -p to create parent directories as needed',
      'Use quotes for directory names with spaces'
    ],
    category: 'beginner',
    tags: ['directory', 'create']
  },
  {
    id: 'cat',
    name: 'cat',
    description: 'Display the contents of a file',
    syntax: 'cat [options] [file...]',
    examples: [
      {
        command: 'cat file.txt',
        description: 'Display the contents of file.txt',
        output: 'This is the content of the file.'
      },
      {
        command: 'cat file1.txt file2.txt',
        description: 'Concatenate and display multiple files',
        output: 'Contents of file1\nContents of file2'
      }
    ],
    tips: [
      'Use cat -n to show line numbers',
      'For large files, consider using less instead'
    ],
    category: 'beginner',
    tags: ['file', 'content', 'display']
  }
];

export const intermediateCommands: Command[] = [
  {
    id: 'grep',
    name: 'grep',
    description: 'Search for patterns in files or output',
    syntax: 'grep [options] pattern [file...]',
    examples: [
      {
        command: 'grep "error" log.txt',
        description: 'Search for the word "error" in log.txt',
        output: 'Error: could not connect to server\nError: timeout'
      },
      {
        command: 'grep -i "warning" *.log',
        description: 'Case-insensitive search for "warning" in all .log files',
        output: 'app.log:Warning: disk space low\nsystem.log:warning: service restarting'
      }
    ],
    tips: [
      'Use grep -r for recursive search in directories',
      'Use grep -v to invert the match (show non-matching lines)',
      'Use grep -A3 to show 3 lines after each match'
    ],
    category: 'intermediate',
    tags: ['search', 'pattern', 'filter']
  },
  {
    id: 'find',
    name: 'find',
    description: 'Search for files in a directory hierarchy',
    syntax: 'find [path] [expression]',
    examples: [
      {
        command: 'find . -name "*.txt"',
        description: 'Find all .txt files in the current directory and subdirectories',
        output: './notes.txt\n./docs/readme.txt'
      },
      {
        command: 'find /home -type d -name "Projects"',
        description: 'Find directories named Projects under /home',
        output: '/home/user/Projects\n/home/guest/Projects'
      }
    ],
    tips: [
      'Use -type f for files, -type d for directories',
      'Use -size +10M to find files larger than 10MB',
      'Use -mtime -7 for files modified in the last 7 days'
    ],
    category: 'intermediate',
    tags: ['search', 'files', 'locate']
  }
];

export const advancedCommands: Command[] = [
  {
    id: 'awk',
    name: 'awk',
    description: 'Pattern scanning and text processing language',
    syntax: 'awk [options] \'program\' [file...]',
    examples: [
      {
        command: 'awk \'{print $1}\' file.txt',
        description: 'Print the first column of each line in file.txt',
        output: 'word1\nword2\nword3'
      },
      {
        command: 'awk \'$3 > 100 {print $1, $3}\' data.txt',
        description: 'Print first and third columns where third column > 100',
        output: 'John 150\nMary 200'
      }
    ],
    tips: [
      'AWK is a powerful programming language for text processing',
      'Use built-in variables like NR (line number) and NF (number of fields)',
      'Use -F to specify a custom field separator'
    ],
    category: 'advanced',
    tags: ['text processing', 'scripting', 'pattern matching']
  },
  {
    id: 'sed',
    name: 'sed',
    description: 'Stream editor for filtering and transforming text',
    syntax: 'sed [options] \'command\' [file...]',
    examples: [
      {
        command: 'sed \'s/old/new/g\' file.txt',
        description: 'Replace all occurrences of "old" with "new" in file.txt',
        output: 'This is a new example\nHere\'s a new line'
      },
      {
        command: 'sed \'/^$/d\' file.txt',
        description: 'Delete all empty lines from file.txt',
        output: 'Line 1\nLine 2\nLine 3'
      }
    ],
    tips: [
      'Use -i for in-place editing (modifies the file)',
      'Use multiple commands with -e or a script file with -f',
      'Use address ranges like \'1,5s/old/new/\' to limit operations'
    ],
    category: 'advanced',
    tags: ['text processing', 'search and replace', 'filtering']
  }
];

export const getAllCommands = (): Command[] => {
  return [...beginnerCommands, ...intermediateCommands, ...advancedCommands];
};

export const getCommandsByCategory = (category: 'beginner' | 'intermediate' | 'advanced'): Command[] => {
  switch(category) {
    case 'beginner': return beginnerCommands;
    case 'intermediate': return intermediateCommands;
    case 'advanced': return advancedCommands;
    default: return [];
  }
};

export const getCommandById = (id: string): Command | undefined => {
  return getAllCommands().find(command => command.id === id);
};
