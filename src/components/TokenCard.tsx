// src/components/TokenCard.tsx
import React from 'react';
import { Copy, ExternalLink, BarChart3, Zap } from 'lucide-react';

interface TokenCardProps {
  name: string;
  symbol: string;
  avatar: string;
  address: string;
  age: string;
  change1h: number;
  change5m: number;
  change1m: number;
  volume: string;
  marketCap: string;
  holders: number;
  transactions: number;
  price?: string;
  status?: 'new' | 'completing' | 'completed';
  onClick?: () => void;
}

const TokenCard: React.FC<TokenCardProps> = ({
  name,
  symbol,
  avatar,
  address,
  age,
  change1h,
  change5m,
  change1m,
  volume,
  marketCap,
  holders,
  transactions,
  price = "$0.00",
  status = 'new',
  onClick,
}) => {
  const formatChange = (change: number) => {
    const isPositive = change > 0;
    return (
      <span className={isPositive ? 'text-primary' : 'text-destructive'}>
        {isPositive ? '+' : ''}{change.toFixed(1)}%
      </span>
    );
  };

  const getStatusIndicator = () => {
    switch (status) {
      case 'completing':
        return (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">●</span>
          </div>
        );
      case 'completed':
        return (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">✓</span>
          </div>
        );
      default:
        return (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs text-primary-foreground">✓</span>
          </div>
        );
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completing':
        return 'text-yellow-500';
      case 'completed':
        return 'text-yellow-500';
      default:
        return 'text-primary';
    }
  };

  return (
    <div 
      className="bg-card border border-border rounded-xl p-3 hover:border-primary/50 transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
              {avatar ? (
                <img src={avatar} alt={symbol} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                  {symbol.charAt(0)}
                </div>
              )}
            </div>
            {getStatusIndicator()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-foreground text-sm truncate">{name}</h3>
              <span className="text-xs text-muted-foreground">{symbol}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>{age}</span>
              <span className="truncate">{address}</span>
              <Copy className="w-3 h-3 cursor-pointer hover:text-foreground transition-colors" />
              <ExternalLink className="w-3 h-3 cursor-pointer hover:text-foreground transition-colors" />
            </div>
          </div>
        </div>
        <button className={`flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/30 transition-colors ${getStatusColor()}`}>
          <Zap className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between text-xs mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground">👥</span>
            <span className="text-foreground font-medium">{holders}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground">📊</span>
            <span className="text-foreground font-medium">{transactions}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs mb-3">
        <div className="flex items-center space-x-4">
          <div>
            <span className="text-muted-foreground">1h: </span>
            {formatChange(change1h)}
          </div>
          <div>
            <span className="text-muted-foreground">5m: </span>
            {formatChange(change5m)}
          </div>
          <div>
            <span className="text-muted-foreground">1m: </span>
            {formatChange(change1m)}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          <span className="text-foreground font-medium">{volume}</span>
          <span className="text-muted-foreground">{marketCap}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-foreground font-medium">{price}</span>
          <div className="flex items-center space-x-1">
            <BarChart3 className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">{Math.floor(Math.random() * 10)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
