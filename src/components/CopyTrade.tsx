// src/components/CopyTrade.tsx
import React, { useState } from 'react';
import { ArrowLeft, Copy, Settings, ChevronDown, Filter, Users, BarChart3, TrendingUp, TrendingDown, Edit2, RotateCcw, ArrowUpFromLine, Zap, GitBranch } from 'lucide-react';
import Header from '@/components/Header';
import TraderProfile from '@/components/TraderProfile';

interface CopyTradeProps {
  onClose: () => void;
}

const CopyTrade: React.FC<CopyTradeProps> = ({ onClose }) => {
  const [activeRankTab, setActiveRankTab] = useState('CopyTrade');
  const [showCopyPanel, setShowCopyPanel] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState<any>(null);
  const [showTraderProfile, setShowTraderProfile] = useState(false);
  const [selectedTraderProfile, setSelectedTraderProfile] = useState<any>(null);

  const rankTabs = ['CopyTrade', '0-Latency Alert'];
  const filterTabs = ['All', 'Pump SM', 'Smart Money', 'KOL/VC', 'Fresh Wallet', 'Sniper'];

  // Mock trader data with ranking numbers
  const traders = [
    {
      id: 'o5JSY...xTy',
      fullId: 'o5JSYMGT5iYuMrLqmzRaHksHZEQFLmcVweWwTCJcxTy',
      rank: '1st',
      avatar: '🟡',
      balance: '0.418',
      pnl1d: '+25.76%',
      pnlUsd1d: '+$7,585.4',
      pnl30d: '+25.76%',
      pnlUsd30d: '+$7,585.4',
      winRate: '100%',
      txs: '21',
      txsRatio: '1/20',
      distribution: {
        high: 1,
        medium: 0,
        low: 0,
        negative: 0,
        veryNegative: 0
      },
      profit7d: '$321.2',
      avgDuration: '4d',
      avgCost: '$321.2',
      lastTime: '3d ago'
    },
    {
      id: '6cSx5...UK8',
      fullId: '6cSx5UnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEoUK8',
      rank: '2nd',
      avatar: '🟡',
      balance: '0',
      pnl1d: '+24.8K%',
      pnlUsd1d: '+$13.3K',
      pnl30d: '+24.8K%',
      pnlUsd30d: '+$13.3K',
      winRate: '100%',
      txs: '6',
      txsRatio: '1/5',
      distribution: {
        high: 0,
        medium: 0,
        low: 0,
        negative: 1,
        veryNegative: 0
      },
      profit7d: '$39.9K',
      avgDuration: '--',
      avgCost: '$39.9K',
      lastTime: '6d ago'
    },
    {
      id: '2oJMe...BRZ',
      fullId: '2oJMeUnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEoBRZ',
      rank: '3rd',
      avatar: '🔴',
      balance: '0.028',
      pnl1d: '+10.4K%',
      pnlUsd1d: '+$947.9',
      pnl30d: '+10.4K%',
      pnlUsd30d: '+$947.9',
      winRate: '100%',
      txs: '4',
      txsRatio: '3/1',
      distribution: {
        high: 1,
        medium: 0,
        low: 0,
        negative: 0,
        veryNegative: 0
      },
      profit7d: '$1,105.8',
      avgDuration: '6d',
      avgCost: '$1,105.8',
      lastTime: '1d ago'
    },
    {
      id: '4qP1j...dk9',
      fullId: '4qP1jUnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEodk9',
      rank: '',
      avatar: '🟡',
      balance: '0.03',
      pnl1d: '+10K%',
      pnlUsd1d: '+$1,930.4',
      pnl30d: '+10K%',
      pnlUsd30d: '+$1,930.4',
      winRate: '100%',
      txs: '4',
      txsRatio: '3/1',
      distribution: {
        high: 1,
        medium: 0,
        low: 0,
        negative: 0,
        veryNegative: 0
      },
      profit7d: '$2,005.3',
      avgDuration: '6d',
      avgCost: '$2,005.3',
      lastTime: '1d ago'
    },
    {
      id: 'HscRE...rwr',
      fullId: 'HscREUnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEorwr',
      rank: '',
      avatar: '🔵',
      balance: '0.039',
      pnl1d: '+9.8K%',
      pnlUsd1d: '+$1,291.8',
      pnl30d: '+9.8K%',
      pnlUsd30d: '+$1,291.8',
      winRate: '100%',
      txs: '4',
      txsRatio: '3/1',
      distribution: {
        high: 1,
        medium: 0,
        low: 0,
        negative: 0,
        veryNegative: 0
      },
      profit7d: '$1,379.1',
      avgDuration: '6d',
      avgCost: '$1,379.1',
      lastTime: '1d ago'
    },
    {
      id: '5HNeh...rzq',
      fullId: '5HNehUnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEorzq',
      rank: '',
      avatar: '🟡',
      balance: '84.54',
      pnl1d: '+10.5K%',
      pnlUsd1d: '+$12.7K',
      pnl30d: '+9.2K%',
      pnlUsd30d: '+$12.7K',
      winRate: '100%',
      txs: '28',
      txsRatio: '3/25',
      distribution: {
        high: 1,
        medium: 1,
        low: 0,
        negative: 0,
        veryNegative: 0
      },
      profit7d: '$480.3',
      avgDuration: '2d',
      avgCost: '$480.3',
      lastTime: '20h ago'
    },
    {
      id: '7GMZy...upZ',
      fullId: '7GMZyUnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEoupZ',
      rank: '',
      avatar: '🔴',
      balance: '0.013',
      pnl1d: '+9.1K%',
      pnlUsd1d: '+$3,235.7',
      pnl30d: '+9.1K%',
      pnlUsd30d: '+$3,235.7',
      winRate: '100%',
      txs: '6',
      txsRatio: '4/2',
      distribution: {
        high: 0,
        medium: 1,
        low: 0,
        negative: 0,
        veryNegative: 0
      },
      profit7d: '$3,424.7',
      avgDuration: '6d',
      avgCost: '$3,424.7',
      lastTime: '1d ago'
    }
  ];

  const handleCopyClick = (trader: any) => {
    setSelectedTrader(trader);
    setShowCopyPanel(true);
  };

  const handleCreateCopyTrade = () => {
    const defaultTrader = {
      id: 'New Copy Trade',
      avatar: '🟡',
      balance: '0',
      pnl1d: '0%',
      pnlUsd1d: '$0',
      pnl30d: '0%',
      pnlUsd30d: '$0',
      winRate: '0%',
      txs: '0',
      txsRatio: '0/0'
    };
    setSelectedTrader(defaultTrader);
    setShowCopyPanel(true);
  };

  const handleProfileClick = (trader: any) => {
    setSelectedTraderProfile(trader);
    setShowTraderProfile(true);
  };

  // Show trader profile if selected
  if (showTraderProfile && selectedTraderProfile) {
    return <TraderProfile trader={selectedTraderProfile} onClose={() => setShowTraderProfile(false)} />;
  }

  return (
    <div className="bg-background min-h-screen relative">
      {/* Main Content Container */}
      <div className={`transition-all duration-300 ${showCopyPanel ? 'mr-0 lg:mr-96' : ''}`}>
        {/* Header */}
        <Header
          onSignUp={() => {}}
          onLogIn={() => {}}
          onWalletClick={() => {}}
          onCopyTradeClick={() => {}}
          isLoggedIn={true}
        />

        {/* Mobile: Simplified Header */}
        <div className="lg:hidden p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-foreground font-semibold text-base">Rank</span>
              <div className="flex items-center space-x-1 bg-card border border-border rounded-lg px-2 py-1">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">CopyTrade</span>
              </div>
            </div>
            <button 
              onClick={handleCreateCopyTrade}
              className="flex items-center space-x-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm"
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Create</span>
            </button>
          </div>
        </div>

        {/* Desktop: Full Header */}
        <div className="hidden lg:flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-foreground font-semibold text-base">Rank</span>
              <div className="flex items-center space-x-1 bg-card border border-border rounded-lg px-2 py-1">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">CopyTrade</span>
              </div>
              <div className="flex items-center space-x-1 bg-primary/20 text-primary rounded-lg px-2 py-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-xs">0-Latency Alert</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleCreateCopyTrade}
              className="flex items-center space-x-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              <Users className="w-4 h-4" />
              <span>Create Copy Trade</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs - Hidden on Mobile */}
        <div className="hidden lg:flex items-center space-x-4 p-4 border-b border-border">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium transition-colors ${
                tab === 'All'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile: Trader List */}
        <div className="lg:hidden">
          <div className="space-y-2 p-4">
            {traders.map((trader, index) => (
              <div key={trader.id} className="bg-card rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="flex items-center space-x-3 flex-1 cursor-pointer"
                    onClick={() => handleProfileClick(trader)}
                  >
                    {trader.rank && (
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full">
                        <span className="text-xs font-medium text-primary">{trader.rank}</span>
                      </div>
                    )}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      {trader.avatar}
                    </div>
                    <div>
                      <div className="text-sm text-foreground font-medium">{trader.id}</div>
                      <div className="text-xs text-muted-foreground">≡ {trader.balance}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCopyClick(trader)}
                    className="px-3 py-1 bg-primary text-primary-foreground rounded text-xs"
                  >
                    Copy
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div>
                    <span className="text-muted-foreground">1D PnL: </span>
                    <span className="text-primary font-medium">{trader.pnl1d}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">USD: </span>
                    <span className="text-primary">{trader.pnlUsd1d}</span>
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Win Rate: {trader.winRate} • TXs: {trader.txs}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Table */}
        <div className="hidden lg:block p-4">
          {/* Table Headers */}
          <div className="grid grid-cols-12 gap-4 text-xs text-muted-foreground mb-4 pb-2 border-b border-border">
            <div className="col-span-2 flex items-center space-x-1">
              <span>Wallet / SOL Bal</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>1D PnL</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>USD</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>30D PnL</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>7D Win Rate</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>7D TXs</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div>7D Token Distribution</div>
            <div>7D Profit</div>
            <div>7D Avg Duration</div>
            <div className="flex items-center space-x-1">
              <span>7D Avg Cost</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>Last Time</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div></div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {traders.map((trader, index) => (
              <div key={trader.id} className="grid grid-cols-12 gap-4 items-center py-3 hover:bg-muted/50 rounded-lg transition-colors">
                {/* Wallet / SOL Bal - Clickable */}
                <div 
                  className="col-span-2 flex items-center space-x-2 cursor-pointer"
                  onClick={() => handleProfileClick(trader)}
                >
                  {trader.rank && (
                    <div className="flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full">
                      <span className="text-xs font-medium text-primary">{trader.rank}</span>
                    </div>
                  )}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    {trader.avatar}
                  </div>
                  <div>
                    <div className="text-sm text-foreground hover:text-primary transition-colors">{trader.id}</div>
                    <div className="text-xs text-muted-foreground">≡ {trader.balance}</div>
                  </div>
                </div>

                {/* 1D PnL */}
                <div className="text-sm">
                  <div className="text-primary font-medium">{trader.pnl1d}</div>
                  <div className="text-primary text-xs">{trader.pnlUsd1d}</div>
                </div>

                {/* USD */}
                <div className="text-sm">
                  <div className="text-primary font-medium">{trader.pnl30d}</div>
                  <div className="text-primary text-xs">{trader.pnlUsd30d}</div>
                </div>

                {/* 30D PnL */}
                <div className="text-sm text-foreground">{trader.winRate}</div>

                {/* 7D Win Rate */}
                <div className="text-sm">
                  <div className="text-foreground">{trader.txs}</div>
                  <div className="text-xs text-muted-foreground">{trader.txsRatio}</div>
                </div>

                {/* 7D TXs */}
                <div className="flex items-center space-x-1">
                  {trader.distribution.high > 0 && <div className="w-2 h-4 bg-green-500 rounded-sm"></div>}
                  {trader.distribution.medium > 0 && <div className="w-2 h-4 bg-green-400 rounded-sm"></div>}
                  {trader.distribution.low > 0 && <div className="w-2 h-4 bg-green-300 rounded-sm"></div>}
                  {trader.distribution.negative > 0 && <div className="w-2 h-4 bg-red-400 rounded-sm"></div>}
                  {trader.distribution.veryNegative > 0 && <div className="w-2 h-4 bg-red-500 rounded-sm"></div>}
                  <span className="text-xs text-muted-foreground ml-2">
                    {Object.values(trader.distribution).reduce((a, b) => a + b, 0)}
                  </span>
                </div>

                {/* 7D Token Distribution */}
                <div className="text-sm text-foreground">{trader.profit7d}</div>

                {/* 7D Profit */}
                <div className="text-sm text-foreground">{trader.avgDuration}</div>

                {/* 7D Avg Duration */}
                <div className="text-sm text-foreground">{trader.avgCost}</div>

                {/* 7D Avg Cost */}
                <div className="text-sm text-muted-foreground">{trader.lastTime}</div>

                {/* Last Time */}
                <div>
                  <button 
                    onClick={() => handleCopyClick(trader)}
                    className="flex items-center space-x-1 px-3 py-1 bg-card border border-border rounded-lg text-xs hover:bg-muted transition-colors"
                  >
                    <Users className="w-3 h-3" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copy Trade Panel - Fixed positioning */}
      {showCopyPanel && selectedTrader && (
        <CopyTradePanel 
          trader={selectedTrader} 
          onClose={() => setShowCopyPanel(false)} 
        />
      )}
    </div>
  );
};

// Copy Trade Panel Component with Fixed Positioning
const CopyTradePanel: React.FC<{ trader: any; onClose: () => void }> = ({ trader, onClose }) => {
  const [copyFrom, setCopyFrom] = useState('Wallet Address');
  const [maxBuyAmount, setMaxBuyAmount] = useState('');
  const [fixedBuy, setFixedBuy] = useState('');
  const [fixedRatio, setFixedRatio] = useState('');
  const [sellMethod, setSellMethod] = useState('Copy Sells');
  const [priorityFee, setPriorityFee] = useState('0.005');
  const [antiMEV, setAntiMEV] = useState(true);

  return (
    <>
      {/* Mobile Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose}></div>
      
      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md lg:w-96 bg-card border-l border-border shadow-xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-foreground font-semibold text-lg">CopyTrade</h2>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <span>🎓</span>
              <span>Tutorial</span>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-lg">
              ✕
            </button>
          </div>
        </div>

        {/* Lightning Mode */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-foreground">Lightning mode, rapid on-chain</span>
              <span className="text-xs text-muted-foreground bg-muted rounded-full w-4 h-4 flex items-center justify-center">ⓘ</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-6 bg-yellow-500 rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-yellow-500">⚡</span>
            </div>
          </div>
        </div>

        {/* Wallet Selection */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm">📁</span>
              <span className="text-sm text-foreground">W1 Walle...</span>
              <span className="text-sm text-muted-foreground">ZS2Z...6sz</span>
              <button className="text-muted-foreground hover:text-foreground">
                <span className="text-xs">📋</span>
              </button>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">≡</span>
              <span className="text-sm text-foreground font-medium">0</span>
            </div>
          </div>
        </div>

        {/* Copy From */}
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-foreground mb-3 font-medium">Copy From</label>
            <div className="relative">
              <input
                type="text"
                value="Wallet Address"
                className="w-full px-3 py-3 bg-input border border-border rounded-lg text-foreground text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Amount Settings Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-muted-foreground mb-2 flex items-center space-x-1">
                <span>Max Buy Amount</span>
                <span className="text-xs text-muted-foreground bg-muted rounded-full w-3 h-3 flex items-center justify-center">ⓘ</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Amount"
                  value={maxBuyAmount}
                  onChange={(e) => setMaxBuyAmount(e.target.value)}
                  className="w-full px-2 py-2 bg-input border border-border rounded text-xs pr-8"
                />
                <span className="absolute right-2 top-2 text-xs text-muted-foreground">SOL</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">≈$0(0SOL)</div>
              <div className="text-xs text-muted-foreground">Bal:0SOL</div>
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-2 flex items-center space-x-1">
                <span>Fixed Buy</span>
                <span className="text-xs text-muted-foreground bg-muted rounded-full w-3 h-3 flex items-center justify-center">ⓘ</span>
              </label>
              <input
                type="text"
                value={fixedBuy}
                onChange={(e) => setFixedBuy(e.target.value)}
                className="w-full px-2 py-2 bg-input border border-border rounded text-xs"
              />
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-2 flex items-center space-x-1">
                <span>Fixed Ratio</span>
                <span className="text-xs text-muted-foreground bg-muted rounded-full w-3 h-3 flex items-center justify-center">ⓘ</span>
              </label>
              <input
                type="text"
                value={fixedRatio}
                onChange={(e) => setFixedRatio(e.target.value)}
                className="w-full px-2 py-2 bg-input border border-border rounded text-xs"
              />
            </div>
          </div>

          {/* Sell Method */}
          <div>
            <label className="block text-sm text-foreground mb-3 font-medium flex items-center space-x-1">
              <span>Sell Method</span>
              <span className="text-xs text-muted-foreground bg-muted rounded-full w-4 h-4 flex items-center justify-center">ⓘ</span>
            </label>
            <div className="flex space-x-2 mb-3">
              <button 
                className={`flex-1 px-3 py-2 text-sm rounded border ${
                  sellMethod === 'Copy Sells' 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-card border-border text-muted-foreground hover:bg-muted'
                }`}
                onClick={() => setSellMethod('Copy Sells')}
              >
                Copy Sells
              </button>
              <button 
                className={`flex-1 px-3 py-2 text-sm rounded border ${
                  sellMethod === 'Not Sells' 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-card border-border text-muted-foreground hover:bg-muted'
                }`}
                onClick={() => setSellMethod('Not Sells')}
              >
                Not Sells
              </button>
            </div>
            <button className="w-full px-3 py-2 text-sm text-muted-foreground border border-border rounded hover:bg-muted">
              Customize TP & SL
            </button>
          </div>

          {/* Advanced Settings */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-foreground font-medium">Advanced Settings</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">1</span>
                <span className="text-xs text-primary">Open</span>
                <span className="text-primary">▼</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Auto Settings Row */}
              <div className="flex items-center space-x-3 text-xs">
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-foreground">Auto</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>🔄</span>
                  <span className="text-muted-foreground">0.005</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📊</span>
                  <span className="text-muted-foreground">OFF</span>
                </div>
              </div>

              {/* Slippage */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Slippage</span>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded">Auto</button>
                  <span className="text-xs text-muted-foreground">Custom</span>
                  <span className="text-xs text-muted-foreground">%</span>
                </div>
              </div>

              {/* Priority Fee */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-muted-foreground">Priority Fee(SOL)</span>
                  <span className="text-xs text-muted-foreground bg-muted rounded-full w-3 h-3 flex items-center justify-center">ⓘ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-foreground">Auto 0.00745</span>
                  <input
                    type="text"
                    value={priorityFee}
                    onChange={(e) => setPriorityFee(e.target.value)}
                    className="w-16 px-2 py-1 bg-input border border-border rounded text-xs"
                  />
                </div>
              </div>

              {/* Anti-MEV RPC */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Anti-MEV RPC</span>
                <div className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer ${antiMEV ? 'bg-primary' : 'bg-muted'}`} onClick={() => setAntiMEV(!antiMEV)}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${antiMEV ? 'translate-x-4' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Clear Button */}
          <div className="flex justify-end pt-4">
            <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground">
              <span className="w-3 h-3 border border-muted-foreground rounded-full"></span>
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyTrade;
