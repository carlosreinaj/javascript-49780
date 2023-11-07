// const MASCOTA = prompt("¿Que tipo de producto buscas? (Perro/Gato)");

// if(MASCOTA === "Perro"){
//     let producto = prompt("Selecciona el producto que deseas comprar (ingrese A, B, C o D): (A) Perchero ($10.00); (B) Rascador ($10.00); (C) Recogedor ($11.00); (D) Cuenco ($10.00)."));
//     let cantidad = parseFloat(prompt("ingrese la cantidad de su producto"));
//     if (producto === "A"){
//         producto = 10
//     } else if (producto === "B"){
//         producto = 10
//     } else if (producto === "C"){
//         producto = 11
//     } else if (producto === "D"){
//         producto = 10
//     }
//     function calculadoraProductos(producto, cantidad){
//         let resultado = producto * cantidad;
//         return  resultado;
//     }
//     let subtotal = calculadoraProductos(producto, cantidad);
//     alert("el subtotal es " + "$" + subtotal)

// }else if(MASCOTA === "Gato"){
//     let producto = prompt("Selecciona el producto que deseas comprar (ingrese A, B, C o D): (A) Cama-gatos ($13.00); (B) Caja de arena ($21.00); (C) Juguete-gato ($1.50); (D) Rascadero ($6.50).");
//     let cantidad = parseFloat(prompt("ingrese la cantidad de su producto"));
//     if (producto === "A"){
//         producto = 13
//     } else if (producto === "B"){
//         producto = 21
//     } else if (producto === "C"){
//         producto = 1.5
//     } else if (producto === "D"){
//         producto = 6.5
//     }
//     function calculadoraProductos(producto, cantidad);
//     let subtotal = calculadoraProductos(producto, cantidad)
//     alert("el subtotal es " + "$" + subtotal)
    
//     }else {
//     alert("Seleccione un tipo de mascota entre perro y gato");
// }



const MASCOTA = prompt("¿Qué tipo de producto buscas? (Perro/Gato)").toLowerCase();

if (MASCOTA === "perro" || MASCOTA === "gato") {
    const producto = prompt(`Selecciona el producto que deseas comprar (ingrese A, B, C o D):
    (A) Perchero ($10.00);
    (B) Rascador ($10.00);
    (C) Recogedor ($11.00);
    (D) Cuenco ($10.00).`).toUpperCase();

    const cantidad = parseFloat(prompt("Ingrese la cantidad de su producto"));

    let precioProducto;

    switch (producto) {
        case "A":
            precioProducto = 10;
            break;
        case "B":
            precioProducto = 10;
            break;
        case "C":
            precioProducto = 11;
            break;
        case "D":
            precioProducto = 10;
            break;
        default:
            alert("Seleccione una opción válida (A, B, C o D)");
            break;
    }

    if (precioProducto !== undefined) {
        function calculadoraProductos(producto, cantidad) {
            return producto * cantidad;
        }

        const subtotal = calculadoraProductos(precioProducto, cantidad);
        alert("El subtotal es $" + subtotal.toFixed(2));
    }
} else {
    alert("Seleccione un tipo de mascota entre perro y gato");
}


