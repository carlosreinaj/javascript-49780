// let i = 0;
// let subtotal = 0
// do {
//     let mascota = prompt("¿Qué tipo de producto buscas? (Perro/Gato)").toLowerCase();
//     let precioProducto;
//     let cantidad = 0;
//     if (mascota === "perro" || mascota === "gato") {
//         let e = 0;
//         do {
//             let producto = prompt(`Selecciona el producto que deseas comprar (ingrese A, B, C o D):
// 	(A) Perchero ($10.00);
//  (B) Rascador ($10.00);
// 	(C) Recogedor ($11.00);
// 	(D) Cuenco ($10.00).`).toUpperCase();

//             switch (producto) {
//                 case "A":
//                     precioProducto = 10;
//                     e = 1;
//                     break;
//                 case "B":
//                     precioProducto = 10;
//                     e = 1;
//                     break;
//                 case "C":
//                     precioProducto = 11;
//                     e = 1;
//                     break;
//                 case "D":
//                     precioProducto = 10;
//                     break;
//                 default:
//                     alert("Seleccione una opción válida (A, B, C o D)");
//                     break;
//             }
//         } while (e != 1)

//         e = 0;
//         do {
//             cantidad = parseFloat(prompt("Ingrese la cantidad de su producto"));
//             if (!isNaN(cantidad)) {
//                 e = 1
//             } else {
//                 alert("Amigo escriba un numero");
//             }
//         } while (e != 1)

//         if (precioProducto !== undefined) {
//             function calculadoraProductos(producto, cantidad) {
//                 return producto * cantidad;
//             }

//             subtotal = calculadoraProductos(precioProducto, cantidad);
//             alert("El subtotal es $" + subtotal.toFixed(2));
//         }
//         i = 1;
//     } else {
//         alert("Seleccione un tipo de mascota entre perro y gato");
//     }
// } while (i != 1)
// i = 0;
// let descuentoMetodo = 0;
// do {
//     let metodoPago = prompt("¿Qué metodo de pago ca a utilizar? (Paypal/credito/efectivo)").toLowerCase();
//     switch (metodoPago) {
//         case "paypal":
//             descuentoMetodo = 5;
//             i = 1;
//             break;
//         case "credito":
//             descuentoMetodo = 20;
//             i = 1;
//             break;
//         case "efectivo":
//             descuentoMetodo = 10;
//             i = 1;
//             break;
//         default:
//             alert("Seleccione una opción válida de pago");
//             break;
//     }

// } while (i != 1)

// function calculadoraDescuento(descuento, subtotal) {
//     return subtotal - (subtotal * (descuento / 100));
// }

// alert("El total es: " + calculadoraDescuento(descuentoMetodo, subtotal).toFixed(2));



//SEGUNDA ENTREGA


// function Producto(nombre, precio, stock){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.profesion = profesion,
//     this.ingreso = ingreso
// }

// const PRODUCTO_UNO = new Empleado("perchero", 10, 10);
// const PRODUCTO_DOS = new Empleado("rascador", 20, 10);
// const PRODUCTO_TRES = new Empleado("recogedor", 30, 10);
// const PRODUCTO_CUATRO = new Empleado("collar", 40, 10);
// const PRODUCTO_CINCO = new Empleado("cama", 10, 10);
// const PRODUCTO_SEIS = new Empleado("alimento para perros", 20, 10);
// const PRODUCTO_SIETE = new Empleado("corta uñas canino", 30, 10);
// const PRODUCTO_OCHO = new Empleado("cepillo para mascota", 40, 10);

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



