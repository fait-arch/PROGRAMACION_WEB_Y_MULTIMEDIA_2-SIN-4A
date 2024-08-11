// Array de ingredientes para la receta
const ingredients = [
	{ item: "Mantequilla", quantity: "60 g" },
	{ item: "Azúcar blanco", quantity: "1 taza" },
	{ item: "Azúcar moreno", quantity: "1/2 taza" },
	{ item: "Sal", quantity: "1 cucharadita" },
	{ item: "Levadura en polvo", quantity: "1 cucharadita" },
	{ item: "Harina", quantity: "120 g" },
	{ item: "Huevo", quantity: "1" },
	{ item: "Esencia de vainilla", quantity: "1 cucharada" },
	{ item: "M&M's", quantity: "1 taza" },
];

// Función para añadir los ingredientes a la tabla
function populateIngredientsTable() {
	const tableBody = document.querySelector("#ingredients-table tbody");

	ingredients.forEach((ingredient) => {
		// Crear una nueva fila
		const row = document.createElement("tr");

		// Crear las celdas
		const itemCell = document.createElement("td");
		itemCell.textContent = ingredient.item;
		const quantityCell = document.createElement("td");
		quantityCell.textContent = ingredient.quantity;

		// Añadir las celdas a la fila
		row.appendChild(itemCell);
		row.appendChild(quantityCell);

		// Añadir la fila a la tabla
		tableBody.appendChild(row);
	});
}

// Llamar a la función para llenar la tabla al cargar la página
window.onload = populateIngredientsTable;
