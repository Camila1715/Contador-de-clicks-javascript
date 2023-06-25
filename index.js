const click = document.getElementById("click");
const reset = document.getElementById("reset");
const contador = document.querySelector(".numero");

let resultado = 0;

click.addEventListener("click", (e) => {
    resultado += 1;
    contador.textContent = resultado;
}) 

reset.addEventListener("click", () => {
    resultado = 0;
    contador.textContent = 0;
})



