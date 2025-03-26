const form = document.querySelector("#form");
const nameDe = document.querySelector("#nameDe");
const namePara = document.querySelector("#namePara");
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
    if(nameDe.value === ""){
        showModal("Por favor o nome 1!");
        return;
    }
    if(namePara.value === ""){
        showModal("Por favor o nome 2!");
        return;
    }
    //verificar mensagem
    if(textMessage.value === ""){
        showModal("Por favor, escreva a mensagem!");
        return;
    }

    const inputName1 = encodeURIComponent(nameDe.value);
    const inputName2 = encodeURIComponent(namePara.value);
    const inputMessage = encodeURIComponent(textMessage.value.replace(/\n/g, "<br>"));

    const urlDestino = `https://paulocesar26.github.io/sistemaSimplesJS/dados.html?nameDe=${inputName1}&namePara=${inputName2}&message=${inputMessage}`;

    localStorage.setItem("nameDe", nameDe.value);
    localStorage.setItem("namePara", namePara.value);
    localStorage.setItem("message", textMessage.value);


    window.open(`dados.html?link=${encodeURIComponent(urlDestino)}`, "_blank");
    window.open(`qrcode.html?link=${encodeURIComponent(urlDestino)}`, "_blank");

    form.submit();
});