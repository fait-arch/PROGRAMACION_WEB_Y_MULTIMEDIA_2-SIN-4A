# README: Explicación de Etiquetas HTML

Este README proporciona una breve explicación de cada etiqueta HTML utilizada en el código proporcionado.

## Etiquetas Utilizadas

###`<img>`

La etiqueta `<img>` se utiliza para insertar imágenes en la página web. Se define con los atributos `src` para especificar la ruta de la imagen, `alt` para proporcionar un texto alternativo (importante para accesibilidad y SEO), `width` y `height` para definir las dimensiones de la imagen.

Ejemplo:

```html
<img
	src="./public/img/habitat_logo.png"
	alt="Escuela Venezia"
	width="200"
	height="100"
/>
```

###`<strong>`

La etiqueta `<strong>` se usa para marcar texto fuerte o importante, generalmente se visualiza en negrita por defecto en la mayoría de los navegadores.

Ejemplo:

```html
<strong>Sample Web Page for learning HTML5 Video and Audio Elements</strong>
```

###`<ul> y <li>`

`<ul> y <li>`se utilizan en conjunto para crear listas desordenadas. `<ul>` define la lista y `<li>` define cada elemento de la lista.

Ejemplo:

```html
<ul>
	<li>
		<a
			href="http://www.habitat.org/how/about_us.aspx"
			class="external"
			target="_blank"
			rel="noreferrer noopener"
			>Learn more</a
		>
	</li>
	<li>
		<a
			href="http://www.habitat.org/getinv/volunteer_programs.aspx"
			class="external"
			target="_blank"
			rel="noreferrer noopener"
			>Volunteer</a
		>
	</li>
	<!-- Otros elementos de la lista -->
</ul>
```

###`<p>`

La etiqueta `<p>` se utiliza para definir un párrafo de texto en HTML.

Ejemplo:

```html
<p>
	Habitat for Humanity believes that every person should have a decent, safe,
	and affordable place to live...
</p>
```

###`<iframe>`

La etiqueta `<iframe>` se utiliza para incrustar contenido externo, como vídeos de YouTube, dentro de la página web.

Ejemplo:

```html
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/X-Skzi1NfCc"
	frameborder="0"
	allowfullscreen
></iframe>
```

###`<nav>`
Navegación (`<nav>`)La estructura de navegación está definida por:

Ejemplo:

```html
<nav>
	<ul>
		<li><a href="index.html">Inicio</a></li>
		<li><a href="clubs.html">Clubes</a></li>
		<li>
			<a href="it_prog.html"
				>Programa de Ingeniería en Sistemas de la Información</a
			>
		</li>
	</ul>
</nav>
```
