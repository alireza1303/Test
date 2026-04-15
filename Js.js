particlesJS("particles-js", {
    "particles": {
        "number": { 
            "value": 80, 
            "density": { "enable": true, "value_area": 800 } 
        },
        "color": { "value": "#c285ff" },
        "shape": { "type": "circle" },
        "opacity": { 
            "value": 0.5, 
            "random": true,
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": { "value": 3, "random": true },
        "line_linked": { 
            "enable": true, 
            "distance": 150, 
            "color": "#c285ff", 
            "opacity": 0.15, 
            "width": 1 
        },
        "move": { 
            "enable": true, 
            "speed": 1.2, 
            "direction": "none", 
            "out_mode": "out" 
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": { 
            "onhover": { "enable": true, "mode": "repulse" }
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 }
        }
    },
    "retina_detect": true
});