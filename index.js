

let ingresar = document.getElementById("comprobar");
let footer = document.getElementById("footer");
let parrafo = document.getElementById("parrafo");
let fecha = document.getElementById("parrafo");

fecha.innerHTML = new Date();

console.log(footer.innerHTML);
console.log(parrafo.innerHTML);


//USUARIOS REGISTRADOS
const usuarios = [
    { usuario: "Admin", pass: "123" },
    { usuario: "martin", pass: "000" },
]
ingresar.addEventListener("click", respuestaClic);

function respuestaClic() {

    let entrada = document.getElementById("entrada").value;
    let entradaP = document.getElementById("entradaP").value;
    let verificaUsuario = usuarios.some((x) => x.usuario === entrada);
    let verificaPassword = usuarios.some((x) => x.pass === entradaP);

    if((verificaUsuario == verificaPassword) && verificaPassword != ""  ){
            console.log("Usuario y contraseña CORRECTOS");
            location.href = "views/productos.html";
    }else{
        alert("Usuario o contraseña incorrectos \n (Distingue minusculas y mayusculas)");
    }
    console.log(verificaUsuario);
}