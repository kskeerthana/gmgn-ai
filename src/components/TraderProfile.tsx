// src/components/TraderProfile.tsx
import React, { useState } from 'react';
import { ArrowLeft, Copy, Users, Share, Star, Eye, EyeOff, ChevronDown, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import Header from '@/components/Header';

interface TraderProfileProps {
  trader: any;
  onClose: () => void;
}

const TraderProfile: React.FC<TraderProfileProps> = ({ trader, onClose }) => {
  const [activeTab, setActiveTab] = useState('Recent PnL');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [showCopyPanel, setShowCopyPanel] = useState(false);

  const tabs = ['Recent PnL', 'Holdings', 'Activity', 'Deployed Tokens'];
  const timeframes = ['1d', '7d', '30d', 'All'];

  const handleCopyTrade = () => {
    setShowCopyPanel(true);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <Header
        onSignUp={() => {}}
        onLogIn={() => {}}
        onWalletClick={() => {}}
        isLoggedIn={true}
      />

      {/* Profile Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            {/* Profile Picture */}
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <span className="text-lg">{trader.avatar}</span>
            </div>
            
            {/* Profile Info */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-foreground font-medium text-base">{trader.id}</span>
                <button className="flex items-center justify-center w-5 h-5 bg-primary rounded text-primary-foreground">
                  <span className="text-xs font-bold">✓</span>
                </button>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  + Add Twitter
                </button>
              </div>
              
              <div className="text-xs text-muted-foreground">
                uid:46275506 📧 Email:keerthana16050@cse.ssn.edu.in 📧 👁️
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleCopyTrade}
            className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>Copy trade</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            <Users className="w-4 h-4" />
            <span>Follow</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            <Share className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* Last Updated */}
        <div className="flex items-center space-x-2 mb-6 text-xs text-muted-foreground">
          <span>🔄</span>
          <span>Updated: 12m ago</span>
        </div>

        {/* Three Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Left Card - Combined 7D Realized PnL and Win Rate */}
          <div className="bg-card rounded-lg p-4 border border-border">
            {/* 7D Realized PnL Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-foreground font-medium text-sm">7D Realized PnL</h3>
                <div className="flex items-center space-x-1 text-xs">
                  <span className="text-muted-foreground">💰</span>
                  <span className="text-muted-foreground">USD</span>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-primary mb-1">+25754.4%</div>
                <div className="text-sm text-primary">+$7,585.39</div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total PnL</span>
                  <span className="text-primary">+$47.2K (+14548.9%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unrealized Profits</span>
                  <span className="text-foreground">$39.6K</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-4"></div>

            {/* Win Rate Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-foreground font-medium text-sm">Win Rate</h3>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-foreground">100%</div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bal</span>
                  <span className="text-foreground">0.418 SOL ($62.07)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">7D TXs</span>
                  <span className="text-foreground">1/20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">7D Avg Duration</span>
                  <span className="text-foreground">4d</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Card - Analysis */}
          <div className="bg-card rounded-lg p-4 border border-border">
            <h3 className="text-foreground font-medium text-sm mb-3">Analysis</h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bal</span>
                <span className="text-foreground">0.418 SOL ($62.07)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">7D TXs</span>
                <span className="text-foreground">1/20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">7D Avg Duration</span>
                <span className="text-foreground">4d</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">7D Total Cost</span>
                <span className="text-foreground">$0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">7D Token Avg Cost</span>
                <span className="text-foreground">$0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">7D Token Avg Realized Profits</span>
                <span className="text-foreground">$0</span>
              </div>
            </div>
          </div>

          {/* Right Card - Distribution */}
          <div className="bg-card rounded-lg p-4 border border-border">
            <h3 className="text-foreground font-medium text-sm mb-4">Distribution (1)</h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">&gt;500%</span>
                </div>
                <span className="text-foreground font-medium">1 (100%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-muted-foreground">200% - 500%</span>
                </div>
                <span className="text-foreground">0</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-300"></div>
                  <span className="text-muted-foreground">0% - 200%</span>
                </div>
                <span className="text-foreground">0</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-muted-foreground">0% - -50%</span>
                </div>
                <span className="text-foreground">0</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">&lt;-50%</span>
                </div>
                <span className="text-foreground">0</span>
              </div>
            </div>
            
            {/* Distribution Bar */}
            <div className="mt-4">
              <div className="w-full h-2 bg-muted rounded-full">
                <div className="w-full h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Phishing Check Section - Below Analysis and Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Empty space for left column alignment */}
          <div className="hidden lg:block"></div>
          
          {/* Phishing Check spanning 2 columns */}
          <div className="lg:col-span-2 bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-muted-foreground text-base">🛡️</span>
              <h3 className="text-foreground font-medium text-sm">Phishing check</h3>
            </div>
            
            <div className="border-b border-border mb-4 pb-2">
              <div className="text-xs text-muted-foreground">- - - - - -</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">Blacklist: 0 (0%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">Sold &gt; Bought: 0 (0%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-muted-foreground">Didn&apos;t buy: 4 (80%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">Buy/Sell within 5 secs: 0 (0%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-card rounded-lg p-4 border border-border">
          {/* Tab Navigation with Timeframe Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-foreground border-b-2 border-primary pb-2'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    selectedTimeframe === timeframe
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
              <span className="text-xs text-muted-foreground">All</span>
            </div>
          </div>

          {/* Table Headers - Desktop */}
          <div className="hidden md:grid grid-cols-10 gap-4 text-xs text-muted-foreground mb-4 pb-2 border-b border-border">
            <div className="flex items-center space-x-1">
              <span>Token</span>
              <span>/</span>
              <button className="flex items-center space-x-1 hover:text-foreground">
                <span>Last Active</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <div className="flex items-center space-x-1">
              <span>Unrealized</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>Realized Profit</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>Total Profit</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>Balance</span>
              <span>💰</span>
              <span>USD</span>
              <span>💰</span>
            </div>
            <div>Position %</div>
            <div>Holding Duration</div>
            <div className="flex items-center space-x-1">
              <span>Bought</span>
              <span>💰</span>
              <span>/</span>
              <span>Avg</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>Sold</span>
              <span>💰</span>
              <span>/</span>
              <span>Avg</span>
            </div>
            <div>30D TXs</div>
          </div>

          {/* Token Holdings */}
          <div className="space-y-3">
            {/* CryBB Token */}
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center py-3 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="md:col-span-1 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <div>
                  <div className="text-sm text-foreground font-medium">CryBB</div>
                  <div className="text-xs text-muted-foreground">3d</div>
                </div>
              </div>

              <div className="text-sm">
                <div className="text-primary font-medium">+$39.6K</div>
                <div className="text-primary text-xs">+13.4K%</div>
              </div>

              <div className="text-sm">
                <div className="text-primary font-medium">+$7,585.39</div>
                <div className="text-primary text-xs">+25.7K%</div>
              </div>

              <div className="text-sm">
                <div className="text-primary font-medium">+$47.2K</div>
                <div className="text-primary text-xs">+14.5K%</div>
              </div>

              <div className="text-sm">
                <div className="text-foreground">$39.9K</div>
                <div className="text-xs text-muted-foreground">9M</div>
              </div>

              <div className="text-sm text-foreground">81.83%</div>

              <div className="text-sm text-foreground flex items-center space-x-1">
                <span>4d</span>
                <span className="text-primary">💎</span>
              </div>

              <div className="text-sm">
                <div className="text-foreground">$321.25</div>
                <div className="text-xs text-muted-foreground">$0.03268</div>
              </div>

              <div className="text-sm">
                <div className="text-foreground">$7,614.84</div>
                <div className="text-xs text-muted-foreground">$0.0094</div>
              </div>

              <div className="text-sm text-foreground">1/20</div>
            </div>

            {/* Additional Holdings */}
            {['Vlad', 'CryBB', 'CryBB', 'ZENAI'].map((token, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center py-3 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="md:col-span-1 flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-foreground text-xs font-bold">{token.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground font-medium">{token}</div>
                    <div className="text-xs text-muted-foreground">--</div>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="text-foreground">$0</div>
                  <div className="text-xs text-muted-foreground">0%</div>
                </div>

                <div className="text-sm">
                  <div className="text-primary">HODL</div>
                </div>

                <div className="text-sm">
                  <div className="text-foreground">$0</div>
                  <div className="text-xs text-muted-foreground">0%</div>
                </div>

                <div className="text-sm">
                  <div className="text-foreground">{index === 0 ? '$0.002' : index === 3 ? '$0.127' : '$398.3K'}</div>
                  <div className="text-xs text-muted-foreground">{index === 0 ? '12' : index === 3 ? '111' : '49.1M'}</div>
                </div>

                <div className="text-sm text-foreground">100%</div>

                <div className="text-sm text-foreground">--</div>

                <div className="text-sm">
                  <div className="text-foreground">$0</div>
                  <div className="text-xs text-muted-foreground">$0</div>
                </div>

                <div className="text-sm">
                  <div className="text-foreground">$0</div>
                  <div className="text-xs text-muted-foreground">$0</div>
                </div>

                <div className="text-sm text-foreground">0/0</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copy Trade Panel */}
      {showCopyPanel && (
        <CopyTradePanel 
          trader={trader} 
          onClose={() => setShowCopyPanel(false)} 
        />
      )}
    </div>
  );
};

// Copy Trade Panel Component (same as before)
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

export default TraderProfile;
