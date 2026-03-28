// Product Database
// Pricing: A4 = ₹20, A3 = ₹40
const products = [
  // ANIME Series (Anime-1 to Anime-5)
  { id: 1, name: "Anime-1", displayName: "Anime-1 • Neon Shinobi", category: "anime", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/1f1a2e/00D4FF?text=ANIME-1" },
  { id: 2, name: "Anime-2", displayName: "Anime-2 • Samurai Cyber", category: "anime", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/191624/FF66CC?text=ANIME-2" },
  { id: 3, name: "Anime-3", displayName: "Anime-3 • Dragon Spirit", category: "anime", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/0f0f1c/00D4FF?text=ANIME-3" },
  { id: 4, name: "Anime-4", displayName: "Anime-4 • Celestial Girls", category: "anime", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/11151f/FF66CC?text=ANIME-4" },
  { id: 5, name: "Anime-5", displayName: "Anime-5 • Mecha Rage", category: "anime", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/0c0c1a/00D4FF?text=ANIME-5" },
  
  // CAR Series (Car-1 to Car-5)
  { id: 6, name: "Car-1", displayName: "Car-1 • JDM GT-R", category: "car", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/12121e/FF66CC?text=CAR-1" },
  { id: 7, name: "Car-2", displayName: "Car-2 • Porsche 911", category: "car", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/1a142a/00D4FF?text=CAR-2" },
  { id: 8, name: "Car-3", displayName: "Car-3 • Ferrari F40", category: "car", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/15102a/FF66CC?text=CAR-3" },
  { id: 9, name: "Car-4", displayName: "Car-4 • Lamborghini", category: "car", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/0e0e22/00D4FF?text=CAR-4" },
  { id: 10, name: "Car-5", displayName: "Car-5 • Supra MK4", category: "car", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/121228/FF66CC?text=CAR-5" },
  
  // BIKE Series (Bike-1 to Bike-5)
  { id: 11, name: "Bike-1", displayName: "Bike-1 • Ninja H2R", category: "bike", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/1a162f/00D4FF?text=BIKE-1" },
  { id: 12, name: "Bike-2", displayName: "Bike-2 • Ducati", category: "bike", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/15152b/FF66CC?text=BIKE-2" },
  { id: 13, name: "Bike-3", displayName: "Bike-3 • BMW S1000RR", category: "bike", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/111125/00D4FF?text=BIKE-3" },
  { id: 14, name: "Bike-4", displayName: "Bike-4 • Honda Fireblade", category: "bike", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/191633/FF66CC?text=BIKE-4" },
  { id: 15, name: "Bike-5", displayName: "Bike-5 • Yamaha R1M", category: "bike", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/0a0a1e/00D4FF?text=BIKE-5" },
  
  // OTHER Series (Other-1 to Other-3)
  { id: 16, name: "Other-1", displayName: "Other-1 • Vaporwave", category: "other", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/1a142a/FF66CC?text=OTHER-1" },
  { id: 17, name: "Other-2", displayName: "Other-2 • Cyberpunk", category: "other", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/111125/00D4FF?text=OTHER-2" },
  { id: 18, name: "Other-3", displayName: "Other-3 • Abstract Neon", category: "other", priceA4: 20, priceA3: 40, img: "https://placehold.co/400x500/15102a/FF66CC?text=OTHER-3" }
];

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}