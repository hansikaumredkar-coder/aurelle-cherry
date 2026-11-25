const gifts = {
  wish: {
    emoji: "🌟",
    title: "A wish just for you",
    text: "May this year bring you sweet surprises, exciting adventures, peaceful days, and so many reasons to smile. Keep dreaming big, little cherry. You deserve lovely things. 🍒"
  },
  hug: {
    emoji: "🧸",
    title: "A teddy-sized hug",
    text: "Imagine the softest teddy bear giving you the biggest, coziest birthday hug. Consider this your reminder to take a deep breath, feel loved, and be gentle with yourself today. 💗"
  },
  cherry: {
    emoji: "🍒",
    title: "A tiny cherry note",
    text: "A little note to say: you make the world sweeter just by being you. Keep your sparkle, keep your kindness, and never forget how special you are. 🎀"
  }
};

const giftButtons = document.querySelectorAll(".gift-box");
const giftMessage = document.getElementById("giftMessage");
const giftEmoji = document.getElementById("giftEmoji");
const giftTitle = document.getElementById("giftTitle");
const giftText = document.getElementById("giftText");

giftButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const gift = gifts[button.dataset.gift];

    if (!gift) return;

    giftEmoji.textContent = gift.emoji;
    giftTitle.textContent = gift.title;
    giftText.textContent = gift.text;

    giftMessage.classList.remove("hidden");
    giftMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

const heartButton = document.getElementById("heartButton");
const heartArea = document.getElementById("heartArea");

heartButton.addEventListener("click", () => {
  const hearts = ["💗", "💕", "❤️", "💖", "💘", "💞"];

  heartArea.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.textContent = hearts[i];
    heart.style.animationDelay = `${i * 0.12}s`;
    heartArea.appendChild(heart);
  }
});
