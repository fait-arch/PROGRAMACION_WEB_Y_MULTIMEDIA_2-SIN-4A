//JSON
const jsonObject = {
	id: "253",
	cantidad: 3,
	city: "New York",
};

// Convertir el JSON a una cadena
const jsonString = JSON.stringify(jsonObject);

// Generar el código QR
const qrCodeElement = document.getElementById("qrcode");
new QRCode(qrCodeElement, {
	text: jsonString,
	width: 256, // Ancho del QR
	height: 256, // Altura del QR
});

// Función para lanzar confeti
function lanzarConfeti() {
	confetti({
		particleCount: 100,
		spread: 70,
		origin: { y: 0.6 },
	});
}

// Función añadir el evento de clic para lanzar confeti
document
	.getElementById("confettiButton")
	.addEventListener("click", function (event) {
		event.preventDefault(); // Evita que el enlace sea seguido inmediatamente
		lanzarConfeti();
		// Elimina la redirección o navegación a otro enlace
	});
