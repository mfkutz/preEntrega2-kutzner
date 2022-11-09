const comprar = document.getElementById("comprar");
const borrarCarrito = document.getElementById("borrar");
const filtrar = document.getElementById("filtrar");


//aqui observar la palabra click va tal cual, si no, no funciona!
comprar.addEventListener("click", ejecutarCompra);
borrarCarrito.addEventListener("click", borrarCompra);
filtrar.addEventListener("click", filtrarPrecio);


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
    carrito.push(productos[0]);
    alert("Producto agregado");
    console.log(carrito);
}
function capturar2() {
    carrito.push(productos[1]);
    alert("Producto agregado");
    console.log(carrito);
}
function capturar3() {
    carrito.push(productos[2]);
    alert("Producto agregado");
    console.log(carrito);
}
function capturar4() {
    carrito.push(productos[3]);
    alert("Producto agregado");
    console.log(carrito);
}


//CARRITO VACIO
carrito = [];


//FUNCION PARA REALIZAR LA COMPRA
function ejecutarCompra() {
    
    let confirmacion = prompt(`Desea realizar la compra? \n escriba "1" para confirmar `);

    if(confirmacion === "1"){
        const precioConIva = carrito.map((el) => {
            return {
                nombre: el.nombre,
                precio: el.precio * 1.21
            }
        })
    
        const totalSinIva = carrito.reduce((acc, el) => acc + el.precio, 0);
        const totalConIva = precioConIva.reduce((acc, el) => acc + el.precio, 0);
        console.log("Compra exitosa ");
        carrito.forEach( (ticket)=> {
            console.log(ticket);
        });

        console.log(`Costo total de la compra sin IVA $${totalSinIva}`);
        console.log(`Costo total de la compra con IVA (21%) $${totalConIva}`);

    }else{
        console.log("Compra cancelada");
    }
}

function borrarCompra() {
    carrito.splice(0, carrito.length);
    console.log("Carrito borrado");
    console.log(carrito);
} 

//FILTRADO SEGUN CAPITAL
function filtrarPrecio(){
    let precioMaximo = parseInt(prompt("Ingrese el monto disponible"));

    const filtrado = productos.filter((el)=>el.precio <= precioMaximo);

    if(filtrado == ""){
        console.log("dinero insuficiente");
    }else{
        console.log("Puede comprar cualquiera de estos " + filtrado.length + " productos");
    }

    console.log(filtrado);
}