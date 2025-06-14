
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onSwitchMode: () => void;
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onSwitchMode, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo auth attempt:', { mode, email, password, inviteCode });
    // Demo authentication - always successful
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-card w-full max-w-md rounded-2xl p-6 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-muted-foreground mb-6">
          {mode === 'login' ? "Don't have an account yet? " : "Already have an account? "}
          <button
            onClick={onSwitchMode}
            className="text-primary hover:underline"
          >
            {mode === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="demo@example.com"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {mode === 'login' && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="demo123"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Invite Code (Optional)
              </label>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Invite Code (Optional)"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-muted-foreground mt-2">
                The invite code cannot be changed after binding. Please ensure the correct invite code is entered.
              </p>
            </div>
          )}

          {mode === 'login' && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            {mode === 'login' ? 'Demo Log In' : 'Demo Sign Up'}
          </button>
        </form>

        <div className="mt-6">
          <div className="text-center text-muted-foreground mb-4">
            {mode === 'signup' ? 'OR Sign Up' : 'OR'}
          </div>
          
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2 cursor-pointer hover:bg-blue-600 transition-colors">
                <span className="text-white text-xl">📧</span>
              </div>
              <span className="text-sm text-muted-foreground">Telegram</span>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-2 cursor-pointer hover:bg-purple-600 transition-colors">
                <span className="text-white text-xl">👻</span>
              </div>
              <span className="text-sm text-muted-foreground">Phantom</span>
            </div>

            {mode === 'login' && (
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-2 cursor-pointer hover:bg-secondary/80 transition-colors">
                  <span className="text-white text-xl">📱</span>
                </div>
                <span className="text-sm text-muted-foreground">APP Scan</span>
              </div>
            )}
          </div>
        </div>

        {mode === 'login' && (
          <div className="mt-6 text-center">
            <button className="text-primary hover:underline text-sm">
              Connect with extension wallet →
            </button>
          </div>
        )}

        <div className="mt-6 flex justify-center space-x-4 text-xs text-muted-foreground">
          <button className="hover:text-foreground transition-colors">Terms of Service</button>
          <span>|</span>
          <button className="hover:text-foreground transition-colors">Privacy Policy</button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
