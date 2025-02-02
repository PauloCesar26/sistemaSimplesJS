const form = document.querySelector("#form");
const inputName1 = document.querySelector("#nameDe");
const inputName2 = document.querySelector("#namePara");
const textMessage = document.querySelector("#message");

const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const modalMessage = document.querySelector("#modal-message");
let janelaDestino = null; 

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};
const showModal = (message) => {
    modalMessage.textContent = message;
    toggleModal();
};
closeModal.addEventListener("click", () => {
    toggleModal();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //verificando nome
    if(inputName1.value === ""){
        showModal("Por favor o nome 1!");
        return;
    }
    if(inputName2.value === ""){
        showModal("Por favor o nome 2!");
        return;
    }
    //verificar mensagem
    if(textMessage.value === ""){
        showModal("Por favor, escreva a mensagem!");
        return;
    }
    //todos os campos preenchidos
    form.submit();

    // Captura os dados do formulário
    const name1 = document.querySelector("#nameDe").value;
    const name2 = document.querySelector("#namePara").value;
    const message = document.querySelector("#message").value;

    // Salva cada valor separadamente no localStorage
    localStorage.setItem("nameDe", name1);
    localStorage.setItem("namePara", name2);
    localStorage.setItem("message", message);

    // Redireciona para a página destino.html
    if (janelaDestino && !janelaDestino.closed) {
        janelaDestino.location.reload(); // Recarrega os dados na aba existente
        janelaDestino.focus(); // Traz a aba para frente
    } else {
        // Se não estiver aberta, abre uma nova e armazena a referência
        janelaDestino = window.open("dados.html", "janelaDestino");
    }

});