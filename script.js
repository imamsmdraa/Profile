// Aktifkan animasi infinity scroll saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.container-scroll');
    container.classList.add('scroll-animation');
});



document.addEventListener("contextmenu", function (event) {
  alert("Lu mau nge inspekk? wkwkwk");
  event.preventDefault();
});


const carousel = document.querySelector(".carousel");

 function pauseCarousel() {
   carousel.style.animationPlayState = "paused";
 }

 function resumeCarousel() {
   carousel.style.animationPlayState = "running";
 }

 // Tambahkan event listener untuk setiap item di carousel
 const items = document.querySelectorAll(".item");
 items.forEach((item) => {
   item.addEventListener("mouseenter", pauseCarousel);
   item.addEventListener("mouseleave", resumeCarousel);
 });


// ================================= //
// ================================= //

document.addEventListener("DOMContentLoaded", function () {
  const texts = ["PORTFOLIO.", "IMAGINATION.", "TYPOGRAPHY."];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  const span = document.querySelector(".typing-animation span");
  const innerSpan = span.querySelector("span");

  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    span.textContent = letter;

    if (letter === currentText) {
      innerSpan.style.opacity = "1";
    } else {
      innerSpan.style.opacity = "0";
    }

    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 350); // Delay between transitions in milliseconds
  }

  type(); // Start typing animation
});

 

// WEBSITE PROJECT START


		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const myproject= document.getElementById('myproject');

		signUpButton.addEventListener('click', () => {
			myproject.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			myproject.classList.remove("right-panel-active");
		}); 
