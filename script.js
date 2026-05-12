/* ================= MUSIC ================= */

function playMusic(){

    document
    .getElementById("music")
    .play();
}

/* ================= SLIDESHOW ================= */

let slides =
document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

    slides[index]
    .classList.remove("active");

    index =
    (index + 1) % slides.length;

    slides[index]
    .classList.add("active");

}, 3000);

/* ================= CONFETTI ================= */

const confettiColors = [
    "#ff0",
    "#ff0080",
    "#00e1ff",
    "#7cff00",
    "#ffffff"
];

for(let i = 0; i < 150; i++){

    let confetti =
    document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left =
    Math.random() * 100 + "vw";

    confetti.style.background =
    confettiColors[
        Math.floor(
            Math.random() *
            confettiColors.length
        )
    ];

    let size =
    Math.random() * 8 + 5;

    confetti.style.width =
    size + "px";

    confetti.style.height =
    size + "px";

    confetti.style.animationDuration =
    (Math.random() * 3 + 3) + "s";

    confetti.style.animationDelay =
    Math.random() * 5 + "s";

    document.body.appendChild(confetti);
}

/* ================= CAKE CUT + FIREWORKS ================= */

function cutCake(){

    // Cake Animation
    document
    .getElementById("cake")
    .classList.add("cut");

    // Firework Colors
    const fireworkColors = [
        "#ff0",
        "#ff0080",
        "#00e1ff",
        "#7cff00",
        "#ffffff",
        "#ff6600"
    ];

    // Create Fireworks
    for(let i = 0; i < 120; i++){

        let firework =
        document.createElement("div");

        firework.classList.add("firework");

        // Start Position
        firework.style.left =
        window.innerWidth / 2 + "px";

        firework.style.top =
        window.innerHeight / 2 + "px";

        // Random Color
        firework.style.background =
        fireworkColors[
            Math.floor(
                Math.random() *
                fireworkColors.length
            )
        ];

        // Random Explosion Direction
        let x =
        (Math.random() - 0.5) * 600 + "px";

        let y =
        (Math.random() - 0.5) * 600 + "px";

        firework.style
        .setProperty("--x", x);

        firework.style
        .setProperty("--y", y);

        document.body.appendChild(firework);

        // Remove After Animation
        setTimeout(() => {

            firework.remove();

        }, 1000);
    }
}