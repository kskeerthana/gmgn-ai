// src/components/WalletManager.tsx
import React, { useState } from 'react';
import { ArrowLeft, Copy, Settings, ChevronDown, Edit2, RotateCcw, ArrowUpFromLine, Zap, GitBranch, Users, Filter } from 'lucide-react';
import Header from '@/components/Header';

interface WalletManagerProps {
  onClose: () => void;
}

const WalletManager: React.FC<WalletManagerProps> = ({ onClose }) => {
  const [walletName, setWalletName] = useState('W1 Wallet1');
  const [isEditingName, setIsEditingName] = useState(false);

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
      {/* Main Navigation Header */}
      <Header
        onSignUp={() => {}}
        onLogIn={() => {}}
        onWalletClick={onClose}
        onWalletManagerClick={() => {}}
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
          {/* Wallet Card */}
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 flex-1">
                <span className="text-sm">📁</span>
                {isEditingName ? (
                  <input
                    type="text"
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                    onBlur={() => handleNameSave(walletName)}
                    onKeyPress={(e) => e.key === 'Enter' && handleNameSave(walletName)}
                    className="bg-input border border-border rounded px-2 py-1 text-sm font-medium text-foreground flex-1"
                    autoFocus
                  />
                ) : (
                  <span className="text-foreground font-medium text-sm">{walletName}</span>
                )}
                <button 
                  onClick={handleNameEdit}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Edit2 className="w-3 h-3" />
                </button>
                <span className="text-primary text-xs bg-primary/20 px-2 py-1 rounded">Primary</span>
              </div>
              <button className="text-muted-foreground hover:text-foreground ml-2">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>0 SOL</span>
                <span>ZsZZX...6sz</span>
                <button 
                  onClick={() => handleCopy('ZsZZX6UnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEosz')}
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

        {/* Right Content Area (Desktop) */}
        <div className="w-2/5 p-6">
          {/* Wallet Details Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-primary">📁</span>
              <span className="text-foreground font-medium">W1 Wallet1</span>
              <span className="text-primary text-sm">Primary</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-foreground font-medium">0 SOL</span>
              <span className="text-muted-foreground">-$0</span>
            </div>
          </div>

          {/* Large Balance Display */}
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-foreground mb-2">0 SOL</div>
            <div className="text-muted-foreground">-$0</div>
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
        {/* Mobile Wallet Card */}
        <div className="p-4">
          <div className="bg-card rounded-lg p-4 border border-border mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 flex-1">
                <span className="text-sm">📁</span>
                <span className="text-foreground font-medium text-sm">{walletName}</span>
                <span className="text-primary text-xs bg-primary/20 px-2 py-1 rounded">Primary</span>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>0 SOL</span>
                <span>ZsZZX...6sz</span>
                <button 
                  onClick={() => handleCopy('ZsZZX6UnTnFRcxh6RhvKg4CW1kzSWv4jgZK7EgEosz')}
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

          {/* Mobile Balance Display */}
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-foreground mb-2">0 SOL</div>
            <div className="text-muted-foreground">-$0</div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-6">
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

          <div className="grid grid-cols-2 gap-4 mb-6">
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
      </div>

      {/* Activity Section - Full Width Below (Both Desktop and Mobile) */}
      <div className="border-t border-border lg:border-t-0">
        <div className="p-4">
          <div className="bg-card rounded-lg border border-border">
            <div className="p-4 border-b border-border">
              <h3 className="text-foreground font-medium text-base">Activity</h3>
            </div>

            {/* Table Headers - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-8 gap-4 p-4 text-xs text-muted-foreground border-b border-border">
              <div className="flex items-center space-x-1">
                <span>Maker</span>
                <Filter className="w-3 h-3" />
              </div>
              <div>Type</div>
              <div>Token</div>
              <div className="flex items-center space-x-1">
                <span>Total</span>
                <span>💰</span>
                <span>USD</span>
                <span>💰</span>
              </div>
              <div>Amount</div>
              <div>Price</div>
              <div>Profit</div>
              <div>Age</div>
            </div>

            {/* Empty State */}
            <div className="text-center py-12 sm:py-16">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-muted/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">📊</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">CLOSE</div>
              <div className="text-xs text-muted-foreground">No Data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletManager;
