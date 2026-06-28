'use client';

import { categories } from '@/lib/articles';

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
            selected === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-card text-foreground hover:bg-primary hover:text-primary-foreground'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
