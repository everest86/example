const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');

// Cart
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});