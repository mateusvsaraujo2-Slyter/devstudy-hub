
const botao = document.getElementById("botao-categorias");
const categorias = document.getElementById("categorias");

function alternarCategorias() {
    if (categorias.hidden) {
        categorias.hidden = false;
        botao.textContent = "Ocultar categorias";
        botao.setAttribute("aria-expanded", "true");
    } else {
        categorias.hidden = true;
        botao.textContent = "Mostrar categorias";
        botao.setAttribute("aria-expanded", "false");
    }
}

botao.addEventListener("click", alternarCategorias);
