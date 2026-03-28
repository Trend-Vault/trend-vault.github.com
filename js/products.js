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
    name: "Anime-1", 
    displayName: "Anime-1 • Neon Shinobi", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-1.jpg" 
  },
  { 
    id: 2, 
    name: "Anime-2", 
    displayName: "Anime-2 • Samurai Cyber", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-2.jpg" 
  },
  { 
    id: 3, 
    name: "Anime-3", 
    displayName: "Anime-3 • Dragon Spirit", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-3.jpg" 
  },
  { 
    id: 4, 
    name: "Anime-4", 
    displayName: "Anime-4 • Celestial Girls", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-4.jpg" 
  },
  { 
    id: 5, 
    name: "Anime-5", 
    displayName: "Anime-5 • Mecha Rage", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-5.jpg" 
  },
  { 
    id: 6, 
    name: "Anime-6", 
    displayName: "Anime-6 • Demon Slayer", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-6.jpg" 
  },
  { 
    id: 7, 
    name: "Anime-7", 
    displayName: "Anime-7 • Jujutsu Kaisen", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-7.jpg" 
  },
  { 
    id: 8, 
    name: "Anime-8", 
    displayName: "Anime-8 • One Piece", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-8.jpg" 
  },
  { 
    id: 9, 
    name: "Anime-9", 
    displayName: "Anime-9 • Attack on Titan", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-9.jpg" 
  },
  { 
    id: 10, 
    name: "Anime-10", 
    displayName: "Anime-10 • My Hero Academia", 
    category: "anime", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/anime/Anime-10.jpg" 
  },
  
  // ==================== CAR Series (IDs: 101-120) ====================
  { 
    id: 101, 
    name: "Car-1", 
    displayName: "Car-101 • JDM GT-R R34", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-1.jpg" 
  },
  { 
    id: 102, 
    name: "Car-2", 
    displayName: "Car-102 • Porsche 911 GT3", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-2.jpg" 
  },
  { 
    id: 103, 
    name: "Car-3", 
    displayName: "Car-103 • Ferrari F40", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-3.jpg" 
  },
  { 
    id: 104, 
    name: "Car-4", 
    displayName: "Car-104 • Lamborghini Aventador", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-4.jpg" 
  },
  { 
    id: 105, 
    name: "Car-5", 
    displayName: "Car-105 • Toyota Supra MK4", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-5.jpg" 
  },
  { 
    id: 106, 
    name: "Car-6", 
    displayName: "Car-106 • BMW M4 Competition", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-6.jpg" 
  },
  { 
    id: 107, 
    name: "Car-7", 
    displayName: "Car-107 • Mercedes AMG GT", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-7.jpg" 
  },
  { 
    id: 108, 
    name: "Car-8", 
    displayName: "Car-108 • Ford Mustang GT", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-8.jpg" 
  },
  { 
    id: 109, 
    name: "Car-9", 
    displayName: "Car-109 • Chevrolet Corvette", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-9.jpg" 
  },
  { 
    id: 110, 
    name: "Car-10", 
    displayName: "Car-110 • McLaren 720S", 
    category: "car", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/car/Car-10.jpg" 
  },
  
  // ==================== BIKE Series (IDs: 201-220) ====================
  { 
    id: 201, 
    name: "Bike-1", 
    displayName: "Bike-201 • Ninja H2R", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-1.jpg" 
  },
  { 
    id: 202, 
    name: "Bike-2", 
    displayName: "Bike-202 • Ducati Panigale V4", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-2.jpg" 
  },
  { 
    id: 203, 
    name: "Bike-3", 
    displayName: "Bike-203 • BMW S1000RR", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-3.jpg" 
  },
  { 
    id: 204, 
    name: "Bike-4", 
    displayName: "Bike-204 • Honda Fireblade", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-4.jpg" 
  },
  { 
    id: 205, 
    name: "Bike-5", 
    displayName: "Bike-205 • Yamaha R1M", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-5.jpg" 
  },
  { 
    id: 206, 
    name: "Bike-6", 
    displayName: "Bike-206 • Suzuki Hayabusa", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-6.jpg" 
  },
  { 
    id: 207, 
    name: "Bike-7", 
    displayName: "Bike-207 • Aprilia RSV4", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-7.jpg" 
  },
  { 
    id: 208, 
    name: "Bike-8", 
    displayName: "Bike-208 • KTM RC390", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-8.jpg" 
  },
  { 
    id: 209, 
    name: "Bike-9", 
    displayName: "Bike-209 • Royal Enfield GT650", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-9.jpg" 
  },
  { 
    id: 210, 
    name: "Bike-10", 
    displayName: "Bike-210 • Harley Davidson", 
    category: "bike", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/bike/Bike-10.jpg" 
  },
  
  // ==================== MARVEL Series (IDs: 301-320) ====================
  { 
    id: 301, 
    name: "Marvel-1", 
    displayName: "Marvel-301 • Spider-Man", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-1.jpg" 
  },
  { 
    id: 302, 
    name: "Marvel-2", 
    displayName: "Marvel-302 • Iron Man", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-2.jpg" 
  },
  { 
    id: 303, 
    name: "Marvel-3", 
    displayName: "Marvel-303 • Thor", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-3.jpg" 
  },
  { 
    id: 304, 
    name: "Marvel-4", 
    displayName: "Marvel-304 • Captain America", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-4.jpg" 
  },
  { 
    id: 305, 
    name: "Marvel-5", 
    displayName: "Marvel-305 • Black Panther", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-5.jpg" 
  },
  { 
    id: 306, 
    name: "Marvel-6", 
    displayName: "Marvel-306 • Deadpool", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-6.jpg" 
  },
  { 
    id: 307, 
    name: "Marvel-7", 
    displayName: "Marvel-307 • Wolverine", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-7.jpg" 
  },
  { 
    id: 308, 
    name: "Marvel-8", 
    displayName: "Marvel-308 • Doctor Strange", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-8.jpg" 
  },
  { 
    id: 309, 
    name: "Marvel-9", 
    displayName: "Marvel-309 • Guardians of Galaxy", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-9.jpg" 
  },
  { 
    id: 310, 
    name: "Marvel-10", 
    displayName: "Marvel-310 • Avengers Assemble", 
    category: "marvel", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/marvel/Marvel-10.jpg" 
  },
  
  // ==================== DC Series (IDs: 401-420) ====================
  { 
    id: 401, 
    name: "DC-1", 
    displayName: "DC-401 • Batman", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-1.jpg" 
  },
  { 
    id: 402, 
    name: "DC-2", 
    displayName: "DC-402 • Superman", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-2.jpg" 
  },
  { 
    id: 403, 
    name: "DC-3", 
    displayName: "DC-403 • Wonder Woman", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-3.jpg" 
  },
  { 
    id: 404, 
    name: "DC-4", 
    displayName: "DC-404 • The Joker", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-4.jpg" 
  },
  { 
    id: 405, 
    name: "DC-5", 
    displayName: "DC-405 • Flash", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-5.jpg" 
  },
  { 
    id: 406, 
    name: "DC-6", 
    displayName: "DC-406 • Aquaman", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-6.jpg" 
  },
  { 
    id: 407, 
    name: "DC-7", 
    displayName: "DC-407 • Cyborg", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-7.jpg" 
  },
  { 
    id: 408, 
    name: "DC-8", 
    displayName: "DC-408 • Harley Quinn", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-8.jpg" 
  },
  { 
    id: 409, 
    name: "DC-9", 
    displayName: "DC-409 • Green Lantern", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-9.jpg" 
  },
  { 
    id: 410, 
    name: "DC-10", 
    displayName: "DC-410 • Justice League", 
    category: "dc", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/dc/DC-10.jpg" 
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
    name: "NA-1", 
    displayName: "NA-1 • Serene Forest", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-1.jpg" 
  },
  { 
    id: 602, 
    name: "NA-2", 
    displayName: "NA-2 • Mountain Sunrise", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-2.jpg" 
  },
  { 
    id: 603, 
    name: "NA-3", 
    displayName: "NA-3 • Ocean Waves", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-3.jpg" 
  },
  { 
    id: 604, 
    name: "NA-4", 
    displayName: "NA-4 • Cherry Blossom", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-4.jpg" 
  },
  { 
    id: 605, 
    name: "NA-5", 
    displayName: "NA-5 • Northern Lights", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-5.jpg" 
  },
  { 
    id: 606, 
    name: "NA-6", 
    displayName: "NA-6 • Waterfall Paradise", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-6.jpg" 
  },
  { 
    id: 607, 
    name: "NA-7", 
    displayName: "NA-7 • Desert Sunset", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-7.jpg" 
  },
  { 
    id: 608, 
    name: "NA-8", 
    displayName: "NA-8 • Tropical Beach", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-8.jpg" 
  },
  { 
    id: 609, 
    name: "NA-9", 
    displayName: "NA-9 • Autumn Leaves", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-9.jpg" 
  },
  { 
    id: 610, 
    name: "NA-10", 
    displayName: "NA-10 • Snowy Mountains", 
    category: "nature", 
    priceA4: 20, 
    priceA3: 40, 
    img: "assets/images/nature/NA-10.jpg" 
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
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}