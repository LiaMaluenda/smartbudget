# SmartBudget - Landing Page

Landing page **SmartBudget** correspondiente al tercer modulo del bootcamp. Es una aplicación financiera diseñada para conectar cuentas, ordenar gastos y gestionar presupuestos. Este proyecto es la traducción a código frontend de un prototipo de alta fidelidad, que tiene el fin de evidenciar el uso de SASS, SCSS y la metodología escogida BEM.

---

## 🔗 Enlaces del Proyecto

* **Repositorio GitHub:** [LiaMaluenda/smartbudget](https://github.com/LiaMaluenda/smartbudget)
* **Prototipo UI/UX:** [Diseño en Figma](https://www.figma.com/make/uYG1DdwcnHWY8ED54jqODP/SmartBudget-landing-page-prototype?code-node-id=0-9&p=f&t=GEe2DFuU2p2JcR6l-0&fullscreen=1)

---

## 🛠️ Tecnologías Utilizadas

* **Estructura:** HTML5 Semántico.
* **Estilos:** SASS (SCSS) y CSS3.
* **Interactividad:** JavaScript.
* **Framework CSS:** Bootstrap 5 (Grilla y utilidades, modificado con variables SASS personalizadas).

---

## 📐 Metodologías y Arquitectura

El proyecto está construido bajo estrictas normas de escalabilidad, manteniendo una separación total entre la estructura visual y la lógica interactiva.

### SASS / CSS
Se utilizó la **Metodología BEM** (Block, Element, Modifier) junto con el patrón de **Arquitectura 7-1** de SASS para organizar los estilos.
* **`abstracts/`**: Variables de diseño (paleta de colores principales, tipografía *Roboto Serif*).
* **`components/`**: Tarjetas modulares reutilizables (`.feature-card`, `.dashboard-card`, `.testimonial-card`).
* **`layout/`**: Elementos estructurales globales (`_header.scss`, `_navbar.scss`).
* **`pages/`**: Estilos específicos por vista (`_home.scss`).

### JavaScript
Toda la lógica de interacción se encuentra encapsulada en archivos independientes, garantizando la limpieza del HTML. Las funcionalidades incluyen:
* Scroll suave para anclas de navegación (Smooth Scroll).
* Transiciones dinámicas en la barra de navegación basadas en el evento de *scroll* de la ventana.
* Animaciones en cascada y manipulación del DOM para el mockup del dashboard financiero.

---

## ⚙️ Instalación y Ejecución Local

Para visualizar el proyecto y compilar los estilos correctamente en tu entorno local:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone [https://github.com/LiaMaluenda/smartbudget.git](https://github.com/LiaMaluenda/smartbudget.git)