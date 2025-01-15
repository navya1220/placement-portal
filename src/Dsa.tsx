import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, pulse, rotate } from './animations';
import { Brain, Dumbbell, Lightbulb, ExternalLink, GraduationCap, Code, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

// Types
type Difficulty = 'easy' | 'medium' | 'hard';

interface Problem {
  id: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  leetcode_link: string;
}

// Static Problems Data
const problems: Problem[] = [
    {
      id: '1',
      title: 'Two Sum',
      category: 'Array',
      difficulty: 'easy',
      leetcode_link: 'https://leetcode.com/problems/two-sum/'
    },
    {
      id: '2',
      title: 'Valid Parentheses',
      category: 'Stack',
      difficulty: 'easy',
      leetcode_link: 'https://leetcode.com/problems/valid-parentheses/'
    },
    {
      id: '3',
      title: '3Sum',
      category: 'Array',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/3sum/'
    },
    {
      id: '4',
      title: 'Binary Tree Level Order Traversal',
      category: 'Tree',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/'
    },
    {
      id: '5',
      title: 'Longest Valid Parentheses',
      category: 'Stack',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/longest-valid-parentheses/'
    },
    {
      id: '6',
      title: 'Median of Two Sorted Arrays',
      category: 'Array',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/'
    },
    {
      id: '7',
      title: 'Remove Duplicates from Sorted Array',
      category: 'Array',
      difficulty: 'easy',
      leetcode_link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/'
    },
    {
      id: '8',
      title: 'Climbing Stairs',
      category: 'Dynamic Programming',
      difficulty: 'easy',
      leetcode_link: 'https://leetcode.com/problems/climbing-stairs/'
    },
    {
      id: '9',
      title: 'Merge Two Sorted Lists',
      category: 'Linked List',
      difficulty: 'easy',
      leetcode_link: 'https://leetcode.com/problems/merge-two-sorted-lists/'
    },
    {
      id: '10',
      title: 'Best Time to Buy and Sell Stock',
      category: 'Array',
      difficulty: 'easy',
      leetcode_link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
    },
    {
      id: '11',
      title: 'Container With Most Water',
      category: 'Two Pointers',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/container-with-most-water/'
    },
    {
      id: '12',
      title: 'Subarray Sum Equals K',
      category: 'Hash Table',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/subarray-sum-equals-k/'
    },
    {
      id: '13',
      title: 'Generate Parentheses',
      category: 'Backtracking',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/generate-parentheses/'
    },
    {
      id: '14',
      title: 'Coin Change',
      category: 'Dynamic Programming',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/coin-change/'
    },
    {
      id: '15',
      title: 'Longest Palindromic Substring',
      category: 'Dynamic Programming',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/longest-palindromic-substring/'
    },
    {
      id: '16',
      title: 'Word Search',
      category: 'Backtracking',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/word-search/'
    },
    {
      id: '17',
      title: 'Reverse Nodes in k-Group',
      category: 'Linked List',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/'
    },
    {
      id: '18',
      title: 'Merge k Sorted Lists',
      category: 'Heap',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/merge-k-sorted-lists/'
    },
    {
      id: '19',
      title: 'Trapping Rain Water',
      category: 'Array',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/trapping-rain-water/'
    },
    {
      id: '20',
      title: 'Maximum Profit in Job Scheduling',
      category: 'Dynamic Programming',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/'
    },
    {
      id: '21',
      title: 'Shortest Path in Binary Matrix',
      category: 'Graph',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/'
    },
    {
      id: '22',
      title: 'Course Schedule',
      category: 'Graph',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/course-schedule/'
    },
    {
      id: '23',
      title: 'Number of Islands',
      category: 'Graph',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/number-of-islands/'
    },
    {
      id: '24',
      title: 'Sliding Window Maximum',
      category: 'Deque',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/sliding-window-maximum/'
    },
    {
      id: '25',
      title: 'Find Median from Data Stream',
      category: 'Heap',
      difficulty: 'hard',
      leetcode_link: 'https://leetcode.com/problems/find-median-from-data-stream/'
    },
    {
      id: '26',
      title: 'Decode Ways',
      category: 'Dynamic Programming',
      difficulty: 'medium',
      leetcode_link: 'https://leetcode.com/problems/decode-ways/'
    }
  ];
  


function DifficultySelector({ selectedDifficulty, onSelect }: { selectedDifficulty: Difficulty; onSelect: (difficulty: Difficulty) => void }) {
  const difficulties = [
    { value: 'easy', label: 'Easy', icon: <Lightbulb size={24} />, color: 'bg-green-400 hover:bg-green-500 text-white' },
    { value: 'medium', label: 'Medium', icon: <Brain size={24} />, color: 'bg-yellow-400 hover:bg-yellow-500 text-white' },
    { value: 'hard', label: 'Hard', icon: <Dumbbell size={24} />, color: 'bg-red-400 hover:bg-red-500 text-white' },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {difficulties.map(({ value, label, icon, color }) => (
        <motion.button
          key={value}
          onClick={() => onSelect(value)}
          className={clsx(
            'flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors',
            color,
            selectedDifficulty === value && 'ring-4 ring-offset-2 ring-current'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {icon}
          {label}
        </motion.button>
      ))}
    </div>
  );
}

// ProblemList Component
function ProblemList({ problems }: { problems: Problem[] }) {
  return (
    <motion.div 
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {problems.map((problem) => (
        <motion.div
          key={problem.id}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 transition-all transform hover:-translate-y-1 hover:shadow-xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                {problem.category}
              </span>
            </div>
            <motion.a
              href={problem.leetcode_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solve <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// App Component
function Dsa() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => problem.difficulty === difficulty);
  }, [difficulty]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <GraduationCap size={32} className="text-indigo-600" />
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-900">DSA Practice Platform</h1>
            </div>
            <motion.button
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Code size={24} className="text-indigo-600" />
            </motion.button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DifficultySelector selectedDifficulty={difficulty} onSelect={setDifficulty} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProblemList problems={filteredProblems} />
        </motion.div>
      </main>

      {/* Mobile menu */}
      <motion.div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-20 ${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            className="bg-white rounded-lg p-6 w-11/12 max-w-sm"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4">Select Difficulty</h2>
            <DifficultySelector selectedDifficulty={difficulty} onSelect={(newDifficulty) => {
              setDifficulty(newDifficulty);
              setIsMenuOpen(false);
            }} />
            <motion.button
              className="mt-4 w-full py-2 bg-indigo-500 text-white rounded-lg"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Dsa;