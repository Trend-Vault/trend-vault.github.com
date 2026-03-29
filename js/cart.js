// Cart State
let cart = [];

// Load cart from localStorage
function loadCart() {
  const saved = localStorage.getItem("trendVaultFinalCart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
      if (!Array.isArray(cart)) cart = [];
    } catch (e) {
      console.error("Error loading cart:", e);
      cart = [];
    }
  }
  updateCartUI();
  updateCartCount();
}

// Save cart to localStorage
function saveCart() {
  try {
    localStorage.setItem("trendVaultFinalCart", JSON.stringify(cart));
    updateCartUI();
    updateCartCount();
  } catch (e) {
    console.error("Error saving cart:", e);
    showToast("Error saving cart");
  }
}

// Update cart count in navbar
function updateCartCount() {
  const cartCountElements = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCountElements.forEach(element => {
    element.textContent = totalItems;
    if (totalItems === 0) {
      element.style.display = 'none';
    } else {
      element.style.display = 'inline-block';
    }
  });
}

// Calculate total with bundle offer (3 A3 for ₹99)
function calculateTotalWithOffer() {
  let total = 0;
  let a3Count = 0;
  
  cart.forEach(item => {
    if (item.size === "A3") {
      a3Count += item.quantity;
    }
    total += item.price * item.quantity;
  });
  
  const groups = Math.floor(a3Count / 3);
  const discount = groups * ((40 * 3) - 99);
  
  return {
    total,
    discount,
    finalTotal: total - discount,
    groups,
    a3Count,
    remainingForNextOffer: 3 - (a3Count % 3)
  };
}

// Add product to cart
function addToCart(product, selectedSize) {
  if (!product || !selectedSize) {
    console.error("Invalid product or size");
    showToast("Error adding to cart");
    return;
  }
  
  const price = selectedSize === "A3" ? product.priceA3 : product.priceA4;
  
  if (!price || price <= 0) {
    console.error("Invalid price");
    showToast("Price error");
    return;
  }
  
  const existingIndex = cart.findIndex(item => item.id === product.id && item.size === selectedSize);
  
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
    showToast(`${product.displayName} (${selectedSize}) quantity updated`);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      displayName: product.displayName,
      category: product.category,
      size: selectedSize,
      price: price,
      img: product.img,
      quantity: 1,
      addedAt: new Date().toISOString()
    });
    showToast(`${product.displayName} (${selectedSize}) added to cart`);
  }
  
  saveCart();
  animateCartIcon();
}

// Animate cart icon on add
function animateCartIcon() {
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) {
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
      cartIcon.style.transform = 'scale(1)';
    }, 200);
  }
}

// Remove item from cart
function removeFromCart(id, size) {
  const index = cart.findIndex(item => item.id === id && item.size === size);
  
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      showToast(`${cart[index].displayName} quantity decreased`);
    } else {
      const itemName = cart[index].displayName;
      cart.splice(index, 1);
      showToast(`${itemName} removed from cart`);
    }
    saveCart();
  } else {
    showToast("Item not found in cart");
  }
}

// Clear entire cart with confirmation
function clearCart() {
  if (cart.length === 0) {
    showToast("Cart is already empty");
    return;
  }
  
  if (confirm("Are you sure you want to clear your entire cart?")) {
    cart = [];
    saveCart();
    showToast("Cart cleared");
  }
}

// Check if cart meets minimum order requirement
function checkMinimumOrder() {
  const { finalTotal } = calculateTotalWithOffer();
  return finalTotal >= 100;
}

// Get remaining amount needed
function getRemainingAmount() {
  const { finalTotal } = calculateTotalWithOffer();
  return Math.max(0, 100 - finalTotal);
}

// Show minimum order dialog
function showMinimumOrderDialog(remainingAmount) {
  // Remove any existing modals first
  const existingModal = document.querySelector('.min-order-modal');
  if (existingModal) existingModal.remove();
  
  const modal = document.createElement('div');
  modal.className = 'min-order-modal';
  modal.innerHTML = `
    <div class="min-order-content">
      <h3>⚠️ Minimum Order Required</h3>
      <p>Your order total is less than ₹100.</p>
      <p>Please add <strong>₹${remainingAmount}</strong> more to place your order.</p>
      <div class="min-order-actions">
        <button class="continue-shopping-btn">Continue Shopping</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close modal when clicking outside or on button
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('continue-shopping-btn')) {
      modal.remove();
    }
  });
}

// Show address form in sidebar
function showAddressForm() {
  console.log("Showing address form in sidebar"); // Debug log
  
  const cartView = document.getElementById('cartView');
  const addressView = document.getElementById('addressView');
  const cartTitle = document.getElementById('cartTitle');
  
  // Switch views
  if (cartView) cartView.style.display = 'none';
  if (addressView) addressView.style.display = 'block';
  if (cartTitle) cartTitle.textContent = 'Delivery Details';
  
  // Set up back button
  const backBtn = document.getElementById('backToCartBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (cartView) cartView.style.display = 'flex';
      if (addressView) addressView.style.display = 'none';
      if (cartTitle) cartTitle.textContent = 'Your Cart';
    });
  }
  
  // Set up cancel button
  const cancelBtn = document.getElementById('sidebarCancelBtn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      if (cartView) cartView.style.display = 'flex';
      if (addressView) addressView.style.display = 'none';
      if (cartTitle) cartTitle.textContent = 'Your Cart';
    });
  }
  
  // Set up form submission
  const form = document.getElementById('addressFormSidebar');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      submitOrderWithAddressFromSidebar();
    };
  }
}

// Submit order from sidebar form
function submitOrderWithAddressFromSidebar() {
  console.log("Submitting order from sidebar"); // Debug log
  
  // Get address details from sidebar form
  const fullName = document.getElementById('sidebarFullName').value.trim();
  const phone = document.getElementById('sidebarPhone').value.trim();
  const email = document.getElementById('sidebarEmail').value.trim();
  const address = document.getElementById('sidebarAddress').value.trim();
  const city = document.getElementById('sidebarCity').value.trim();
  const state = document.getElementById('sidebarState').value.trim();
  const pincode = document.getElementById('sidebarPincode').value.trim();
  const landmark = document.getElementById('sidebarLandmark').value.trim();
  
  // Validate all fields
  if (!validateAddress(fullName, phone, address, city, state, pincode)) {
    return;
  }
  
  // Show loading state
  const submitBtn = document.getElementById('sidebarSubmitBtn');
  if (submitBtn) {
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
  }
  
  // Build complete order message
  let orderMessage = formatCartItemsForWhatsApp();
  
  orderMessage += "*DELIVERY ADDRESS:*\n";
  orderMessage += "─".repeat(30) + "\n";
  orderMessage += `*Name:* ${fullName}\n`;
  orderMessage += `*Phone:* ${phone}\n`;
  if (email) orderMessage += `*Email:* ${email}\n`;
  orderMessage += `*Address:* ${address}\n`;
  if (landmark) orderMessage += `*Landmark:* ${landmark}\n`;
  orderMessage += `*City:* ${city}\n`;
  orderMessage += `*State:* ${state}\n`;
  orderMessage += `*Pincode:* ${pincode}\n\n`;
  
  orderMessage += "*📅 Order Date:* " + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + "\n";
  orderMessage += "*✅ Please confirm this order*";
  
  // WhatsApp number (with country code)
  const whatsappNumber = "917607345514";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
  
  console.log("Opening WhatsApp with number:", whatsappNumber); // Debug log
  
  // Open WhatsApp immediately
  window.open(whatsappUrl, '_blank');
  
  // Clear cart and show confirmation
  clearCart();
  showToast("Order placed successfully! Thank you for shopping with Trend Vault!");
  
  // Close cart sidebar
  const cartSidebar = document.querySelector('.cart-sidebar');
  if (cartSidebar && cartSidebar.classList.contains('open')) {
    cartSidebar.classList.remove('open');
    const overlay = document.querySelector('.overlay');
    if (overlay) overlay.classList.remove('active');
  }
  
  // Reset form
  document.getElementById('addressFormSidebar').reset();
}

// Format cart items for WhatsApp message
function formatCartItemsForWhatsApp() {
  let message = "🛍️ *NEW ORDER - TREND VAULT* 🛍️\n\n";
  message += "*ORDER DETAILS:*\n";
  message += "─".repeat(30) + "\n";
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.displayName}\n`;
    message += `   Size: ${item.size} | Qty: ${item.quantity}\n`;
    message += `   Price: ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}\n\n`;
  });
  
  const { total, discount, finalTotal, groups } = calculateTotalWithOffer();
  
  message += "─".repeat(30) + "\n";
  message += `*Subtotal:* ₹${total}\n`;
  if (groups > 0) {
    message += `*Bundle Offer:* ${groups} × (3 A3 for ₹99) = -₹${discount}\n`;
  }
  message += `*Total Amount:* ₹${finalTotal}\n\n`;
  
  return message;
}

// Validate address fields
function validateAddress(fullName, phone, address, city, state, pincode) {
  if (!fullName || fullName.trim().length < 2) {
    showToast("Please enter a valid full name (minimum 2 characters)");
    return false;
  }
  
  if (!phone || !/^\d{10}$/.test(phone)) {
    showToast("Please enter a valid 10-digit phone number!");
    return false;
  }
  
  if (!address || address.trim().length < 5) {
    showToast("Please enter a complete address (minimum 5 characters)");
    return false;
  }
  
  if (!city || city.trim().length < 2) {
    showToast("Please enter a valid city name");
    return false;
  }
  
  if (!state || state.trim().length < 2) {
    showToast("Please enter a valid state name");
    return false;
  }
  
  if (!pincode || !/^\d{6}$/.test(pincode)) {
    showToast("Please enter a valid 6-digit pincode!");
    return false;
  }
  
  return true;
}


// Enhanced checkout function with minimum order check
function checkout() {
  console.log("Checkout called", cart); // Debug log
  
  if (cart.length === 0) {
    showToast("Your cart is empty! Add some items first.");
    return;
  }
  
  const { finalTotal } = calculateTotalWithOffer();
  console.log("Cart total:", finalTotal); // Debug log
  
  // Check minimum order amount
  if (finalTotal < 100) {
    const remaining = getRemainingAmount();
    console.log("Minimum order not met, remaining:", remaining); // Debug log
    showMinimumOrderDialog(remaining);
    return;
  }
  
  // Show address form
  console.log("Showing address form"); // Debug log
  showAddressForm();
}

// Update cart UI
function updateCartUI() {
  const { finalTotal, total, discount, groups } = calculateTotalWithOffer();
  
  // Update cart items display
  const cartItemsContainer = document.querySelector('.cart-items');
  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <li class="cart-item" data-id="${item.id}" data-size="${item.size}">
          <img src="${item.img}" alt="${item.displayName}" class="cart-item-img">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.displayName}</div>
            <div class="cart-item-size">Size: ${item.size}</div>
            <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}', '${item.size}')">
            <i class="fas fa-trash"></i>
          </button>
        </li>
      `).join('');
    }
  }
  
  // Update offer discount display
  const offerDiscountElement = document.querySelector('.offer-discount');
  if (offerDiscountElement) {
    if (groups > 0) {
      offerDiscountElement.innerHTML = `🎉 Bundle Offer Applied! ${groups} × (3 A3 for ₹99) saved ₹${discount}`;
      offerDiscountElement.style.display = 'block';
    } else {
      offerDiscountElement.style.display = 'none';
    }
  }
  
  // Update total display
  const cartTotalElement = document.querySelector('.cart-total');
  if (cartTotalElement) {
    cartTotalElement.innerHTML = `Total: ₹${finalTotal}`;
  }
  
  // Update checkout button - IMPORTANT: Re-attach event listener
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    // Remove existing event listeners to avoid duplicates
    const newCheckoutBtn = checkoutBtn.cloneNode(true);
    checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);
    
    // Add fresh event listener
    newCheckoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Checkout button clicked");
      checkout();
    });
    
    // Update button state
    if (finalTotal < 100) {
      newCheckoutBtn.classList.add('disabled');
      newCheckoutBtn.title = `Add ₹${getRemainingAmount()} more to place order`;
    } else {
      newCheckoutBtn.classList.remove('disabled');
      newCheckoutBtn.title = 'Proceed to checkout';
    }
  }
}

// Show toast notification
function showToast(message, duration = 3000) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, duration);
}

// Add CSS styles dynamically
function addCartStyles() {
  if (document.querySelector('#cart-dynamic-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'cart-dynamic-styles';
  style.textContent = `
    .empty-cart {
      text-align: center;
      padding: 40px;
      color: #A0A0C0;
    }
    
    .cart-item-details {
      flex: 1;
    }
    
    .cart-item-remove {
      background: none;
      border: none;
      color: #FF66CC;
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.2s;
    }
    
    .cart-item-remove:hover {
      transform: scale(1.1);
    }
    
    #cartView {
      flex: 1;
      overflow-y: auto;
      padding-bottom: 10px;
    }
    
    #addressView {
      padding: 15px;
      overflow-y: auto;
      flex: 1;
    }
    
    #addressView input,
    #addressView textarea {
      font-family: inherit;
    }
    
    #backToCartBtn {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 15px;
      transition: color 0.2s;
    }
    
    #backToCartBtn:hover {
      color: #FF66CC;
    }
  `;
  document.head.appendChild(style);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, initializing cart"); // Debug log
  
  addCartStyles();
  loadCart();
  
  // Attach functions to global scope
  window.checkout = checkout;
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.clearCart = clearCart;
  window.showAddressForm = showAddressForm;
  window.submitOrderWithAddressFromSidebar = submitOrderWithAddressFromSidebar;
  window.showMinimumOrderDialog = showMinimumOrderDialog;
  
  // Also attach to any existing checkout buttons
  const checkoutBtns = document.querySelectorAll('.checkout-btn');
  checkoutBtns.forEach(btn => {
    btn.removeEventListener('click', checkout);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Checkout button clicked from direct binding");
      checkout();
    });
  });
  
  // Close minimum order modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const minOrderModal = document.querySelector('.min-order-modal');
      if (minOrderModal) minOrderModal.remove();
      
      // Also close address form view by going back to cart
      const cartView = document.getElementById('cartView');
      const addressView = document.getElementById('addressView');
      const cartTitle = document.getElementById('cartTitle');
      if (addressView && addressView.style.display !== 'none') {
        if (cartView) cartView.style.display = 'flex';
        if (addressView) addressView.style.display = 'none';
        if (cartTitle) cartTitle.textContent = 'Your Cart';
      }
    }
  });
});