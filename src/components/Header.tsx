// src/components/Header.tsx
import React, { useState } from 'react';
import { Search, Copy, Settings, ChevronDown, Wallet, Shield, Users, Gift } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import WalletManager from '@/components/WalletManager';

interface HeaderProps {
  onSignUp: () => void;
  onLogIn: () => void;
  onWalletClick?: () => void;
  onWalletManagerClick?: () => void;
  onCopyTradeClick?: () => void;
  onHomeClick?: () => void;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  onSignUp, 
  onLogIn, 
  onWalletClick, 
  onWalletManagerClick,
  onCopyTradeClick,
  onHomeClick,
  isLoggedIn = false 
}) => {
  const [isChainDropdownOpen, setIsChainDropdownOpen] = useState(false);
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
  const [showWalletManager, setShowWalletManager] = useState(false);

  // Chain/Network Dropdown (always visible)
  const ChainDropdown = () => (
    <DropdownMenu open={isChainDropdownOpen} onOpenChange={setIsChainDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-1 text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors bg-card border border-border rounded-lg px-2 py-1.5">
          <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">S</span>
          </div>
          <span>SOL</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-popover border border-border">
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">S</span>
          </div>
          <span>SOL</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">E</span>
          </div>
          <span>ETH</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">B</span>
          </div>
          <span>Base</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">B</span>
          </div>
          <span>BSC</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">T</span>
          </div>
          <span>Tron</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  // Wallet Dropdown (only when logged in)
  const WalletDropdown = () => (
    <DropdownMenu open={isWalletDropdownOpen} onOpenChange={setIsWalletDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 bg-card border border-border rounded-lg px-2 py-1.5 hover:bg-muted transition-colors">
          <div className="flex items-center space-x-1">
            <Wallet className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">0</span>
          </div>
          <div className="hidden md:flex items-center space-x-1 text-xs text-muted-foreground">
            <span>ZsZZX...6sz</span>
            <ChevronDown className="w-3 h-3" />
          </div>
          <ChevronDown className="w-3 h-3 md:hidden" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover border border-border">
        <div className="px-3 py-2 border-b border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">My Wallet</span>
            <button className="text-xs text-muted-foreground hover:text-foreground">
              <Settings className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
            <span>ZsZZX...6sz</span>
            <Copy className="w-3 h-3 cursor-pointer hover:text-foreground" />
          </div>
        </div>
        
        <DropdownMenuItem 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            setIsWalletDropdownOpen(false);
            onWalletClick?.();
          }}
        >
          <Wallet className="w-4 h-4" />
          <span>My Wallet</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            setIsWalletDropdownOpen(false);
            onWalletManagerClick?.();
          }}
        >
          <Settings className="w-4 h-4" />
          <span>Wallet Manager</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Security</span>
          </div>
          <span className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded">Not Bound</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <Users className="w-4 h-4" />
          <span>Referral</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <Gift className="w-4 h-4 text-primary" />
          <span>Contest(S6)</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 text-center">🔄</span>
            <span>Deposit/Withdraw/Buy</span>
          </div>
          <span className="text-destructive">•</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <span className="w-4 h-4 text-center">🎯</span>
          <span>TG Alert</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
          <span className="w-4 h-4 text-center">➕</span>
          <span>Add Twitter</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer text-muted-foreground">
          <span className="w-4 h-4 text-center">🔌</span>
          <span>Disconnect</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="flex items-center justify-between p-3 md:p-4 bg-background border-b border-border">
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Clickable Logo/Brand */}
        <button 
          onClick={onHomeClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs md:text-sm">🧪</span>
          </div>
          <span className="text-primary font-semibold text-sm md:text-base">GMGN</span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 ml-8">
          <button 
            onClick={onHomeClick}
            className="text-foreground hover:text-primary text-sm font-medium"
          >
            Trenches
          </button>
          <button className="text-muted-foreground hover:text-foreground text-sm">New pair</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Trending</button>
          <button 
            onClick={onCopyTradeClick}
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            CopyTrade
          </button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Monitor</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Follow</button>
          <button className="text-muted-foreground hover:text-foreground text-sm">Holding</button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Search Bar - Always visible */}
        <div className="hidden md:flex items-center space-x-3 bg-input rounded-lg px-3 py-1.5">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search token/contract/wallet"
            className="bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none w-48"
          />
          <span className="text-xs text-muted-foreground">⌘K</span>
        </div>
        
        {/* Mobile Search Icon */}
        <Search className="w-4 h-4 md:hidden text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        
        {/* Chain/Network Dropdown - Always visible */}
        <ChainDropdown />
        
        {/* Conditional rendering based on login status */}
        {isLoggedIn ? (
          <>
            {/* Wallet Dropdown when logged in */}
            <WalletDropdown />
            
            {/* Settings button */}
            <button className="w-6 h-6 md:w-8 md:h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
              <Settings className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
            </button>
          </>
        ) : (
          <>
            {/* Login/Signup buttons when not logged in */}
            <button
              onClick={onSignUp}
              className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sign Up
            </button>
            <button
              onClick={onLogIn}
              className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
