import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  IndianRupee, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  User, 
  Save
} from 'lucide-react';
import { VIBE_OPTIONS } from '../data/travelers';

export interface UserProfileData {
  name: string;
  avatarPersona: string;
  avatarUrl: string;
  location: string;
  dailyBudget: number;
  vibes: string[];
  restrictions: string[];
  bio: string;
}

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfileData;
  onSaveProfile: (profile: UserProfileData) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile
}) => {
  const [formData, setFormData] = useState<UserProfileData>(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleVibe = (vibe: string) => {
    const exists = formData.vibes.includes(vibe);
    setFormData({
      ...formData,
      vibes: exists
        ? formData.vibes.filter((v) => v !== vibe)
        : [...formData.vibes, vibe]
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-lg rounded-2xl border border-slate-800 bg-[#0d1322] p-6 text-slate-100 shadow-2xl"
        role="dialog"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-emerald-400" />
            <h2 className="text-base font-bold text-white">
              My Traveler Profile
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Profile Card Header with Anime Character Toji */}
        <div className="mt-4 flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-emerald-500/60 bg-slate-800 shadow-md">
            <img
              src={formData.avatarUrl}
              alt="Toji Avatar"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80';
              }}
            />
            <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">
                {formData.name}
              </h3>
              <span className="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400 ring-1 ring-emerald-500/40">
                Avatar: {formData.avatarPersona}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
              <MapPin className="h-3 w-3 text-emerald-400" />
              <span>{formData.location}</span>
              <span>·</span>
              <IndianRupee className="h-3 w-3 text-slate-400" />
              <span>₹{formData.dailyBudget.toLocaleString('en-IN')}/day</span>
            </p>
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSave} className="mt-5 space-y-4">
          
          <div>
            <label className="text-xs font-semibold text-slate-300">
              Display Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                Daily Budget Preference (INR)
              </label>
              <span className="font-mono text-xs font-bold text-emerald-400">
                ₹{formData.dailyBudget.toLocaleString('en-IN')}/day
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={25000}
              step={500}
              value={formData.dailyBudget}
              onChange={(e) =>
                setFormData({ ...formData, dailyBudget: Number(e.target.value) })
              }
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-300">
              Your Primary Vibes (Match Booster)
            </label>
            <div className="flex flex-wrap gap-1.5">
              {VIBE_OPTIONS.map((vibe) => {
                const isSelected = formData.vibes.includes(vibe);
                return (
                  <button
                    type="button"
                    key={vibe}
                    onClick={() => toggleVibe(vibe)}
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      isSelected
                        ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isSelected && <Check className="h-3 w-3" />}
                    <span>{vibe}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-rose-400" />
              Restricted Habits / Travel Boundaries
            </label>
            <input
              type="text"
              value={formData.restrictions.join(', ')}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  restrictions: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                })
              }
              placeholder="e.g. No alcohol, No Non-veg"
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300">
              Short Travel Bio
            </label>
            <textarea
              rows={2}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="mt-6 flex justify-end gap-2 border-t border-slate-800 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savedSuccess ? 'Saved!' : 'Save Preferences'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
