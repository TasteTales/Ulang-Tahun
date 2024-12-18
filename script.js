// Fungsi untuk menampilkan gambar di bagian about
const aboutImages = document.querySelectorAll('.about-image img');
let currentAboutImage = 0;

function showAboutImage(index) {
  aboutImages.forEach(img => img.style.opacity = 0);
  aboutImages[index].style.opacity = 1;
}

function nextAboutImage() {
  showAboutImage(currentAboutImage);
  currentAboutImage = (currentAboutImage + 1) % aboutImages.length;
}

showAboutImage(currentAboutImage);
setInterval(nextAboutImage, 4500);

// Fungsi untuk menampilkan kejutan
function showSurprise() {
  document.getElementById('surprise-content').style.display = 'block';
}