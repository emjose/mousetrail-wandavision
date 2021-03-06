tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 180,
        sync: true
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
    // size was 60
      value: 60,
      random: {
        enable: true,
        minimumValue: 10
      },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 10,
        sync: true,
        startValue: "min",
        destroy: "max"
      }
    },
    links: {
      enable: false
    },
    move: {
      enable: true,
      //speed was 10
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      outMode: "destroy",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onhover: {
        enable: true,
        mode: "trail"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },

    //distance was 400
    modes: {
      grab: {
        distance: 10,
        line_linked: {
          opacity: .8
        }
      },
    //distance was 400, duration was 2, speed was 3
      bubble: {
        distance: 10,
        size: 80,
        duration: 2,
        opacity: 1,
        speed: 0
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      },
      //trail was 5
      trail: {
        delay: 0,
        quantity: 12
      }
    }
  },
  retina_detect: true,
  background: {
    color: "#000000",
    image: "url('https://res.cloudinary.com/dn1e07eul/image/upload/v1615054343/100%20Days%20Of%20Code/wanda01_jrpv3h.jpg')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: "#000000"
    }
  }
});