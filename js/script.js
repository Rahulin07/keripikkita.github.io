// Toggle navbar untuk tampilan mobile
const menuToggle = document.getElementById("hamburger-menu");
const nav = document.querySelector(".navbar-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Fungsi untuk pencarian produk
const searchIcon = document.getElementById("search");
searchIcon.addEventListener("click", () => {
  const query = prompt("Masukkan kata kunci pencarian:");
  if (query) {
    alert(`Hasil pencarian untuk: ${query}`);
    // Implementasikan logika pencarian produk sesuai kebutuhan
  }
});

// Mengaktifkan Feather Icons
feather.replace();
