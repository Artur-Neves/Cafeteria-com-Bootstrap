const formulario = document.getElementById("Contato");
const divFormulario = document.querySelector(".formulario-entre_em_contato__div");

formulario.addEventListener("submit", (evento)=>{
    if (!formulario.checkValidity()){
        evento.preventDefault();
        formulario.classList.add("was-validated");
        divFormulario.style.height = "700px";
    }
})
