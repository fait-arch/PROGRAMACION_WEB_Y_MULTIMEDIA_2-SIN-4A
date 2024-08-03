# Mi Sitio Web

    Este proyecto es un sitio web simple que consta de tres páginas HTML y un archivo CSS. El sitio está diseñado para mostrar diferentes etapas de desarrollo web, incluyendo la creación de tablas, formularios y estilos de texto.

    ## Estructura del Proyecto

    El proyecto está organizado de la siguiente manera:

    AA2/
    │
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── img/
    │   └── logo.png
    └── src/
    ├── etapados.html
    └── etapatres.html

    ## Páginas

    1. **index.html (Etapa 1)**:
    Esta página representa la primera etapa de un sitio web sencillo. En la cabecera (header), se incluye un logo que enlaza a la página principal y un menú de navegación con enlaces a las otras dos etapas del sitio web. El contenido principal (main) incluye un título de la etapa ("Etapa 1") y una descripción breve. Además, se presenta una tabla dentro de un contenedor (div con clase container-table) que muestra una lista de películas y sus precios. La tabla usa elementos table, thead, tbody, tr, th, y td para estructurar los datos de manera tabular. Finalmente, la página tiene un pie de página (footer) con un texto de derechos de autor.

    - Contiene una tabla simple con información de películas y precios.
    - Muestra el encabezado del sitio con navegación y logo.

    2. **etapados.html (Etapa 2)**:
    Esta página corresponde a la segunda etapa del sitio web. La cabecera es similar a la de index.html, con un logo y un menú de navegación. En el contenido principal (main), se incluye un título de la etapa ("Etapa 2") y una descripción. Se presenta un formulario de entrada de datos dentro de un contenedor (div con clase container-form) que se divide en dos columnas (div con clase column). El formulario utiliza varios elementos HTML de entrada: input para texto, correo electrónico y contraseña; radio para opciones de género; checkbox para intereses; select para una lista desplegable de países; y textarea para comentarios. Cada campo está agrupado en un div con la clase form-group. También hay un botón de envío (button) y una lista de los elementos usados en el formulario, en la segunda columna.
    - Presenta un formulario con diversos tipos de campos de entrada.
    - Incluye una lista de los elementos utilizados en el formulario.

    3. **etapatres.html (Etapa 3)**:
    Esta página representa la tercera etapa del sitio web. Nuevamente, la cabecera incluye un logo y un menú de navegación. El contenido principal (main) tiene un título de la etapa ("Etapa 3") y tres columnas (div con clase container-columns), cada una con un bloque de color diferente: HSL (div con clase hsl-block), RGB (div con clase rgb-block), y hexadecimal (div con clase hex-block). Estos bloques de colores son ejemplos visuales de diferentes métodos de especificación de colores en CSS y están centrados con algo de texto de ejemplo en cada uno
    - Demuestra el uso de diferentes estilos de texto y colores.
    - Utiliza tres columnas con distintos esquemas de color (HSL, RGB, HEX).


    ## Características

    - Diseño responsivo utilizando CSS flexbox y grid.
    - Navegación consistente entre todas las páginas.
    - Uso de diferentes selectores CSS y propiedades para estilizar elementos.
    - Implementación de formularios con diversos tipos de inputs.
    - Demostración de diferentes métodos para especificar colores en CSS.

    ## Estilos (styles.css)

    El archivo CSS incluye estilos para:
    El archivo CSS define los estilos comunes para todo el sitio web. Se establecen estilos básicos para el cuerpo (body), la cabecera (header), el menú de navegación (nav), el contenido principal (main), y el pie de página (footer). También se incluyen estilos específicos para los contenedores de la tabla (container-table), del formulario (container-form), y de las columnas de colores (container-columns). Los estilos aseguran una presentación coherente y atractiva, con un enfoque en la legibilidad y la usabilidad del sitio. Los bloques de colores usan propiedades CSS (background-color) para demostrar diferentes métodos de especificación de colores: HSL, RGB, y hexadecimal.
        - Diseño general del sitio (encabezado, pie de página, navegación).
        - Estilos de tabla
        - Estilos de formulario
        - Efectos de hover
        - Diferentes esquemas de color y estilos de texto

    ## Cómo usar

    1. Clona este repositorio o descarga los archivos.
    2. Abre `index.html` en tu navegador para ver la página principal.
    3. Navega a través de las diferentes etapas utilizando los enlaces en el menú de navegación.

    ## Requisitos

    Este proyecto no requiere ninguna instalación especial y se puede ver en cualquier navegador web moderno.

    ## Notas adicionales

    - Este proyecto es principalmente para fines educativos y demuestra conceptos básicos de HTML y CSS.
    - Las imágenes y el contenido son de ejemplo y pueden ser reemplazados según sea necesario.
