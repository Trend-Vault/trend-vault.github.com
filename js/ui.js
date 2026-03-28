// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const cartCountSpan = document.getElementById("cartCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalPriceSpan = document.getElementById("cartTotalPrice");
const offerDiscountMsg = document.getElementById("offerDiscountMsg");
const toastMsg = document.getElementById("toastMsg");

// Show toast notification
function showToast(message) {
  toastMsg.textContent = message;
  toastMsg.style.opacity = "1";
  setTimeout(() => {
    toastMsg.style.opacity = "0";
  }, 1700);
}

// Update cart UI
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountSpan.innerText = totalItems;
  
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<li style="text-align:center; color:#6B6B8F;">Cart is empty</li>';
    offerDiscountMsg.style.display = "none";
    cartTotalPriceSpan.innerText = "₹0";
    return;
  }
  
  // Render cart items
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.displayName}">
      <div style="flex:1">
        <div class="cart-item-title">${item.displayName}</div>
        <div class="cart-item-size">Size: ${item.size}</div>
        <div>₹${item.price} x ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" data-size="${item.size}">
        <i class="fas fa-trash"></i>
      </button>
    `;
    cartItemsList.appendChild(li);
  });
  
  // Calculate and display total with offer
  const { total, discount, finalTotal, groups } = calculateTotalWithOffer();
  
  if (groups > 0) {
    offerDiscountMsg.style.display = "block";
    offerDiscountMsg.innerHTML = `🎉 Bundle Offer Applied! ${groups} x (3 A3 Posters for ₹99) — Saved ₹${discount}`;
  } else {
    offerDiscountMsg.style.display = "none";
  }
  
  cartTotalPriceSpan.innerHTML = discount > 0 
    ? `<span style="font-size:0.8rem;">Subtotal: ₹${total}</span><br>₹${finalTotal}` 
    : `₹${finalTotal}`;
  
  // Attach remove event listeners
  document.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const size = btn.dataset.size;
      removeFromCart(id, size);
    });
  });
}

// Render products grid
function renderProducts() {
  let filtered = currentFilter === "all" 
    ? products 
    : products.filter(p => p.category === currentFilter);
  
  productsGrid.innerHTML = "";
  
  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img class="product-img" src="${prod.img}" alt="${prod.displayName}" loading="lazy">
      <div class="product-info">
        <div class="product-category">${prod.category.toUpperCase()}</div>
        <div class="product-title">${prod.displayName}</div>
        <div class="price-section">
          <span class="current-price" id="price-${prod.id}">₹20</span>
          <span class="original-price">₹40</span>
        </div>
        <div class="size-selector" data-product-id="${prod.id}">
          <div class="size-option" data-size="A4">A4 (₹20)</div>
          <div class="size-option" data-size="A3">A3 (₹40)</div>
        </div>
        <button class="add-to-cart" data-id="${prod.id}">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    `;
    
    productsGrid.appendChild(card);
    
    // Size selector logic
    let currentSize = "A4";
    const priceSpan = document.getElementById(`price-${prod.id}`);
    const sizeOptions = card.querySelectorAll(".size-option");
    
    sizeOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        sizeOptions.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        currentSize = opt.dataset.size;
        priceSpan.innerText = currentSize === "A3" ? `₹${prod.priceA3}` : `₹${prod.priceA4}`;
      });
      if (opt.dataset.size === "A4") opt.classList.add("selected");
    });
    
    // Add to cart button
    const addBtn = card.querySelector(".add-to-cart");
    addBtn.addEventListener("click", () => {
      addToCart(prod, currentSize);
    });
  });
}

// Set active filter
function setActiveFilter(filter) {
  document.querySelectorAll(".cat-badge").forEach(b => {
    if (b.dataset.filter === filter) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
  
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.dataset.filter === filter) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}