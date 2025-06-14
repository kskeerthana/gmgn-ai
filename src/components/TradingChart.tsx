
import React, { useState } from 'react';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';

interface TradingChartProps {
  price: string;
  change24h: number;
}

const TradingChart: React.FC<TradingChartProps> = ({ price, change24h }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1h');
  const [chartType, setChartType] = useState('candles');

  const timeframes = ['1S', '15S', '30S', '1m', '5m', '15m', '1h'];
  
  // Mock candlestick data
  const candleData = [
    { price: 0.042000, volume: 1200 },
    { price: 0.040367, volume: 1500 },
    { price: 0.038000, volume: 900 },
    { price: 0.044000, volume: 1800 },
    { price: 0.046000, volume: 1100 },
    { price: 0.047722, volume: 2100 },
    { price: 0.050000, volume: 1600 },
  ];

  return (
    <div className="bg-card rounded-xl p-3 md:p-4 mb-4">
      {/* Chart Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
        <div className="flex flex-wrap gap-1 md:gap-2 text-xs">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-2 py-1 rounded transition-colors ${
                selectedTimeframe === timeframe
                  ? 'text-primary font-medium bg-primary/20'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setChartType('candles')}
            className={`p-1.5 rounded transition-colors ${
              chartType === 'candles' ? 'text-primary bg-primary/20' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setChartType('line')}
            className={`p-1.5 rounded transition-colors ${
              chartType === 'line' ? 'text-primary bg-primary/20' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Activity className="w-4 h-4" />
          </button>
          <span className="text-xs text-muted-foreground">Price/MC</span>
        </div>
      </div>
      
      {/* Price Scale */}
      <div className="flex justify-end mb-2">
        <div className="text-xs text-muted-foreground space-y-1">
          <div>0.050000</div>
          <div className="text-primary font-medium">0.047722</div>
          <div>0.046000</div>
          <div>0.044000</div>
          <div>0.042000</div>
          <div>0.040000</div>
          <div>0.038000</div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-48 md:h-64 bg-background/50 rounded-lg mb-4 overflow-hidden">
        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl md:text-6xl font-bold text-muted-foreground/10">GMGN.AI</div>
        </div>
        
        {/* Mock candlestick chart */}
        <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-between px-4">
          {candleData.map((candle, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
              {/* Candlestick body */}
              <div
                className={`w-2 md:w-3 bg-primary rounded-sm ${
                  index % 2 === 0 ? 'bg-primary' : 'bg-destructive'
                }`}
                style={{
                  height: `${(candle.price / 0.05) * 100}%`,
                  minHeight: '8px'
                }}
              />
              {/* Volume bar */}
              <div
                className="w-1 md:w-1.5 bg-muted-foreground/30 rounded-sm"
                style={{
                  height: `${(candle.volume / 2100) * 20}px`,
                  minHeight: '2px'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Current price line */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
            0.047722
          </div>
          <div className="w-full h-px bg-primary/50"></div>
        </div>
        
        {/* Order book indicator */}
        <div className="absolute bottom-2 right-2 bg-primary/20 text-primary px-2 py-1 rounded text-xs">
          27.68K Orders
        </div>
      </div>

      {/* Volume indicator */}
      <div className="text-center text-xs text-muted-foreground">
        Volume: 711.29 SOL
      </div>
    </div>
  );
};

export default TradingChart;
