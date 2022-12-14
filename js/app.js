import data from '../data.json' assert { type: "json" };

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
// Hello world
particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 800,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#000000",
      "background_image": "./images/landing-page-bg.jpg",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

const modalOverlay = document.getElementById('modal-overlay');
const modalWrapper = document.getElementById('modal-wrapper');
const modalContent = document.getElementById('modal-content');


function renderContent(content) {
  return () => {
    modalOverlay.classList.add('show');
    modalWrapper.classList.add('show');

    // replace console.log with render content logic
    modalContent.innerHTML = content;
  }
}

function closeModal() {
  modalOverlay.classList.remove('show');
  modalWrapper.classList.remove('show');
}

// Main code
const readNewBtn = document.getElementById('readNew');
const aboutUsBtn = document.getElementById('aboutUs');

readNewBtn.addEventListener('click', renderContent('<div>read new</div>'));
aboutUsBtn.addEventListener('click', renderContent(renderMembers()));

const closeModalBtn = document.getElementById('close-modal');
closeModalBtn.addEventListener('click', closeModal);

// click outside modal => hide
window.onclick = function (event) {
  if (modalOverlay.classList.contains('show') && modalWrapper.classList.contains('show')) {
    if (event.target === modalOverlay) {
      closeModal();
    }
  }
}

function renderMembers() {
  let listMemberHTML = '';
  data.members.forEach(({ name, image }) => {
    listMemberHTML += `
      <div class="swiper-slide card">
      <div class="card-content">
        <div class="image">
          <img src="${image}" alt="">
        </div>
        <div class="media-icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
        </div>
        <div class="name-profession">
          <span class="name">${name}</span>
          <span class="profession">Web developer</span>
        </div>
        <div class="rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="button">
          <button class="aboutMe">About Me</button>
          <button class="hireMe">Hire Me</button>
        </div>
      </div>
    </div>
    `
  });
  let finalHTML = `
    <h1 class="heading"><span>meet </span>OUR TEAM</h1>
    
    <div class="about-list">
      <div class="list">
        <div class="swiper mySwiper container">
          <div class="swiper-wrapper content">
            ${listMemberHTML}
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    
  `

  return finalHTML;
}