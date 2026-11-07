import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  MapPin, 
  IndianRupee, 
  Sparkles, 
  Calendar, 
  Car, 
  Clock, 
  Share2, 
  Check, 
  Utensils, 
  Compass, 
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Luggage,
  Info
} from 'lucide-react';
import { Traveler, TripItinerary, ChatMessage } from '../types/traveler';
import { getItineraryForDestination } from '../data/itineraries';

interface ConnectDrawerProps {
  traveler: Traveler | null;
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'chat' | 'itinerary';
}

export const ConnectDrawer: React.FC<ConnectDrawerProps> = ({
  traveler,
  isOpen,
  onClose,
  initialTab = 'chat'
}) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'itinerary'>(initialTab);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [itinerary, setItinerary] = useState<TripItinerary | null>(null);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const [activeDayTab, setActiveDayTab] = useState<number>(1);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Load candidate messages and itinerary whenever a traveler is selected
  useEffect(() => {
    if (!traveler) return;

    setActiveTab(initialTab);
    const destItin = getItineraryForDestination(traveler.location);
    setItinerary(destItin);

    // Initial conversation state for this traveler
    const defaultMessages: ChatMessage[] = [
      {
        id: 'msg-1',
        sender: 'candidate',
        senderName: traveler.name,
        text: `Hey Priyam! Saw you're traveling from Bengaluru and into ${traveler.vibeTags.slice(0, 2).join(' & ')}. I'm planning to head to ${traveler.location} for ${traveler.travelDates}.`,
        timestamp: '10:42 AM'
      },
      {
        id: 'msg-2',
        sender: 'candidate',
        senderName: traveler.name,
        text: `My daily budget is around ₹${traveler.dailyBudget.toLocaleString('en-IN')}. Are you interested in splitting a ride and teaming up for the trip?`,
        timestamp: '10:43 AM'
      }
    ];

    setMessages(defaultMessages);
    setActiveDayTab(1);
  }, [traveler, initialTab]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (activeTab === 'chat' && chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, activeTab, isTyping]);

  if (!isOpen || !traveler || !itinerary) return null;

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const newMsg: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      senderName: 'Priyam Singh',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputText('');

    // Simulated reply from candidate
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let replyText = `Awesome Priyam! Sounds like a plan. Let's make sure we book homestays in ${traveler.location} early. Have you checked out the 3-day plan?`;

      if (text.toLowerCase().includes('cab') || text.toLowerCase().includes('ride') || text.toLowerCase().includes('split')) {
        replyText = `Splitting a cab from Bengaluru makes total sense! We can leave Friday morning early around 6 AM to beat NICE road traffic.`;
      } else if (text.toLowerCase().includes('trek') || text.toLowerCase().includes('peak') || text.toLowerCase().includes('hike')) {
        replyText = `100%! I've got my hiking shoes ready. Morning views at ${traveler.highlightSpot} are unbeatable.`;
      } else if (text.toLowerCase().includes('food') || text.toLowerCase().includes('dosa') || text.toLowerCase().includes('veg')) {
        replyText = `Great! I've noted down the authentic spots in ${traveler.location}. We'll stick to quality local places that suit our dietary choices.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `msg-candidate-${Date.now()}`,
          sender: 'candidate',
          senderName: traveler.name,
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1100);
  };

  const handleSendItineraryToChat = () => {
    const itinMsg: ChatMessage = {
      id: `msg-itin-${Date.now()}`,
      sender: 'user',
      senderName: 'Priyam Singh',
      text: `Hey ${traveler.name}, here is the generated 3-day itinerary for our trip to ${itinerary.destination}! Total estimated split: ₹${itinerary.splitBudgetPerPerson.toLocaleString('en-IN')}/person.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isItineraryShare: true,
      itinerarySummary: {
        title: itinerary.tripTitle,
        destination: itinerary.destination,
        splitCost: `₹${itinerary.splitBudgetPerPerson.toLocaleString('en-IN')} / person`
      }
    };

    setMessages((prev) => [...prev, itinMsg]);
    setActiveTab('chat');

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-reply-${Date.now()}`,
          sender: 'candidate',
          senderName: traveler.name,
          text: `This 3-day plan looks incredible! Day 2 activities look super promising. Let's lock this in! 🚗💨`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  const handleCopyItinerary = () => {
    const textSummary = `${itinerary.tripTitle} - ${itinerary.destination}\nDuration: 3 Days\nEstimated split: ₹${itinerary.splitBudgetPerPerson}/person\nHighlights: Day 1: ${itinerary.days[0]?.theme}, Day 2: ${itinerary.days[1]?.theme}, Day 3: ${itinerary.days[2]?.theme}`;
    navigator.clipboard.writeText(textSummary);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      
      {/* Drawer Container */}
      <div 
        className="relative flex h-full w-full max-w-2xl flex-col border-l border-slate-800 bg-[#0c111e] text-slate-100 shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Top Header of Drawer */}
        <div className="flex items-center justify-between border-b border-slate-800/90 bg-[#090d16] px-5 py-3.5">
          
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
              <img
                src={traveler.avatarUrl}
                alt={traveler.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white">
                  {traveler.name}
                </h2>
                <span className="flex items-center gap-1 rounded bg-emerald-950/80 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
                  <Sparkles className="h-2.5 w-2.5" />
                  {traveler.matchScore}% Match
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="h-3 w-3 text-emerald-400" />
                <span>{traveler.location}</span>
                <span>·</span>
                <IndianRupee className="h-3 w-3 text-slate-400" />
                <span className="font-mono">₹{traveler.dailyBudget.toLocaleString('en-IN')}/day</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher & Prominent "Generate 3-Day Itinerary" Banner */}
        <div className="border-b border-slate-800 bg-[#0a0f1c] px-5 py-2.5 flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-1 rounded-xl bg-slate-900/80 p-1 border border-slate-800">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'chat'
                  ? 'bg-emerald-500/20 text-emerald-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Quick Chat</span>
            </button>

            <button
              onClick={() => setActiveTab('itinerary')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'itinerary'
                  ? 'bg-emerald-500/20 text-emerald-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              <span>3-Day Itinerary</span>
            </button>
          </div>

          {/* Prominent Action Button: Generate 3-Day Itinerary */}
          <button
            onClick={() => setActiveTab('itinerary')}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md shadow-emerald-950 hover:from-emerald-400 hover:to-teal-400 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Generate 3-Day Itinerary</span>
          </button>
        </div>

        {/* Content View: Quick Chat vs 3-Day Itinerary */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'chat' ? (
            /* QUICK CHAT OVERVIEW */
            <div className="flex h-full flex-col justify-between">
              
              {/* Trip Context Card */}
              <div className="border-b border-slate-800/80 bg-slate-900/40 p-4 text-xs">
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                    <span><strong className="text-white">Dates:</strong> {traveler.travelDates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="truncate"><strong className="text-white">Ride:</strong> {traveler.transportPreference}</span>
                  </div>
                </div>

                {traveler.restrictions.length > 0 && (
                  <div className="mt-2 flex items-center gap-1.5 text-rose-300/90 text-[11px]">
                    <ShieldCheck className="h-3 w-3 text-rose-400" />
                    <span>Boundaries: {traveler.restrictions.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Chat Messages Stream */}
              <div 
                ref={chatScrollRef}
                className="flex-1 space-y-3.5 overflow-y-auto p-4 sm:p-5"
              >
                <div className="text-center">
                  <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] text-slate-400 ring-1 ring-slate-800">
                    Connected with {traveler.name} for {traveler.location}
                  </span>
                </div>

                {messages.map((msg) => {
                  const isMe = msg.sender === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                    >
                      <div className="mb-1 flex items-center gap-1.5 text-[10px] text-slate-400">
                        <span className="font-semibold text-slate-300">{msg.senderName}</span>
                        <span>·</span>
                        <span>{msg.timestamp}</span>
                      </div>

                      {msg.isItineraryShare && msg.itinerarySummary ? (
                        /* Embedded Itinerary Card inside Chat */
                        <div className="max-w-[85%] rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/60 to-slate-900/90 p-3.5 shadow-lg">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                            <Compass className="h-4 w-4" />
                            <span>{msg.itinerarySummary.title}</span>
                          </div>
                          <p className="mt-1 text-xs text-slate-300">
                            {msg.text}
                          </p>
                          <div className="mt-2.5 flex items-center justify-between border-t border-emerald-500/20 pt-2 text-xs">
                            <span className="text-slate-400">Split estimate:</span>
                            <span className="font-mono font-bold text-emerald-400">
                              {msg.itinerarySummary.splitCost}
                            </span>
                          </div>
                          <button
                            onClick={() => setActiveTab('itinerary')}
                            className="mt-2.5 flex w-full items-center justify-center gap-1 rounded-lg bg-emerald-500 py-1.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                          >
                            <span>Open Full Itinerary</span>
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                            isMe
                              ? 'bg-emerald-600 text-slate-950 font-medium rounded-tr-none'
                              : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/60'
                          }`}
                        >
                          {msg.text}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Candidate is typing indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{traveler.name} is typing...</span>
                  </div>
                )}
              </div>

              {/* Quick Icebreakers */}
              <div className="border-t border-slate-800/80 bg-[#090d16] p-3">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  <span>Quick travel icebreakers:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    `Want to split cab from Bengaluru? 🚗`,
                    `Down for sunrise trek at ${traveler.highlightSpot}? ⛰️`,
                    `Let's share stay costs at ${traveler.location}! 🏡`
                  ].map((icebreaker) => (
                    <button
                      key={icebreaker}
                      onClick={() => handleSendMessage(icebreaker)}
                      className="rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[11px] text-slate-300 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                    >
                      {icebreaker}
                    </button>
                  ))}
                </div>

                {/* Interactive Message Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="mt-3 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={`Message ${traveler.name} about ${traveler.location} trip...`}
                    className="flex-1 rounded-xl border border-slate-800 bg-slate-900 py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 transition-all hover:bg-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

            </div>
          ) : (
            /* 3-DAY ITINERARY DISPLAY */
            <div className="p-5 space-y-6">
              
              {/* Destination Header Banner */}
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Karnataka Curated 3-Day Plan
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {itinerary.tripTitle}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{itinerary.destination}</span>
                      <span>·</span>
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>{itinerary.duration}</span>
                    </p>
                  </div>

                  {/* Budget Split Callout */}
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-right">
                    <div className="text-[11px] text-slate-400">Split Per Person</div>
                    <div className="text-lg font-mono font-bold text-emerald-300">
                      ₹{itinerary.splitBudgetPerPerson.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Total ~₹{itinerary.estimatedTotalBudget.toLocaleString('en-IN')} for 2
                    </div>
                  </div>
                </div>

                {/* Best Travel Mode */}
                <div className="mt-3.5 flex items-center gap-2 rounded-lg bg-slate-900/80 px-3 py-2 text-xs text-slate-300 border border-slate-800">
                  <Car className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span><strong>Transit:</strong> {itinerary.bestTravelMode}</span>
                </div>
              </div>

              {/* Day-by-Day Selector Tabs */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex gap-2">
                    {itinerary.days.map((day) => (
                      <button
                        key={day.dayNumber}
                        onClick={() => setActiveDayTab(day.dayNumber)}
                        className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                          activeDayTab === day.dayNumber
                            ? 'bg-emerald-500 text-slate-950 shadow-md'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        Day {day.dayNumber}
                      </button>
                    ))}
                  </div>

                  {/* Actions: Send to Chat & Copy */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyItinerary}
                      className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white"
                      title="Copy itinerary summary"
                    >
                      {copiedNotice ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleSendItineraryToChat}
                      className="flex items-center gap-1.5 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/40 hover:bg-emerald-500/30"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Send to Chat</span>
                    </button>
                  </div>
                </div>

                {/* Selected Day Breakdown */}
                {itinerary.days
                  .filter((d) => d.dayNumber === activeDayTab)
                  .map((day) => (
                    <div key={day.dayNumber} className="mt-4 space-y-4">
                      
                      {/* Day Theme */}
                      <div className="rounded-xl bg-slate-900/60 p-3 border border-slate-800/80">
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                          Day {day.dayNumber} Theme
                        </span>
                        <h4 className="text-sm font-semibold text-white mt-0.5">
                          {day.theme}
                        </h4>
                      </div>

                      {/* Timeline Slots: Morning, Afternoon, Evening */}
                      <div className="space-y-3">
                        {day.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-slate-800 bg-[#0d1424] p-4 transition-colors hover:border-slate-700"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="rounded bg-slate-800 px-2 py-0.5 font-semibold text-emerald-400">
                                {item.timeOfDay} · {item.time}
                              </span>
                              <span className="font-mono text-[11px] text-slate-400">
                                {item.costEstimate}
                              </span>
                            </div>

                            <h5 className="mt-2 text-sm font-bold text-white">
                              {item.title}
                            </h5>

                            <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                              <MapPin className="h-3 w-3 text-slate-500" />
                              <span>{item.location}</span>
                            </div>

                            <p className="mt-2 text-xs leading-relaxed text-slate-300">
                              {item.description}
                            </p>

                            <div className="mt-2.5 flex items-start gap-1.5 rounded-lg bg-slate-900/80 p-2 text-[11px] text-amber-300/90 border border-amber-500/20">
                              <Info className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span><strong>Pro Tip:</strong> {item.proTip}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Curated Food Recommendation for this day */}
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                            <Utensils className="h-3.5 w-3.5" />
                            <span>Day {day.dayNumber} Food Stop: {day.curatedEats.spot}</span>
                          </div>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                            day.curatedEats.type === 'Veg' ? 'bg-emerald-950 text-emerald-400 ring-1 ring-emerald-500/40' : 'bg-slate-800 text-slate-300'
                          }`}>
                            {day.curatedEats.type}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-300">
                          {day.curatedEats.specialty}
                        </p>
                      </div>

                    </div>
                  ))}
              </div>

              {/* Packing Essentials & Tips */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Luggage className="h-4 w-4 text-emerald-400" />
                  <span>Trip Packing Checklist</span>
                </div>
                <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {itinerary.packingEssentials.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
