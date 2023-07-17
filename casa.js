// Función para procesar el pago
function procesarPago() {
  var monto = document.getElementById('monto').value;
  var tarjeta = document.getElementById('tarjeta').value;

  // Validación de entrada
  if (monto === '' || tarjeta === '') {
    alert('Por favor, ingresa el monto y los detalles de la tarjeta.');
    return;
  }

  // Mensaje de confirmación
  alert('Se ha realizado un pago de ' + monto + ' con la tarjeta ' + tarjeta);
}

// Event listener del botón de pago
document.getElementById('btn-pagar').addEventListener('click', function() {
  procesarPago();
});

// Event listener para presionar Enter en los campos de texto
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    if (event.target.id === 'monto' || event.target.id === 'tarjeta') {
      procesarPago();
    }
  }
});

// carrito
function agregarAlCarrito(producto) {
  console.log("Agregando producto al carrito:", producto);
}

function eliminarDelCarrito(producto) {
  console.log("Eliminando producto del carrito:", producto);
}

function obtenerTotalCompra() {
  console.log("Calculando total de la compra");
}

function mostrarCarrito() {
  console.log("Mostrando carrito de compras");
}

function vaciarCarrito() {
  console.log("Vaciando carrito de compras");
}

document.getElementById("carrito").addEventListener("click", function() {
  console.log("Se hizo clic en el carrito");
  var juegosMesaSection = document.getElementById("juegos-mesa");
  juegosMesaSection.scrollIntoView({ behavior: "smooth" });
});

// Variables globales
var carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log("Agregando producto al carrito:", producto);
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
  var index = carrito.indexOf(producto);
  if (index !== -1) {
    carrito.splice(index, 1);
    console.log("Eliminando producto del carrito:", producto);
  }
}

// Función para obtener el total de la compra
function obtenerTotalCompra() {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  console.log("Calculando total de la compra:", total);
  return total;
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
  console.log("Mostrando carrito de compras:", carrito);
}

// Función para vaciar el carrito de compras
function vaciarCarrito() {
  carrito = [];
  console.log("Vaciando carrito de compras");
}

// Eliminar producto del carrito
$(".delete-btn").click(function() {
  $(this).closest(".item").remove();
});

// Incrementar cantidad de producto
$(".plus-btn").click(function() {
  var inputField = $(this).siblings("input");
  var quantity = parseInt(inputField.val());
  quantity += 1;
  inputField.val(quantity);
});

// Decrementar cantidad de producto
$(".minus-btn").click(function() {
  var inputField = $(this).siblings("input");
  var quantity = parseInt(inputField.val());
  if (quantity > 1) {
    quantity -= 1;
    inputField.val(quantity);
  }
});

// Obtén la referencia al carrito de compras
var shoppingCart = document.getElementById('shopping-cart');

// Agrega un controlador de eventos para los botones de eliminar
var deleteButtons = shoppingCart.getElementsByClassName('delete-btn');
for (var i = 0; i < deleteButtons.length; i++) {
  var button = deleteButtons[i];
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}

// Agrega un controlador de eventos para los botones de me gusta
var likeButtons = shoppingCart.getElementsByClassName('like-btn');
for (var i = 0; i < likeButtons.length; i++) {
  var button = likeButtons[i];
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target;
    buttonClicked.classList.toggle('liked');
  });
}

// Agrega un controlador de eventos para los botones de incrementar y reducir cantidad
var plusButtons = shoppingCart.getElementsByClassName('plus-btn');
var minusButtons = shoppingCart.getElementsByClassName('minus-btn');
var quantityInputs = shoppingCart.getElementsByTagName('input');

for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener('click', function(event) {
    var buttonClicked = event.target;
    var input = buttonClicked.nextElementSibling;
    var value = parseInt(input.value);
    if (value < 10) {
      input.value = value + 1;
    }
  });
}

for (var i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener('click', function(event) {
    var buttonClicked = event.target;
    var input = buttonClicked.previousElementSibling;
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
  });
}
