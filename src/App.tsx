import { useState, useMemo } from 'react';
import { 
  Sparkles, 
  MapPin, 
  SlidersHorizontal, 
  Compass, 
  CheckCircle,
  Users
} from 'lucide-react';
import { Header } from './components/Header';
import { SearchFilterPanel40 } from './components/SearchFilterPanel40';
import { ProfileGeneratorPanel60 } from './components/ProfileGeneratorPanel60';
import { ConnectDrawer } from './components/ConnectDrawer';
import { UserProfileModal, UserProfileData } from './components/UserProfileModal';
import { INITIAL_TRAVELERS } from './data/travelers';
import { FilterState, Traveler } from './types/traveler';

const DEFAULT_FILTERS: FilterState = {
  placeSearch: '',
  budgetPerDay: 100000, // ₹100 to ₹100,000
  tripDurationDays: 4,  // 1 to 400 days
  prohibitions: {
    noDrinking: false,
    noSmoking: false,
    noNonVeg: false,
    noEgg: false
  },
  selectedGenres: []
};

export default function App() {
  // Current Logged-in User: Priyam Singh with Toji Avatar
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    name: 'Priyam Singh',
    avatarPersona: 'Toji Fushiguro',
    avatarUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80',
    location: 'Bengaluru, Karnataka',
    dailyBudget: 3500,
    vibes: ['Trekking', 'Foodie', 'Chess', 'Culture'],
    restrictions: ['No alcohol'],
    bio: 'Tech lead in Bangalore into weekend Sahyadri treks, chess tactical puzzles, and local food trails. Looking for travel buddies to split cabs.'
  });

  // Filter state for 40% panel
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  
  // Custom generated profiles pool
  const [customTravelers, setCustomTravelers] = useState<Traveler[]>([]);

  // UI States
  const [selectedTraveler, setSelectedTraveler] = useState<Traveler | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerInitialTab, setDrawerInitialTab] = useState<'chat' | 'itinerary'>('chat');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  // Combined traveler pool
  const allTravelers = useMemo(() => {
    return [...customTravelers, ...INITIAL_TRAVELERS];
  }, [customTravelers]);

  // Dynamic compatibility calculation & 40% filtering
  const filteredTravelers = useMemo(() => {
    return allTravelers.map((candidate) => {
      let calculatedScore = 74;

      // Common genre bonus
      if (filters.selectedGenres.length > 0) {
        const commonGenres = candidate.genres.filter((g) =>
          filters.selectedGenres.includes(g)
        );
        calculatedScore += commonGenres.length * 6;
      }

      // Prohibitions synergy bonus
      if (filters.prohibitions.noDrinking && candidate.prohibitions.noDrinking) calculatedScore += 5;
      if (filters.prohibitions.noSmoking && candidate.prohibitions.noSmoking) calculatedScore += 5;
      if (filters.prohibitions.noNonVeg && candidate.prohibitions.noNonVeg) calculatedScore += 5;
      if (filters.prohibitions.noEgg && candidate.prohibitions.noEgg) calculatedScore += 5;

      // Budget proximity bonus
      const budgetDiff = Math.abs(candidate.dailyBudget - filters.budgetPerDay);
      if (budgetDiff <= 500) calculatedScore += 8;
      else if (budgetDiff <= 1500) calculatedScore += 5;
      else if (budgetDiff <= 3000) calculatedScore += 2;

      // Duration match bonus
      const durationDiff = Math.abs(candidate.tripDays - filters.tripDurationDays);
      if (durationDiff <= 1) calculatedScore += 8;
      else if (durationDiff <= 3) calculatedScore += 4;

      // Clamp between 70 and 99
      const finalScore = Math.min(99, Math.max(70, calculatedScore));

      return {
        ...candidate,
        matchScore: finalScore
      };
    }).filter((candidate) => {
      // 1. Search Place Option filter
      if (filters.placeSearch.trim()) {
        const query = filters.placeSearch.toLowerCase().trim();
        const matchesPlace =
          candidate.location.toLowerCase().includes(query) ||
          candidate.highlightSpot.toLowerCase().includes(query) ||
          candidate.origin.toLowerCase().includes(query) ||
          candidate.bio.toLowerCase().includes(query);
        if (!matchesPlace) return false;
      }

      // 2. Budget Bar: ₹100 to ₹100,000 per day
      if (candidate.dailyBudget > filters.budgetPerDay) {
        return false;
      }

      // 3. Prohibitions filter (with signs)
      if (filters.prohibitions.noDrinking && !candidate.prohibitions.noDrinking) {
        return false;
      }
      if (filters.prohibitions.noSmoking && !candidate.prohibitions.noSmoking) {
        return false;
      }
      if (filters.prohibitions.noNonVeg && !candidate.prohibitions.noNonVeg) {
        return false;
      }
      if (filters.prohibitions.noEgg && !candidate.prohibitions.noEgg) {
        return false;
      }

      // 4. Preferred Genres filter (select one or multiple)
      if (filters.selectedGenres.length > 0) {
        const hasGenre = filters.selectedGenres.some((genre) =>
          candidate.genres.includes(genre)
        );
        if (!hasGenre) return false;
      }

      return true;
    });
  }, [allTravelers, filters]);

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const handleOpenConnect = (traveler: Traveler) => {
    setSelectedTraveler(traveler);
    setDrawerInitialTab('chat');
    setIsDrawerOpen(true);
  };

  const handleOpenItinerary = (traveler: Traveler) => {
    setSelectedTraveler(traveler);
    setDrawerInitialTab('itinerary');
    setIsDrawerOpen(true);
  };

  // Generate an ideal companion profile directly from the 40% criteria
  const handleGenerateCustomProfile = () => {
    const targetPlace = filters.placeSearch.trim() || 'Coorg';
    const targetDays = filters.tripDurationDays || 4;
    const targetBudget = Math.max(800, Math.min(filters.budgetPerDay, 8500));
    const targetGenres = filters.selectedGenres.length > 0
      ? filters.selectedGenres
      : ['Trekking', 'Foodie', 'Chess'];

    const mockNames = ['Rohan', 'Aditi', 'Siddharth', 'Niharika', 'Kavya', 'Vikram'];
    const generatedName = mockNames[Math.floor(Math.random() * mockNames.length)];

    const avatars = [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
    ];
    const generatedAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const newCompanion: Traveler = {
      id: `generated-${Date.now()}`,
      name: `${generatedName} (Tailored Match)`,
      age: 24,
      location: targetPlace,
      origin: 'Bengaluru (Koramangala)',
      dailyBudget: targetBudget,
      tripDays: targetDays,
      genres: targetGenres,
      vibeTags: targetGenres,
      restrictions: [
        ...(filters.prohibitions.noDrinking ? ['No alcohol'] : []),
        ...(filters.prohibitions.noSmoking ? ['No smoking'] : []),
        ...(filters.prohibitions.noNonVeg ? ['No Non-veg'] : []),
        ...(filters.prohibitions.noEgg ? ['No Egg'] : [])
      ],
      prohibitions: {
        noDrinking: filters.prohibitions.noDrinking,
        noSmoking: filters.prohibitions.noSmoking,
        noNonVeg: filters.prohibitions.noNonVeg,
        noEgg: filters.prohibitions.noEgg
      },
      matchScore: 98,
      avatarUrl: generatedAvatar,
      coverUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
      bio: `Specifically planning a ${targetDays}-day trip to ${targetPlace} focusing on ${targetGenres.join(', ')}. Looking for like-minded companions to split transit and homestays.`,
      travelDates: `Upcoming Weekend (${targetDays} Days)`,
      preferredStay: 'Lakeside Plantation Cottages',
      transportPreference: 'Split self-drive SUV / cab from Bengaluru',
      verified: true,
      highlightSpot: `${targetPlace} Scenic Viewpoints & Trails`,
      languages: ['Kannada', 'English', 'Hindi']
    };

    setCustomTravelers((prev) => [newCompanion, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      
      {/* 1. Top Header */}
      <Header
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onToggleMobileFilters={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        totalMatches={filteredTravelers.length}
      />

      {/* STRICT 2-COLUMN DASHBOARD LAYOUT */}
      <main className="flex flex-col md:flex-row gap-6 p-6 flex-1 w-full max-w-[1600px] mx-auto min-h-[calc(100vh-4rem)]">
        
        {/* 1. Left Column (Sidebar Filters) */}
        <aside
          className="w-full md:w-80 shrink-0 sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-y-auto overscroll-contain pr-0.5"
          aria-label="Trip Search and Preferences Filters"
        >
          <SearchFilterPanel40
            filters={filters}
            onChange={setFilters}
            onReset={handleResetFilters}
            matchCount={filteredTravelers.length}
          />
        </aside>

        {/* 2. Right Column (Results Grid) */}
        <section
          className="flex-1 min-w-0"
          aria-label="Find your travel match results"
        >
          <ProfileGeneratorPanel60
            travelers={filteredTravelers}
            totalCount={allTravelers.length}
            currentFilters={filters}
            onConnect={handleOpenConnect}
            onViewItinerary={handleOpenItinerary}
            onResetFilters={handleResetFilters}
            onGenerateCustomProfile={handleGenerateCustomProfile}
          />
        </section>

      </main>

      {/* Interactive Modal Drawer (Chat Overview & 3-Day Itinerary) */}
      <ConnectDrawer
        traveler={selectedTraveler}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialTab={drawerInitialTab}
      />

      {/* User Profile Modal for Priyam Singh */}
      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={userProfile}
        onSaveProfile={setUserProfile}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#070b12] py-5 px-4 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="font-semibold text-slate-400">Karnataka Trip Match</span>
            <span>·</span>
            <span>40:60 Travel Matching Interface</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
              Verified Co-Travelers
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-emerald-400" />
              South India Explorer
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
