// src/pages/Index.tsx
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import TokenCard from '@/components/TokenCard';
import AuthModal from '@/components/AuthModal';
import TradingView from '@/components/TradingView';
import WalletView from '@/components/WalletView';
import WalletManager from '@/components/WalletManager';
import CopyTrade from '@/components/CopyTrade';
import TraderProfile from '@/components/TraderProfile';
import { Search, Filter, Settings, Zap, ChevronDown, Pause } from 'lucide-react';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('trenches');
  const [selectedToken, setSelectedToken] = useState<any>(null);
  const [showWallet, setShowWallet] = useState(false);
  const [showWalletManager, setShowWalletManager] = useState(false);
  const [showCopyTrade, setShowCopyTrade] = useState(false);
  const [showTraderProfile, setShowTraderProfile] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState<any>(null);

  // Mock data for New Creations section
  const newCreationsTokens = [
    {
      name: "KDACOIN",
      symbol: "KDA",
      avatar: "",
      address: "7Xptx...ump",
      age: "1s",
      change1h: 20.1,
      change5m: 10,
      change1m: 10,
      volume: "V $491.6",
      marketCap: "MC $5K",
      holders: 1,
      transactions: 4,
      price: "$0.005",
      status: "new"
    },
    // ... more tokens
  ];

  const completingTokens = [
    {
      name: "WAR We Are Retarded",
      symbol: "WAR",
      avatar: "",
      address: "4Q7Zj...ump",
      age: "58m",
      change1h: 92.4,
      change5m: 73,
      change1m: 0,
      volume: "V $10.2K",
      marketCap: "MC $40.3K",
      holders: 395,
      transactions: 512,
      price: "$0.040",
      status: "completing"
    },
    // ... more tokens
  ];

  const completedTokens = [
    {
      name: "COD Cat Of Duty",
      symbol: "COD",
      avatar: "",
      address: "6yb2V...RS8",
      age: "3m",
      change1h: 1,
      change5m: 2,
      change1m: 2,
      volume: "V $2.1K",
      marketCap: "MC $2.8K",
      holders: 1,
      transactions: 51,
      price: "$0.003",
      status: "completed"
    },
    // ... more tokens
  ];

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleHomeClick = () => {
    // Reset all views to show home/market analytics
    setSelectedToken(null);
    setShowWallet(false);
    setShowWalletManager(false);
    setShowCopyTrade(false);
    setShowTraderProfile(false);
    setActiveTab('trenches');
  };

  // Navigation logic - check what to show
  if (selectedToken) {
    return (
      <TradingView
        tokenName={selectedToken.name}
        tokenSymbol={selectedToken.symbol}
        price={selectedToken.price}
        change24h={selectedToken.change1h}
        onClose={() => setSelectedToken(null)}
      />
    );
  }

  if (showWallet) {
    return <WalletView onClose={() => setShowWallet(false)} />;
  }

  if (showWalletManager) {
    return <WalletManager onClose={() => setShowWalletManager(false)} />;
  }

  if (showCopyTrade) {
    return <CopyTrade onClose={() => setShowCopyTrade(false)} />;
  }

  if (showTraderProfile && selectedTrader) {
    return <TraderProfile trader={selectedTrader} onClose={() => setShowTraderProfile(false)} />;
  }

  // Section Component for each column
  const TokenSection = ({ 
    title, 
    icon, 
    tokens, 
    statusColor = "text-primary",
    showPauseIcon = false 
  }: {
    title: string;
    icon: string;
    tokens: any[];
    statusColor?: string;
    showPauseIcon?: boolean;
  }) => (
    <div className="flex-1 min-w-0">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={statusColor}>{icon}</span>
          <h3 className="text-foreground font-medium text-sm">{title}</h3>
          {title === "Completing" && (
            <button className="text-muted-foreground hover:text-foreground">
              <Pause className="w-4 h-4" />
            </button>
          )}
          <button className="text-muted-foreground hover:text-foreground">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-card rounded-lg p-2 flex-1 max-w-[200px]">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none flex-1"
            />
          </div>
          <button className="flex items-center space-x-1 px-3 py-2 text-xs font-medium text-foreground bg-card rounded-lg hover:bg-muted transition-colors">
            <Filter className="w-3 h-3" />
            <span>Filter</span>
          </button>
        </div>
        <button className="flex items-center space-x-1 px-3 py-2 text-xs font-medium text-primary bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors">
          <Zap className="w-3 h-3" />
          <span>Buy</span>
        </button>
      </div>

      {/* Token Cards */}
      <div className="space-y-3">
        {tokens.map((token, index) => (
          <TokenCard
            key={index}
            {...token}
            onClick={() => setSelectedToken(token)}
          />
        ))}
      </div>
    </div>
  );

  // Floating Footer Component
  const FloatingFooter = () => (
    <footer className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-40">
      <div className="px-3 md:px-4 py-2 md:py-3">
        <div className="flex flex-wrap items-center justify-between gap-2 md:gap-4 text-xs text-muted-foreground">
          {/* Left side links */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Snipe New</span>
              <span className="bg-destructive text-destructive-foreground px-1 rounded text-xs">26</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>👥</span>
              <span className="hidden sm:inline">Following</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>📈</span>
              <span className="hidden sm:inline">Holding</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🚨</span>
              <span className="hidden md:inline">Trade Alert</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>📊</span>
              <span className="hidden md:inline">PnL</span>
            </button>
          </div>

          {/* Center - Portfolio value */}
          <div className="flex items-center space-x-2">
            <span className="text-foreground font-medium">💰 $144.93</span>
          </div>

          {/* Right side links */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="hidden sm:inline">Stable</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🎓</span>
              <span className="hidden md:inline">Tutorial</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>ℹ️</span>
              <span className="hidden md:inline">About</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🤖</span>
              <span className="hidden md:inline">Bot</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>📡</span>
              <span className="hidden md:inline">API</span>
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
              <span className="hidden sm:inline">Refer</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>🏆</span>
              <span className="hidden sm:inline">Contest</span>
              <span className="bg-primary text-primary-foreground px-1 rounded text-xs">S6</span>
            </button>
            
            <button className="hover:text-foreground transition-colors flex items-center space-x-1">
              <span>😊</span>
              <span className="hidden sm:inline">APP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Header */}
      <Header
        onSignUp={() => openAuthModal('signup')}
        onLogIn={() => openAuthModal('login')}
        onWalletClick={() => setShowWallet(true)}
        onWalletManagerClick={() => setShowWalletManager(true)}
        onCopyTradeClick={() => setShowCopyTrade(true)}
        onHomeClick={handleHomeClick}
        isLoggedIn={isLoggedIn}
      />
      
      {/* Mobile Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Container */}
      <div className="flex-1 p-3 md:p-4 pb-20 md:pb-16">
        {/* Trenches Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-primary">🧪</span>
            <h2 className="text-foreground font-semibold text-lg">Trenches</h2>
            <button className="text-muted-foreground hover:text-foreground">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground">
              <Settings className="w-4 h-4" />
              <span className="hidden md:inline">Customize</span>
            </button>
            <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground">
              <span className="hidden md:inline">👨‍💻</span>
              <span className="hidden md:inline">Devs</span>
            </button>
            <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground">
              <Filter className="w-4 h-4" />
              <span className="hidden md:inline">Filter</span>
            </button>
            <button className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80">
              <Zap className="w-4 h-4" />
              <span className="hidden md:inline">Buy</span>
            </button>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <span>=</span>
              <span>0</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <button className="text-foreground bg-card px-2 py-1 rounded">P1</button>
              <button className="text-muted-foreground hover:text-foreground">P2</button>
              <button className="text-muted-foreground hover:text-foreground">P3</button>
              <button className="text-muted-foreground hover:text-foreground">
                <Settings className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Three Column Layout - Desktop */}
        <div className="hidden lg:flex gap-6">
          <TokenSection
            title="New Creations"
            icon="🔥"
            tokens={newCreationsTokens}
            statusColor="text-primary"
          />
          
          <TokenSection
            title="Completing"
            icon="⏸️"
            tokens={completingTokens}
            statusColor="text-yellow-500"
            showPauseIcon={false}
          />
          
          <TokenSection
            title="Completed"
            icon="🟡"
            tokens={completedTokens}
            statusColor="text-yellow-500"
          />
        </div>

        {/* Mobile/Tablet - Stacked Sections */}
        <div className="lg:hidden space-y-8">
          <TokenSection
            title="New Creations"
            icon="🔥"
            tokens={newCreationsTokens}
            statusColor="text-primary"
          />
          
          <TokenSection
            title="Completing"
            icon="⏸️"
            tokens={completingTokens}
            statusColor="text-yellow-500"
            showPauseIcon={false}
          />
          
          <TokenSection
            title="Completed"
            icon="🟡"
            tokens={completedTokens}
            statusColor="text-yellow-500"
          />
        </div>
      </div>

      {/* Floating Footer */}
      <FloatingFooter />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
