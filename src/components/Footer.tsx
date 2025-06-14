// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border mt-8">
      <div className="px-3 md:px-4 py-4">
        {/* Main Footer Content */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          {/* Left side links */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Snipe New</span>
              <span className="bg-destructive text-destructive-foreground px-1 rounded text-xs">26</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>👥</span>
              <span>Following</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>📈</span>
              <span>Holding</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🚨</span>
              <span>Trade Alert</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>📊</span>
              <span>PnL</span>
            </button>
          </div>

          {/* Center - Portfolio value */}
          <div className="flex items-center space-x-2">
            <span className="text-foreground font-medium">💰 $144.93</span>
          </div>

          {/* Right side links */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Stable</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🎓</span>
              <span>Tutorial</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>ℹ️</span>
              <span>About</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🤖</span>
              <span>Bot</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>📡</span>
              <span>API</span>
            </button>
            
            <button className="hover:text-foreground transition-colors">
              <span>𝕏</span>
            </button>
            
            <button className="hover:text-foreground transition-colors">
              <span>📱</span>
            </button>
            
            <button className="hover:text-foreground transition-colors">
              <span>💬</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🎁</span>
              <span>Refer</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🏆</span>
              <span>Contest</span>
              <span className="bg-primary text-primary-foreground px-1 rounded text-xs">S6</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>😊</span>
              <span>APP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
