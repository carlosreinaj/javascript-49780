
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
        const cantidad = prompt("Ingrese la cantidad de " + producto.nombre + " que desea agregar al carrito:");

        if (cantidad > 0 && cantidad <= producto.stock) {
            for (let i = 0; i < cantidad; i++) {
                carrito.push({ ...producto, cantidad: 1 }); // Agrega el producto al carrito con la cantidad especificada
                producto.stock--; // Resta 1 al stock del producto
            }
            alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
        } else {
            alert(`Cantidad no válida o insuficiente stock para ${producto.nombre}.`);
        }
    } else {
        alert("Producto no agregado al carrito.");
    }
});

// Calcular el precio total del carrito
const precioTotal = carrito.reduce(function(acumulador, producto) {
    return acumulador + producto.precio * producto.cantidad;
}, 0);

alert(`El precio total del carrito es: ${precioTotal}`);






