
import React from 'react';
import { ArrowLeft, Share, Zap, Activity, Info, TrendingUp, Users, Flame } from 'lucide-react';
import TradingChart from './TradingChart';

interface TradingViewProps {
  tokenName: string;
  tokenSymbol: string;
  price: string;
  change24h: number;
  onClose: () => void;
}

const TradingView: React.FC<TradingViewProps> = ({
  tokenName,
  tokenSymbol,
  price,
  change24h,
  onClose,
}) => {
  const isPositive = change24h > 0;

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-3 md:p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{tokenSymbol.charAt(0)}</span>
          </div>
          <div>
            <h2 className="font-semibold text-foreground text-sm md:text-base">{tokenName}</h2>
            <p className="text-xs text-muted-foreground">{tokenSymbol}</p>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <Share className="w-5 h-5" />
        </button>
      </div>

      <div className="p-3 md:p-4">
        {/* Price and Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <div className="text-xl md:text-2xl font-bold text-primary">{price}</div>
            <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm">
              <span className="text-muted-foreground flex items-center space-x-1">
                <span>Name ✓ CA</span>
                <Activity className="w-3 h-3" />
              </span>
              <span className="text-primary flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>20/70</span>
              </span>
              <span className="text-muted-foreground flex items-center space-x-1">
                <Flame className="w-3 h-3" />
                <span>0%</span>
              </span>
              <span className="text-primary">✓✓✓ ✗</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <button className="bg-card border border-border rounded-lg px-3 py-1.5 text-xs hover:bg-muted transition-colors">
              Copy trade
            </button>
            <button className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">
              <Users className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Performance badges */}
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">1m +64.73%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">5m +67.97%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">1h +67.97%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">24h +67.97%</span>
        </div>

        {/* Trading Chart */}
        <TradingChart price={price} change24h={change24h} />

        {/* Control buttons */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <button className="text-muted-foreground hover:text-foreground">
            <TrendingUp className="w-5 h-5" />
          </button>
          <span className="text-muted-foreground text-sm">00:0</span>
          <button className="text-muted-foreground hover:text-foreground">
            <Activity className="w-5 h-5" />
          </button>
        </div>

        {/* Activity Section */}
        <div className="bg-card rounded-xl p-3 md:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Activity</h3>
            <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground mt-2 sm:mt-0">
              <span className="flex items-center space-x-1">
                <span>Holders 115</span>
                <span>💎 0.01%</span>
                <Users className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-4 text-xs md:text-sm">
            <button className="text-foreground font-medium">All</button>
            <button className="text-muted-foreground hover:text-foreground">Smart</button>
            <button className="text-muted-foreground hover:text-foreground">KOL/VC 2</button>
            <button className="text-muted-foreground hover:text-foreground">Following</button>
            <button className="text-muted-foreground hover:text-foreground">Remarks</button>
            <button className="text-muted-foreground hover:text-foreground">DEV</button>
            <button className="text-muted-foreground hover:text-foreground">Wash</button>
          </div>

          {/* Activity list */}
          <div className="space-y-2 md:space-y-3">
            {[
              { type: 'Sell', amount: '$6.56', time: '0s', emoji: '📉💎' },
              { type: 'Buy', amount: '$11.01', time: '0s', emoji: '💰' },
              { type: 'Sell', amount: '$12.06', time: '1s', emoji: '📉💎' },
              { type: 'Buy', amount: '$1.62', time: '1s', emoji: '📉💎' },
              { type: 'Sell', amount: '$11.58', time: '1s', emoji: '📉💎' },
              { type: 'Buy', amount: '$7.78', time: '1s', emoji: '💰' },
            ].map((trade, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-xs text-muted-foreground w-6">{trade.time}</span>
                  <span className={`text-xs md:text-sm font-medium ${
                    trade.type === 'Buy' ? 'text-primary' : 'text-destructive'
                  }`}>
                    {trade.type}
                  </span>
                  <span className="text-xs md:text-sm text-foreground">{trade.amount}</span>
                  <span className="text-xs">{trade.emoji}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 md:hidden">
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <button className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-1 hover:bg-primary/30 transition-colors">
              <Zap className="w-5 h-5 text-primary" />
            </button>
            <span className="text-xs text-muted-foreground">Buy</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-1 hover:bg-muted/80 transition-colors">
              <TrendingUp className="w-5 h-5 text-muted-foreground" />
            </button>
            <span className="text-xs text-muted-foreground">Sell</span>
          </div>
          <div className="text-center">
            <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-1 hover:bg-muted/80 transition-colors">
              <Info className="w-5 h-5 text-muted-foreground" />
            </button>
            <span className="text-xs text-muted-foreground">Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingView;
