//SEGUNDA PRE-ENTREGA
const PRODUCTOS = [
    {
        nombre: "perchero",
        precio: 10,
        stock: 10
    },
    {
        nombre: "rascador",
        precio: 20,
        stock: 10
    },
    {
        nombre: "recogedor",
        precio: 30,
        stock: 10
    },
    {
        nombre: "collar",
        precio: 40,
        stock: 10
    },
    {
        nombre: "cama",
        precio: 10,
        stock: 10
    },
    {
        nombre: "alimento para perros",
        precio: 20,
        stock: 10
    },
    {
        nombre: "corta uñas canino",
        precio: 30,
        stock: 10
    },
    {
        nombre: "cepillo para mascota",
        precio: 40,
        stock: 10
    },
];

let carrito = [];

PRODUCTOS.forEach(function(producto) {
    const AGREGAR = prompt("Desea agregar " + producto.nombre + " al carrito? (SI/NO)").toUpperCase();
    if (AGREGAR === "SI" && producto.stock > 0) {
        carrito.push(producto);
        producto.stock--; // Resta 1 al stock del producto
        console.log(producto.nombre + " agregado al carrito.");
    } else {
        alert(producto.nombre + " no agregado al carrito.");
    }
});

// Calcular el precio total del carrito
const precioTotal = carrito.reduce(function(acumulador, producto) {
    return acumulador + producto.precio;
}, 0);

alert("El precio total del carrito es: $" + precioTotal);



