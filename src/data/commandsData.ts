
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
    commandCount: 20
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    description: 'Expand your skills with more complex commands',
    icon: 'code',
    level: 'intermediate',
    commandCount: 20
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Master advanced Linux techniques',
    icon: 'settings',
    level: 'advanced',
    commandCount: 15
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
  },
  // New beginner commands
  {
    id: 'rm',
    name: 'rm',
    description: 'Remove files or directories',
    syntax: 'rm [options] file(s)',
    examples: [
      {
        command: 'rm file.txt',
        description: 'Delete a single file',
      },
      {
        command: 'rm -r directory',
        description: 'Delete a directory and its contents recursively',
      },
      {
        command: 'rm -i file.txt',
        description: 'Ask for confirmation before deleting',
      }
    ],
    tips: [
      'Use rm -rf with extreme caution as it forces deletion without confirmation',
      'The rm command permanently deletes files (no trash/recycle bin)',
      'Use wildcards carefully to avoid accidental deletions'
    ],
    category: 'beginner',
    tags: ['file', 'delete', 'remove']
  },
  {
    id: 'cp',
    name: 'cp',
    description: 'Copy files and directories',
    syntax: 'cp [options] source destination',
    examples: [
      {
        command: 'cp file.txt backup.txt',
        description: 'Copy a file to a new file',
      },
      {
        command: 'cp file.txt /home/user/Documents/',
        description: 'Copy a file to another directory',
      },
      {
        command: 'cp -r Documents/ Backup/',
        description: 'Copy a directory and its contents recursively',
      }
    ],
    tips: [
      'Use cp -r for copying directories',
      'Use cp -i for interactive mode (asks before overwriting)',
      'Use cp -p to preserve file attributes like timestamps'
    ],
    category: 'beginner',
    tags: ['file', 'copy', 'duplicate']
  },
  {
    id: 'mv',
    name: 'mv',
    description: 'Move or rename files and directories',
    syntax: 'mv [options] source destination',
    examples: [
      {
        command: 'mv file.txt newname.txt',
        description: 'Rename a file',
      },
      {
        command: 'mv file.txt /home/user/Documents/',
        description: 'Move a file to another directory',
      },
      {
        command: 'mv -i old.txt new.txt',
        description: 'Move with confirmation if overwriting',
      }
    ],
    tips: [
      'mv can both move and rename files in a single operation',
      'Use mv -i to be prompted before overwriting files',
      'Unlike cp, you don\'t need a special flag for directories'
    ],
    category: 'beginner',
    tags: ['file', 'move', 'rename']
  },
  {
    id: 'touch',
    name: 'touch',
    description: 'Create empty files or update file timestamps',
    syntax: 'touch [options] file(s)',
    examples: [
      {
        command: 'touch newfile.txt',
        description: 'Create a new empty file',
      },
      {
        command: 'touch -a file.txt',
        description: 'Update only the access time',
      },
      {
        command: 'touch file1.txt file2.txt file3.txt',
        description: 'Create multiple files at once',
      }
    ],
    tips: [
      'If the file already exists, touch updates its timestamp',
      'Use touch -c to avoid creating new files if they don\'t exist',
      'Useful for creating placeholder files quickly'
    ],
    category: 'beginner',
    tags: ['file', 'create', 'timestamp']
  },
  {
    id: 'less',
    name: 'less',
    description: 'View file contents with scrolling',
    syntax: 'less [options] file',
    examples: [
      {
        command: 'less file.txt',
        description: 'View a text file with scrolling capabilities',
      },
      {
        command: 'less -N file.txt',
        description: 'Show line numbers while viewing file',
      }
    ],
    tips: [
      'Press q to exit less',
      'Use / to search for text (n for next match)',
      'Use spacebar to scroll down a page, b to scroll back'
    ],
    category: 'beginner',
    tags: ['file', 'view', 'scroll']
  },
  {
    id: 'head',
    name: 'head',
    description: 'Display the beginning of files',
    syntax: 'head [options] file(s)',
    examples: [
      {
        command: 'head file.txt',
        description: 'Display the first 10 lines of a file',
        output: 'Line 1\nLine 2\n...\nLine 10'
      },
      {
        command: 'head -n 5 file.txt',
        description: 'Display the first 5 lines of a file',
        output: 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5'
      }
    ],
    tips: [
      'Default behavior shows first 10 lines',
      'Use head -n X to show X number of lines',
      'Can be used with pipes for filtering output'
    ],
    category: 'beginner',
    tags: ['file', 'display', 'beginning']
  },
  {
    id: 'tail',
    name: 'tail',
    description: 'Display the end of files',
    syntax: 'tail [options] file(s)',
    examples: [
      {
        command: 'tail file.txt',
        description: 'Display the last 10 lines of a file',
        output: 'Line 91\nLine 92\n...\nLine 100'
      },
      {
        command: 'tail -n 5 file.txt',
        description: 'Display the last 5 lines of a file',
        output: 'Line 96\nLine 97\nLine 98\nLine 99\nLine 100'
      },
      {
        command: 'tail -f log.txt',
        description: 'Follow the file as it grows (useful for logs)',
      }
    ],
    tips: [
      'Default behavior shows last 10 lines',
      'Use tail -n X to show X number of lines',
      'tail -f is extremely useful for monitoring log files in real-time'
    ],
    category: 'beginner',
    tags: ['file', 'display', 'end', 'logs']
  },
  {
    id: 'chmod',
    name: 'chmod',
    description: 'Change file permissions',
    syntax: 'chmod [options] mode file(s)',
    examples: [
      {
        command: 'chmod 755 script.sh',
        description: 'Make a script executable (rwx for owner, rx for others)',
      },
      {
        command: 'chmod +x script.sh',
        description: 'Add execute permission for all users',
      },
      {
        command: 'chmod -R 644 directory/',
        description: 'Recursively set permissions on all files in a directory',
      }
    ],
    tips: [
      'Numeric mode: 4 for read (r), 2 for write (w), 1 for execute (x)',
      'Use +/- to add or remove specific permissions',
      'Use u (user), g (group), o (others), a (all) to specify user categories'
    ],
    category: 'beginner',
    tags: ['file', 'permissions', 'security']
  },
  {
    id: 'echo',
    name: 'echo',
    description: 'Display text or variables',
    syntax: 'echo [options] [string...]',
    examples: [
      {
        command: 'echo "Hello World"',
        description: 'Display text',
        output: 'Hello World'
      },
      {
        command: 'echo $HOME',
        description: 'Display the value of an environment variable',
        output: '/home/user'
      },
      {
        command: 'echo -e "Line 1\\nLine 2"',
        description: 'Display multiple lines with escape sequences',
        output: 'Line 1\nLine 2'
      }
    ],
    tips: [
      'Use echo -e to enable interpretation of backslash escapes',
      'Useful for printing environment variables',
      'Often combined with > or >> to write content to files'
    ],
    category: 'beginner',
    tags: ['display', 'text', 'variable']
  },
  {
    id: 'man',
    name: 'man',
    description: 'Display manual pages for commands',
    syntax: 'man [options] command',
    examples: [
      {
        command: 'man ls',
        description: 'Display the manual page for the ls command',
      },
      {
        command: 'man -k search_term',
        description: 'Search manual pages for a specific term',
      }
    ],
    tips: [
      'Press q to exit the manual viewer',
      'Use / to search within the manual page',
      'man -k is equivalent to the apropos command for finding relevant commands'
    ],
    category: 'beginner',
    tags: ['help', 'documentation', 'reference']
  },
  {
    id: 'history',
    name: 'history',
    description: 'Display command history',
    syntax: 'history [options]',
    examples: [
      {
        command: 'history',
        description: 'Show the command history list',
        output: '1 ls\n2 cd Documents\n3 cat file.txt'
      },
      {
        command: 'history 5',
        description: 'Show the last 5 commands',
        output: '26 cat file.txt\n27 ls -la\n28 pwd\n29 cd ..\n30 history'
      },
      {
        command: '!23',
        description: 'Re-execute command number 23 from history',
      }
    ],
    tips: [
      'Use Up/Down arrow keys to navigate through previous commands',
      'Use Ctrl+R for reverse search in history',
      'Use !n to repeat command number n from history'
    ],
    category: 'beginner',
    tags: ['shell', 'history', 'command']
  },
  {
    id: 'clear',
    name: 'clear',
    description: 'Clear the terminal screen',
    syntax: 'clear',
    examples: [
      {
        command: 'clear',
        description: 'Clear the entire terminal screen',
      }
    ],
    tips: [
      'Keyboard shortcut Ctrl+L often works the same way',
      'Doesn\'t actually delete the terminal history, just scrolls it out of view',
      'Use reset for a more thorough terminal reset if things get corrupted'
    ],
    category: 'beginner',
    tags: ['terminal', 'screen', 'display']
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
  },
  // New intermediate commands
  {
    id: 'ps',
    name: 'ps',
    description: 'Display information about running processes',
    syntax: 'ps [options]',
    examples: [
      {
        command: 'ps',
        description: 'Show processes for the current user',
        output: '  PID TTY          TIME CMD\n 1234 pts/0    00:00:01 bash\n 5678 pts/0    00:00:00 ps'
      },
      {
        command: 'ps aux',
        description: 'Show all running processes in BSD format',
        output: 'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1 168940  9128 ?        Ss   10:30   0:01 /sbin/init\nuser      1234  0.1  0.2 456789 12345 pts/0    Ss   11:00   0:02 bash'
      },
      {
        command: 'ps -ef',
        description: 'Show all processes in full format',
        output: 'UID        PID  PPID  C STIME TTY          TIME CMD\nroot         1     0  0 10:30 ?        00:00:01 /sbin/init\nuser      1234  1200  0 11:00 pts/0    00:00:02 bash'
      }
    ],
    tips: [
      'Use ps aux | grep [program] to find specific processes',
      'ps -ef shows the parent process IDs (PPID) which is useful for understanding process relationships',
      'Common options: a (all users), u (user-oriented format), x (processes without terminals)'
    ],
    category: 'intermediate',
    tags: ['process', 'system', 'monitor']
  },
  {
    id: 'kill',
    name: 'kill',
    description: 'Terminate processes',
    syntax: 'kill [options] [pid...]',
    examples: [
      {
        command: 'kill 1234',
        description: 'Terminate process with PID 1234 (sends SIGTERM)',
      },
      {
        command: 'kill -9 1234',
        description: 'Force terminate process with PID 1234 (SIGKILL)',
      },
      {
        command: 'kill -l',
        description: 'List all available signals',
        output: ' 1) SIGHUP   2) SIGINT   3) SIGQUIT   4) SIGILL   5) SIGTRAP\n 6) SIGABRT   7) SIGBUS   8) SIGFPE   9) SIGKILL  10) SIGUSR1'
      }
    ],
    tips: [
      'SIGTERM (15) requests graceful termination (default)',
      'SIGKILL (9) forces termination and cannot be ignored or caught',
      'Use killall or pkill to kill processes by name instead of PID'
    ],
    category: 'intermediate',
    tags: ['process', 'terminate', 'signal']
  },
  {
    id: 'top',
    name: 'top',
    description: 'Display and manage system processes',
    syntax: 'top [options]',
    examples: [
      {
        command: 'top',
        description: 'Display a dynamic real-time view of running processes',
      },
      {
        command: 'top -u username',
        description: 'Display only processes owned by a specific user',
      }
    ],
    tips: [
      'Press q to quit top',
      'Press k to kill a process (will prompt for PID)',
      'Press M to sort by memory usage, P to sort by CPU usage',
      'Press h for help with all available commands'
    ],
    category: 'intermediate',
    tags: ['process', 'monitor', 'system', 'performance']
  },
  {
    id: 'df',
    name: 'df',
    description: 'Report file system disk space usage',
    syntax: 'df [options] [file...]',
    examples: [
      {
        command: 'df',
        description: 'Show disk space usage for all mounted filesystems',
        output: 'Filesystem     1K-blocks    Used Available Use% Mounted on\n/dev/sda1      61545556 8506068  49995488  15% /\n/dev/sdb1     961432088 750259 912001112   1% /mnt/data'
      },
      {
        command: 'df -h',
        description: 'Show disk space usage in human-readable format',
        output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        59G  8.2G   48G  15% /\n/dev/sdb1       917G  733M  870G   1% /mnt/data'
      }
    ],
    tips: [
      'Use df -h for human-readable sizes (MB, GB)',
      'Use df -T to show filesystem types',
      'Specify a path to see which filesystem it belongs to'
    ],
    category: 'intermediate',
    tags: ['disk', 'storage', 'filesystem', 'system']
  },
  {
    id: 'du',
    name: 'du',
    description: 'Estimate file space usage',
    syntax: 'du [options] [file...]',
    examples: [
      {
        command: 'du -sh *',
        description: 'Show the size of files and directories in current directory',
        output: '4.0K    file.txt\n156M    Documents\n2.3G    Videos'
      },
      {
        command: 'du -h --max-depth=1 /home',
        description: 'Show sizes of immediate subdirectories in /home',
        output: '156M    /home/user1\n2.3G    /home/user2\n2.5G    /home'
      }
    ],
    tips: [
      'Use du -h for human-readable sizes',
      'Use du -s to show only a total for each argument',
      'Use --max-depth=N to limit the recursion depth'
    ],
    category: 'intermediate',
    tags: ['disk', 'storage', 'size', 'directory']
  },
  {
    id: 'tar',
    name: 'tar',
    description: 'Manipulate archive files',
    syntax: 'tar [options] [file...]',
    examples: [
      {
        command: 'tar -czvf archive.tar.gz directory/',
        description: 'Create a compressed tar archive of a directory',
      },
      {
        command: 'tar -xzvf archive.tar.gz',
        description: 'Extract a compressed tar archive',
      },
      {
        command: 'tar -tzvf archive.tar.gz',
        description: 'List the contents of a compressed tar archive',
        output: 'drwxr-xr-x user/user 0 2023-04-14 10:00 directory/\n-rw-r--r-- user/user 1024 2023-04-14 09:50 directory/file1.txt'
      }
    ],
    tips: [
      'Common options: c (create), x (extract), t (list), v (verbose), f (file), z (gzip)',
      'Order of options matters in tar command',
      'Use j instead of z for bzip2 compression (.tar.bz2)'
    ],
    category: 'intermediate',
    tags: ['archive', 'compress', 'backup']
  },
  {
    id: 'curl',
    name: 'curl',
    description: 'Transfer data from or to a server',
    syntax: 'curl [options] [URL...]',
    examples: [
      {
        command: 'curl https://example.com',
        description: 'Fetch the content of a web page',
        output: '<!doctype html>\n<html>\n<head>\n<title>Example Domain</title>\n...'
      },
      {
        command: 'curl -o file.html https://example.com',
        description: 'Save the output to a file',
      },
      {
        command: 'curl -I https://example.com',
        description: 'Fetch only HTTP headers',
        output: 'HTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nDate: Mon, 14 Apr 2025 10:36:10 GMT\n...'
      }
    ],
    tips: [
      'Use -O to save with the original filename from the URL',
      'Use -L to follow redirects',
      'Use -H "Header: Value" to add custom headers to the request'
    ],
    category: 'intermediate',
    tags: ['network', 'download', 'http', 'api']
  },
  {
    id: 'wget',
    name: 'wget',
    description: 'Non-interactive network downloader',
    syntax: 'wget [options] [URL...]',
    examples: [
      {
        command: 'wget https://example.com/file.zip',
        description: 'Download a file',
      },
      {
        command: 'wget -r -np -k https://example.com/',
        description: 'Recursively download a website',
      },
      {
        command: 'wget -c https://example.com/largefile.iso',
        description: 'Continue an interrupted download',
      }
    ],
    tips: [
      'Use -c to resume partially downloaded files',
      'Use -b to download in the background',
      'Use --limit-rate=100k to limit bandwidth usage'
    ],
    category: 'intermediate',
    tags: ['network', 'download', 'http']
  },
  {
    id: 'ssh',
    name: 'ssh',
    description: 'Secure Shell remote login',
    syntax: 'ssh [options] [user@]hostname [command]',
    examples: [
      {
        command: 'ssh user@server.example.com',
        description: 'Connect to a remote server',
      },
      {
        command: 'ssh -p 2222 user@server.example.com',
        description: 'Connect using a specific port',
      },
      {
        command: 'ssh user@server.example.com "ls -la"',
        description: 'Execute a command on a remote server without logging in',
      }
    ],
    tips: [
      'Use ssh-keygen to create SSH key pairs for password-less login',
      'Use ~/.ssh/config to configure hosts for easier connections',
      'Use -X for X11 forwarding (graphical applications)'
    ],
    category: 'intermediate',
    tags: ['network', 'remote', 'security']
  },
  {
    id: 'scp',
    name: 'scp',
    description: 'Securely copy files between hosts',
    syntax: 'scp [options] [[user@]host1:]file1 [[user@]host2:]file2',
    examples: [
      {
        command: 'scp file.txt user@server:~/documents/',
        description: 'Copy a local file to a remote server',
      },
      {
        command: 'scp user@server:~/file.txt /local/directory/',
        description: 'Copy a remote file to the local machine',
      },
      {
        command: 'scp -r directory/ user@server:~/backups/',
        description: 'Copy an entire directory to a remote server',
      }
    ],
    tips: [
      'Use -r for recursive copying of directories',
      'Use -P to specify a port (note uppercase P, unlike ssh)',
      'Use -C to enable compression for faster transfers of text files'
    ],
    category: 'intermediate',
    tags: ['network', 'file transfer', 'security']
  },
  {
    id: 'rsync',
    name: 'rsync',
    description: 'Fast, versatile file copying tool',
    syntax: 'rsync [options] source destination',
    examples: [
      {
        command: 'rsync -av source/ destination/',
        description: 'Sync directories, preserving attributes',
      },
      {
        command: 'rsync -avz --progress source/ user@host:destination/',
        description: 'Sync to remote server with compression and progress display',
      },
      {
        command: 'rsync -av --delete source/ destination/',
        description: 'Sync directories and delete files in destination that are not in source',
      }
    ],
    tips: [
      'Use trailing slash on source to copy contents (not the directory itself)',
      'Use -n or --dry-run to see what would happen without making changes',
      'More efficient than cp for large directories as it only transfers differences'
    ],
    category: 'intermediate',
    tags: ['file transfer', 'sync', 'backup']
  },
  {
    id: 'crontab',
    name: 'crontab',
    description: 'Schedule periodic tasks',
    syntax: 'crontab [options]',
    examples: [
      {
        command: 'crontab -l',
        description: 'List current user\'s cron jobs',
        output: '0 2 * * * /bin/sh backup.sh\n30 8 * * 1-5 /usr/bin/reminder'
      },
      {
        command: 'crontab -e',
        description: 'Edit current user\'s cron jobs',
      },
      {
        command: '0 2 * * * /bin/sh backup.sh',
        description: 'Crontab entry to run backup.sh at 2 AM daily',
      }
    ],
    tips: [
      'Format: minute hour day-of-month month day-of-week command',
      'Use * as wildcard for "any" in time/date fields',
      'Use @reboot to run a command when system starts'
    ],
    category: 'intermediate',
    tags: ['schedule', 'automation', 'task']
  },
  {
    id: 'systemctl',
    name: 'systemctl',
    description: 'Control the systemd system and service manager',
    syntax: 'systemctl [options] command [name]',
    examples: [
      {
        command: 'systemctl status apache2',
        description: 'Check the status of a service',
        output: '● apache2.service - The Apache HTTP Server\n   Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)\n   Active: active (running) since Mon 2025-04-14 09:15:07 UTC; 2h 24min ago'
      },
      {
        command: 'sudo systemctl restart apache2',
        description: 'Restart a service',
      },
      {
        command: 'sudo systemctl enable apache2',
        description: 'Enable a service to start at boot',
      }
    ],
    tips: [
      'Common commands: start, stop, restart, enable, disable, status',
      'Use systemctl list-units --type=service to see all services',
      'Use systemctl is-active service-name to check if a service is running'
    ],
    category: 'intermediate',
    tags: ['system', 'service', 'daemon', 'management']
  },
  {
    id: 'journalctl',
    name: 'journalctl',
    description: 'Query the systemd journal',
    syntax: 'journalctl [options]',
    examples: [
      {
        command: 'journalctl',
        description: 'Show all collected log messages',
      },
      {
        command: 'journalctl -u apache2',
        description: 'Show logs from a specific service',
      },
      {
        command: 'journalctl --since="2025-04-14" --until="2025-04-15"',
        description: 'Show logs from a specific time period',
      }
    ],
    tips: [
      'Use -f to follow logs in real-time (similar to tail -f)',
      'Use -n 100 to show only the last 100 log entries',
      'Use -p err to show only error messages'
    ],
    category: 'intermediate',
    tags: ['logs', 'system', 'troubleshooting']
  },
  {
    id: 'netstat',
    name: 'netstat',
    description: 'Network statistics',
    syntax: 'netstat [options]',
    examples: [
      {
        command: 'netstat -tuln',
        description: 'Show listening TCP and UDP ports with numeric addresses',
        output: 'Proto Recv-Q Send-Q Local Address           Foreign Address         State\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN\ntcp6       0      0 :::80                   :::*                    LISTEN'
      },
      {
        command: 'netstat -anp',
        description: 'Show all connections with processes (numeric)',
      },
      {
        command: 'netstat -r',
        description: 'Show routing table',
      }
    ],
    tips: [
      'Common options: t (TCP), u (UDP), l (listening), n (numeric), p (programs)',
      'Use sudo for more detailed output with process information',
      'Being replaced by ss in newer systems'
    ],
    category: 'intermediate',
    tags: ['network', 'connections', 'monitoring', 'ports']
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
  },
  // New advanced commands
  {
    id: 'tcpdump',
    name: 'tcpdump',
    description: 'Dump network traffic',
    syntax: 'tcpdump [options] [expression]',
    examples: [
      {
        command: 'sudo tcpdump -i eth0',
        description: 'Capture packets on the eth0 interface',
        output: '12:08:41.430853 IP host1.ssh > host2.12345: tcp 76'
      },
      {
        command: 'sudo tcpdump -i any port 80',
        description: 'Capture HTTP traffic on any interface',
        output: '12:09:03.951853 IP host3.12345 > host4.http: tcp 1448'
      },
      {
        command: 'sudo tcpdump -n -i eth0 "tcp port 22"',
        description: 'Capture SSH traffic without DNS resolution',
      }
    ],
    tips: [
      'Use -w file.pcap to save captures to a file',
      'Use -r file.pcap to read from a capture file',
      'Use filters like "host", "port", "tcp", "icmp" to narrow down traffic',
      'Use -n to skip DNS resolution for faster output'
    ],
    category: 'advanced',
    tags: ['network', 'packet', 'capture', 'analysis']
  },
  {
    id: 'strace',
    name: 'strace',
    description: 'Trace system calls and signals',
    syntax: 'strace [options] command [args]',
    examples: [
      {
        command: 'strace ls',
        description: 'Trace system calls made by the ls command',
        output: 'execve("/bin/ls", ["ls"], 0x7ffcdb7aee48 /* 21 vars */) = 0\nbrk(NULL)                               = 0x55d89f250000\n...'
      },
      {
        command: 'strace -p 1234',
        description: 'Attach to running process with PID 1234',
      },
      {
        command: 'strace -e open,read ls',
        description: 'Trace only specific system calls',
      }
    ],
    tips: [
      'Use -f to trace child processes',
      'Use -o file to send output to a file',
      'Use -c for a summary of system calls and timing',
      'Very useful for debugging when programs fail mysteriously'
    ],
    category: 'advanced',
    tags: ['debugging', 'system calls', 'process', 'analysis']
  },
  {
    id: 'lsof',
    name: 'lsof',
    description: 'List open files',
    syntax: 'lsof [options]',
    examples: [
      {
        command: 'lsof -i:80',
        description: 'Show processes using port 80',
        output: 'apache2 12345 www-data    4u  IPv6 12345678      0t0  TCP *:http (LISTEN)'
      },
      {
        command: 'lsof -p 1234',
        description: 'Show files opened by process with PID 1234',
      },
      {
        command: 'lsof /path/to/file',
        description: 'Show processes that have opened a specific file',
      }
    ],
    tips: [
      'Use -i for network connections (e.g., -i:22 for SSH port)',
      'Use -u user to see files opened by a specific user',
      'Powerful for finding what's keeping a filesystem mounted or a port in use'
    ],
    category: 'advanced',
    tags: ['files', 'processes', 'troubleshooting', 'network']
  },
  {
    id: 'dd',
    name: 'dd',
    description: 'Convert and copy files',
    syntax: 'dd [operands]',
    examples: [
      {
        command: 'dd if=/dev/zero of=file.img bs=1M count=100',
        description: 'Create a 100MB file filled with zeros',
      },
      {
        command: 'dd if=/dev/sda of=/dev/sdb bs=4M',
        description: 'Clone one disk to another',
      },
      {
        command: 'dd if=/dev/urandom of=random.dat bs=1M count=1',
        description: 'Create a file with random data',
      }
    ],
    tips: [
      'Use status=progress to see ongoing progress',
      'Be extremely careful with device names to avoid data loss',
      'Common options: if (input file), of (output file), bs (block size), count (number of blocks)'
    ],
    category: 'advanced',
    tags: ['disk', 'backup', 'copy', 'image']
  },
  {
    id: 'iptables',
    name: 'iptables',
    description: 'Administration tool for IPv4 packet filtering and NAT',
    syntax: 'iptables [options] command chain rule-specification',
    examples: [
      {
        command: 'sudo iptables -L',
        description: 'List all current rules',
        output: 'Chain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED\nACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh'
      },
      {
        command: 'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
        description: 'Allow incoming SSH connections',
      },
      {
        command: 'sudo iptables -A INPUT -p tcp --dport 80 -j DROP',
        description: 'Block incoming HTTP connections',
      }
    ],
    tips: [
      'Common options: -A (append), -D (delete), -I (insert), -L (list), -F (flush)',
      'Common targets: ACCEPT, DROP, REJECT',
      'Use -t to specify table (filter is default)',
      'Add rules to /etc/iptables/rules.v4 for persistence'
    ],
    category: 'advanced',
    tags: ['firewall', 'network', 'security']
  },
  {
    id: 'xargs',
    name: 'xargs',
    description: 'Build and execute commands from standard input',
    syntax: 'xargs [options] [command [initial-arguments]]',
    examples: [
      {
        command: 'find . -name "*.log" | xargs rm',
        description: 'Find and remove all .log files',
      },
      {
        command: 'cat urls.txt | xargs wget',
        description: 'Download all URLs listed in a file',
      },
      {
        command: 'find . -name "*.jpg" | xargs -I{} cp {} /backup/images/',
        description: 'Find all JPG files and copy them to a backup directory',
      }
    ],
    tips: [
      'Use -I{} to reference the input within the command',
      'Use -n to specify max arguments per command line',
      'Use -P to run multiple processes in parallel',
      'Use -0 with find -print0 for handling filenames with spaces'
    ],
    category: 'advanced',
    tags: ['command line', 'automation', 'batch processing']
  },
  {
    id: 'tee',
    name: 'tee',
    description: 'Read from standard input and write to files and standard output',
    syntax: 'tee [options] [file...]',
    examples: [
      {
        command: 'echo "Hello" | tee file.txt',
        description: 'Write "Hello" to both the terminal and file.txt',
        output: 'Hello'
      },
      {
        command: 'ls -la | tee output.txt | grep ".txt"',
        description: 'Save full directory listing while filtering display for text files',
      },
      {
        command: 'echo "Appended text" | tee -a file.txt',
        description: 'Append text to a file while also showing it in the terminal',
        output: 'Appended text'
      }
    ],
    tips: [
      'Use -a to append to files instead of overwriting',
      'Useful in pipelines when you want to save intermediate output',
      'Can write to multiple files simultaneously'
    ],
    category: 'advanced',
    tags: ['output', 'redirection', 'pipes']
  },
  {
    id: 'screen',
    name: 'screen',
    description: 'Terminal multiplexer with session management',
    syntax: 'screen [options]',
    examples: [
      {
        command: 'screen',
        description: 'Start a new screen session',
      },
      {
        command: 'screen -ls',
        description: 'List running screen sessions',
        output: 'There is a screen on:\n\t12345.pts-0.hostname\t(Detached)'
      },
      {
        command: 'screen -r 12345',
        description: 'Reattach to a detached screen session',
      }
    ],
    tips: [
      'Press Ctrl-a d to detach from a session',
      'Press Ctrl-a c to create a new window in the current session',
      'Press Ctrl-a " to list and select windows',
      'Sessions persist even if you disconnect, great for remote work'
    ],
    category: 'advanced',
    tags: ['terminal', 'session', 'multiplexer']
  },
  {
    id: 'tmux',
    name: 'tmux',
    description: 'Terminal multiplexer',
    syntax: 'tmux [options] [command]',
    examples: [
      {
        command: 'tmux',
        description: 'Start a new tmux session',
      },
      {
        command: 'tmux ls',
        description: 'List running tmux sessions',
        output: '0: 1 windows (created Mon Apr 14 12:00:00 2025) [80x24]'
      },
      {
        command: 'tmux attach -t 0',
        description: 'Attach to session number 0',
      }
    ],
    tips: [
      'Press Ctrl-b d to detach from a session',
      'Press Ctrl-b c to create a new window',
      'Press Ctrl-b % to split the pane vertically',
      'Press Ctrl-b " to split the pane horizontally',
      'More modern alternative to screen with better features'
    ],
    category: 'advanced',
    tags: ['terminal', 'session', 'multiplexer']
  },
  {
    id: 'nmap',
    name: 'nmap',
    description: 'Network exploration tool and security scanner',
    syntax: 'nmap [options] target',
    examples: [
      {
        command: 'nmap 192.168.1.0/24',
        description: 'Scan all hosts in a network',
        output: 'Nmap scan report for 192.168.1.1\nHost is up (0.0050s latency).\nAll 1000 scanned ports on 192.168.1.1 are filtered'
      },
      {
        command: 'nmap -p 22,80,443 example.com',
        description: 'Scan specific ports on a host',
      },
      {
        command: 'nmap -sV 192.168.1.10',
        description: 'Scan for service versions',
      }
    ],
    tips: [
      'Common scan types: -sS (SYN scan), -sT (connect scan), -sU (UDP scan)',
      'Use -O for OS detection',
      'Use -A for aggressive scan (OS detection, version detection, script scanning)',
      'Always ensure you have permission to scan targets'
    ],
    category: 'advanced',
    tags: ['network', 'security', 'scanner', 'reconnaissance']
  },
  {
    id: 'openssl',
    name: 'openssl',
    description: 'Cryptography toolkit',
    syntax: 'openssl command [options]',
    examples: [
      {
        command: 'openssl genrsa -out private.key 2048',
        description: 'Generate a 2048-bit RSA private key',
      },
      {
        command: 'openssl req -new -key private.key -out cert.csr',
        description: 'Create a certificate signing request',
      },
      {
        command: 'openssl enc -aes-256-cbc -salt -in file.txt -out file.enc',
        description: 'Encrypt a file using AES-256-CBC',
      }
    ],
    tips: [
      'Use req -x509 to create self-signed certificates',
      'Use s_client to test SSL/TLS connections',
      'Use dgst for hashing files (e.g., sha256, md5)',
      'Extremely versatile for all cryptography-related tasks'
    ],
    category: 'advanced',
    tags: ['security', 'encryption', 'certificates', 'cryptography']
  },
  {
    id: 'nc',
    name: 'nc (netcat)',
    description: 'Networking utility for reading from and writing to network connections',
    syntax: 'nc [options] [host] [port]',
    examples: [
      {
        command: 'nc -l 1234',
        description: 'Listen on port 1234',
      },
      {
        command: 'nc 192.168.1.10 80',
        description: 'Connect to a server on port 80',
      },
      {
        command: 'nc -l 1234 > received_file.txt',
        description: 'Receive a file on port 1234 and save it',
      }
    ],
    tips: [
      'Can be used to create simple chat servers, transfer files, port scanning',
      'Use -v for verbose output',
      'Use -z for port scanning without sending data',
      'Often called the "Swiss Army knife" of networking tools'
    ],
    category: 'advanced',
    tags: ['network', 'connection', 'socket', 'transfer']
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
