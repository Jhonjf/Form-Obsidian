particlesJS('particles-js', {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#8A2BE2"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000"
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2,
        direction: "random",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    retina_detect: true
  });
  