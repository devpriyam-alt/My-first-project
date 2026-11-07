import React from 'react';
import { 
  Search, 
  MapPin, 
  IndianRupee, 
  Clock, 
  Ban, 
  Sparkles, 
  RotateCcw, 
  Check, 
  X,
  Compass
} from 'lucide-react';
import { 
  AlcoholBottleIcon, 
  CigaretteSmokeIcon, 
  ChickenLegIcon, 
  EggSignIcon 
} from './ProhibitionIcons';
import { GENRE_OPTIONS, DESTINATION_SHORTCUTS } from '../data/travelers';
import { FilterState, Prohibitions } from '../types/traveler';

interface SearchFilterPanel40Props {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  matchCount: number;
}

export const SearchFilterPanel40: React.FC<SearchFilterPanel40Props> = ({
  filters,
  onChange,
  onReset,
  matchCount
}) => {

  const handlePlaceSelect = (place: string) => {
    if (place === 'All') {
      onChange({ ...filters, placeSearch: '' });
    } else {
      onChange({ ...filters, placeSearch: place });
    }
  };

  const toggleProhibition = (key: keyof Prohibitions) => {
    onChange({
      ...filters,
      prohibitions: {
        ...filters.prohibitions,
        [key]: !filters.prohibitions[key]
      }
    });
  };

  const toggleGenre = (genre: string) => {
    const exists = filters.selectedGenres.includes(genre);
    const updated = exists
      ? filters.selectedGenres.filter((g) => g !== genre)
      : [...filters.selectedGenres, genre];
    onChange({
      ...filters,
      selectedGenres: updated
    });
  };

  const activeProhibitionsCount = Object.values(filters.prohibitions).filter(Boolean).length;

  return (
    <div className="w-full flex flex-col rounded-2xl border border-slate-800/90 bg-[#0c1220]/95 p-5 shadow-2xl backdrop-blur-md">
      
      {/* Panel 40 Header */}
      <div className="flex items-center justify-between border-b border-slate-800/90 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-emerald-400" />
            <h2 className="text-base font-bold tracking-tight text-white">
              Trip Search & Preferences / Filters
            </h2>
          </div>
          <p className="mt-0.5 text-xs text-slate-400">
            Destination, budget, duration & boundaries
          </p>
        </div>

        <button
          onClick={onReset}
          className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
          title="Reset all search filters"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="mt-5 space-y-6">

        {/* 1. SEARCH PLACE OPTION */}
        <div className="space-y-2">
          <label className="flex items-center justify-between text-xs font-bold text-slate-200">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald-400" />
              1. Search Place / Destination
            </span>
            {filters.placeSearch && (
              <button
                onClick={() => onChange({ ...filters, placeSearch: '' })}
                className="text-[11px] text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </label>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={filters.placeSearch}
              onChange={(e) => onChange({ ...filters, placeSearch: e.target.value })}
              placeholder="Search place (e.g. Mysore, Coorg, Ooty, Hampi, Gokarna...)"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2.5 pl-10 pr-9 text-xs text-white placeholder-slate-500 transition-all focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            {filters.placeSearch && (
              <button
                onClick={() => onChange({ ...filters, placeSearch: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Quick Destination Pill Suggestions */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {DESTINATION_SHORTCUTS.map((place) => {
              const isSelected =
                (place === 'All' && !filters.placeSearch) ||
                (place !== 'All' &&
                  filters.placeSearch.toLowerCase().trim() === place.toLowerCase());
              return (
                <button
                  key={place}
                  onClick={() => handlePlaceSelect(place)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                    isSelected
                      ? 'bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-500/60 font-semibold'
                      : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {place}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. BUDGET BAR: FROM 100 RS TO 100,000 RS PER DAY */}
        <div className="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
              <IndianRupee className="h-4 w-4 text-emerald-400" />
              2. Budget Per Day
            </label>
            <div className="rounded-lg bg-slate-900 px-2.5 py-1 border border-emerald-500/30">
              <span className="font-mono text-xs font-bold text-emerald-400 tabular-nums">
                ₹{filters.budgetPerDay.toLocaleString('en-IN')} / day
              </span>
            </div>
          </div>

          <div className="pt-2">
            <input
              type="range"
              min={100}
              max={100000}
              step={100}
              value={filters.budgetPerDay}
              onChange={(e) =>
                onChange({ ...filters, budgetPerDay: Number(e.target.value) })
              }
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-emerald-500 focus:outline-none"
            />
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-slate-400">
              <span>₹100</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
              <span>₹1,00,000</span>
            </div>
          </div>

          {/* Quick budget presets */}
          <div className="mt-2.5 grid grid-cols-4 gap-1.5">
            {[
              { label: '₹1,500', val: 1500 },
              { label: '₹3,500', val: 3500 },
              { label: '₹7,500', val: 7500 },
              { label: '₹1,00,000', val: 100000 }
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => onChange({ ...filters, budgetPerDay: preset.val })}
                className={`rounded-lg py-1 text-center font-mono text-[10px] font-semibold transition-colors ${
                  filters.budgetPerDay === preset.val
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. TRIP DURATION BAR: 1 DAY TO 400 DAYS */}
        <div className="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
              <Clock className="h-4 w-4 text-emerald-400" />
              3. Trip Duration (Days)
            </label>
            <div className="rounded-lg bg-slate-900 px-2.5 py-1 border border-teal-500/30">
              <span className="font-mono text-xs font-bold text-teal-400 tabular-nums">
                {filters.tripDurationDays} {filters.tripDurationDays === 1 ? 'Day' : 'Days'}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <input
              type="range"
              min={1}
              max={400}
              step={1}
              value={filters.tripDurationDays}
              onChange={(e) =>
                onChange({ ...filters, tripDurationDays: Number(e.target.value) })
              }
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-teal-500 focus:outline-none"
            />
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-slate-400">
              <span>1 Day</span>
              <span>30 Days</span>
              <span>180 Days</span>
              <span>400 Days</span>
            </div>
          </div>

          {/* Quick Duration Buttons */}
          <div className="mt-2.5 grid grid-cols-4 gap-1.5">
            {[
              { label: '3-4 Days (Weekend)', val: 4 },
              { label: '7 Days (Week)', val: 7 },
              { label: '30 Days (Month)', val: 30 },
              { label: '90+ Days (Nomad)', val: 90 }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => onChange({ ...filters, tripDurationDays: item.val })}
                className={`rounded-lg p-1 text-center text-[10px] font-medium leading-tight transition-colors ${
                  filters.tripDurationDays === item.val
                    ? 'bg-teal-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. WHAT SHOULD BE PROHIBITED IN TRIP (WITH SIGNS) */}
        <div className="space-y-3 rounded-xl border border-rose-950/60 bg-rose-950/20 p-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-1.5 text-xs font-bold text-rose-300">
              <Ban className="h-4 w-4 text-rose-400" />
              4. Prohibited in Trip (Boundaries)
            </label>
            {activeProhibitionsCount > 0 && (
              <span className="rounded-full bg-rose-950 px-2 py-0.5 text-[10px] font-bold text-rose-400 ring-1 ring-rose-500/40">
                {activeProhibitionsCount} Active
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-400">
            Strictly match co-travelers who agree to prohibit these habits during travel:
          </p>

          {/* Prohibitions List with Signs */}
          <div className="grid grid-cols-1 gap-2">
            
            {/* 1. Drinking (Alcohol bottle sign) */}
            <button
              type="button"
              onClick={() => toggleProhibition('noDrinking')}
              className={`group flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                filters.prohibitions.noDrinking
                  ? 'border-rose-500/80 bg-rose-950/70 text-rose-200 shadow-md ring-1 ring-rose-500/50'
                  : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    filters.prohibitions.noDrinking
                      ? 'bg-rose-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400 group-hover:text-rose-400'
                  }`}
                  title="Sign of Alcohol Bottle"
                >
                  <AlcoholBottleIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">
                    No Drinking
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Alcohol-free trip
                  </div>
                </div>
              </div>
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                  filters.prohibitions.noDrinking
                    ? 'bg-rose-500 text-slate-950 font-bold'
                    : 'border border-slate-700'
                }`}
              >
                {filters.prohibitions.noDrinking && <Check className="h-2.5 w-2.5" />}
              </div>
            </button>

            {/* 2. Smoking (Smoking option sign) */}
            <button
              type="button"
              onClick={() => toggleProhibition('noSmoking')}
              className={`group flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                filters.prohibitions.noSmoking
                  ? 'border-rose-500/80 bg-rose-950/70 text-rose-200 shadow-md ring-1 ring-rose-500/50'
                  : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    filters.prohibitions.noSmoking
                      ? 'bg-rose-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400 group-hover:text-rose-400'
                  }`}
                  title="Sign of Smoking Option"
                >
                  <CigaretteSmokeIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">
                    No Smoking
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Smoke-free cabs & stay
                  </div>
                </div>
              </div>
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                  filters.prohibitions.noSmoking
                    ? 'bg-rose-500 text-slate-950 font-bold'
                    : 'border border-slate-700'
                }`}
              >
                {filters.prohibitions.noSmoking && <Check className="h-2.5 w-2.5" />}
              </div>
            </button>

            {/* 3. No Non-veg (Chicken option sign) */}
            <button
              type="button"
              onClick={() => toggleProhibition('noNonVeg')}
              className={`group flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                filters.prohibitions.noNonVeg
                  ? 'border-amber-500/80 bg-amber-950/60 text-amber-200 shadow-md ring-1 ring-amber-500/50'
                  : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    filters.prohibitions.noNonVeg
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-800 text-slate-400 group-hover:text-amber-400'
                  }`}
                  title="Sign of Chicken (No Non-veg)"
                >
                  <ChickenLegIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">
                    No Non-veg
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Pure veg meals only
                  </div>
                </div>
              </div>
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                  filters.prohibitions.noNonVeg
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'border border-slate-700'
                }`}
              >
                {filters.prohibitions.noNonVeg && <Check className="h-2.5 w-2.5" />}
              </div>
            </button>

            {/* 4. No Egg (Egg option sign) */}
            <button
              type="button"
              onClick={() => toggleProhibition('noEgg')}
              className={`group flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                filters.prohibitions.noEgg
                  ? 'border-yellow-500/80 bg-yellow-950/60 text-yellow-200 shadow-md ring-1 ring-yellow-500/50'
                  : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    filters.prohibitions.noEgg
                      ? 'bg-yellow-400 text-slate-950'
                      : 'bg-slate-800 text-slate-400 group-hover:text-yellow-400'
                  }`}
                  title="Sign of Egg Option"
                >
                  <EggSignIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">
                    No Egg
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Strict eggless / Satvik
                  </div>
                </div>
              </div>
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                  filters.prohibitions.noEgg
                    ? 'bg-yellow-400 text-slate-950 font-bold'
                    : 'border border-slate-700'
                }`}
              >
                {filters.prohibitions.noEgg && <Check className="h-2.5 w-2.5" />}
              </div>
            </button>

          </div>
        </div>

        {/* 5. PREFERRED GENRE SELECTION (SELECT ONE OR MULTIPLE) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              5. Preferred Travel Genre (Select 1 or Multiple)
            </label>
            {filters.selectedGenres.length > 0 && (
              <button
                onClick={() => onChange({ ...filters, selectedGenres: [] })}
                className="text-[11px] text-slate-500 hover:text-slate-300"
              >
                Clear ({filters.selectedGenres.length})
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {GENRE_OPTIONS.map((genre) => {
              const isSelected = filters.selectedGenres.includes(genre);
              return (
                <button
                  key={genre}
                  type="button"
                  onClick={() => toggleGenre(genre)}
                  className={`group flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? 'border-emerald-500/70 bg-emerald-950/60 text-emerald-300 shadow-sm ring-1 ring-emerald-500/40'
                      : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span
                    className={`flex h-3.5 w-3.5 items-center justify-center rounded-full text-[9px] transition-colors ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'border border-slate-700 group-hover:border-slate-500'
                    }`}
                  >
                    {isSelected && <Check className="h-2.5 w-2.5" />}
                  </span>
                  <span>{genre}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* 40% Panel Footer */}
      <div className="mt-4 border-t border-slate-800/80 pt-3 flex items-center justify-between text-xs">
        <span className="text-slate-400">
          Showing <strong className="text-emerald-400 font-mono">{matchCount}</strong> matched profiles in 60% view
        </span>
      </div>

    </div>
  );
};
