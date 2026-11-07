import { TripItinerary } from '../types/traveler';

export const ITINERARY_DATABASE: Record<string, TripItinerary> = {
  coorg: {
    id: 'itin-coorg',
    destination: 'Coorg (Kodagu)',
    tripTitle: 'Misty Peaks & Coffee Estate Expedition',
    duration: '3 Days / 2 Nights',
    bestTravelMode: 'Carpool / Self-drive SUV from Bengaluru via Mysuru Expressway (5.5 hrs)',
    estimatedTotalBudget: 9600,
    splitBudgetPerPerson: 4800,
    recommendedStayArea: 'Madikeri hill slopes or organic coffee plantation homestay',
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival, Coffee Aroma & Highland Sunset',
        curatedEats: {
          spot: 'Raintree Restaurant, Madikeri',
          specialty: 'Kodava spiced mushroom curry, Akki Roti & fresh estate filter brew',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '06:00 AM - 11:30 AM',
            title: 'Scenic Drive & Plantation Check-in',
            location: 'Bangalore to Madikeri via Kushalnagar',
            description: 'Cruising through Ramanagara and Kushalnagar. Stop for hot piping Thatte Idli at Bidadi and check into the homestay tucked inside a 40-acre arabica estate.',
            costEstimate: '₹950 / person (Fuel + toll split)',
            proTip: 'Start by 6:00 AM to beat Bengaluru city toll traffic.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:30 PM - 04:30 PM',
            title: 'Abbey Falls & Coffee Estate Walk',
            location: 'Abbey Falls Estate Road',
            description: 'Roam through cardamom, pepper vines, and coffee shrubs guided by the local grower. Walk down the lush bamboo trail to view Abbey Falls in full flow.',
            costEstimate: '₹200 / person (Entry & guide)',
            proTip: 'Wear grip-soled trail shoes as the waterfall stone paths stay damp.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 08:30 PM',
            title: "Raja's Seat Sunset & Chess under the Stars",
            location: "Raja's Seat Viewpoint",
            description: 'Watch the sun sink into misty rolling Western Ghat ridges once favored by the Coorg Kings. Head back for bonfire chess and hot Kodava herbal brew.',
            costEstimate: '₹50 entry + campfire setup',
            proTip: 'Arrive 30 minutes before sunset to claim prime cliffside seats.'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'High Altitude Summit & Hidden Waterways',
        curatedEats: {
          spot: 'East End Hotel, Virajpet',
          specialty: 'Steamed Kadambuttu (rice dumplings) & bamboo shoot curry',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '05:30 AM - 11:00 AM',
            title: 'Mandalpatti 4x4 Jeep Safari or Tadiandamol Trek',
            location: 'Mandalpatti Peak Ridge',
            description: 'Ride an open-top 4WD jeep through steep muddy hairpin trails to reach the cloud-swrouded Mandalpatti ridge with 360-degree views of Pushpagiri Wildlife Sanctuary.',
            costEstimate: '₹800 / person (Jeep split)',
            proTip: 'Carry a windcheater jacket; the ridge summit winds are fierce and cold.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:00 PM - 04:00 PM',
            title: 'Namdroling Golden Temple & Tibetan Flea Market',
            location: 'Bylakuppe Tibetan Settlement',
            description: 'Marvel at the 40-foot gilded statues of Padmasambhava, soak in meditative chime chants, and explore Tibetan artisanal handicraft stalls.',
            costEstimate: 'Free entry (Donation optional)',
            proTip: 'Respect monks during prayer hours; photography inside is permitted quietly without flash.'
          },
          {
            timeOfDay: 'Evening',
            time: '06:00 PM - 09:30 PM',
            title: 'Local Spice Market & Evening Estate Cafe',
            location: 'Madikeri Market Street',
            description: 'Sample single-origin dark chocolates, fresh green cardamom pods, and organic birds-eye chili honey. Enjoy acoustic tunes back at the campsite.',
            costEstimate: '₹400 / person',
            proTip: 'Buy whole green cardamom in sealed vacuum bags for longer freshness.'
          }
        ]
      },
      {
        dayNumber: 3,
        theme: 'Riverfront Wildlife & Return Journey',
        curatedEats: {
          spot: 'Mayura Valley View',
          specialty: 'Traditional South Indian thali & fresh jackfruit chips',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 11:30 AM',
            title: 'Dubare Elephant Sanctuary & Bamboo Rafting',
            location: 'Cauvery Riverbank, Dubare',
            description: 'Cross the Cauvery river on motor boats or bamboo rafts to observe elephant bathing rituals and learn about conservation from tribal mahouts.',
            costEstimate: '₹350 / person',
            proTip: 'Arrive before 08:30 AM to catch the morning river bathing sessions.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '12:30 PM - 02:30 PM',
            title: 'Nisargadhama Bamboo Forest & Hanging Bridge',
            location: 'Kushalnagar Island',
            description: 'Stroll across the wooden suspension bridge onto a 64-acre ecological delta island bordered by giant teak and bamboo clusters.',
            costEstimate: '₹120 / person',
            proTip: 'Deer spotting is frequent near the eastern bamboo grove.'
          },
          {
            timeOfDay: 'Evening',
            time: '03:30 PM - 08:30 PM',
            title: 'Return to Bengaluru via Mysore Expressway',
            location: 'NH 275 expressway',
            description: 'Smooth highway return with a pit-stop at Maddur for legendary piping hot crispy Maddur Vada with coconut chutney.',
            costEstimate: '₹950 / person (Fuel + toll)',
            proTip: 'Plan arrival into Bengaluru before 9 PM to dodge Hebbal / Silk Board jams.'
          }
        ]
      }
    ],
    travelTips: [
      'Pre-book 4x4 jeeps for Mandalpatti a day prior with homestay hosts.',
      'Always carry an umbrella or light rain poncho even in dry season.',
      'BSNL and Jio have the most reliable signals in remote Kodagu valleys.'
    ],
    packingEssentials: [
      'Grip-soled hiking shoes',
      'Fleece or windproof jacket',
      'Mosquito repellent & water canteen',
      'Small travel chess board for estate evenings'
    ]
  },

  mysore: {
    id: 'itin-mysore',
    destination: 'Mysore (Mysuru)',
    tripTitle: 'Royal Heritage, Palaces & Culinary Trail',
    duration: '3 Days / 2 Nights',
    bestTravelMode: 'Bengaluru-Mysuru Vande Bharat Express (2 hrs) or Mysore Expressway',
    estimatedTotalBudget: 6800,
    splitBudgetPerPerson: 3400,
    recommendedStayArea: 'Near Mysore Palace or quiet Gokulam yoga neighborhood',
    days: [
      {
        dayNumber: 1,
        theme: 'Palace Grandeur & Authentic Benne Dosa',
        curatedEats: {
          spot: 'Original Mylari, Nazarbad',
          specialty: 'Soft melt-in-mouth Butter Dosa with sagu and white butter dollop',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 11:30 AM',
            title: 'High-speed Express & Heritage Check-in',
            location: 'KSR Bengaluru to Mysuru Junction',
            description: 'Glide on the morning train, check into a restored courtyard haveli near Agrahara, and kick off with legendary Mylari butter dosas.',
            costEstimate: '₹550 / person (Train fare + auto split)',
            proTip: 'Reach Mylari before 9:30 AM to avoid long breakfast queues.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:30 PM - 04:30 PM',
            title: 'Mysore Royal Palace Exploration & Durbar Hall',
            location: 'Sayyaji Rao Road',
            description: 'Walk through the Indo-Saracenic royal residence of the Wadiyar dynasty. Gaze at stained glass ceilings, solid silver doors, and intricately carved mahogany pillars.',
            costEstimate: '₹100 entry + audio guide',
            proTip: 'Shoes must be deposited at the palace locker counter; carry socks for stone floors.'
          },
          {
            timeOfDay: 'Evening',
            time: '06:00 PM - 08:30 PM',
            title: 'Palace Illumination Spectacle & Devaraja Market',
            location: 'Palace Grounds & Devaraja Heritage Market',
            description: 'Witness 97,000 golden incandescent bulbs light up the palace facade. Then wander into Devaraja Market for jasmine garlands, attar perfumes, and kumkum pyramids.',
            costEstimate: '₹200 (Auto & market sampling)',
            proTip: 'Sunday palace illumination takes place exactly between 7:00 PM - 7:45 PM.'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'Chamundi Ascent & Bird Sanctuary Waters',
        curatedEats: {
          spot: 'Hotel RRR, Gandhi Square',
          specialty: 'Traditional banana leaf spread & fragrant Biryani / Veg meals',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '06:00 AM - 10:30 AM',
            title: 'Chamundi Hills Sunrise & 1000-Step Climb',
            location: 'Chamundi Hill Trail',
            description: 'Climb the historic granite steps past the colossal monolithic Nandi Bull statue. Take in panoramic morning views of the entire palace city from the peak.',
            costEstimate: 'Free / ₹50 VIP darshan',
            proTip: 'The 1000 steps take about 40 minutes for average fitness; carry water.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:00 PM - 04:30 PM',
            title: 'Ranganathittu Bird Sanctuary Coracle Boat Cruise',
            location: 'Cauvery River Islets, Srirangapatna',
            description: 'Drift in wooden coracle boats guided by boatmen just feet away from nesting painted storks, pelicans, spoonbills, and marsh crocodiles basking on rocks.',
            costEstimate: '₹250 / person (Boat ride + entry)',
            proTip: 'Carry a telephoto lens or binoculars for stunning close-ups of storks.'
          },
          {
            timeOfDay: 'Evening',
            time: '06:00 PM - 09:00 PM',
            title: 'Gokulam Cafe Culture & Chess Match',
            location: 'Gokulam Yoga Quarter',
            description: 'Unwind at an artisanal vegan rooftop cafe with sourdough bakes, cold press juices, and friendly rapid chess matches.',
            costEstimate: '₹350 / person',
            proTip: 'Gokulam has a vibrant international traveler community year-round.'
          }
        ]
      },
      {
        dayNumber: 3,
        theme: 'Srirangapatna Fort & Royal Sweets',
        curatedEats: {
          spot: 'Guru Sweet Mart, Sayyaji Rao Road',
          specialty: 'Authentic royal Mysore Pak made with pure desi ghee',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '08:00 AM - 12:00 PM',
            title: "Tipu Sultan's Summer Palace & Daria Daulat Bagh",
            location: 'Srirangapatna Island',
            description: 'Marvel at the ornate teakwood palace adorned with hand-painted murals depicting the battle of Pollilur and Anglo-Mysore wars.',
            costEstimate: '₹50 entry',
            proTip: 'Hire an ASI registered guide for fascinating historical trivia.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:00 PM - 03:30 PM',
            title: 'St. Philomena’s Cathedral & Silk Weaving Centre',
            location: 'Ashoka Road',
            description: 'Gaze up at Neo-Gothic twin spires modeled after Cologne Cathedral, followed by a tour of the government silk weaving factory producing gold zari sarees.',
            costEstimate: 'Free entry',
            proTip: 'The underground catacomb below St. Philomena holds historic relics.'
          },
          {
            timeOfDay: 'Evening',
            time: '04:30 PM - 07:30 PM',
            title: 'Mysore Pak Tasting & Return Train to Bangalore',
            location: 'Mysuru Junction',
            description: 'Pack warm freshly made ghee Mysore Pak boxes from Guru Sweet Mart (descendants of the royal chef who invented it) and board the express.',
            costEstimate: '₹400 / person',
            proTip: 'Ask for warm Mysore Pak directly from the afternoon kitchen batch.'
          }
        ]
      }
    ],
    travelTips: [
      'Take auto rickshaws on metered rates or pre-book via rideshare apps.',
      'Modest clothing is appreciated when entering temple complexes and the palace.',
      'Mysore is extremely walkable; staying in Gokulam or Central Mysuru saves commute time.'
    ],
    packingEssentials: [
      'Cotton daytime clothing & comfortable walking sneakers',
      'Slip-on socks for temple and palace stone courtyards',
      'Cloth tote bag for market shopping'
    ]
  },

  gokarna: {
    id: 'itin-gokarna',
    destination: 'Gokarna',
    tripTitle: 'Coastal Cliff Treks, Pristine Shacks & Soulful Sunsets',
    duration: '3 Days / 2 Nights',
    bestTravelMode: 'Overnight KSRTC Sleeper Bus or Panchaganga Express to Gokarna Road',
    estimatedTotalBudget: 8400,
    splitBudgetPerPerson: 4200,
    recommendedStayArea: 'Kudle Beach shacks or Om Beach cliffside eco-cottages',
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival, Mahabaleshwar Sanctum & Kudle Sunset',
        curatedEats: {
          spot: 'Chez Christophe / Little Paradise Shack, Kudle',
          specialty: 'Woodfired thin-crust pizza, fresh lime ginger soda & coastal hummus',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 11:00 AM',
            title: 'Temple Town Walk & Atmalinga Shrine',
            location: 'Mahabaleshwar Temple & Main Beach',
            description: 'Step into the 4th-century Dravidian stone shrine housing the sacred Atmalinga. Walk the colorful agrahara alleys fragrant with camphor and coastal flowers.',
            costEstimate: 'Free / ₹100 special queue',
            proTip: 'Traditional dress code is required for inner shrine darshan (dhotis provided at entrance).'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:00 PM - 04:30 PM',
            title: 'Kudle Beach Chill & Sea Kayaking',
            location: 'Kudle Beach Bay',
            description: 'Settle into bohemian beach shacks, rent a sea kayak during calm tide, or chill with iced filter brews under thatched palm roofs.',
            costEstimate: '₹350 / person (Kayak rental)',
            proTip: 'Kayaking is smoothest between 2 PM and 4 PM before sea winds pick up.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 09:30 PM',
            title: 'Kudle Cliff Sunset & Acoustic Shack Jam',
            location: 'Kudle Sunset Point',
            description: 'Climb the headland separating Kudle and Om beach for a fiery Arabian Sea sunset. Later, gather around candlelit tables for live acoustics and chess.',
            costEstimate: '₹450 / person (Shack dinner)',
            proTip: 'Carry a pocket flashlight for walking the cliff trail back after dark.'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'The Legendary 5-Beach Cliff Trek',
        curatedEats: {
          spot: "Namaste Cafe, Om Beach",
          specialty: 'Nutella banana pancakes & iced filter coffee',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '06:30 AM - 11:30 AM',
            title: 'Om Beach to Half Moon Beach Ridge Hike',
            location: 'Om Beach cliff edge to Half Moon Beach',
            description: 'Hike the ocean-hugging laterite rock trails where waves crash against basalt outcrops. Pause at Om Beach shape viewpoint and descend to secluded Half Moon cove.',
            costEstimate: '₹100 (Trail hydration)',
            proTip: 'Start early at 6:30 AM to beat the coastal humidity and harsh afternoon sun.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '12:30 PM - 04:30 PM',
            title: 'Paradise Beach Dip & Coracle Ferry Ride',
            location: 'Paradise Beach (Full Moon Beach)',
            description: 'Swim in the clearest turquoise water along the Karnataka coast. Hop on a fisherman motorized boat to zip back to Om Beach across dolphins bay.',
            costEstimate: '₹250 / person (Boat ride return)',
            proTip: 'Watch for pods of Indo-Pacific humpback dolphins near the headlands!'
          },
          {
            timeOfDay: 'Evening',
            time: '06:00 PM - 09:30 PM',
            title: 'Mirjan Fort Exploration or Beach Fire',
            location: 'Mirjan Fort (20 km south)',
            description: 'A quick taxi to the moss-covered 16th-century laterite fortress built by Queen Chennabhairadevi (the Pepper Queen of Karnataka).',
            costEstimate: '₹300 / person (Taxi split)',
            proTip: 'Golden hour sunlight through the fortress archways produces surreal photography.'
          }
        ]
      },
      {
        dayNumber: 3,
        theme: 'Yana Rocks Monoliths & Departure',
        curatedEats: {
          spot: 'Prema Restaurant, Gokarna Town',
          specialty: 'Homemade Gadbad ice cream & fresh fruit muesli bowls',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 12:30 PM',
            title: 'Yana Caves & Black Karst Monoliths',
            location: 'Sahyadri Forest Range, Yana',
            description: 'Walk through deep evergreen canopies to witness two massive 300-foot black crystalline limestone needles (Bhairaveshwara & Mohini Shikhara).',
            costEstimate: '₹400 / person (Auto/Cab split)',
            proTip: 'Wear good footwear as cave floors have natural water drips.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:30 PM - 03:30 PM',
            title: 'Town Souvenirs & Spiced Cashews',
            location: 'Car Street Market',
            description: 'Pick up local Sirsi spiced cashews, wooden handicrafts, sea shell chimes, and coastal red rice from cooperative stores.',
            costEstimate: '₹300',
            proTip: 'Sirsi whole cashews are the freshest and cheapest here.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 08:00 PM',
            title: 'Farewell Chai at Belekan Beach & Board Sleeper',
            location: 'Gokarna Road Railway Station / Bus Stand',
            description: 'Final horizon gaze with ginger tea before boarding the overnight train or sleeper bus back to Bengaluru.',
            costEstimate: '₹800 sleeper bus',
            proTip: 'Book sleeper bus from Gokarna checkpost directly.'
          }
        ]
      }
    ],
    travelTips: [
      'Cash is king: ATM machines in Gokarna town frequently run dry on long weekends.',
      'Stay hydrated on cliff hikes; carry electrolyte packets in your daypack.',
      'Only swim in marked safe zones; rip currents exist during high tide.'
    ],
    packingEssentials: [
      'Quick-dry swimwear & UV rashguard',
      'Waterproof dry-bag for phones on boat rides',
      'Breathable linen shirts',
      'Headlamp or flashlight for night beach walks'
    ]
  },

  hampi: {
    id: 'itin-hampi',
    destination: 'Hampi',
    tripTitle: 'Ruins of Vijayanagara, Bouldering & Sanapur Sunsets',
    duration: '3 Days / 2 Nights',
    bestTravelMode: 'Hampi Express Overnight Train to Hosapete Junction (8 hrs)',
    estimatedTotalBudget: 5400,
    splitBudgetPerPerson: 2700,
    recommendedStayArea: 'Anegundi (Hippie Island side) or Kamalapura Heritage Cottages',
    days: [
      {
        dayNumber: 1,
        theme: 'Stone Chariot & Royal Center Monumental Marvels',
        curatedEats: {
          spot: 'Mango Tree Restaurant, Hampi Bazaar',
          specialty: 'Thali spreads, banana lassi & wood-fired pizza under mango groves',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:00 AM - 11:30 AM',
            title: 'Hosapete Arrival, Moped Rental & Virupaksha Temple',
            location: 'Hampi Bazaar',
            description: 'Cross the Tungabhadra river, rent classic Honda Activa mopeds, and marvel at the 160-foot gopuram of the 7th-century Virupaksha Temple.',
            costEstimate: '₹400 / day (Moped rental split)',
            proTip: 'Look for Lakshmi the temple elephant giving blessings at 8:00 AM.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:30 PM - 04:30 PM',
            title: 'Vijaya Vittala Temple & The Musical Pillars',
            location: 'Vittala Complex',
            description: 'Inspect the iconic Stone Chariot carved from monolithic granite and tap the world-famous musical pillars that replicate 7 classical swaras.',
            costEstimate: '₹40 ASI ticket (covers 4 monuments)',
            proTip: 'Use battery golf buggies from the parking if traveling in peak noon sun.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 08:00 PM',
            title: 'Hemakuta Hill Sunset & Boulder Silhouette',
            location: 'Hemakuta Temple Cluster',
            description: 'Sit on ancient sloping rock sheets watching the sun dip behind monoliths, casting long purple shadows across the Tungabhadra valley.',
            costEstimate: 'Free entry',
            proTip: 'Play blitz chess or read on the granite pavilions as dusk falls.'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'Sunrise at Matanga Hill & Sanapur Coracle Adventures',
        curatedEats: {
          spot: 'Gouthami Cafe & Sanapur Lake Shacks',
          specialty: 'Fresh pomegranate juice, hummus falafel platter & lemon nana',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '05:15 AM - 09:30 AM',
            title: 'Matanga Hill Sunrise Climb',
            location: 'Matanga Hill Peak',
            description: 'The highest point in central Hampi. Climb steps in pre-dawn starlight to watch morning mist roll over banana plantations and temple towers.',
            costEstimate: 'Free entry',
            proTip: 'Bring a torchlight; the final 50 meters feature uneven rock carved stairs.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '11:30 AM - 04:30 PM',
            title: 'Sanapur Lake Coracle Ride & Cliff Jumping',
            location: 'Sanapur Lake Reservoir',
            description: 'Spin in circular woven reed coracles on crystal blue freshwater surrounded by massive red boulders. Safe cliff jumping spots curated by local boatmen.',
            costEstimate: '₹200 / person (Coracle ride)',
            proTip: 'Only cliff jump at locations marked and cleared by local lifeguards.'
          },
          {
            timeOfDay: 'Evening',
            time: '06:00 PM - 09:30 PM',
            title: 'Anjanadri Hill (Monkey Temple) Sunset & Jam Session',
            location: 'Anjanadri Peak, Anegundi',
            description: 'Climb 575 whitewashed steps to the birthplace of Lord Hanuman with panoramic views of the endless granite boulder landscape.',
            costEstimate: 'Free',
            proTip: 'Keep sunglasses and loose snacks zipped safely away from playful monkeys.'
          }
        ]
      },
      {
        dayNumber: 3,
        theme: 'Zenana Enclosure, Lotus Mahal & Departure',
        curatedEats: {
          spot: 'Geetha River View Restaurant',
          specialty: 'Cold filter coffee, stuffed parathas & seasonal fruit bowls',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '08:00 AM - 12:00 PM',
            title: 'Lotus Mahal, Queen’s Bath & Elephant Stables',
            location: 'Royal Center, Kamalapura',
            description: 'Explore the fusion of Islamic and Hindu architecture at the Lotus Mahal and the majestic domed stables that once housed royal battle elephants.',
            costEstimate: 'Covered under Day 1 ticket',
            proTip: 'The Queen’s Bath has brilliant acoustics in the morning.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:00 PM - 03:30 PM',
            title: 'Anegundi Village Crafts & Banana Fibre Workshop',
            location: 'Anegundi Heritage Village',
            description: 'Visit Kishkinda Trust workshops where local women weave organic mats, bags, and hats using discarded banana trunk fibers.',
            costEstimate: '₹200 (Handcrafted souvenirs)',
            proTip: 'Eco-friendly banana fiber bags make long-lasting travel souvenirs.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 08:30 PM',
            title: 'Tungabhadra River Ferry & Train Return',
            location: 'Hosapete Railway Junction',
            description: 'Return mopeds, catch a final sunset over the river weir, and board the overnight Hampi Express back to Bengaluru.',
            costEstimate: '₹550 sleeper train',
            proTip: 'Hosapete station has clean cloakrooms to store backpacks on the final day.'
          }
        ]
      }
    ],
    travelTips: [
      'Renting an automatic scooter (moped) is the most flexible way to cross monuments.',
      'Wear modest clothes (shoulders and knees covered) for operational temples.',
      'Hampi gets warm during mid-day; plan indoor ruins or shade between 12 PM - 3 PM.'
    ],
    packingEssentials: [
      'Wide-brim sun hat & sunglasses',
      'Light breathable cottons',
      'Comfortable bouldering / climbing sneakers',
      'Hydration backpack'
    ]
  },

  ooty: {
    id: 'itin-ooty',
    destination: 'Ooty (Udhagamandalam)',
    tripTitle: 'Colonial Hills, Nilgiri Toy Train & Tea Valleys',
    duration: '3 Days / 2 Nights',
    bestTravelMode: 'Scenic road drive via Bandipur Tiger Reserve & 36 Hairpin Bends',
    estimatedTotalBudget: 8900,
    splitBudgetPerPerson: 4450,
    recommendedStayArea: 'Fernhill or scenic Kotagiri tea estate bungalow',
    days: [
      {
        dayNumber: 1,
        theme: 'Bandipur Safari Pass, Hairpin Bends & Botanical Haven',
        curatedEats: {
          spot: 'Earl’s Secret, Glasshouse Restaurant',
          specialty: 'Warm Shepherd’s Pie, creamy chicken velouté or English potato gratin',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '06:00 AM - 12:00 PM',
            title: 'Drive through Bandipur Tiger Reserve & Kalhatty Ghat',
            location: 'NH 766 via Masinagudi',
            description: 'Cross the Karnataka-Tamil Nadu border through elephant corridors. Ascend the dramatic 36 Kalhatty hairpin curves to arrive in misty Ooty.',
            costEstimate: '₹950 / person (Fuel + toll split)',
            proTip: 'Drive slowly in Bandipur: animal crossings are frequent and strictly enforced.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:30 PM - 04:30 PM',
            title: 'Government Botanical Gardens & Italian Terraces',
            location: 'Vannarapettai',
            description: 'Wander among 20 million-year-old fossilized tree trunks, cork trees, and terraced flower beds dating back to the British Raj in 1848.',
            costEstimate: '₹50 entry + camera fee',
            proTip: 'Visit the fern house for rare alpine mosses and orchids.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 08:30 PM',
            title: 'Ooty Lake Boating & Homemade Chocolate Tasting',
            location: 'Commercial Road & King Star Confectionery',
            description: 'Row or pedal along the eucalyptus-fringed Ooty lake. Sample rum-truffle, hazelnut, and dark fudge chocolates at legendary King Star (since 1942).',
            costEstimate: '₹300 / person (Boat ride + chocolate box)',
            proTip: 'King Star roasted almond dark fudge is their most celebrated signature recipe.'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'Nilgiri UNESCO Toy Train & Avalanche Pine Trails',
        curatedEats: {
          spot: 'Place To Bee, Club Road',
          specialty: 'Farm-to-table organic pasta, wild Nilgiri honeycomb & sourdough pizza',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '08:30 AM - 12:00 PM',
            title: 'UNESCO Mountain Toy Train (Ooty to Coonoor)',
            location: 'Udhagamandalam Railway Station',
            description: 'Board the historic steam-assisted cogwheel train gliding over 250 bridges, tea valleys, and tunnels down to lush Coonoor.',
            costEstimate: '₹150 first-class ticket',
            proTip: 'Book IRCTC toy train tickets 30 days in advance or queue early for unreserved counters.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:00 PM - 04:30 PM',
            title: 'Doddabetta Peak & Tea Factory Experience',
            location: 'Doddabetta Summit (2,637 m)',
            description: 'Stand at the highest summit in the Nilgiris. Visit the orthodox tea factory to observe CTC processing and sip steaming cardamon-ginger tea.',
            costEstimate: '₹50 entry',
            proTip: 'The telescope house on Doddabetta provides sweeping views of Mysore plains on clear days.'
          },
          {
            timeOfDay: 'Evening',
            time: '06:00 PM - 09:30 PM',
            title: 'Fireplace Chess & Eucalyptus Essential Oils',
            location: 'Heritage Bungalow Library',
            description: 'Warm up beside crackling pine logs with a travel companion chess match, hot cocoa, and stories of local Nilgiri tribes.',
            costEstimate: 'Free / ₹200 (Pure oil bottles)',
            proTip: 'Buy Nilgiri eucalyptus oil only from licensed Toda tribal cooperatives.'
          }
        ]
      },
      {
        dayNumber: 3,
        theme: 'Avalanche Emerald Lake & Journey Home',
        curatedEats: {
          spot: 'Nahar’s Sidewalk Cafe',
          specialty: 'Freshly baked thin-crust pizza & piping hot Irish coffee',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 12:00 PM',
            title: 'Avalanche Forest Sanctuary Safari',
            location: 'Avalanche Lake',
            description: 'Board eco-tourism forest department buses into restricted pristine shola grass valleys and trout hatcheries.',
            costEstimate: '₹300 eco-bus ticket',
            proTip: 'Permits are obtained on-the-spot at the forest checkpost counter.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:00 PM - 03:00 PM',
            title: 'Pykara Falls & Speed Boating',
            location: 'Pykara Dam Reservoir',
            description: 'Watch the sacred Toda river cascade down stepped granite rocks into Pykara lake reservoir.',
            costEstimate: '₹200 boat ticket',
            proTip: 'Speedboats offer thrilling bank turns across the open reservoir.'
          },
          {
            timeOfDay: 'Evening',
            time: '04:00 PM - 09:30 PM',
            title: 'Descent via Gudalur back to Bengaluru',
            location: 'Gudalur-Gundlupet Highway',
            description: 'Smooth winding descent through tea estates and Gundlupet sunflower fields back to Bengaluru city.',
            costEstimate: '₹950 / person (Fuel + toll split)',
            proTip: 'Keep a warm jacket handy for the first 2 hours of mountain descent.'
          }
        ]
      }
    ],
    travelTips: [
      'Ooty experiences steep temperature drops after 6:00 PM; layer up warmly.',
      'Pre-booking toy train seats via IRCTC is strongly recommended.',
      'Respect wildlife signage in Mudumalai and Bandipur buffer zones.'
    ],
    packingEssentials: [
      'Heavy woolens, gloves & thermal socks for nights',
      'Comfortable walking shoes for garden terraces',
      'Thermos flask for hot water on day trips'
    ]
  },

  chikmagalur: {
    id: 'itin-chikmagalur',
    destination: 'Chikmagalur',
    tripTitle: 'Karnataka’s Highest Peak, Cascading Falls & Coffee Trails',
    duration: '3 Days / 2 Nights',
    bestTravelMode: 'Scenic highway drive from Bengaluru via Hassan (4.5 hrs)',
    estimatedTotalBudget: 7600,
    splitBudgetPerPerson: 3800,
    recommendedStayArea: 'Homestays on Mullayanagiri foothills or Hirekolale Lake',
    days: [
      {
        dayNumber: 1,
        theme: 'Hassan Heritage, Coffee Foothills & Lakeside Calm',
        curatedEats: {
          spot: 'Town Canteen, Chikmagalur Town',
          specialty: 'Crispy Butter Masala Dosa, Gulab Jamun & filter coffee',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '06:00 AM - 11:30 AM',
            title: 'Drive from Bengaluru with Hassan Belur Stop',
            location: 'NH 75 via Kunigal and Hassan',
            description: 'Cruising past coconut belts. Take a short detour to the 12th-century Chennakeshava Temple in Belur to admire soapstone carvings.',
            costEstimate: '₹800 / person (Fuel + toll split)',
            proTip: 'Stop at Swathi Delicacy near Yediyur for breakfast.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '01:30 PM - 04:30 PM',
            title: 'Hirekolale Lake Reflection Walk',
            location: 'Hirekolale Reservoir',
            description: 'A serene freshwater lake ringed by rolling mountain ridges where Mullayanagiri’s summit reflects into mirror-like water.',
            costEstimate: 'Free entry',
            proTip: 'Quiet afternoons are perfect for outdoor sketchbooks or portable chess.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 08:30 PM',
            title: 'Coffee Tasting Session at Estate Roastery',
            location: 'Estate Roasting Shed',
            description: 'Learn the nuances between Arabica and Robusta beans, wet pulping, sun drying, and manual pour-over extraction with the head planter.',
            costEstimate: '₹250 / person',
            proTip: 'Buy freshly roasted medium-dark peaberry beans for rich crema.'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'Scaling Karnataka’s Zenith: Mullayanagiri & Baba Budangiri',
        curatedEats: {
          spot: 'Siri Coffee, KM Road',
          specialty: 'Akki Roti with Kaalu Sagu, Mirchi Bajji & filter brew',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '05:30 AM - 10:30 AM',
            title: 'Mullayanagiri Peak Climb (1,930 m)',
            location: 'Chikmagalur Foothills to Summit',
            description: 'Ascend to the highest summit in Karnataka. Climb the last 400 stone steps surrounded by swirling monsoon mist and panoramic Sahyadri views.',
            costEstimate: 'Free / ₹50 parking',
            proTip: 'Arrive at the base before 07:00 AM as police limit vehicle numbers at the summit.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '12:00 PM - 03:30 PM',
            title: 'Baba Budangiri Caves & Jhari Waterfalls',
            location: 'Datta Peetha Range',
            description: 'Visit the sacred cave shrine of Sufi saint Baba Budan who first brought coffee beans from Yemen in 1670. Ride 4x4 jeeps to secluded Jhari (Buttermilk) falls.',
            costEstimate: '₹400 / person (Jeep ride split)',
            proTip: 'Take an extra set of dry clothes for dipping under Jhari falls.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 09:00 PM',
            title: 'Bonfire Stories & Malnad Veg Delicacies',
            location: 'Plantation Homestay Courtyard',
            description: 'Gather around the open fire pit for Malnad food: Jackfruit seed curry, steamed pathrode, and acoustic playlists under clear stars.',
            costEstimate: '₹350 / person',
            proTip: 'Malnad hospitality homestays gladly tailor pure-veg menus on request.'
          }
        ]
      },
      {
        dayNumber: 3,
        theme: 'Z Point Trek, Hebbe Cascades & Homeward Drive',
        curatedEats: {
          spot: 'Hotel Vishnu Delicacy',
          specialty: 'Thali meals with hot rasam and local mango pickle',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 11:30 AM',
            title: 'Z Point Kemmangundi Cliff Ridge Hike',
            location: 'Kemmangundi Hill Station',
            description: 'A thrilling 3 km nature walk along a narrow ridge drop overlooking deep shola forested gorges and Shanti Falls.',
            costEstimate: 'Free entry',
            proTip: 'Keep a firm footing along the ridge path; breathtaking camera views!'
          },
          {
            timeOfDay: 'Afternoon',
            time: '12:30 PM - 03:00 PM',
            title: 'Chikmagalur Coffee Museum & Artisanal Boutiques',
            location: 'Coffee Board of India Museum',
            description: 'Interactive exhibits tracing Karnataka’s coffee heritage, antique roasting equipment, and coffee cupping labs.',
            costEstimate: '₹30 entry',
            proTip: 'The museum gift shop has state-certified raw spices and beans.'
          },
          {
            timeOfDay: 'Evening',
            time: '04:00 PM - 08:30 PM',
            title: 'Return Drive to Bengaluru via Channarayapatna',
            location: 'NH 75 expressway',
            description: 'Relaxed return drive stopping for filter coffee and South Indian snacks along the expressway.',
            costEstimate: '₹800 / person (Fuel + toll split)',
            proTip: 'Reach Bengaluru outer ring road by 8:30 PM.'
          }
        ]
      }
    ],
    travelTips: [
      'Jeep rides to waterfalls operate on cash only; keep small currency notes ready.',
      'Checkpoints along Mullayanagiri close entry by 4:00 PM for safety.',
      'Mornings are brisk and chilly; carry light fleece.'
    ],
    packingEssentials: [
      'Sturdy trekking boots with good ankle support',
      'Windproof jacket',
      'Reusable water flask',
      'Portable power bank for long photo treks'
    ]
  },

  dandeli: {
    id: 'itin-dandeli',
    destination: 'Dandeli',
    tripTitle: 'White Water Rafting, Jungle Safari & Hornbill River Camp',
    duration: '3 Days / 2 Nights',
    bestTravelMode: 'Train to Alnavar / Dharwad or overnight KSRTC bus to Haliyal (8 hrs)',
    estimatedTotalBudget: 9800,
    splitBudgetPerPerson: 4900,
    recommendedStayArea: 'Riverfront adventure camp along Kali River or Ganeshgudi',
    days: [
      {
        dayNumber: 1,
        theme: 'River Check-in, Coracle Drift & Supa Dam Panorama',
        curatedEats: {
          spot: 'Riverwood Jungle Retreat Kitchen',
          specialty: 'North Karnataka Jowar Roti, Yennegai (stuffed brinjal) & peanut chutney',
          type: 'Both'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 11:30 AM',
            title: 'Arrival & Riverfront Camp Tent Check-in',
            location: 'Kali Riverbank Campsite',
            description: 'Arrive in lush North Canara teak forests. Check into riverfront safari tents and relax to the sound of flowing water.',
            costEstimate: '₹400 / person (Local transfer)',
            proTip: 'Wear light quick-dry shorts and rubber water sandals.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '02:00 PM - 05:00 PM',
            title: 'Kali River Coracle Ride & Natural Jacuzzi Bath',
            location: 'Kali River Rapids',
            description: 'Drift across deep river pools and sit in natural bubbling water currents where river rocks create a natural massage bath.',
            costEstimate: '₹350 / person',
            proTip: 'Life jackets are mandatory for all river activities.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:30 PM - 08:30 PM',
            title: 'Supa Dam Sunset Viewpoint & Campfire',
            location: 'Supa Reservoir Catchment',
            description: 'Watch the vast backwaters of Supa dam turn golden, followed by a jungle bonfire and board games at camp.',
            costEstimate: 'Free entry',
            proTip: 'Keep eyes peeled for flying squirrels in the camp canopy at dusk.'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'Class 3 White Water Rafting & Dandeli Wildlife Safari',
        curatedEats: {
          spot: 'Kulgi Forest Camp Canteen',
          specialty: 'Warm coastal veg pulao, curd rice & local banana fritters',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '07:30 AM - 12:30 PM',
            title: '9 km White Water Rafting on Kali River Rapids',
            location: 'Ganeshgudi to Dandeli Rapids',
            description: 'Paddle through 9 thrilling rapids named Adi’s Delirium, The Snag, and The Stitch guided by international whitewater instructors.',
            costEstimate: '₹1,400 / person',
            proTip: 'Leave all jewelry, glasses, and phones in camp lockers before hitting the river.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '02:30 PM - 04:30 PM',
            title: 'Syntheri Rocks Monolithic Granite Grotto',
            location: 'Gund Forest Range',
            description: 'Walk down 200 stone steps into a ravine flanked by a 300-foot hollow monolithic granite wall hollowed by the Kaneri river.',
            costEstimate: '₹50 entry',
            proTip: 'Observe thousands of pigeon nests and giant rock honeycombs in the cliff crevices.'
          },
          {
            timeOfDay: 'Evening',
            time: '05:00 PM - 08:30 PM',
            title: 'Dandeli Anshi Tiger Reserve Jungle Safari',
            location: 'Phansoli Open Jeep Safari',
            description: 'Open-top 4x4 jungle drive in search of black panthers, barking deer, Malabar giant squirrels, and king cobras.',
            costEstimate: '₹600 / person',
            proTip: 'Wear earth-toned khaki or olive green clothes to avoid startling wildlife.'
          }
        ]
      },
      {
        dayNumber: 3,
        theme: 'Old Magazine House Birding, Zip-line & Return',
        curatedEats: {
          spot: 'Ganeshgudi Riverside Dhaba',
          specialty: 'Fresh Neer Dosa, coconut chutney & hot filter coffee',
          type: 'Veg'
        },
        items: [
          {
            timeOfDay: 'Morning',
            time: '06:30 AM - 10:30 AM',
            title: 'Hornbill Watching at Old Magazine House',
            location: 'Ganeshgudi Canopies',
            description: 'A global birdwatcher’s paradise. Spot great pied hornbills, Malabar pied hornbills, and emerald doves feeding at morning birdbaths.',
            costEstimate: '₹200 camera pass',
            proTip: 'The canopy hide provides eye-level photography opportunities.'
          },
          {
            timeOfDay: 'Afternoon',
            time: '11:30 AM - 02:30 PM',
            title: 'River Zip-line & Timber Mart Tour',
            location: 'Dandeli Timber Yard',
            description: 'Glide on a 300-meter river zip-line across the Kali river, then visit Asia’s largest historical teak timber trading yard.',
            costEstimate: '₹350 / person',
            proTip: 'Hold your balance steady during the zip-line landing platform.'
          },
          {
            timeOfDay: 'Evening',
            time: '04:30 PM - 08:00 PM',
            title: 'Local Honey Shopping & Departure to Hubli / Bangalore',
            location: 'Dandeli Forest Depot',
            description: 'Pick up wild unpasteurized forest honey, bamboo shoot pickles, and board the evening train or sleeper bus from Hubli/Alnavar.',
            costEstimate: '₹850 train sleeper',
            proTip: 'Pure forest honey has a distinct dark amber hue and floral aftertaste.'
          }
        ]
      }
    ],
    travelTips: [
      'Whitewater rafting depends on water release from Supa dam; morning slots are best.',
      'Leech protection socks are useful during monsoon or post-monsoon jungle walks.',
      'Carry mosquito repellent and quick dry towels.'
    ],
    packingEssentials: [
      'Quick-dry river sports shorts & rashguard',
      'Waterproof phone pouch with neck lanyard',
      'High-traction water shoes or strapped sports sandals',
      'Binoculars for birdwatching in Ganeshgudi'
    ]
  }
};

export function getItineraryForDestination(destinationName: string): TripItinerary {
  const normalized = destinationName.toLowerCase().trim();
  
  if (normalized.includes('coorg') || normalized.includes('kodagu') || normalized.includes('madikeri')) {
    return ITINERARY_DATABASE.coorg;
  }
  if (normalized.includes('mysore') || normalized.includes('mysuru')) {
    return ITINERARY_DATABASE.mysore;
  }
  if (normalized.includes('gokarna') || normalized.includes('murudeshwar')) {
    return ITINERARY_DATABASE.gokarna;
  }
  if (normalized.includes('hampi') || normalized.includes('hosapete')) {
    return ITINERARY_DATABASE.hampi;
  }
  if (normalized.includes('ooty') || normalized.includes('nilgiri')) {
    return ITINERARY_DATABASE.ooty;
  }
  if (normalized.includes('chikmagalur') || normalized.includes('chikkamagaluru')) {
    return ITINERARY_DATABASE.chikmagalur;
  }
  if (normalized.includes('dandeli') || normalized.includes('kali')) {
    return ITINERARY_DATABASE.dandeli;
  }

  // Fallback to Coorg customized
  return ITINERARY_DATABASE.coorg;
}
