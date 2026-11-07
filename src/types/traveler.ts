export interface Prohibitions {
  noDrinking: boolean; // with sign of alcohol bottle
  noSmoking: boolean;  // with sign of smoking option
  noNonVeg: boolean;   // with sign of chicken option
  noEgg: boolean;      // with sign of egg option
}

export interface Traveler {
  id: string;
  name: string;
  age: number;
  location: string;
  origin: string;
  dailyBudget: number; // in INR (100 to 100,000)
  tripDays: number;     // 1 to 400 days
  genres: string[];     // preferred genres (Trekking, Foodie, Nightlife, Culture, Chess, etc.)
  vibeTags: string[];   // legacy / display tags
  restrictions: string[]; // human readable badges
  prohibitions: Prohibitions; // strict filter match
  matchScore: number;
  avatarUrl: string;
  coverUrl: string;
  bio: string;
  travelDates: string;
  preferredStay: string;
  transportPreference: string;
  verified: boolean;
  highlightSpot: string;
  languages: string[];
}

export interface ItineraryItem {
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening';
  time: string;
  title: string;
  location: string;
  description: string;
  costEstimate: string;
  proTip: string;
}

export interface ItineraryDay {
  dayNumber: number;
  theme: string;
  items: ItineraryItem[];
  curatedEats: {
    spot: string;
    specialty: string;
    type: 'Veg' | 'Non-Veg' | 'Both';
  };
}

export interface TripItinerary {
  id: string;
  destination: string;
  tripTitle: string;
  duration: string;
  bestTravelMode: string;
  estimatedTotalBudget: number; // in INR
  splitBudgetPerPerson: number; // in INR
  recommendedStayArea: string;
  days: ItineraryDay[];
  travelTips: string[];
  packingEssentials: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'candidate';
  senderName: string;
  text: string;
  timestamp: string;
  isItineraryShare?: boolean;
  itinerarySummary?: {
    title: string;
    destination: string;
    splitCost: string;
  };
}

export interface FilterState {
  placeSearch: string;
  budgetPerDay: number; // 100 to 100,000 INR
  tripDurationDays: number; // 1 to 400 days
  prohibitions: Prohibitions;
  selectedGenres: string[];
}
