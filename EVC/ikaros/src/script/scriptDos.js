// script.js

// Espera a que el contenido del DOM se haya cargado completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
	// Define el contenedor del producto y los datos del producto
	const productContainer = document.getElementById("product-container");
	const productData = {
		image: "../../public/perfil.jpg", // Ruta de la imagen del producto
		name: "Ropa", // Nombre del producto
		price: 4.0, // Precio base del producto
		discount: 20, // Tasa de descuento (50%)
	};

	let quantity = 1; // Cantidad inicial del producto
	const basePrice = productData.price; // Precio base del producto
	const deliveryPrice = 2.0; // Precio de entrega
	const discountRate = productData.discount; // Tasa de descuento

	// Crea el HTML para el producto utilizando los datos definidos
	const productHTML = `
        <div class="product-container">
            <img src="${productData.image}" alt="Imagen del servicio" />
            <div class="product-info">
                <h2>${productData.name}</h2>
                <p>${productData.price.toFixed(2)}</p>
            </div>
            <div class="quantity-control">
                <button id="decrement">-</button>
                <input type="text" id="quantity" value="1" readonly />
                <button id="increment">+</button>
            </div>
        </div>
    `;

	// Inserta el HTML del producto en el contenedor
	productContainer.innerHTML = productHTML;

	// Obtiene referencias a los elementos recién creados
	const decrementButton = document.getElementById("decrement");
	const incrementButton = document.getElementById("increment");
	const quantityInput = document.getElementById("quantity");
	const pedido = document.getElementById("pedido");
	const entrega = document.getElementById("entrega");
	const descuento = document.getElementById("descuento");
	const total = document.getElementById("total");

	// Función para actualizar el precio del pedido (basado en la cantidad)
	function updatePrice() {
		const totalPrice = basePrice * quantity;
		pedido.textContent = totalPrice.toFixed(2); // Muestra el precio total del pedido con dos decimales
	}

	// Función para actualizar el total
	function updateTotal() {
		const Price = basePrice * quantity; // Precio total de los productos
		const subtotal = Price + deliveryPrice; // Suma del precio de los productos y el costo de entrega
		const discountAmount = subtotal * discountRate; // Monto del descuento aplicado al subtotal
		const totalPrice = subtotal - discountAmount; // Total después de aplicar el descuento

		// Actualiza los valores en el HTML
		pedido.textContent = Price.toFixed(2);
		entrega.textContent = deliveryPrice.toFixed(2);
		descuento.textContent = discountAmount.toFixed(2);
		total.textContent = totalPrice.toFixed(2); // Muestra el total con dos decimales
	}

	// Agrega un evento al botón de decremento
	decrementButton.addEventListener("click", () => {
		if (quantity > 1) {
			// Solo decrementa si la cantidad es mayor a 1
			quantity--;
			quantityInput.value = quantity;
			updatePrice(); // Actualiza el precio del pedido
			updateTotal(); // Actualiza el total después de cambiar la cantidad
		}
	});

	// Agrega un evento al botón de incremento
	incrementButton.addEventListener("click", () => {
		quantity++;
		quantityInput.value = quantity;
		updatePrice(); // Actualiza el precio del pedido
		updateTotal(); // Actualiza el total después de cambiar la cantidad
	});

	// Llama a updatePrice y updateTotal para mostrar los valores iniciales
	updatePrice();
	updateTotal();
});
