import React, { useState } from 'react';
import { 
  Users, 
  ArrowUpDown, 
  Sparkles, 
  PlusCircle, 
  RotateCcw, 
  Calendar, 
  Car, 
  MapPin, 
  IndianRupee, 
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { Traveler, FilterState } from '../types/traveler';
import { 
  AlcoholBottleIcon, 
  CigaretteSmokeIcon, 
  ChickenLegIcon, 
  EggSignIcon 
} from './ProhibitionIcons';

interface ProfileGeneratorPanel60Props {
  travelers: Traveler[];
  totalCount?: number;
  currentFilters: FilterState;
  onConnect: (traveler: Traveler) => void;
  onViewItinerary: (traveler: Traveler) => void;
  onResetFilters: () => void;
  onGenerateCustomProfile: () => void;
}

export type SortOption = 'match' | 'budget_asc' | 'budget_desc' | 'duration';

export const ProfileGeneratorPanel60: React.FC<ProfileGeneratorPanel60Props> = ({
  travelers,
  totalCount = 10,
  currentFilters,
  onConnect,
  onViewItinerary,
  onResetFilters,
  onGenerateCustomProfile
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('match');

  const sortedTravelers = [...travelers].sort((a, b) => {
    if (sortBy === 'match') return b.matchScore - a.matchScore;
    if (sortBy === 'budget_asc') return a.dailyBudget - b.dailyBudget;
    if (sortBy === 'budget_desc') return b.dailyBudget - a.dailyBudget;
    if (sortBy === 'duration') return b.tripDays - a.tripDays;
    return 0;
  });

  return (
    <div className="w-full flex flex-col space-y-4">
      
      {/* Top Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-slate-800/90 bg-[#0c1220]/95 p-4 shadow-xl backdrop-blur-md">
        
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/40">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Find your travel match
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Showing <span className="font-mono font-bold text-emerald-400">{travelers.length}</span> of <span className="font-mono font-bold text-slate-300">{totalCount}</span> travelers, best matches first
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          
          {/* Generate Custom Profile button */}
          <button
            onClick={onGenerateCustomProfile}
            className="flex items-center gap-1.5 rounded-xl border border-emerald-500/50 bg-emerald-950/40 px-3 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-900/50 hover:text-white transition-all shadow-sm"
            title="Generate a custom profile matching your exact search"
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span>Generate Match</span>
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs">
            <ArrowUpDown className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent text-xs font-medium text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value="match" className="bg-slate-900">Best matches first</option>
              <option value="budget_asc" className="bg-slate-900">Budget: Low to High</option>
              <option value="budget_desc" className="bg-slate-900">Budget: High to Low</option>
              <option value="duration" className="bg-slate-900">Duration (Days)</option>
            </select>
          </div>

        </div>

      </div>

      {/* Profiles Grid or Empty State */}
      {sortedTravelers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {sortedTravelers.map((traveler, index) => {
            const isTopMatch = index === 0 && sortBy === 'match';
            return (
              <article
                key={traveler.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-[#0d1322]/90 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/30 ${
                  isTopMatch
                    ? 'border-emerald-500/60 ring-1 ring-emerald-500/30'
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Top Match Banner if applicable */}
                {isTopMatch && (
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-500 px-3 py-1 text-center text-[10px] font-extrabold uppercase tracking-wider text-slate-950">
                    ★ Best Overall Match For Your Preferences ★
                  </div>
                )}

                {/* Cover Image & Match Badge */}
                <div className="relative h-28 w-full overflow-hidden bg-slate-900">
                  <img
                    src={traveler.coverUrl}
                    alt={traveler.location}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-[#0d1322]/40 to-transparent" />

                  {/* Compatibility Score */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-2.5 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/50 backdrop-blur-md shadow-md">
                    <Sparkles className="h-3 w-3 text-emerald-400" />
                    <span className="font-mono tabular-nums">{traveler.matchScore}% Match</span>
                  </div>

                  {/* Location & Days Tag */}
                  <div className="absolute bottom-2 left-3 flex items-center gap-2 text-xs font-bold text-white drop-shadow">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{traveler.location}</span>
                    </div>
                    <span className="text-slate-400 font-normal">·</span>
                    <div className="flex items-center gap-1 font-mono text-emerald-300">
                      <Clock className="h-3 w-3" />
                      <span>{traveler.tripDays} Days Trip</span>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Traveler Header */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-slate-700 bg-slate-800 shadow">
                          <img
                            src={traveler.avatarUrl}
                            alt={traveler.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                            }}
                          />
                          {traveler.verified && (
                            <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-slate-900 p-0.5 text-emerald-400">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                              {traveler.name}
                            </h3>
                            <span className="text-xs font-medium text-slate-400">
                              ({traveler.age}y)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span>From {traveler.origin}</span>
                          </div>
                        </div>
                      </div>

                      {/* Budget Badge */}
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 text-right">
                        <div className="text-[10px] text-slate-400">Daily Budget</div>
                        <div className="font-mono text-xs font-bold text-emerald-300">
                          ₹{traveler.dailyBudget.toLocaleString('en-IN')}<span className="text-[10px] font-normal text-slate-400">/d</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {traveler.bio}
                    </p>

                    {/* Prohibitions Signs Respected by this Candidate */}
                    <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-slate-300 mb-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Boundaries & Prohibitions Honored:</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {/* Drinking */}
                        <span
                          className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                            traveler.prohibitions.noDrinking
                              ? 'bg-rose-950/80 text-rose-300 ring-1 ring-rose-500/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <AlcoholBottleIcon className="h-3 w-3" />
                          <span>{traveler.prohibitions.noDrinking ? 'No Drinking' : 'Drinking OK'}</span>
                        </span>

                        {/* Smoking */}
                        <span
                          className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                            traveler.prohibitions.noSmoking
                              ? 'bg-rose-950/80 text-rose-300 ring-1 ring-rose-500/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <CigaretteSmokeIcon className="h-3 w-3" />
                          <span>{traveler.prohibitions.noSmoking ? 'No Smoking' : 'Smoking OK'}</span>
                        </span>

                        {/* Non-veg */}
                        <span
                          className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                            traveler.prohibitions.noNonVeg
                              ? 'bg-amber-950/80 text-amber-300 ring-1 ring-amber-500/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <ChickenLegIcon className="h-3 w-3" />
                          <span>{traveler.prohibitions.noNonVeg ? 'No Non-veg' : 'Non-veg OK'}</span>
                        </span>

                        {/* Egg */}
                        <span
                          className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                            traveler.prohibitions.noEgg
                              ? 'bg-yellow-950/80 text-yellow-300 ring-1 ring-yellow-500/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <EggSignIcon className="h-3 w-3" />
                          <span>{traveler.prohibitions.noEgg ? 'No Egg' : 'Egg OK'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Preferred Genres */}
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {traveler.genres.map((genre) => {
                        const isMatched = currentFilters.selectedGenres.includes(genre);
                        return (
                          <span
                            key={genre}
                            className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                              isMatched
                                ? 'bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-500/50'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {genre}
                          </span>
                        );
                      })}
                    </div>

                    {/* Travel Dates & Transit */}
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                      <div className="flex items-center gap-1 truncate">
                        <Calendar className="h-3 w-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{traveler.travelDates}</span>
                      </div>
                      <div className="flex items-center gap-1 truncate">
                        <Car className="h-3 w-3 text-slate-400 shrink-0" />
                        <span className="truncate">{traveler.transportPreference}</span>
                      </div>
                    </div>

                  </div>

                  {/* Primary Connect & Itinerary Buttons */}
                  <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onViewItinerary(traveler)}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 py-2.5 px-3 text-xs font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5 text-emerald-400" />
                      <span>3-Day Plan</span>
                    </button>

                    <button
                      onClick={() => onConnect(traveler)}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 px-3 text-xs font-bold text-slate-950 shadow-md shadow-emerald-950 hover:from-emerald-400 hover:to-teal-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Connect</span>
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State with one-click adjustments */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-[#0c1220]/80 p-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="mt-3 text-base font-bold text-white">
            No companion matched the exact {currentFilters.placeSearch ? `"${currentFilters.placeSearch}"` : 'current'} criteria
          </h3>
          <p className="mt-1 max-w-md text-xs text-slate-400">
            You can either reset the filters or click below to instantly generate a custom verified companion profile matching your exact budget (₹{currentFilters.budgetPerDay.toLocaleString('en-IN')}) and {currentFilters.tripDurationDays}-day duration.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 justify-center">
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Search Criteria</span>
            </button>

            <button
              onClick={onGenerateCustomProfile}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-950"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Generate Profile For This Trip</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
