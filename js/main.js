// Global Variables
let currentFilter = "all";
let currentWallPoster = null;
let displayedWallPosters = [];
let draggedPosterIndex = null;
let currentLayout = "triangle";
let dragOffsetX = 0;
let dragOffsetY = 0;

// Multiple layout presets for wall posters
const layoutPresets = {
  triangle: [
    // Inverted triangle (3 top, 2 bottom) - tighter spacing
    { top: '8%', left: '28%' },
    { top: '8%', left: '48%' },
    { top: '8%', left: '68%' },
    { top: '35%', left: '38%' },
    { top: '35%', left: '58%' }
  ],
  grid: [
    // Grid layout - tighter spacing
    { top: '15%', left: '28%' },
    { top: '15%', left: '50%' },
    { top: '15%', left: '72%' },
    { top: '48%', left: '28%' },
    { top: '48%', left: '50%' }
  ],
  circle: [
    // Circle arrangement (5 posters in circular pattern) - tighter
    { top: '18%', left: '50%', transform: 'translate(-50%, 0)' },
    { top: '38%', left: '70%', transform: 'translate(-50%, 0)' },
    { top: '60%', left: '50%', transform: 'translate(-50%, 0)' },
    { top: '62%', left: '30%', transform: 'translate(-50%, 0)' },
    { top: '40%', left: '30%', transform: 'translate(-50%, 0)' }
  ],
  diamond: [
    // Diamond arrangement - tighter
    { top: '20%', left: '50%' },
    { top: '38%', left: '32%' },
    { top: '38%', left: '68%' },
    { top: '56%', left: '40%' },
    { top: '56%', left: '60%' }
  ],
  line: [
    // Horizontal line arrangement - tighter
    { top: '40%', left: '15%' },
    { top: '40%', left: '32%' },
    { top: '40%', left: '49%' },
    { top: '40%', left: '66%' },
    { top: '40%', left: '83%' }
  ]
};

let wallPositions = layoutPresets.triangle;

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
  
  // Layout switcher buttons
  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLayout(btn.dataset.layout, btn);
    });
  });
  
  // Initialize corner wall
  initCornerWall();
}

// Switch between different poster layouts
function switchLayout(layoutName, btnElement) {
  if (!layoutPresets[layoutName]) return;
  
  currentLayout = layoutName;
  wallPositions = layoutPresets[layoutName];
  
  // Clear custom positions to apply preset layout
  displayedWallPosters.forEach(poster => {
    delete poster.customTop;
    delete poster.customLeft;
  });
  
  // Update active button styling
  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  btnElement.classList.add('active');
  
  // Re-render wall with new layout
  renderWallPosters();
  console.log(`Switched to ${layoutName} layout`);
}

// Corner Wall Display Functions
function initCornerWall() {
  console.log("Initializing corner wall display with cart items");
  updateCornerWallPosters();
}

function updateCornerWallPosters() {
  console.log("Updating corner wall with cart items, cart length:", cart.length);
  
  // Get selector container
  const selector = document.getElementById('selectorPosters');
  const container = document.getElementById('cartPostersContainer');
  
  if (!selector || !container) return;
  
  // Clear existing items
  selector.innerHTML = '';
  
  if (cart.length === 0) {
    // Show empty state
    container.innerHTML = '<p style="margin: 0; font-size: 0.9rem;">📭 No posters in cart yet</p><p style="margin: 5px 0 0 0; font-size: 0.8rem;">Add items to preview them here</p>';
    container.style.display = 'block';
    displayedWallPosters = [];
    renderWallPosters();
    return;
  }
  
  // Hide empty state
  container.style.display = 'none';
  
  // Get unique cart items (by id) to avoid duplicates
  const uniqueItems = [];
  const seenIds = new Set();
  
  cart.forEach(item => {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      uniqueItems.push(item);
    }
  });
  
  console.log("Unique cart items:", uniqueItems.length);
  
  // Populate with cart items
  uniqueItems.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'selector-poster-item';
    
    // Check if this poster is already displayed
    const isDisplayed = displayedWallPosters.some(p => p.id === item.id);
    if (isDisplayed) cartItem.classList.add('active');
    
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.displayName;
    
    const label = document.createElement('div');
    label.style.cssText = 'padding: 4px; background: rgba(0, 0, 0, 0.5); font-size: 0.7rem; color: #A0A0C0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;';
    label.textContent = item.displayName;
    
    cartItem.appendChild(img);
    cartItem.appendChild(label);
    
    // On click, toggle poster on/off wall
    cartItem.addEventListener('click', () => {
      togglePosterOnWall(item, cartItem);
    });
    
    selector.appendChild(cartItem);
  });
  
  // Auto-add first poster if wall is empty
  if (displayedWallPosters.length === 0 && uniqueItems.length > 0) {
    displayedWallPosters.push(uniqueItems[0]);
    currentWallPoster = uniqueItems[0];
    document.querySelector('.selector-poster-item').classList.add('active');
    renderWallPosters();
    updatePreviewSection(uniqueItems[0]);
  }
}

function togglePosterOnWall(item, selectorElement) {
  // Check if poster is already displayed
  const index = displayedWallPosters.findIndex(p => p.id === item.id);
  
  if (index > -1) {
    // Remove from wall
    displayedWallPosters.splice(index, 1);
    selectorElement.classList.remove('active');
    console.log("Removed poster from wall:", item.displayName);
  } else {
    // Add to wall (max 5 posters)
    if (displayedWallPosters.length < 5) {
      displayedWallPosters.push(item);
      selectorElement.classList.add('active');
      console.log("Added poster to wall:", item.displayName);
    } else {
      showToast("Max 5 posters on wall!");
      return;
    }
  }
  
  currentWallPoster = item;
  renderWallPosters();
  updatePreviewSection(item);
}

function renderWallPosters() {
  const wallContainer = document.getElementById('wallPostersContainer');
  if (!wallContainer) return;
  
  // Clear existing posters
  wallContainer.innerHTML = '';
  
  // Render each displayed poster
  displayedWallPosters.forEach((item, index) => {
    const posterEl = document.createElement('div');
    posterEl.className = 'wall-poster';
    if (item.id === currentWallPoster?.id) posterEl.classList.add('active');
    
    // Use custom position if available, otherwise use preset
    if (item.customTop !== undefined && item.customLeft !== undefined) {
      posterEl.style.top = item.customTop;
      posterEl.style.left = item.customLeft;
    } else if (index < wallPositions.length) {
      posterEl.style.top = wallPositions[index].top;
      posterEl.style.left = wallPositions[index].left;
      if (wallPositions[index].transform) {
        posterEl.style.transform = wallPositions[index].transform;
      }
    }
    
    posterEl.draggable = true;
    posterEl.dataset.posterIndex = index;
    
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.displayName;
    
    posterEl.appendChild(img);
    
    // Click to select
    posterEl.addEventListener('click', (e) => {
      if (!e.dataTransfer) { // Not a drag event
        currentWallPoster = item;
        renderWallPosters();
        updatePreviewSection(item);
      }
    });
    
    // Drag events for free positioning
    posterEl.addEventListener('dragstart', handleDragStart);
    posterEl.addEventListener('dragend', handleDragEnd);
    
    wallContainer.appendChild(posterEl);
  });
  
  // Add global drag over handler to wall container
  wallContainer.addEventListener('dragover', handleWallDragOver);
  wallContainer.addEventListener('drop', handleWallDrop);
}

// Drag and Drop Handler Functions - Free Positioning
function handleDragStart(e) {
  const posterEl = e.target.closest('.wall-poster');
  draggedPosterIndex = parseInt(posterEl.dataset.posterIndex);
  posterEl.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleWallDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleWallDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  
  if (draggedPosterIndex === null) return;
  
  const wallContainer = document.getElementById('wallPostersContainer');
  const rect = wallContainer.getBoundingClientRect();
  
  // Calculate position relative to wall container
  let dropX = e.clientX - rect.left;
  let dropY = e.clientY - rect.top;
  
  // Convert to percentage
  const xPercent = (dropX / rect.width) * 100;
  const yPercent = (dropY / rect.height) * 100;
  
  // Clamp values to keep poster visible (accounting for poster size)
  const clampedX = Math.max(0, Math.min(xPercent - 4.7, 95.3)); // 94px width / 2 = 4.7% at center
  const clampedY = Math.max(0, Math.min(yPercent - 7, 93)); // 140px height / 2 = 7% at center
  
  // Store custom position in poster object
  if (draggedPosterIndex < displayedWallPosters.length) {
    displayedWallPosters[draggedPosterIndex].customTop = clampedY + '%';
    displayedWallPosters[draggedPosterIndex].customLeft = clampedX + '%';
    console.log(`Positioned poster ${draggedPosterIndex} at ${clampedX.toFixed(1)}%, ${clampedY.toFixed(1)}%`);
  }
  
  renderWallPosters();
  return false;
}

function handleDragEnd(e) {
  document.querySelectorAll('.wall-poster').forEach(p => p.classList.remove('dragging', 'drag-over'));
  draggedPosterIndex = null;
}

function updatePreviewSection(item) {
  const previewSection = document.getElementById('previewAddSection');
  const previewTitle = document.getElementById('previewTitle');
  
  if (previewSection && previewTitle) {
    previewSection.style.display = 'block';
    previewTitle.innerHTML = `👀 <strong>${item.displayName}</strong> (${item.size})`;
  }
}

function displayCartPosterOnWall(cartItem) {
  console.log("Displaying cart poster on wall:", cartItem.displayName);
  // Function kept for compatibility - now handled by togglePosterOnWall
}

// Add function to setup corner wall cart preview
function setupWallPosterCart() {
  const closeBtn = document.getElementById('closePreviewBtn');
  const viewCartBtn = document.getElementById('addToCartFromPreviewBtn');
  const removeBtn = document.getElementById('removeFromPreviewBtn');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const previewSection = document.getElementById('previewAddSection');
      if (previewSection) {
        previewSection.style.display = 'none';
      }
    });
  }
  
  if (viewCartBtn) {
    viewCartBtn.addEventListener('click', () => {
      openCart();
    });
  }
  
  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      if (currentWallPoster) {
        // Find the poster in displayed list
        const itemIndex = displayedWallPosters.findIndex(item => item.id === currentWallPoster.id);
        
        if (itemIndex > -1) {
          // Remove from wall display
          displayedWallPosters.splice(itemIndex, 1);
          
          // Update selector
          const selector = document.querySelector('.selector-poster-item.active');
          if (selector) selector.classList.remove('active');
          
          // Select next poster if available
          if (displayedWallPosters.length > 0) {
            currentWallPoster = displayedWallPosters[0];
            updatePreviewSection(currentWallPoster);
          } else {
            currentWallPoster = null;
            const previewSection = document.getElementById('previewAddSection');
            if (previewSection) previewSection.style.display = 'none';
          }
          
          renderWallPosters();
          showToast('Poster removed from preview', 2000);
        }
      }
    });
  }
}

// Add animation for poster display
function addCornerWallStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes posterFlip {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize the application
function init() {
  loadCart();
  renderProducts();
  addCornerWallStyles();
  initEventListeners();
  setupWallPosterCart();
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", init);