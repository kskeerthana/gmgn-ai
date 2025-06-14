
import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'trenches', label: 'Trenches' },
    { id: 'new', label: 'New' },
    { id: 'trending', label: 'Trending' },
    { id: 'copytrade', label: 'CopyTrade' },
    { id: 'monitor', label: 'Monitor' },
    { id: 'follow', label: 'Follow' },
  ];

  return (
    <nav className="flex items-center space-x-3 md:space-x-6 px-3 md:px-4 py-2 md:py-3 border-b border-border overflow-x-auto scrollbar-hide md:hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`whitespace-nowrap text-xs md:text-sm font-medium transition-colors pb-2 md:pb-3 ${
            activeTab === tab.id
              ? 'text-foreground border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
