// Definimos las variables
const memeName = "momoi"; // Nombre del meme
const reason = "El uso de ia para que la misma vos cante cualquier cancion"; // Razón del gusto del meme
const yearDiscovreasonered = 2024; // Año en que descubrí el meme

// Creamos una oración concatenando las variables
const sentence = `El meme "${memeName}" trata de ${reason} es del año ${yearDiscovreasonered}.`;

// Asignamos el contenido al elemento <p> con id 'meme-description'
document.getElementById("meme-description").textContent = sentence;

// Asignamos el nombre del meme al elemento <h1> con id 'meme-name'
document.getElementById("meme-name").textContent = memeName;

document.getElementById("like-btn").addEventListener("click", function () {
	const likeIcon = document.getElementById("like-icon");
	if (likeIcon.classList.contains("text-red-500")) {
		likeIcon.classList.remove("text-red-500");
		likeIcon.classList.add("text-gray-500");
	} else {
		likeIcon.classList.remove("text-gray-500");
		likeIcon.classList.add("text-red-500");
	}
});
