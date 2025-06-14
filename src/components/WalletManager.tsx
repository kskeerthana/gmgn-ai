// src/components/WalletManager.tsx
import React, { useState } from 'react';
import { ArrowLeft, Copy, Settings, ChevronDown, Filter, Users, BarChart3, TrendingUp, TrendingDown, Edit2, RotateCcw, ArrowUpFromLine, Zap, GitBranch } from 'lucide-react';
import Header from '@/components/Header';

interface WalletManagerProps {
  onClose: () => void;
}

const WalletManager: React.FC<WalletManagerProps> = ({ onClose }) => {
  const [walletName, setWalletName] = useState('W1 Wallet1');
  const [isEditingName, setIsEditingName] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(0);

  // Mock wallet data
  const wallets = [
    {
      id: 0,
      name: 'W1 Wallet1',
      address: 'ZsZZX6UnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEo6sz',
      balance: '0',
      usdValue: '$0',
      isPrimary: true
    },
    {
      id: 1,
      name: 'W2 Trading',
      address: 'AbCdE6UnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEo1ab',
      balance: '2.45',
      usdValue: '$364.2',
      isPrimary: false
    }
  ];

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      type: 'Buy',
      token: 'ECO',
      total: '$45.67',
      amount: '1.2M ECO',
      price: '$0.000038',
      profit: '+$12.34',
      profitPercent: '+27.02%',
      age: '2h',
      maker: 'You'
    },
    {
      id: 2,
      type: 'Sell',
      token: 'MEME',
      total: '$23.45',
      amount: '500K MEME',
      price: '$0.000047',
      profit: '-$5.67',
      profitPercent: '-24.15%',
      age: '5h',
      maker: 'You'
    },
    {
      id: 3,
      type: 'Buy',
      token: 'DOGE',
      total: '$100.00',
      amount: '2.5K DOGE',
      price: '$0.040000',
      profit: '+$8.90',
      profitPercent: '+8.90%',
      age: '1d',
      maker: 'You'
    }
  ];

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

  const currentWallet = wallets[selectedWallet];

  return (
    <div className="bg-background min-h-screen">
      {/* Main Navigation Header */}
      <Header
        onSignUp={() => {}}
        onLogIn={() => {}}
        onWalletClick={() => {}}
        onWalletManagerClick={() => {}}
        onCopyTradeClick={() => {}}
        onHomeClick={onClose}
        isLoggedIn={true}
      />

      {/* SOL Wallet Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-foreground font-semibold text-base">📁 SOL Wallet</span>
            <span className="text-muted-foreground text-sm hidden sm:inline">Operation Log &gt;</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1.5 sm:px-3 sm:py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-xs sm:text-sm">
            Import
          </button>
          <button className="px-2 py-1.5 sm:px-3 sm:py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm">
            Create Wallet
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Left Sidebar - Wallet List (Wider on Desktop) */}
        <div className="w-3/5 border-r border-border p-4">
          <div className="space-y-3">
            {wallets.map((wallet) => (
              <div 
                key={wallet.id}
                className={`bg-card rounded-lg p-4 border cursor-pointer transition-colors ${
                  selectedWallet === wallet.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedWallet(wallet.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 flex-1">
                    <span className="text-sm">📁</span>
                    {isEditingName && selectedWallet === wallet.id ? (
                      <input
                        type="text"
                        value={wallet.name}
                        onChange={(e) => setWalletName(e.target.value)}
                        onBlur={() => handleNameSave(wallet.name)}
                        onKeyPress={(e) => e.key === 'Enter' && handleNameSave(wallet.name)}
                        className="bg-input border border-border rounded px-2 py-1 text-sm font-medium text-foreground flex-1"
                        autoFocus
                      />
                    ) : (
                      <span className="text-foreground font-medium text-sm">{wallet.name}</span>
                    )}
                    <button 
                      onClick={handleNameEdit}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    {wallet.isPrimary && (
                      <span className="text-primary text-xs bg-primary/20 px-2 py-1 rounded">Primary</span>
                    )}
                  </div>
                  <button className="text-muted-foreground hover:text-foreground ml-2">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>{wallet.balance} SOL</span>
                    <span>{wallet.address.slice(0, 5)}...{wallet.address.slice(-3)}</span>
                    <button 
                      onClick={() => handleCopy(wallet.address)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">
                    ⋮
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area (Desktop) */}
        <div className="w-2/5 p-6">
          {/* Wallet Details Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-primary">📁</span>
              <span className="text-foreground font-medium">{currentWallet.name}</span>
              {currentWallet.isPrimary && (
                <span className="text-primary text-sm">Primary</span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-foreground font-medium">{currentWallet.balance} SOL</span>
              <span className="text-muted-foreground">{currentWallet.usdValue}</span>
            </div>
          </div>

          {/* Large Balance Display */}
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-foreground mb-2">{currentWallet.balance} SOL</div>
            <div className="text-muted-foreground">{currentWallet.usdValue}</div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <button className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-3 hover:bg-primary/30 transition-colors mx-auto">
                <RotateCcw className="w-5 h-5 text-primary" />
              </button>
              <span className="text-xs text-muted-foreground">Deposit</span>
            </div>
            <div className="text-center">
              <button className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-3 hover:bg-primary/30 transition-colors mx-auto">
                <ArrowUpFromLine className="w-5 h-5 text-primary" />
              </button>
              <span className="text-xs text-muted-foreground">Withdraw</span>
            </div>
            <div className="text-center">
              <button className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-3 hover:bg-primary/30 transition-colors mx-auto">
                <Zap className="w-5 h-5 text-primary" />
              </button>
              <span className="text-xs text-muted-foreground">Buy</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <button className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-3 hover:bg-muted/80 transition-colors mx-auto">
                <GitBranch className="w-5 h-5 text-muted-foreground" />
              </button>
              <span className="text-xs text-muted-foreground">Consolidate</span>
            </div>
            <div className="text-center">
              <button className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-3 hover:bg-muted/80 transition-colors mx-auto">
                <Users className="w-5 h-5 text-muted-foreground" />
              </button>
              <span className="text-xs text-muted-foreground">Distribute</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Wallet Selector */}
        <div className="p-4 border-b border-border">
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 flex-1">
                <span className="text-sm">📁</span>
                <span className="text-foreground font-medium text-sm">{currentWallet.name}</span>
                {currentWallet.isPrimary && (
                  <span className="text-primary text-xs bg-primary/20 px-2 py-1 rounded">Primary</span>
                )}
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>{currentWallet.balance} SOL</span>
                <span>{currentWallet.address.slice(0, 5)}...{currentWallet.address.slice(-3)}</span>
                <button 
                  onClick={() => handleCopy(currentWallet.address)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                ⋮
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Balance Display */}
        <div className="text-center p-6">
          <div className="text-3xl font-bold text-foreground mb-2">{currentWallet.balance} SOL</div>
          <div className="text-muted-foreground">{currentWallet.usdValue}</div>
        </div>

        {/* Mobile Action Buttons */}
        <div className="grid grid-cols-3 gap-4 p-4 mb-6">
          <div className="text-center">
            <button className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors mx-auto">
              <RotateCcw className="w-5 h-5 text-primary" />
            </button>
            <span className="text-xs text-muted-foreground">Deposit</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors mx-auto">
              <ArrowUpFromLine className="w-5 h-5 text-primary" />
            </button>
            <span className="text-xs text-muted-foreground">Withdraw</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2 hover:bg-primary/30 transition-colors mx-auto">
              <Zap className="w-5 h-5 text-primary" />
            </button>
            <span className="text-xs text-muted-foreground">Buy</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 mb-6">
          <div className="text-center">
            <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-2 hover:bg-muted/80 transition-colors mx-auto">
              <GitBranch className="w-5 h-5 text-muted-foreground" />
            </button>
            <span className="text-xs text-muted-foreground">Consolidate</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-2 hover:bg-muted/80 transition-colors mx-auto">
              <Users className="w-5 h-5 text-muted-foreground" />
            </button>
            <span className="text-xs text-muted-foreground">Distribute</span>
          </div>
        </div>
      </div>

      {/* Activity Section (Full Width) */}
      <div className="p-4">
        <div className="bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Activity</h3>
            <div className="flex items-center space-x-2">
              <button className="text-xs text-muted-foreground hover:text-foreground">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Table Headers - Desktop */}
          <div className="hidden md:grid grid-cols-8 gap-4 p-4 text-xs text-muted-foreground border-b border-border">
            <div className="flex items-center space-x-1">
              <span>Maker</span>
              <span>📊</span>
            </div>
            <div>Type</div>
            <div>Token</div>
            <div className="flex items-center space-x-1">
              <span>Total</span>
              <span>💰</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>USD</span>
              <span>💰</span>
            </div>
            <div>Amount</div>
            <div>Price</div>
            <div className="flex items-center space-x-1">
              <span>Profit</span>
              <span>💰</span>
            </div>
          </div>

          {/* Transaction Rows */}
          {transactions.length > 0 ? (
            <div className="divide-y divide-border">
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-1 md:grid-cols-8 gap-4 p-4 hover:bg-muted/50 transition-colors">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">{tx.age}</span>
                        <span className={`text-sm font-medium ${
                          tx.type === 'Buy' ? 'text-primary' : 'text-destructive'
                        }`}>
                          {tx.type}
                        </span>
                        <span className="text-sm font-medium">{tx.token}</span>
                      </div>
                      <span className={`text-sm font-medium ${
                        tx.profit.startsWith('+') ? 'text-primary' : 'text-destructive'
                      }`}>
                        {tx.profit}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{tx.total}</span>
                      <span>{tx.amount}</span>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:contents">
                    <div className="text-sm text-foreground">{tx.maker}</div>
                    <div className={`text-sm font-medium ${
                      tx.type === 'Buy' ? 'text-primary' : 'text-destructive'
                    }`}>
                      {tx.type}
                    </div>
                    <div className="text-sm font-medium text-foreground">{tx.token}</div>
                    <div className="text-sm text-foreground">{tx.total}</div>
                    <div className="text-sm text-muted-foreground">{tx.total}</div>
                    <div className="text-sm text-muted-foreground">{tx.amount}</div>
                    <div className="text-sm text-muted-foreground">{tx.price}</div>
                    <div className={`text-sm font-medium ${
                      tx.profit.startsWith('+') ? 'text-primary' : 'text-destructive'
                    }`}>
                      <div>{tx.profit}</div>
                      <div className="text-xs">{tx.profitPercent}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-muted/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-sm font-medium text-foreground mb-2">No transactions yet</h3>
              <p className="text-xs text-muted-foreground">Your trading activity will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletManager;
