const character = document.getElementById("character");
const bubble = document.getElementById("bubble");

const info = {
    "dave": {
        image: "assets/character/hello.png",
        text: "Welcome to my portfolio."
    },

    "about-skills": {
        image: "assets/character/hello.png",
        text: "Hey there! I'm Dave."
    },

    "projects": {
        image: "assets/character/happy.png",
        text: "Check out my projects."
    },

    "certificates": {
        image: "assets/character/happy.png",
        text: "Certificates I've earned."
    },

    "awards": {
        image: "assets/character/happy.png",
        text: "Moments I'm proud of."
    },

    "contact": {
        image: "assets/character/welcome.png",
        text: "Feel free to reach out."
    }
};

let currentSection = "";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    console.log(entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
            const state = info[entry.target.id];

            if (state) {
                character.src = state.image;
                bubble.textContent = state.text;
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -20% 0px"
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});