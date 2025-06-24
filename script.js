const playerCar = document.getElementById("playerCar");
const enemyCar = document.getElementById("enemyCar");
const scoreDisplay = document.getElementById("score");

let playerX = 170;
let score = 0;
let enemySpeed = 5;

function moveEnemy() {
  enemyCar.style.top = "-140px";
  enemyCar.style.left = Math.floor(Math.random() * 340) + "px";
}

function startGame() {
  moveEnemy();

  setInterval(() => {
    let enemyTop = parseInt(window.getComputedStyle(enemyCar).getPropertyValue("top"));

    if (enemyTop > 600) {
      moveEnemy();
      score++;
      scoreDisplay.innerText = "Score: " + score;
    } else {
      enemyCar.style.top = (enemyTop + enemySpeed) + "px";
    }

    // Collision Detection
    const playerRect = playerCar.getBoundingClientRect();
    const enemyRect = enemyCar.getBoundingClientRect();

    if (
      playerRect.left < enemyRect.right &&
      playerRect.right > enemyRect.left &&
      playerRect.top < enemyRect.bottom &&
      playerRect.bottom > enemyRect.top
    ) {
      alert("💥 Game Over!\nYour Score: " + score);
      location.reload();
    }

  }, 20);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerX > 0) {
    playerX -= 10;
    playerCar.style.left = playerX + "px";
  }
  if (e.key === "ArrowRight" && playerX < 340) {
    playerX += 10;
    playerCar.style.left = playerX + "px";
  }
});

startGame();

