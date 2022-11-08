const comprar = document.getElementById("comprar");
const borrarCarrito = document.getElementById("borrar");


//aqui observar la palabra click va tal cual, si no, no funciona!
comprar.addEventListener("click", ejecutarCompra);
borrarCarrito.addEventListener("click", borrarCompra);


//CONSTRUCTOR DE OBJETOS
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto("Telefono Samsung", 350);
const producto2 = new Producto("Notebook ASUS", 450);
const producto3 = new Producto("Notebook Toshiba", 320);
const producto4 = new Producto("Notebook HP", 480);

//ARRAY DE PRODUCTOS
const productos = [producto1, producto2, producto3, producto4];



//ASIGNA PRODUCTO AL CARRITO
function capturar() {
    carrito.push(productos[0])
    alert("Producto agregado")
    console.log(carrito);
}
function capturar2() {
    carrito.push(productos[1])
    alert("Producto agregado")
    console.log(carrito);
}
function capturar3() {
    carrito.push(productos[2])
    alert("Producto agregado")
    console.log(carrito);
}
function capturar4() {
    carrito.push(productos[3])
    alert("Producto agregado")
    console.log(carrito);
}


//CARRITO VACIO
carrito = [];



function ejecutarCompra() {
    const precioConIva = carrito.map((el) => {
        return {
            nombre: el.nombre,
            precio: el.precio * 1.21
        }
    })


    const totalSinIva = carrito.reduce((acc, el) => acc + el.precio, 0)
    const totalConIva = precioConIva.reduce((acc, el) => acc + el.precio, 0)
    console.log(`Costo total de la compra sin IVA $${totalSinIva}`);
    console.log(`Costo total de la compra con IVA (21%) $${totalConIva}`);
    
}



function borrarCompra() {


    carrito.splice(0, carrito.length)

    console.log("Carrito borrado");
    console.log(carrito);
} 