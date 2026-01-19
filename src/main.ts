import { quotes } from "./quotes.generated";

const comments = [
    "—— 真是聽君一席話，如聽一席話",
    "—— 這分析，連分析師都想分析一下",
    "—— 大師，我悟了，雖然我也不知道悟了什麼",
    "—— 這句話本身就是一句話",
    "—— 邏輯鬼才，當世孔明",
    "—— 此話一出，四周都安靜了",
    "—— 這就是廢話的最高境界嗎？"
];

const card = document.getElementById("card") as HTMLDivElement | null;
const contentDiv = document.getElementById("nonsense-content") as HTMLDivElement | null;
const commentDiv = document.getElementById("master-comment") as HTMLDivElement | null;
const counterDiv = document.getElementById("counter") as HTMLDivElement | null;
const particlesContainer = document.getElementById("particles") as HTMLDivElement | null;
const scene = document.getElementById("scene");

if (!card || !contentDiv || !commentDiv || !counterDiv || !particlesContainer) {
    throw new Error("Required DOM elements not found");
}

const counterStorageKey = "inspirationCount";
const storedCount = window.localStorage.getItem(counterStorageKey);
let count = storedCount ? Number(storedCount) : 0;
if (!Number.isFinite(count)) {
    count = 0;
}
counterDiv.innerText = String(count);
let isFlipped = false;

function createParticles() {
    for (let i = 0; i < 50; i += 1) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 4 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.animationDuration = `${Math.random() * 5 + 5}s`;
        p.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(p);
    }
}

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomComment() {
    return comments[Math.floor(Math.random() * comments.length)];
}

function flipCard() {
    if (!isFlipped) {
        const quote = getRandomQuote();
        contentDiv.innerText = quote;
        commentDiv.innerText = getRandomComment();

        card.classList.add("is-flipped");
        isFlipped = true;

        count += 1;
        counterDiv.innerText = String(count);
        window.localStorage.setItem(counterStorageKey, String(count));

        createBurstEffect();
    } else {
        card.classList.remove("is-flipped");
        isFlipped = false;
    }
}


function createBurstEffect() {
    for (let i = 0; i < 10; i += 1) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.width = "6px";
        p.style.height = "6px";
        p.style.left = "50vw";
        p.style.top = "50vh";
        p.style.background = "var(--primary)";
        p.style.boxShadow = "0 0 10px var(--primary)";
        p.style.animation = "burst 0.8s ease-out forwards";

        const angle = (Math.PI * 2 / 10) * i;
        const distance = 100 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        p.style.setProperty("--tx", `${tx}px`);
        p.style.setProperty("--ty", `${ty}px`);

        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }
}

scene?.addEventListener("click", flipCard);
window.addEventListener("load", createParticles);
