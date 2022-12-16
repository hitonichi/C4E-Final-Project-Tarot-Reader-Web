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

function renderContent(content) {
  return () => {
    modalOverlay.classList.add('show');
    modalWrapper.classList.add('show');

    // replace console.log with render content logic
    console.log(content);
  }
}

function closeModal() {
  modalOverlay.classList.remove('show');
  modalWrapper.classList.remove('show');
}

// Main code
const readNewBtn = document.getElementById('readNew');
readNewBtn.addEventListener('click', renderContent('<div>abc</div>'));

const closeModalBtn = document.getElementById('close-modal');
closeModalBtn.addEventListener('click', closeModal);

// Ref and Disclaimer
const Disclaimer_and_References_overlay = document.getElementById('Disclaimer_and_References_overlay');
const Disclaimer_and_References = document.getElementById('Disclaimer_and_References');

function render_Disclaimer_and_References() {
    Disclaimer_and_References_overlay.classList.add('show');
    Disclaimer_and_References.classList.add('show');
}

function close_Disclaimer_and_References() {
  Disclaimer_and_References_overlay.classList.remove('show');
  Disclaimer_and_References.classList.remove('show');
}

const Disclaimer_and_References_content = "Griner played for a Russian basketball team during the WNBA offseason, and she was arrested on drug smuggling charges shortly prior to Russia's invasion of Ukraine on Feb. 17 before being released on Dec. 9 in a prisoner exchange for convicted arms dealer Viktor Bout. Griner took off from Kelly Field in San Antonio Friday around 11 a.m., CNN confirmed via her agent Lindsay Kagawa Colas. As she boarded the plane, Griner was greeted by Phoenix Mercury General Manager Jim Pitman, Phoenix Mercury President Vince Kozar and her Mercury teammate Diana Taurasi, all of whom made a surprise appearance to welcome her home. Griner is heading back to Arizona, though her representatives would not confirm exactly where, citing security concerns. CNN previously reported that Griner and her wife Cherelle had already made plans to move upon her return to the United States. CNN is reaching out to the Phoenix Mercury about Griner's intention to play on the team this season, but has not heard back yet.";
document.getElementById('Disclaimer_and_References-content').innerHTML = Disclaimer_and_References_content;

const Read_Disclaimer_and_References = document.getElementById('Read-Disclaimer-and-References');
Read_Disclaimer_and_References.addEventListener('click',render_Disclaimer_and_References);

Disclaimer_and_References_overlay.addEventListener('click', close_Disclaimer_and_References);


