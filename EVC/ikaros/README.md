# Proyecto Final: Sitio Web para un Restaurante

Este proyecto consiste en un sitio web de cinco páginas diseñado para proporcionar a los clientes una manera conveniente de acceder a los menús y a la información de su pedido a través de un código QR.

## Ideas Principales y Conclusiones

### 1. Estructura del Sitio Web

El sitio web está compuesto por las siguientes cinco páginas:

- **Menú Principal:** Presenta los distintos menús del restaurante, con secciones separadas para entrantes, platos principales, postres y bebidas.
- **Carito de pedidos:** Mostraria el total de productos escojidos, el carrito es dinamico por lo que se construye atraves de un JSON.
- **Confirmacion:** Actuaira como la pestaña en la que una ves confirmada la cuenta se escaneria el QR que contiene el JSON con toda la informacion del pedido.
- **Linktree:** Actuaria como punto de comunicacion para promorcionalr las redes sociales del restaurante.
- **Menú Principal:** Propuesta de presentacion de informacion del usuario para manegar cuentas dentro del citio web

### 2. Partes Más Difíciles y Soluciones

Uno de los mayores desafíos que enfrenté fue la integración de un sistema de menús interactivo que permitiera a los clientes ver las opciones de manera intuitiva en dispositivos móviles. Asegurar que el diseño fuera responsivo y que las imágenes de los platos se cargaran de manera rápida y eficiente fue complicado.

### 3. Lecciones Aprendidas

- **Importancia del Diseño Responsivo:** Asegurar que el sitio funcione bien en dispositivos móviles fue crucial. Aprendí a utilizar técnicas de diseño responsivo y a optimizar elementos para diferentes tamaños de pantalla usando frameworks de diseño como Tailwind o Bootstrap.
- **Flexibilidad en el Desarrollo:** Aunque el wireframe sirve como una guía útil, estar abierto a ajustes y mejoras durante el desarrollo es esencial para adaptarse a nuevas ideas y necesidades.
- **Simplifcar funciones:** La importancia de diseñar componentes para un paguina estatica que sena simples y facil de entender.

---

## Estructura del Proyecto

El proyecto está organizado en varias carpetas y archivos:

```bash
IKAROS/
│
├── README.md
├── index.html
│
├── src/
│ └── img/
│
│ ├── pages/
│ │ ├── pageDos.html
│ │ ├── pageTres.html
│ │ ├── pageCuatro.html
│ │ └── pageCinco.html
│ │
│ ├── css/
│ │ ├── style.css
│ │ ├── styleUno.css
│ │ ├── styleDos.css
│ │ ├── styleTres.css
│ │ ├── styleCuatro.css
│ │ └── styleCinco.css
│ │
│ ├── script/
│ ├── scriptDos.js
│ └── scriptTres.js
```
