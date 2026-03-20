// CAROUSEL
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
}, 3000);

// MOBILE MENU
function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

// ✅ FIXED SHOP NOW BUTTON
document.getElementById("shopBtn").addEventListener("click", function(){
document.getElementById("products").scrollIntoView({
behavior: "smooth"
});
});









function filterProducts(category){
let products = document.querySelectorAll(".product");

products.forEach(product => {
if(category === "all"){
product.style.display = "block";
}
else{
if(product.classList.contains(category)){
product.style.display = "block";
}else{
product.style.display = "none";
}
}
});
}










  // Nav toggle (mobile hamburger)
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Character counter for message textarea
  const msgEl = document.getElementById('message');
  const countEl = document.getElementById('charCount');
  msgEl.addEventListener('input', () => {
    const len = msgEl.value.length;
    countEl.textContent = len + ' / 500';
    countEl.classList.toggle('warn', len > 400);
  });

  // Toast notification
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  // Form validation
  function validate() {
    const fname   = document.getElementById('fname').value.trim();
    const lname   = document.getElementById('lname').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fname)                        { showToast('Please enter your first name.');         return false; }
    if (!lname)                        { showToast('Please enter your last name.');          return false; }
    if (!email || !emailRe.test(email)){ showToast('Please enter a valid email address.');   return false; }
    if (!subject)                      { showToast('Please select a subject.');              return false; }
    if (!message)                      { showToast('Please enter a message.');               return false; }
    return true;
  }

  // Form submit handler
  function handleSubmit() {
    if (!validate()) return;
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    setTimeout(() => {
      document.getElementById('formWrapper').style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
    }, 1200);
  }

  // Reset form
  function resetForm() {
    ['fname','lname','email','phone','message'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('subject').value = '';
    countEl.textContent = '0 / 500';
    const btn = document.getElementById('submitBtn');
    btn.disabled = false;
    btn.textContent = 'Send Message →';
    document.getElementById('formWrapper').style.display = 'block';
    document.getElementById('successMsg').style.display = 'none';
  }















  // ── PRODUCT DATA ──
const products = [
  { id: 1,  name: 'Rose Glow Serum',           cat: 'skincare',     desc: 'Brightening vitamin C complex with rose extract',       price: 12500, orig: null,  rating: 4.9, reviews: 128, emoji: '🌹', bg: '#FBEAF0', badge: 'new'  },
  { id: 2,  name: 'Blue Iris Perfume',          cat: 'fragrance',    desc: 'Elegant floral musk with iris & sandalwood base',       price: 28000, orig: 35000, rating: 4.8, reviews: 94,  emoji: '💐', bg: '#E6F1FB', badge: 'sale' },
  { id: 3,  name: 'Pearl Drop Earrings',        cat: 'accessories',  desc: 'Freshwater pearl on 18k gold-plated stud',              price: 8500,  orig: null,  rating: 5.0, reviews: 67,  emoji: '💎', bg: '#F0F4FF', badge: 'hot'  },
  { id: 4,  name: 'Lavender Body Butter',       cat: 'wellness',     desc: 'Rich whipped shea with calming lavender & aloe',        price: 6500,  orig: null,  rating: 4.7, reviews: 212, emoji: '💜', bg: '#F5EEFF', badge: null   },
  { id: 5,  name: 'Silk Scrunchie Set',         cat: 'accessories',  desc: 'Set of 5 mulberry silk hair ties, various shades',      price: 4200,  orig: 5500,  rating: 4.8, reviews: 180, emoji: '🎀', bg: '#FBEAF0', badge: 'sale' },
  { id: 6,  name: 'Vitamin C Brightening Toner',cat: 'skincare',     desc: 'AHA-infused daily toner for radiant skin',              price: 9800,  orig: null,  rating: 4.6, reviews: 99,  emoji: '✨', bg: '#FFFBE6', badge: 'new'  },
  { id: 7,  name: 'Linen Room Spray',           cat: 'homecare',     desc: 'Fresh linen & white tea aromatherapy mist',             price: 5500,  orig: null,  rating: 4.9, reviews: 54,  emoji: '🏡', bg: '#E6F1FB', badge: null   },
  { id: 8,  name: 'Gold Hoop Set',              cat: 'accessories',  desc: 'Lightweight 14k gold-fill hoops in 3 sizes',            price: 11500, orig: 14000, rating: 4.7, reviews: 145, emoji: '💛', bg: '#FFFBE6', badge: 'sale' },
  { id: 9,  name: 'Collagen Night Cream',       cat: 'skincare',     desc: 'Peptide-rich overnight repair for firmness',            price: 16500, orig: null,  rating: 4.8, reviews: 76,  emoji: '🌙', bg: '#F0E6FB', badge: null   },
  { id: 10, name: 'Cedar & Amber Candle',       cat: 'homecare',     desc: 'Hand-poured soy wax, 50-hour burn time',                price: 7800,  orig: null,  rating: 5.0, reviews: 38,  emoji: '🕯️', bg: '#FFF0E6', badge: 'hot'  },
  { id: 11, name: 'Hydra-Boost Eye Gel',        cat: 'skincare',     desc: 'Cooling under-eye gel with caffeine & hyaluronic',      price: 8200,  orig: 10000, rating: 4.5, reviews: 162, emoji: '👁️', bg: '#E6F1FB', badge: 'sale' },
  { id: 12, name: 'Aura Roll-On Perfume',       cat: 'fragrance',    desc: 'Pocket-sized floral blend, long-lasting formula',       price: 4500,  orig: null,  rating: 4.6, reviews: 87,  emoji: '🌸', bg: '#FBEAF0', badge: 'new'  },
];

// ── STATE ──
let cart = [];
let currentFilter = 'all';

// ── RENDER STAR RATING ──
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(rating) ? '#F4A015' : '#E0D8E0';
    stars += `<svg width="12" height="12" viewBox="0 0 24 24" fill="${filled}" style="display:inline-block">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`;
  }
  return stars;
}

// ── RENDER PRODUCT GRID ──
function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  document.getElementById('productCount').textContent = list.length;

  if (!list.length) {
    grid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:3rem">No products found.</p>';
    return;
  }

  grid.innerHTML = list.map(p => {
    const inCart = cart.find(c => c.id === p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-img">
          <div class="card-img-bg" style="background:${p.bg}">${p.emoji}</div>
          ${p.badge ? `<span class="badge badge-${p.badge}">${p.badge}</span>` : ''}
          <button class="wishlist-btn" onclick="toggleWish(event, this)">🤍</button>
        </div>
        <div class="card-body">
          <div class="card-cat">${p.cat}</div>
          <div class="card-name">${p.name}</div>
          <div class="card-desc">${p.desc}</div>
          <div class="stars">${renderStars(p.rating)}<span>${p.rating} (${p.reviews})</span></div>
          <div class="card-footer">
            <div class="price-block">
              ${p.orig ? `<span class="price-orig">₦${p.orig.toLocaleString()}</span>` : ''}
              <span class="price-main${p.orig ? ' sale' : ''}">₦${p.price.toLocaleString()}</span>
            </div>
            <button class="add-btn${inCart ? ' added' : ''}" onclick="addToCart(event, ${p.id})" title="Add to bag">
              ${inCart ? '✓' : '+'}
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── FILTER PRODUCTS ──
function filterProducts(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const list = cat === 'all' ? products : products.filter(p => p.cat === cat);
  renderProducts(list);
}

// ── SORT PRODUCTS ──
function sortProducts(val) {
  let list = currentFilter === 'all'
    ? [...products]
    : products.filter(p => p.cat === currentFilter);

  if (val === 'price-low')  list.sort((a, b) => a.price - b.price);
  else if (val === 'price-high') list.sort((a, b) => b.price - a.price);
  else if (val === 'rating')     list.sort((a, b) => b.rating - a.rating);

  renderProducts(list);
}

// ── ADD TO CART ──
function addToCart(e, id) {
  e.stopPropagation();
  const product = products.find(x => x.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartBadge();
  const currentList = currentFilter === 'all'
    ? products
    : products.filter(p => p.cat === currentFilter);
  renderProducts(currentList);
  showToast(`${product.name} added to bag 🛍️`);
}

// ── UPDATE CART BADGE ──
function updateCartBadge() {
  const total = cart.reduce((sum, c) => sum + c.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

// ── OPEN / CLOSE CART ──
function openCart() {
  renderCart();
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

// ── RENDER CART CONTENTS ──
function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty"><div class="empty-icon">🛍️</div>Your bag is empty</div>';
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  el.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${c.bg}">${c.emoji}</div>
      <div class="cart-item-info">
        <strong>${c.name}</strong>
        <span>₦${c.price.toLocaleString()}</span>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="changeQty(${c.id}, -1)">−</button>
        <span class="qty-num">${c.qty}</span>
        <button class="qty-btn" onclick="changeQty(${c.id}, 1)">+</button>
      </div>
    </div>`).join('');

  const total = cart.reduce((sum, c) => sum + (c.price * c.qty), 0);
  document.getElementById('cartTotal').textContent = '₦' + total.toLocaleString();
}

// ── CHANGE ITEM QUANTITY ──
function changeQty(id, delta) {
  const index = cart.findIndex(c => c.id === id);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCartBadge();
  renderCart();
}

// ── TOGGLE WISHLIST ──
function toggleWish(e, btn) {
  e.stopPropagation();
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '❤️' : '🤍';
}

// ── TOAST NOTIFICATION ──
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── HAMBURGER MENU ──
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

// ── INIT ──
renderProducts(products);