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
const modalAbout = document.getElementById('modal-about');
const modalContent = document.getElementById('modal-content-about');


function renderContent(content) {
  return () => {
    modalOverlay.classList.add('show');
    modalWrapper.classList.add('show');

    // replace console.log with render content logic
    console.log(content);
  }
}
function renderAbout(content) {
  return () => {
    modalOverlay.classList.add('show');
    modalAbout.classList.add('show');

    // replace console.log with render content logic
    console.log(content);
  }
}
function closeAbout() {
  modalOverlay.classList.remove('show');
  modalAbout.classList.remove('show');
}
function closeModal() {
  modalOverlay.classList.remove('show');
  modalWrapper.classList.remove('show');
}

// Main code
const readNewBtn = document.getElementById('readNew');
const aboutUsBtn = document.getElementById('aboutUs');
readNewBtn.addEventListener('click', renderContent(


));

aboutUsBtn.addEventListener('click', renderAbout(

  // modalContent.innerHTML += `<p>Hello</p><h1>xin chao</h1>`
));

const closeModalBtn = document.getElementById('close-modal');
const closeModalBtnAbout = document.getElementById('close-modal-About');
closeModalBtn.addEventListener('click', closeModal);
closeModalBtnAbout.addEventListener('click', closeAbout);
// window.onclick = function(event) {
//   if (event.target == modalAbout) {
//     modalAbout.style.display = "none";
//   }
// }