particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#1231b8"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.8,
            random: false
        },
        size: {
            value: 4,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        },
        line_linked: {
            enable: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false }
        }
    },
    retina_detect: true
});
