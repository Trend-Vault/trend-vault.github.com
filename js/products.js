// Product Database
// Updated with organized IDs:
// Anime: 1-20
// Car: 101-120
// Bike: 201-220
// Marvel: 301-320
// DC: 401-420
// Other: 501-520
// Nature: 601-620
// Quotes: 701-720

const products = [
  // ==================== ANIME Series (IDs: 1-20) ====================
  { 
    id: 1, 
    displayName: "A-1 • Satoru Gojo", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/A-1.jpg" 
  },
  { 
    id: 2, 
    displayName: "A-2 • Roronoa Zoro", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/A-2.jpg" 
  },
  { 
    id: 3, 
    displayName: "A-3 • Levi Ackerman", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/A-3.jpg" 
  },
  
  // ==================== CAR Series (IDs: 101-120) ====================
  { 
    id: 101, 
    displayName: "C-1 • JDM GT-R R34", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-1.jpg" 
  },
  { 
    id: 102, 
    displayName: "C-2 • Porsche 911 GT3", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-2.jpg" 
  },
  { 
    id: 103, 
    displayName: "C-3 • Ferrari F40", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-3.jpg" 
  },
  { 
    id: 104, 
    displayName: "C-4 • Lamborghini Aventador", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-4.jpg" 
  },
  { 
    id: 105,  
    displayName: "C-5 • Toyota Supra MK4", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-5.jpg" 
  },
  { 
    id: 106, 
    displayName: "C-6 • BMW M4 Competition", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-6.jpg" 
  },
  { 
    id: 107, 
    displayName: "C-7 • Mercedes AMG GT", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-7.jpg" 
  },
  { 
    id: 108, 
    name: "C-8", 
    displayName: "C-8 • Ford Mustang GT", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-8.jpg" 
  },
  { 
    id: 109, 
    name: "C-9", 
    displayName: "C-9 • Chevrolet Corvette", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-9.jpg" 
  },
  { 
    id: 110, 
    name: "C-10", 
    displayName: "C-10 • McLaren 720S", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-10.jpg" 
  },
   { 
    id: 111, 
    name: "C-11", 
    displayName: "C-11 • Lamborghini Huracán", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-11.jpg" 
  },
     { 
    id: 112, 
    name: "C-12", 
    displayName: "C-12 • Ferrari 812 Superfast", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-12.jpg" 
  },
     { 
    id: 113, 
    name: "C-13", 
    displayName: "C-13 • Aston Martin DB11", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-13.jpg" 
  },
     { 
    id: 114, 
    name: "C-14", 
    displayName: "C-14 • Bugatti Chiron", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-14.jpg" 
  },
   { 
    id: 115, 
    name: "C-15", 
    displayName: "C-15 • McLaren 720S", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-15.jpg" 
  },
   { 
    id: 116, 
    name: "C-16", 
    displayName: "C-16 • Ferrari 812 Superfast", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-16.jpg" 
  },
   { 
    id: 117, 
    name: "C-17", 
    displayName: "C-17 • Aston Martin DB11", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/C-17.jpg" 
  },
  
  // ==================== BIKE Series (IDs: 201-220) ====================
  { 
    id: 201, 
    name: "Bike-1", 
    displayName: "B-1 • Ninja H2R", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/B-1.jpg" 
  },
  { 
    id: 202, 
    name: "Bike-2", 
    displayName: "B-2 • Ducati Panigale V4", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/B-2.jpg" 
  },
  { 
    id: 203, 
    name: "Bike-3", 
    displayName: "B-3 • BMW S1000RR", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/B-3.jpg" 
  },
  
  
  // ==================== MARVEL Series (IDs: 301-320) ====================
  { 
    id: 301, 
    name: "Marvel-1", 
    displayName: "Marvel-301 • Spider-Man", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/m-1.jpg" 
  },
    { 
    id: 302, 
    name: "Marvel-2", 
    displayName: "Marvel-302 • Iron Man", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/m-2.jpg" 
  },
  
    // ==================== DC Series (IDs: 401-420) ====================
  { 
    id: 401, 
    name: "DC-1", 
    displayName: "D-1 • Batman", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/D-1.jpg" 
  },
  
  // ==================== OTHER Series (IDs: 501-520) ====================
  { 
    id: 501, 
    name: "Other-1", 
    displayName: "Other-501 • Vaporwave Aesthetic", 
    category: "other", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/other/Other-1.jpg" 
  },
  { 
    id: 502, 
    name: "Other-2", 
    displayName: "Other-502 • Cyberpunk City", 
    category: "other", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/other/Other-2.jpg" 
  },
  { 
    id: 503, 
    name: "Other-3", 
    displayName: "Other-503 • Abstract Neon", 
    category: "other", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/other/Other-3.jpg" 
  },
  { 
    id: 504, 
    name: "Other-4", 
    displayName: "Other-504 • Space Galaxy", 
    category: "other", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/other/Other-4.jpg" 
  },
  { 
    id: 505, 
    name: "Other-5", 
    displayName: "Other-505 • Nature Landscape", 
    category: "other", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/other/Other-5.jpg" 
  },
  
  // ==================== NATURE Series (IDs: 601-620) ====================
  { 
    id: 601, 
    name: "N-1", 
    displayName: "N-1 • Serene Forest", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-1.jpg" 
  },
  { 
    id: 602, 
    name: "N-2", 
    displayName: "N-2 • Mountain Sunrise", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-2.jpg" 
  },
  { 
    id: 603, 
    name: "N-3", 
    displayName: "N-3 • Ocean Waves", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-3.jpg" 
  },
  { 
    id: 604, 
    name: "N-4", 
    displayName: "N-4 • Cherry Blossom", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-4.jpg" 
  },
  { 
    id: 605, 
    name: "N-5", 
    displayName: "N-5 • Northern Lights", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-5.jpg" 
  },
  { 
    id: 606, 
    name: "N-6", 
    displayName: "N-6 • Waterfall Paradise", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-6.jpg" 
  },
  { 
    id: 607, 
    name: "N-7", 
    displayName: "N-7 • Desert Sunset", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-7.jpg" 
  },
  { 
    id: 608, 
    name: "N-8", 
    displayName: "N-8 • Tropical Beach", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-8.jpg" 
  },
  { 
    id: 609, 
    name: "N-9", 
    displayName: "N-9 • Autumn Leaves", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/N-9.jpg" 
  },

  
  // ==================== QUOTES Series (IDs: 701-720) ====================
  { 
    id: 701, 
    name: "Q-1", 
    displayName: "Q-1 • Dream Big", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-1.jpg" 
  },
  { 
    id: 702, 
    name: "Q-2", 
    displayName: "Q-2 • Stay Strong", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-2.jpg" 
  },
  { 
    id: 703, 
    name: "Q-3", 
    displayName: "Q-3 • Believe in Yourself", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-3.jpg" 
  },
  { 
    id: 704, 
    name: "Q-4", 
    displayName: "Q-4 • Never Give Up", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-4.jpg" 
  },
  { 
    id: 705, 
    name: "Q-5", 
    displayName: "Q-5 • Make It Happen", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-5.jpg" 
  },
  { 
    id: 706, 
    name: "Q-6", 
    displayName: "Q-6 • Rise Above", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-6.jpg" 
  },
  { 
    id: 707, 
    name: "Q-7", 
    displayName: "Q-7 • Be the Change", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-7.jpg" 
  },
  { 
    id: 708, 
    name: "Q-8", 
    displayName: "Q-8 • Inspire Greatness", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-8.jpg" 
  },
  { 
    id: 709, 
    name: "Q-9", 
    displayName: "Q-9 • Positive Vibes", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-9.jpg" 
  },
  { 
    id: 710, 
    name: "Q-10", 
    displayName: "Q-10 • Live Your Best Life", 
    category: "quotes", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/quotes/Q-10.jpg" 
  },

  { 
    id: 801, 
    name: "I-1", 
    displayName: "I-1 • Infinite Possibilities", 
    category: "islamic", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/islamic/I-1.png" 
  },
   { 
    id: 802, 
    name: "I-2", 
    displayName: "I-2 • Guidance and Wisdom", 
    category: "islamic", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/islamic/I-2.png" 
  },
    { 
    id: 803, 
    name: "I-3", 
    displayName: "I-3 • Peaceful Mind", 
    category: "islamic", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/islamic/I-3.jpg" 
  },
   { 
    id: 804, 
    name: "I-4", 
    displayName: "I-4 • Trust in Allah", 
    category: "islamic", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/islamic/I-4.png" 
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}