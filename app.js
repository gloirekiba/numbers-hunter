const main = document.getElementById("main");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

const MAX_NUMBERS = 50;

function rand(min, max) {
  return Math.ceil(Math.random() * max - min + min);
}

const isGameOver = (() => {
  let number = 0;
  return (num) => {
    number++;
    if (number !== num) return true;
    return false;
  };
})();

function gameOver(message) {
  restart.classList.remove("d-none");
  numbers.forEach((number) => number.remove());
  result.innerText = message;
  result.style.fontSize = `10rem`;
}

restart.addEventListener("click", () => location.reload());

for (let i = 1; i <= MAX_NUMBERS; i++) {
  const number = document.createElement("div");

  number.classList.add("number");
  number.textContent = i.toString();
  number.style.top = `${rand(1, 100)}%`;
  number.style.left = `${rand(1, 100)}%`;
  number.style.zIndex = (MAX_NUMBERS + 1 - i).toString();

  main.appendChild(number);
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    if (isGameOver(parseInt(this.innerText))) {
      return gameOver("You loose");
    }

    if (parseInt(this.innerText) === MAX_NUMBERS) {
      return gameOver("Congrat!");
    }

    result.innerText = this.innerText;
    this.classList.add("fade");

    setTimeout(() => this.remove(), 1000);
  });
});
