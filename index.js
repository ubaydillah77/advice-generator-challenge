const btn = document.querySelector(".btn");
const advice = document.querySelector(".advice__container");

btn.addEventListener("click", async function () {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    advice.innerHTML = "";

    if (!data) {
        console.log("loading..");
    }

    const html = `
    <h6 class="advice__number">ADVICE #${data.slip.id}</h6>
    <p class="advice__text">"${data.slip.advice}"</p>
    
    
    `;
    advice.insertAdjacentHTML("beforeend", html);
    console.log("hhelo");
});
