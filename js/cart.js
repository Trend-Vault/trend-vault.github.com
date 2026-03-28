// Cart State
let cart = [];

// Load cart from localStorage
function loadCart() {
  const saved = localStorage.getItem("trendVaultFinalCart");
  if (saved) {
    cart = JSON.parse(saved);
  }
  updateCartUI();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("trendVaultFinalCart", JSON.stringify(cart));
  updateCartUI();
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
    groups
  };
}

// Add product to cart
function addToCart(product, selectedSize) {
  const price = selectedSize === "A3" ? product.priceA3 : product.priceA4;
  const existingIndex = cart.findIndex(item => item.id === product.id && item.size === selectedSize);
  
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      displayName: product.displayName,
      category: product.category,
      size: selectedSize,
      price: price,
      img: product.img,
      quantity: 1
    });
  }
  
  saveCart();
  showToast(`${product.displayName} (${selectedSize}) added`);
}

// Remove item from cart
function removeFromCart(id, size) {
  const index = cart.findIndex(item => item.id === id && item.size === size);
  
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    saveCart();
    showToast("Item updated");
  }
}

// Clear entire cart
function clearCart() {
  cart = [];
  saveCart();
  showToast("Cart cleared");
}