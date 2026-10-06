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


document.addEventListener("DOMContentLoaded", function() {
    
    const navbar = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#ffffff';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.transition = 'all 0.3s ease';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

});
/* =========================================
   Validador de Renderizado de Barras
========================================= */
document.addEventListener("DOMContentLoaded", function() {
    
    // Damos un milisegundo para que el CSS cargue completamente
    setTimeout(() => {
        const barrasGrafico = document.querySelectorAll('.mock-chart__bar');
        
        if (barrasGrafico.length === 0) {
            console.error("No se encontraron las barras en el HTML. Revisa los nombres de las clases.");
            return;
        }

        barrasGrafico.forEach((barra, index) => {
            const alturaReal = window.getComputedStyle(barra).height;
            
    
            if (alturaReal === '0px' || alturaReal === 'auto') {
                console.warn(`La barra ${index + 1} midió 0px. Forzando visibilidad.`);
                barra.style.height = '50px';
                barra.style.backgroundColor = 'red';
            }
        });
    }, 500);

});
