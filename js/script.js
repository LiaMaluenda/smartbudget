document.addEventListener("DOMContentLoaded", function() {
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener("click", function(evento) {
            evento.preventDefault();
            const idDestino = this.getAttribute("href");
            
            if(idDestino === "#") return;

            const seccionDestino = document.querySelector(idDestino);
            
            if (seccionDestino) {
                seccionDestino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});