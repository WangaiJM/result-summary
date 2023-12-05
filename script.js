const totalInput = document.querySelector("#total");
const scoreBtn = document.querySelector("#score-btn");
const cardContainer = document.querySelector(".scores__container");

document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    try {
      const res = await fetch("./data.json");
      const data = await res.json();

      data.forEach((scores) => {
        let card = document.createElement("div");

        card.innerHTML = `
        <div class="score__card ${scores.category}">
        <img
        src="${scores.icon}"
        alt="${scores.category}"
        id="icon"
        />
        <h2 class="score__category" id="category">${scores.category}</h2>
        <h2 class="score__number" id="score">${scores.score} <span>/ 100</span></h2>
        </div>
        `;

        cardContainer.appendChild(card);
      });
      // Average score
      let total = data.reduce((acc, scores) => acc + scores.score, 0);
      let average = Math.floor(total / data.length);
      totalInput.textContent = average;
    } catch (e) {
      console.log(e);
    }
  }

  fetchData();
});

scoreBtn.addEventListener("click", () => {
  fetchData();
});
