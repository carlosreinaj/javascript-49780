const MASCOTA = parseFloat(prompt("¿Que tipo de producto buscas? (Perro/Gato)"));

if(MASCOTA === "Perro"){
    function calculadoraProductosPerro(){
        let producto = parseFloat(prompt("Selecciona el producto que deseas comprar (ingrese A, B, C o D): (A) Perchero ($10.00); (B) Rascador ($10.00); (C) Recogedor ($11.00); (D) Cuenco ($10.00)."));
        let totalConDes= total - desc;
        return  totalConDes;
    }
    let totalConDescuento = calculadoraConDescuento(28, 2);
    console.log("el total con descuento es: " + totalConDescuento);
}else if(MASCOTA ==="gato"){
    function calculadoraProductosGato(){
        let desc = (total*descuento)/100;
        let totalConDes= total - desc;
        return  totalConDes;
    }
    let totalConDescuento = calculadoraConDescuento(28, 2);
    console.log("el total con descuento es: " + totalConDescuento);
} else{
    alert("Seleccione un tipo de mascota entre perro y gato");
}







function calculadoraproductos(){
    let desc = (total*descuento)/100;
    let totalConDes= total - desc;
    return  totalConDes;
}
let totalConDescuento = calculadoraConDescuento(28, 2);
console.log("el total con descuento es: " + totalConDescuento);