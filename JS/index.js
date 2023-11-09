let i = 0;
let subtotal = 0
do {
    let mascota = prompt("¿Qué tipo de producto buscas? (Perro/Gato)").toLowerCase();
    let precioProducto;
    let cantidad = 0;
    if (mascota === "perro" || mascota === "gato") {
        let e = 0;
        do {
            let producto = prompt(`Selecciona el producto que deseas comprar (ingrese A, B, C o D):
	(A) Perchero ($10.00);
    (B) Rascador ($10.00);
	(C) Recogedor ($11.00);
	(D) Cuenco ($10.00).`).toUpperCase();

            switch (producto) {
                case "A":
                    precioProducto = 10;
                    e = 1;
                    break;
                case "B":
                    precioProducto = 10;
                    e = 1;
                    break;
                case "C":
                    precioProducto = 11;
                    e = 1;
                    break;
                case "D":
                    precioProducto = 10;
                    break;
                default:
                    alert("Seleccione una opción válida (A, B, C o D)");
                    break;
            }
        } while (e != 1)

        e = 0;
        do {
            cantidad = parseFloat(prompt("Ingrese la cantidad de su producto"));
            if (!isNaN(cantidad)) {
                e = 1
            } else {
                alert("Amigo escriba un numero");
            }
        } while (e != 1)

        if (precioProducto !== undefined) {
            function calculadoraProductos(producto, cantidad) {
                return producto * cantidad;
            }

            subtotal = calculadoraProductos(precioProducto, cantidad);
            alert("El subtotal es $" + subtotal.toFixed(2));
        }
        i = 1;
    } else {
        alert("Seleccione un tipo de mascota entre perro y gato");
    }
} while (i != 1)
i = 0;
let descuentoMetodo = 0;
do {
    let metodoPago = prompt("¿Qué metodo de pago ca a utilizar? (Paypal/credito/efectivo)").toLowerCase();
    switch (metodoPago) {
        case "paypal":
            descuentoMetodo = 5;
            i = 1;
            break;
        case "credito":
            descuentoMetodo = 20;
            i = 1;
            break;
        case "efectivo":
            descuentoMetodo = 10;
            i = 1;
            break;
        default:
            alert("Seleccione una opción válida de pago");
            break;
    }

} while (i != 1)

function calculadoraDescuento(descuento, subtotal) {
    return subtotal - (subtotal * (descuento / 100));
}

alert("El total es: " + calculadoraDescuento(descuentoMetodo, subtotal).toFixed(2));

