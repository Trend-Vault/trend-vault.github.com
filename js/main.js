// Global Variables
let currentFilter = "all";

// Cart Sidebar Elements
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartIcon = document.getElementById("cartIcon");
const closeCartBtn = document.getElementById("closeCartBtn");

// Open cart sidebar
function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("active");
}

// Close cart sidebar
function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("active");
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    showToast("Cart is empty!");
    return;
  }
  
  const { finalTotal, groups } = calculateTotalWithOffer();
  let offerMessage = "";
  
  if (groups > 0) {
    offerMessage = `\n🎉 ${groups} x (3 A3 Posters for ₹99) offer applied!`;
  }
  
  alert(`✨ Order placed! Total: ₹${finalTotal}${offerMessage}\n\nThank you for shopping at Trend-Vault!`);
  
  cart = [];
  saveCart();
  closeCart();
}

// Set filter and re-render
function setFilter(filter) {
  currentFilter = filter;
  renderProducts();
  setActiveFilter(filter);
  
  // Smooth scroll to products section
  document.getElementById("productsGrid")?.scrollIntoView({ behavior: "smooth" });
}

// Initialize event listeners
function initEventListeners() {
  // Category filters
  document.querySelectorAll(".cat-badge").forEach(badge => {
    badge.addEventListener("click", () => {
      setFilter(badge.dataset.filter);
    });
  });
  
  // Nav links
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setFilter(link.dataset.filter || "all");
    });
  });
  
  // Hero buttons
  document.getElementById("shopNowBtn")?.addEventListener("click", () => {
    setFilter("all");
  });
  
  document.getElementById("exploreBtn")?.addEventListener("click", () => {
    setFilter("all");
  });
  
  // Cart
  cartIcon.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  document.getElementById("checkoutBtn")?.addEventListener("click", checkout);
}

// Initialize the application
function init() {
  loadCart();
  renderProducts();
  initEventListeners();
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", init);