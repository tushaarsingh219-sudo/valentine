const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const secret = document.getElementById("secret");
const celebrate = document.getElementById("celebrate");
const music = document.getElementById("bgMusic");

/* NO button move */
function moveButton() {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

/* YES click */
yesBtn.addEventListener("click", () => {
    result.classList.remove("hidden");
    music.play();

    setTimeout(() => {
        secret.classList.remove("hidden");
        celebrate.classList.remove("hidden");
    }, 1500);
});

/* Floating hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);
