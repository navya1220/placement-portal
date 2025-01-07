import React, { useState, useMemo } from 'react';
import { Brain, Dumbbell, Lightbulb, ExternalLink, GraduationCap } from 'lucide-react';
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
  

// DifficultySelector Component
function DifficultySelector({ selectedDifficulty, onSelect }: { selectedDifficulty: Difficulty; onSelect: (difficulty: Difficulty) => void }) {
  const difficulties = [
    { value: 'easy', label: 'Easy', icon: <Lightbulb size={24} />, color: 'bg-green-100 hover:bg-green-200 text-green-700' },
    { value: 'medium', label: 'Medium', icon: <Brain size={24} />, color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700' },
    { value: 'hard', label: 'Hard', icon: <Dumbbell size={24} />, color: 'bg-red-100 hover:bg-red-200 text-red-700' },
  ];

  return (
    <div className="flex gap-4 justify-center mb-8">
      {difficulties.map(({ value, label, icon, color }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={clsx(
            'flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors',
            color,
            selectedDifficulty === value && 'ring-2 ring-offset-2 ring-current'
          )}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
}

// ProblemList Component
function ProblemList({ problems }: { problems: Problem[] }) {
  return (
    <div className="grid gap-4">
      {problems.map((problem) => (
        <div
          key={problem.id}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
              <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                {problem.category}
              </span>
            </div>
            <a
              href={problem.leetcode_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors"
            >
              Solve <ExternalLink size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// App Component
function Dsa() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => problem.difficulty === difficulty);
  }, [difficulty]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <GraduationCap size={32} className="text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">DSA Practice Platform</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <DifficultySelector selectedDifficulty={difficulty} onSelect={setDifficulty} />
        <ProblemList problems={filteredProblems} />
      </main>
    </div>
  );
}

export default Dsa;
