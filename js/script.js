function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// PORTFOLIO FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {

btn.addEventListener("click", () => {

document.querySelector(".active").classList.remove("active");
btn.classList.add("active");

const filter = btn.getAttribute("data-filter");

galleryItems.forEach(item => {

if(filter === "all" || item.classList.contains(filter)){
item.style.display = "block";
}else{
item.style.display = "none";
}

});

});

});


// LIGHTBOX

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

closeBtn.addEventListener("click", () => {

lightbox.style.display = "none";

});
