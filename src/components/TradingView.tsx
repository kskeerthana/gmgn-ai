// src/components/TradingView.tsx
import React, { useState } from 'react';
import { ArrowLeft, Share, Copy, Users, Star, Eye, EyeOff, ChevronDown, Filter, TrendingUp, TrendingDown, BarChart3, Activity, Info, Zap, Settings } from 'lucide-react';
import Header from '@/components/Header';

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
  const [selectedTimeframe, setSelectedTimeframe] = useState('1h');
  const [selectedTab, setSelectedTab] = useState('Activity');
  const [selectedSubTab, setSelectedSubTab] = useState('All');
  const [chartType, setChartType] = useState('Price/MC');

  const timeframes = ['1s', '15s', '30s', '1m', '5m', '15m', '1h'];
  const tabs = ['Activity', 'Liquidity', 'Traders', 'Holders 187', 'Following', 'Positions', 'Limit', 'Auto', 'Dev Token'];
  const subTabs = ['All', 'Smart', 'KOL/VC 3', 'Following', 'Remarks', 'DEV 1', 'Whale', 'Fresh 38', 'Snipers 4', 'Top 91', 'Insiders', 'Bundler 4'];

  // Mock trading data
  const trades = [
    { age: '31s', type: 'Buy', amount: '$1.48', volume: '30.34K', price: '$0.048772', maker: '+32Xx4...aUh', emoji: '💎', count: 1 },
    { age: '1m', type: 'Sell', amount: '$2.15', volume: '45.12K', price: '$0.047890', maker: '+28Yy2...bVi', emoji: '📉', count: 2 },
    { age: '2m', type: 'Buy', amount: '$5.67', volume: '120.5K', price: '$0.049123', maker: '+15Zz9...cWj', emoji: '🚀', count: 3 },
    { age: '3m', type: 'Sell', amount: '$0.89', volume: '18.7K', price: '$0.047234', maker: '+41Aa7...dXk', emoji: '💎', count: 4 },
    { age: '4m', type: 'Buy', amount: '$12.34', volume: '250.8K', price: '$0.050456', maker: '+67Bb3...eYl', emoji: '🔥', count: 5 },
  ];

  // Realistic candlestick data matching the screenshot
  const candleData = [
    { open: 0.020000, high: 0.025000, low: 0.018000, close: 0.024000, volume: 850, time: '18:37', isGreen: true },
    { open: 0.024000, high: 0.028000, low: 0.022000, close: 0.026000, volume: 1200, time: '18:45', isGreen: true },
    { open: 0.026000, high: 0.030000, low: 0.024000, close: 0.028000, volume: 950, time: '18:52', isGreen: true },
    { open: 0.028000, high: 0.032000, low: 0.026000, close: 0.030000, volume: 1100, time: '19:00', isGreen: true },
    { open: 0.030000, high: 0.035000, low: 0.029000, close: 0.033000, volume: 1350, time: '19:07', isGreen: true },
    { open: 0.033000, high: 0.038000, low: 0.031000, close: 0.036000, volume: 1600, time: '19:15', isGreen: true },
    { open: 0.036000, high: 0.042000, low: 0.034000, close: 0.040000, volume: 1800, time: '19:22', isGreen: true },
    { open: 0.040000, high: 0.045000, low: 0.038000, close: 0.043000, volume: 2100, time: '19:30', isGreen: true },
    { open: 0.043000, high: 0.048000, low: 0.041000, close: 0.046000, volume: 1950, time: '19:37', isGreen: true },
    { open: 0.046000, high: 0.050000, low: 0.044000, close: 0.049351, volume: 2300, time: '19:45', isGreen: true },
  ];

  const maxPrice = 0.050000;
  const minPrice = 0.018000;
  const priceRange = maxPrice - minPrice;

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <Header
        onSignUp={() => {}}
        onLogIn={() => {}}
        onWalletClick={() => {}}
        onHomeClick={onClose}
        isLoggedIn={true}
      />

      {/* Mobile Header */}
      <div className="lg:hidden p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-foreground text-base">ECO</h2>
                <span className="text-xs bg-primary/20 text-primary px-1 rounded">📊</span>
              </div>
              <p className="text-xs text-muted-foreground">7YJMD...onk 📋</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-lg font-bold text-primary">$0.049351</div>
              <div className="text-xs text-muted-foreground">24h +1.02%</div>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="flex items-center space-x-4 text-xs mb-4">
          <span className="text-muted-foreground flex items-center space-x-1">
            <span>👥 Name ✓ CA</span>
            <span>❌</span>
            <span>☰</span>
          </span>
          <span className="text-primary flex items-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>2/70</span>
          </span>
          <span className="text-muted-foreground flex items-center space-x-1">
            <span>🔥 0.5%</span>
          </span>
          <span className="text-primary">✓✓✓ ✗</span>
        </div>

        {/* Mobile Performance Badges */}
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">1m +1.3%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">5m +12.87%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">1h +95.48%</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded">24h +1034.3%</span>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Desktop Token Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <button className="text-muted-foreground hover:text-foreground">
                <Star className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="font-semibold text-foreground text-lg">ECO</h2>
                  <span className="text-sm text-muted-foreground">ECO COIN</span>
                  <span className="text-xs bg-primary/20 text-primary px-1 rounded">📊</span>
                  <span className="text-xs bg-muted text-muted-foreground px-1 rounded">🏠</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>100%</span>
                  <div className="w-20 h-1 bg-primary rounded-full"></div>
                  <span>🏠 Sell</span>
                  <span>7YJMD...onk</span>
                  <Copy className="w-3 h-3 cursor-pointer hover:text-foreground" />
                  <span>❌</span>
                  <span>🔗</span>
                  <span>📋</span>
                  <span>Name</span>
                  <span>✓ CA</span>
                  <span>❌</span>
                  <span>☰</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">$0.048772</div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">Snipers &gt;</span>
                <span className="text-muted-foreground">Top 10</span>
                <span className="text-muted-foreground">Audit &gt;</span>
                <span className="text-muted-foreground">24h</span>
                <span className="text-primary">+1.02%</span>
                <span className="text-primary flex items-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>2/70</span>
                </span>
                <span className="text-muted-foreground">26%</span>
                <span className="text-primary">✓ Safe</span>
                <span className="text-primary">4/4</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-2 bg-card border border-border rounded-lg text-sm hover:bg-muted transition-colors">
                <Users className="w-4 h-4" />
                <span>Copy trade</span>
              </button>
              <button className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">
                <Users className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">
                <Share className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Stats Bar */}
        <div className="flex items-center justify-between p-4 border-b border-border text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">MKT Cap</span>
              <span className="text-foreground">$48.7K</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Liq</span>
              <span className="text-foreground">$36.5K</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">24h Vol</span>
              <span className="text-foreground">$138.6K</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Holders</span>
              <span className="text-foreground">187</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Pair</span>
              <span className="text-foreground">ECO</span>
              <span className="text-foreground">SOL</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Liq/Initial</span>
              <span className="text-foreground">241.5M/821.9M(82.19%)</span>
              <span className="text-foreground">89.5L/6.05(+1.3K%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Value</span>
              <span className="text-foreground">$1.8K</span>
              <span className="text-foreground">$13.2K</span>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="flex items-center justify-between p-4 border-b border-border text-xs">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">NoMint</span>
              <span className="text-primary">Yes ✓</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Blacklist</span>
              <span className="text-muted-foreground">No ✓</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Burnt</span>
              <span className="text-primary">100% ✓</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Top 10</span>
              <span className="text-primary">25.96% ✓</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Insiders</span>
              <span className="text-muted-foreground">0%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Phishing</span>
              <span className="text-muted-foreground">11.6%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Bundler</span>
              <span className="text-muted-foreground">0%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">BlueChip</span>
              <span className="text-muted-foreground">0.5%</span>
            </div>
          </div>
        </div>

        {/* Rug Alert */}
        <div className="flex items-center space-x-2 p-2 bg-destructive/10 border-b border-border">
          <span className="text-destructive">🚨 Rug</span>
          <span className="text-destructive text-sm">18.4%(368)</span>
          <ChevronDown className="w-4 h-4 text-destructive" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row">
        {/* Chart Section */}
        <div className="flex-1 p-4">
          {/* Chart Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
            <div className="flex flex-wrap gap-1 text-xs">
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
              <button className="p-1.5 rounded transition-colors text-primary bg-primary/20">
                <BarChart3 className="w-4 h-4" />
              </button>
              <span className="text-xs text-muted-foreground">Multicharts</span>
              <span className="text-xs text-muted-foreground">📊</span>
              <span className="text-xs text-muted-foreground">🔄</span>
              <span className="text-xs text-muted-foreground">Markers</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Price/MC</span>
              <span className="text-xs text-muted-foreground">USD/SOL</span>
            </div>
          </div>

          {/* Realistic Chart Area */}
          <div className="relative h-64 lg:h-96 bg-gray-900 rounded-lg mb-4 overflow-hidden border border-border">
            {/* Price scale on the right */}
            <div className="absolute right-2 top-0 bottom-0 flex flex-col justify-between py-4 text-xs text-muted-foreground">
              <span>0.050000</span>
              <span>0.045000</span>
              <span>0.040000</span>
              <span>0.035000</span>
              <span>0.030000</span>
              <span>0.025000</span>
              <span>0.020000</span>
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="absolute left-0 right-12 border-t border-gray-700/30"
                  style={{ top: `${(i / 6) * 100}%` }}
                />
              ))}
            </div>

            {/* Candlestick Chart */}
            <div className="absolute bottom-8 left-4 right-16 top-4 flex items-end justify-between">
              {candleData.map((candle, index) => {
                const bodyHeight = Math.abs(candle.close - candle.open) / priceRange * 100;
                const bodyBottom = (candle.close < candle.open ? candle.close : candle.open - minPrice) / priceRange * 100;
                const wickTop = (candle.high - minPrice) / priceRange * 100;
                const wickBottom = (candle.low - minPrice) / priceRange * 100;
                
                return (
                  <div key={index} className="relative flex flex-col items-center" style={{ height: '100%' }}>
                    {/* Upper wick */}
                    <div
                      className={`w-0.5 ${candle.isGreen ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{
                        height: `${wickTop - Math.max(candle.open, candle.close - minPrice) / priceRange * 100}%`,
                        position: 'absolute',
                        top: `${100 - wickTop}%`
                      }}
                    />
                    
                    {/* Candle body */}
                    <div
                      className={`w-2 lg:w-3 ${candle.isGreen ? 'bg-green-500' : 'bg-red-500'} absolute`}
                      style={{
                        height: `${Math.max(bodyHeight, 1)}%`,
                        bottom: `${bodyBottom}%`
                      }}
                    />
                    
                    {/* Lower wick */}
                    <div
                      className={`w-0.5 ${candle.isGreen ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{
                        height: `${Math.min(candle.open, candle.close - minPrice) / priceRange * 100 - wickBottom}%`,
                        position: 'absolute',
                        bottom: `${wickBottom}%`
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Volume bars at bottom */}
            <div className="absolute bottom-0 left-4 right-16 h-8 flex items-end justify-between">
              {candleData.map((candle, index) => (
                <div
                  key={index}
                  className={`w-2 lg:w-3 ${candle.isGreen ? 'bg-green-500/50' : 'bg-red-500/50'}`}
                  style={{
                    height: `${(candle.volume / 2300) * 100}%`,
                    minHeight: '2px'
                  }}
                />
              ))}
            </div>
            
            {/* Current price line */}
            <div className="absolute right-0 top-1/4 transform -translate-y-1/2 flex items-center">
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                0.049351
              </div>
            </div>
            
            {/* Volume indicator */}
            <div className="absolute bottom-2 right-2 bg-primary/20 text-primary px-2 py-1 rounded text-xs">
              10.91K
            </div>

            {/* Time labels */}
            <div className="absolute bottom-0 left-4 right-16 flex justify-between text-xs text-muted-foreground">
              <span>18:37</span>
              <span>19:00</span>
              <span>19:30</span>
              <span>20:00</span>
              <span>20:14</span>
              <span>20:30</span>
              <span>20:4</span>
            </div>
          </div>

          {/* Chart Time Display */}
          <div className="text-center text-xs text-muted-foreground mb-4">
            20:38:33 (UTC-4) % log auto
          </div>
        </div>

        {/* Right Sidebar - Desktop Only */}
        <div className="hidden lg:block w-80 border-l border-border p-4">
          {/* Trading Panel */}
          <div className="bg-card rounded-lg p-4 border border-border mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm">Buy</button>
                <button className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm">Sell</button>
                <button className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm">Auto</button>
                <span className="text-primary">•</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Market</span>
              <span className="text-sm text-muted-foreground">Limit</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Amount</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="0.01"
                    className="w-full px-3 py-2 bg-input border border-border rounded text-sm"
                  />
                  <span className="absolute right-3 top-2 text-xs text-muted-foreground">SOL</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 py-1 text-xs bg-muted text-muted-foreground rounded">0.1</button>
                <button className="flex-1 py-1 text-xs bg-muted text-muted-foreground rounded">0.5</button>
                <button className="flex-1 py-1 text-xs bg-muted text-muted-foreground rounded">1</button>
              </div>

              <div className="text-xs text-muted-foreground">
                1 SOL = 3M ECO
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-3 h-3" />
                <span className="text-xs text-muted-foreground">1P&SL</span>
                <input type="checkbox" className="w-3 h-3" />
                <span className="text-xs text-muted-foreground">Dev Sell 100%</span>
              </div>

              <button className="w-full py-2 bg-primary text-primary-foreground rounded font-medium">
                Buy
              </button>

              <div className="text-center text-xs text-muted-foreground">
                <span>📊 AutoTx(0%)</span>
                <span className="ml-2">📉 0.005</span>
                <span className="ml-2">🔄 OFF</span>
              </div>
            </div>
          </div>

          {/* Position Info */}
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex justify-between">
              <span>Bal: 0 SOL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="p-4">
        <div className="bg-card rounded-lg border border-border">
          {/* Tab Navigation */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex flex-wrap gap-2 lg:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`text-xs lg:text-sm font-medium transition-colors ${
                    selectedTab === tab
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-primary">⚡ Instant trade</span>
              <Settings className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Sub Tab Navigation */}
          <div className="flex flex-wrap gap-2 lg:gap-4 p-4 border-b border-border">
            {subTabs.map((subTab) => (
              <button
                key={subTab}
                onClick={() => setSelectedSubTab(subTab)}
                className={`text-xs font-medium transition-colors ${
                  selectedSubTab === subTab
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {subTab}
              </button>
            ))}
          </div>

          {/* Table Headers - Desktop */}
          <div className="hidden lg:grid grid-cols-7 gap-4 p-4 text-xs text-muted-foreground border-b border-border">
            <div className="flex items-center space-x-1">
              <span>Age</span>
              <span>⚡</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div>Type</div>
            <div className="flex items-center space-x-1">
              <span>Total USD</span>
              <span>💰</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div>Amount</div>
            <div className="flex items-center space-x-1">
              <span>Price</span>
              <span>💰</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>Maker</span>
              <span>💰</span>
              <span>🚨</span>
            </div>
            <div>30D TXs</div>
          </div>

          {/* Trading Activity */}
          <div className="divide-y divide-border">
            {trades.map((trade, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 hover:bg-muted/50 transition-colors">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{trade.age}</span>
                      <span className={`text-sm font-medium ${
                        trade.type === 'Buy' ? 'text-primary' : 'text-destructive'
                      }`}>
                        {trade.type}
                      </span>
                      <span className="text-sm">{trade.amount}</span>
                      <span className="text-xs">{trade.emoji}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{trade.maker}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{trade.volume}</span>
                    <span>{trade.price}</span>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:contents">
                  <div className="text-xs text-muted-foreground">{trade.age}</div>
                  <div className={`text-sm font-medium ${
                    trade.type === 'Buy' ? 'text-primary' : 'text-destructive'
                  }`}>
                    {trade.type}
                  </div>
                  <div className="text-sm">{trade.amount}</div>
                  <div className="text-sm text-muted-foreground">{trade.volume}</div>
                  <div className="text-sm text-muted-foreground">{trade.price}</div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-muted-foreground">{trade.maker}</span>
                    <span className="text-xs">{trade.emoji}</span>
                    <span className="text-xs text-muted-foreground">{trade.count}</span>
                    <span className="text-primary">💎</span>
                  </div>
                  <div className="text-xs text-muted-foreground">--</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
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
