// Cart State
let cart = [];

// Load cart from localStorage
function loadCart() {
  const saved = localStorage.getItem("trendVaultFinalCart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
      // Validate cart data integrity
      if (!Array.isArray(cart)) cart = [];
    } catch (e) {
      console.error("Error loading cart:", e);
      cart = [];
    }
  }
  updateCartUI();
  updateCartCount(); // Add this if you have cart count display
}

// Save cart to localStorage
function saveCart() {
  try {
    localStorage.setItem("trendVaultFinalCart", JSON.stringify(cart));
    updateCartUI();
    updateCartCount(); // Add this if you have cart count display
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
  const discount = groups * ((40 * 3) - 99); // ₹40 each × 3 = ₹120, offer ₹99 = ₹21 discount per group
  
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
  // Validate product data
  if (!product || !selectedSize) {
    console.error("Invalid product or size");
    showToast("Error adding to cart");
    return;
  }
  
  const price = selectedSize === "A3" ? product.priceA3 : product.priceA4;
  
  // Validate price
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
      addedAt: new Date().toISOString() // Track when added
    });
    showToast(`${product.displayName} (${selectedSize}) added to cart`);
  }
  
  saveCart();
  
  // Optional: Animate cart icon
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

// Remove item completely (new function)
function removeItemCompletely(id, size) {
  const index = cart.findIndex(item => item.id === id && item.size === size);
  if (index !== -1) {
    const itemName = cart[index].displayName;
    cart.splice(index, 1);
    saveCart();
    showToast(`${itemName} removed from cart`);
  }
}

// Clear entire cart with confirmation
function clearCart() {
  if (cart.length === 0) {
    showToast("Cart is already empty");
    return;
  }
  
  // Optional: Add confirmation dialog
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

// Address Form Modal
function showAddressForm() {
  // Remove any existing address modal
  const existingModal = document.querySelector('.address-modal');
  if (existingModal) existingModal.remove();
  
  const modal = document.createElement('div');
  modal.className = 'address-modal';
  modal.innerHTML = `
    <div class="address-content">
      <h3>📋 Delivery Details</h3>
      <form id="addressForm">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" id="fullName" required placeholder="Enter your full name" autocomplete="name">
        </div>
        
        <div class="form-group">
          <label>Phone Number *</label>
          <input type="tel" id="phone" required placeholder="10-digit mobile number" pattern="[0-9]{10}" autocomplete="tel">
        </div>
        
        <div class="form-group">
          <label>Email (Optional)</label>
          <input type="email" id="email" placeholder="your@email.com" autocomplete="email">
        </div>
        
        <div class="form-group">
          <label>Address *</label>
          <textarea id="address" required rows="3" placeholder="Street address, apartment, etc." autocomplete="street-address"></textarea>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>City *</label>
            <input type="text" id="city" required placeholder="City" autocomplete="address-level2">
          </div>
          
          <div class="form-group">
            <label>State *</label>
            <input type="text" id="state" required placeholder="State" autocomplete="address-level1">
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>Pincode *</label>
            <input type="text" id="pincode" required placeholder="PIN code" pattern="[0-9]{6}" autocomplete="postal-code">
          </div>
          
          <div class="form-group">
            <label>Landmark (Optional)</label>
            <input type="text" id="landmark" placeholder="Nearby landmark">
          </div>
        </div>
        
        <div class="form-actions">
          <button type="button" class="cancel-btn">Cancel</button>
          <button type="submit" class="submit-order-btn">Place Order</button>
        </div>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  // Handle cancel button
  modal.querySelector('.cancel-btn').addEventListener('click', () => {
    modal.remove();
  });
  
  // Handle form submission
  document.getElementById('addressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    submitOrderWithAddress();
  });
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
  
  const { total, discount, finalTotal, groups, remainingForNextOffer } = calculateTotalWithOffer();
  
  message += "─".repeat(30) + "\n";
  message += `*Subtotal:* ₹${total}\n`;
  if (groups > 0) {
    message += `*Bundle Offer:* ${groups} × (3 A3 for ₹99) = -₹${discount}\n`;
    if (remainingForNextOffer > 0 && remainingForNextOffer < 3) {
      message += `*Info:* Add ${remainingForNextOffer} more A3 to get another bundle offer!\n`;
    }
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

// Submit order with address details
async function submitOrderWithAddress() {
  // Get address details
  const fullName = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();
  const pincode = document.getElementById('pincode').value.trim();
  const landmark = document.getElementById('landmark').value.trim();
  
  // Validate all fields
  if (!validateAddress(fullName, phone, address, city, state, pincode)) {
    return;
  }
  
  // Show loading state
  const submitBtn = document.querySelector('.submit-order-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Processing...';
  submitBtn.disabled = true;
  
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
  
  // WhatsApp number (replace with your actual number)
  const whatsappNumber = "919876543210"; // Format: country code + number without '+'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
  
  // Close modal after short delay
  setTimeout(() => {
    const modal = document.querySelector('.address-modal');
    if (modal) modal.remove();
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after successful order placement
    setTimeout(() => {
      clearCart();
      showToast("Order placed successfully! Thank you for shopping with Trend Vault!");
      
      // Optional: Close cart sidebar if open
      const cartSidebar = document.querySelector('.cart-sidebar');
      if (cartSidebar && cartSidebar.classList.contains('open')) {
        cartSidebar.classList.remove('open');
        const overlay = document.querySelector('.overlay');
        if (overlay) overlay.classList.remove('active');
      }
    }, 500);
  }, 1000);
}

// Enhanced checkout function with minimum order check
function checkout() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add some items first.");
    return;
  }
  
  const { finalTotal } = calculateTotalWithOffer();
  
  // Check minimum order amount
  if (finalTotal < 100) {
    const remaining = getRemainingAmount();
    showMinimumOrderDialog(remaining);
    return;
  }
  
  // Show address form
  showAddressForm();
}

// Update cart UI
function updateCartUI() {
  const { finalTotal, total, discount, groups, remainingForNextOffer } = calculateTotalWithOffer();
  
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
  
  // Update checkout button state
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    if (finalTotal < 100) {
      checkoutBtn.classList.add('disabled');
      checkoutBtn.title = `Add ₹${getRemainingAmount()} more to place order`;
    } else {
      checkoutBtn.classList.remove('disabled');
      checkoutBtn.title = 'Proceed to checkout';
    }
  }
  
  // Optional: Show bundle progress
  if (remainingForNextOffer > 0 && remainingForNextOffer < 3) {
    const bundleProgress = document.querySelector('.bundle-progress');
    if (bundleProgress) {
      bundleProgress.innerHTML = `Add ${remainingForNextOffer} more A3 prints to get another bundle offer!`;
      bundleProgress.style.display = 'block';
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

// Add CSS styles dynamically (if not already in your CSS file)
function addCartStyles() {
  // Check if styles already added
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
    
    .bundle-progress {
      background: rgba(0, 212, 255, 0.12);
      border-radius: 8px;
      padding: 8px;
      text-align: center;
      font-size: 0.8rem;
      margin: 10px 0;
      color: #00D4FF;
      display: none;
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
  `;
  document.head.appendChild(style);
}

// Export functions for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cart,
    loadCart,
    saveCart,
    addToCart,
    removeFromCart,
    clearCart,
    checkout,
    calculateTotalWithOffer
  };
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  addCartStyles();
  loadCart();
  
  // Attach functions to global scope
  window.checkout = checkout;
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.clearCart = clearCart;
  window.removeItemCompletely = removeItemCompletely;
  window.showAddressForm = showAddressForm;
  window.submitOrderWithAddress = submitOrderWithAddress;
  window.showMinimumOrderDialog = showMinimumOrderDialog;
  
  // Optional: Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('.min-order-modal, .address-modal');
      modals.forEach(modal => modal.remove());
    }
  });
});