// src/components/WalletView.tsx
import React, { useState } from 'react';
import { ArrowLeft, Copy, Settings, ChevronDown, Eye, EyeOff, RotateCcw, Users, Filter, Search, Edit2 } from 'lucide-react';
import Header from '@/components/Header';

interface WalletViewProps {
  onClose: () => void;
}

const WalletView: React.FC<WalletViewProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Recent PnL');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [showEmail, setShowEmail] = useState(true);
  const [walletName, setWalletName] = useState('ZsZZX...6sz');
  const [isEditingName, setIsEditingName] = useState(false);

  const tabs = ['Recent PnL', 'Holdings', 'Activity', 'Deployed Tokens'];
  const timeframes = ['1d', '7d', '30d', 'All'];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleNameEdit = () => {
    setIsEditingName(!isEditingName);
  };

  const handleNameSave = (newName: string) => {
    setWalletName(newName);
    setIsEditingName(false);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Main Navigation Header - Same as main page */}
      <Header
        onSignUp={() => {}}
        onLogIn={() => {}}
        onWalletClick={onClose}
        isLoggedIn={true}
      />

      {/* Wallet Profile Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            {/* Profile Picture */}
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
            
            {/* Profile Info */}
            <div className="flex flex-col space-y-2">
              {/* First Row: Wallet Name + Edit + Add Twitter */}
              <div className="flex items-center space-x-2">
                {isEditingName ? (
                  <input
                    type="text"
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                    onBlur={() => handleNameSave(walletName)}
                    onKeyPress={(e) => e.key === 'Enter' && handleNameSave(walletName)}
                    className="bg-input border border-border rounded px-2 py-1 text-sm font-medium text-foreground"
                    autoFocus
                  />
                ) : (
                  <span className="text-foreground font-medium text-base">{walletName}</span>
                )}
                
                <button 
                  onClick={handleNameEdit}
                  className="flex items-center justify-center w-5 h-5 text-muted-foreground hover:text-foreground"
                >
                  <Edit2 className="w-3 h-3" />
                </button>
                
                <button className="flex items-center space-x-1 bg-black text-white px-3 py-1 rounded font-medium text-sm hover:bg-gray-800 transition-colors">
                  <span className="font-bold">𝕏</span>
                  <span>Add Twitter</span>
                </button>
              </div>
              
              {/* Second Row: Full Wallet Address + Copy */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground font-mono">ZsZZX6UnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEosz</span>
                <button 
                  onClick={() => handleCopy('ZsZZX6UnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEosz')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Copy className="w-3 h-3" />
                </button>
                <span className="text-primary">✓</span>
              </div>
              
              {/* Third Row: UID + Email + Eye Icon */}
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <span>uid:46275506</span>
                  <button 
                    onClick={() => handleCopy('46275506')}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                
                <span>📧</span>
                
                <div className="flex items-center space-x-1">
                  <span>Email:</span>
                  {showEmail ? (
                    <span>keerthana16050@cse.ssn.edu.in</span>
                  ) : (
                    <span>••••••••••••••••••••••••••••••</span>
                  )}
                  <button 
                    onClick={() => handleCopy('keerthana16050@cse.ssn.edu.in')}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                
                <span>📧</span>
                
                <button 
                  onClick={() => setShowEmail(!showEmail)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {showEmail ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            <Users className="w-4 h-4" />
            <span>Copy trade</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            <Users className="w-4 h-4" />
            <span>Follow</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-card border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            <span className="text-base">🔗</span>
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* Last Updated */}
        <div className="flex items-center space-x-2 mb-6 text-xs text-muted-foreground">
          <RotateCcw className="w-4 h-4" />
          <span>Updated: 27m ago</span>
        </div>

        {/* Top Row - Three Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Left Card - 7D Realized PnL */}
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-foreground font-medium text-sm">7D Realized PnL</h3>
              <div className="flex items-center space-x-1 text-xs">
                <span className="text-muted-foreground">💰</span>
                <span className="text-muted-foreground">USD</span>
              </div>
            </div>
            
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-foreground mb-1">0%</div>
              <div className="text-sm text-muted-foreground">$0</div>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total PnL</span>
                <span className="text-foreground">$0 (-)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Unrealized Profits</span>
                <span className="text-foreground">$0</span>
              </div>
            </div>
          </div>

          {/* Middle Card - Analysis */}
          <div className="bg-card rounded-lg p-4 border border-border">
            <h3 className="text-foreground font-medium text-sm mb-3">Analysis</h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bal</span>
                <span className="text-foreground">0 SOL ($0)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">7D TXs</span>
                <span className="text-foreground">0/0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">7D Avg Duration</span>
                <span className="text-foreground">--</span>
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
            <h3 className="text-foreground font-medium text-sm mb-4">Distribution (0)</h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">&gt;500%</span>
                </div>
                <span className="text-foreground">0</span>
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
          </div>
        </div>

        {/* Bottom Row - Phishing Check Section (Full Width) */}
        <div className="bg-card rounded-lg p-4 border border-border mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-muted-foreground text-base">🛡️</span>
            <h3 className="text-foreground font-medium text-sm">Phishing check</h3>
          </div>
          
          <div className="border-b border-border mb-4 pb-2">
            <div className="text-xs text-muted-foreground">- - - - - -</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">Blacklist: 0 (0%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">Sold &gt; Bought: 0 (0%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">Didn&apos;t buy: 0 (0%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">Buy/Sell within 5 secs: 0 (0%)</span>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-card rounded-lg p-4 border border-border">
          {/* Tab Navigation with Timeframe Filters */}
          <div className="flex items-center justify-between mb-4">
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

          {/* Table Headers */}
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

          {/* Empty State */}
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-muted/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-3xl">💼</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">CLOSE</div>
            <div className="text-xs text-muted-foreground">No buying or selling in the last 30 days.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletView;
