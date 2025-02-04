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
    //todos os campos preenchidos
    form.submit();

    // Captura os dados do formulário
    // const name1 = document.querySelector("#nameDe").value;
    // const name2 = document.querySelector("#namePara").value;
    // const message = document.querySelector("#message").value;

    // // Salva cada valor separadamente no localStorage
    // localStorage.setItem("nameDe", name1);
    // localStorage.setItem("namePara", name2);
    // localStorage.setItem("message", message);


    // const formData = {
    //     nameDe: document.querySelector("#nameDe").value,
    //     namePara: document.querySelector("#namePara").value,
    //     message: document.querySelector("#message").value
    // };

    // localStorage.setItem("formData", JSON.stringify(formData));

    const inputName1 = encodeURIComponent(nameDe.value);
    const inputName2 = encodeURIComponent(namePara.value);
    const inputMessage = encodeURIComponent(textMessage.value);

    const urlDestino = `https://paulocesar26.github.io/sistemaSimplesJS/dados.html?nameDe=${inputName1}&namePara=${inputName2}&message=${inputMessage}`;

    // Redireciona para a página destino.html
    if (janelaDestino && !janelaDestino.closed) {
        janelaDestino.location.reload(); // Recarrega os dados na aba existente
        janelaDestino.focus(); // Traz a aba para frente
    } else {
        // Se não estiver aberta, abre uma nova e armazena a referência
        janelaDestino = window.open("dados.html", "janelaDestino");
    }

    window.location.href = `dados.html?link=${encodeURIComponent(urlDestino)}`;
    window.open(`qrcode.html?link=${encodeURIComponent(urlDestino)}`, "_blank");

});