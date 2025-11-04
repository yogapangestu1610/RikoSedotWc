const hamMenu = document.getElementById("ham-menu");
const navbar = document.getElementById("navbar-nav");
const NavLink = document.querySelectorAll(".nav-link");
const whatsappButton = document.getElementById("whatsappButton");
hamMenu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

for (let i = 0; i < NavLink.length; i++) {
  NavLink[i].addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}

whatsappButton.addEventListener("click", () => {
  const phoneNumber = whatsappButton.getAttribute("data-phone-number");
  const message = "Halo, saya tertarik dengan layanan Anda.";

  // Membuka popup pesan di WhatsApp
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  );
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
