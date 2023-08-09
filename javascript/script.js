function abrirWhatsapp() {
    window.open('https://api.whatsapp.com/send/?phone=5516997168155&text=Ol%C3%A1%21+Tenho+interesse+em+um+de+seus+cursos.&type=phone_number&app_absent=0', '_blank');
}
window.sr = ScrollReveal ({ reset: true});

sr.reveal('.cabecalho, .container-cursos .texto-cursos', {
    origin: 'top',
    distance: '100px',
    duration: 500,
    delay: 100,
    easing: 'ease-out',
    reset: true
});

sr.reveal('.container-inicio .container-texto, .sobre-nos .container-left, .nossa-equipe .container-left, .egl-online .container-left', {
    origin: 'left',
    distance: '100px',
    duration: 500,
    delay: 100,
    easing: 'ease-out',
    reset: true
});

sr.reveal('.container-inicio .container-imagem, .sobre-nos .container-right, .nossa-equipe .container-right, .egl-online .container-right', {
    origin: 'right',
    distance: '100px',
    duration: 500,
    delay: 100,
    easing: 'ease-out',
    reset: true
});

sr.reveal('.container-cursos .texto-cursos, .container-cursos .lista-de-cursos, .texto-cursos2, .lista-de-cursos2', {
    origin: 'bottom',
    distance: '100px',
    duration: 500,
    delay: 100,
    easing: 'ease-out',
    reset: true
});



const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".cabecalho");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));