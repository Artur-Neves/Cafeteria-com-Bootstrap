const formulario = document.getElementById("Contato");
const divFormulario = document.querySelector(".formulario-entre_em_contato__div");
const btnModoNoturno = document.getElementById("flexSwitchCheckModoEscuro");
const body = document.querySelector("body");
formulario.addEventListener("submit", (evento)=>{
    if (!formulario.checkValidity()){
        evento.preventDefault();
        formulario.classList.add("was-validated");
        divFormulario.style.height = "700px";
    }
})
btnModoNoturno.addEventListener("click", ()=>{
    const modo = (btnModoNoturno.checked ? 'dark' : 'light');
        body.setAttribute("data-bs-theme", modo);
});
