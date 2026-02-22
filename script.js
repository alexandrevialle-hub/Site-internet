// Audio player
const audio = document.getElementById("audio");
const speaker = document.getElementById("speaker");

if (audio && speaker) {
    speaker.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(err => console.log("Lecture auto bloquée:", err));
            speaker.querySelector("i").classList.remove("fa-volume-mute");
            speaker.querySelector("i").classList.add("fa-volume-up");
        } else {
            audio.pause();
            speaker.querySelector("i").classList.remove("fa-volume-up");
            speaker.querySelector("i").classList.add("fa-volume-mute");
        }
    });

    // Rejouer en boucle quand terminé
    audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        audio.play();
    });
}



$(document).ready(function() {
  // Ajouter un écouteur d'événement au clic sur le bouton
  $('#flèche').click(function() {
    // Afficher ou masquer le header selon son état actuel
    if ($('header').is(':visible')) {
      $('header').slideUp();
      $('#flèche i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
      $('header').slideDown();
      $('#flèche i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
  });
});



// Ajouter un effet de zoom sur les images au survol
$(document).ready(function(){
  $('.plat img').on('mouseenter', function() {
    $(this).animate({ width: "+=5%", height: "+=12%" }, 500);
  });
  $('.plat img').on('mouseleave', function() {
    $(this).animate({ width: "-=5%", height: "-=12%" }, 500);
  });
});



// Diaporama
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dotsContainer = document.getElementById("dot-container");
    var dots = dotsContainer ? dotsContainer.getElementsByTagName("span") : [];

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);  // change d'image toutes les 3s
}



// Afficher le bouton "Haut de page" lorsque l'utilisateur fait défiler la page de 20 pixels
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById("bouton-haut").style.display = "block";
  } else {
    document.getElementById("bouton-haut").style.display = "none";
  }
}

// Faire défiler la page en haut lorsqu'on clique sur le bouton "Haut de page"
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("bouton-haut").addEventListener("click", topFunction);
