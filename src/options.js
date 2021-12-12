export const particlesOptions = {
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          force: 60
        }
      }
    },
  },
  particles: {
    links: {
      distance: 150,
      enable: true,
      opacity: 0.6,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200
        }
      },
      enable: true,
    },
    number: {
      density: {
        enable: true
      },
      value: 80
    },
    opacity: {
      value: 0.5,
    },
    size: {
      random: {
        enable: true
      },
      value: {
        min: 1,
        max: 3
      }
    }
  }
};