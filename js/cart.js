// Inisialisasi keranjang
let cart = [];
const cartCount = document.getElementById("cart-count");

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productTitle, productPrice) {
  // Cek apakah produk sudah ada di keranjang
  const existingProduct = cart.find((item) => item.title === productTitle);
  if (existingProduct) {
    // Tambah jumlah produk
    existingProduct.quantity++;
  } else {
    // Tambah produk baru
    cart.push({ title: productTitle, price: productPrice, quantity: 1 });
  }

  updateCartCount();
  updateCartDisplay();
  alert(`${productTitle} berhasil ditambahkan ke keranjang!`);
}

// Fungsi untuk memperbarui jumlah item di keranjang
function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.innerText = totalItems;
}

// Fungsi untuk menampilkan isi keranjang (ketika ikon keranjang diklik)
function updateCartDisplay() {
  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-container");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Keranjang Anda kosong</p>";
  } else {
    cartContainer.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <h4>${item.title}</h4>
        <p>Harga: ${item.price}</p>
        <p>Jumlah: ${item.quantity}</p>
      </div>
    `
      )
      .join("");
  }

  document.body.appendChild(cartContainer);
}

// Event listener untuk ikon keranjang
document.getElementById("shopping-cart").addEventListener("click", function () {
  updateCartDisplay();
});

// Tambahkan event listener ke ikon "shopping-cart" di setiap produk
const cartIcons = document.querySelectorAll(".cart-icon");
cartIcons.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    const productTitle = e.target
      .closest(".menu-card")
      .getAttribute("data-title");
    const productPrice = e.target
      .closest(".menu-card")
      .getAttribute("data-price");
    addToCart(productTitle, productPrice);
  });
});
