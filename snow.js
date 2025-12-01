const snowContainer = document.getElementById("snow");
for (let i = 0; i < 60; i++) {
  const flake = document.createElement("div");
  flake.classList.add("snowflake");
  flake.textContent = "•";
  flake.style.position = "absolute";
  flake.style.left = Math.random() * 100 + "vw";
  flake.style.top = Math.random() * -100 + "vh";
  flake.style.fontSize = Math.random() * 10 + 10 + "px";
  flake.style.opacity = Math.random();
  flake.style.color = "rgba(255,255,255,0.9)";
  flake.style.animation = `fall ${Math.random() * 6 + 4}s linear infinite`;
  snowContainer.appendChild(flake);
}
