import React from 'react';
import { Compass, MapPin, Sparkles, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onOpenProfile: () => void;
  onToggleMobileFilters: () => void;
  totalMatches: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenProfile,
  onToggleMobileFilters,
  totalMatches
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#090d16]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Zone - Single line wordmark and badge */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-lg shadow-emerald-500/20">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl font-sans">
                Karnataka Trip Match
              </h1>
              <span className="hidden rounded-md bg-emerald-950/80 px-2 py-0.5 text-[11px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30 sm:inline-block">
                South India
              </span>
            </div>
            <p className="hidden text-xs text-slate-400 sm:block">
              Connect with verified co-travelers across Karnataka & Nilgiris
            </p>
          </div>
        </div>

        {/* Center Stats / Discovery Indicator */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 px-3 py-1 text-slate-300 ring-1 ring-slate-700/60">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-white font-semibold tabular-nums">{totalMatches}</span> travelers ready to explore
          </span>
        </div>

        {/* Right Zone: User Profile Info (Priyam Singh with Anime Toji Avatar) + Mobile filter toggle */}
        <div className="flex items-center gap-2.5">
          {/* Mobile Filter Button */}
          <button
            onClick={onToggleMobileFilters}
            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white lg:hidden transition-colors"
            aria-label="Open filter options"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-emerald-400" />
            <span>Filters</span>
          </button>

          {/* User Profile Card */}
          <button
            onClick={onOpenProfile}
            className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/90 p-1.5 pr-3.5 text-left transition-all hover:border-emerald-500/40 hover:bg-slate-850 hover:shadow-lg hover:shadow-emerald-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            title="Click to view & edit your travel profile"
          >
            {/* Anime character Toji Avatar */}
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-slate-800 ring-1 ring-emerald-500/40">
              <img
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=200&q=80"
                alt="Priyam Singh - Toji avatar"
                className="h-full w-full object-cover object-top transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback stylised anime portrait illustration
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=200&q=80';
                }}
              />
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  Priyam Singh
                </span>
                <span className="rounded bg-slate-800 px-1 py-0.2 text-[9px] font-mono uppercase tracking-wider text-slate-400">
                  Toji
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <MapPin className="h-2.5 w-2.5 text-emerald-400" />
                <span>Bengaluru · ₹3.5k/d</span>
              </div>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};
