let ingresar = document.getElementById("comprobar")
let footer = document.getElementById("footer")
let parrafo = document.getElementById("parrafo")
let fecha = document.getElementById("parrafo");

fecha.innerHTML = new Date();



console.log(footer.innerHTML);
console.log(parrafo.innerHTML)


//USUARIOS REGISTRADOS
const usuarios = [
    { usuario: "admin", pass: "000" },
    { usuario: "martin", pass: "123" },
]


ingresar.addEventListener("click", respuestaClic)

function respuestaClic() {

    let entrada = document.getElementById("entrada").value;
    let entradaP = document.getElementById("entradaP").value;
    let verificaUsuario = usuarios.some((x) => x.usuario === entrada);
    let verificaPassword = usuarios.some((x) => x.pass === entradaP);

    if((verificaUsuario == verificaPassword) && verificaPassword != ""  ){
            console.log("Usuario y contraseña CORRECTOS");
            window.location.href = "../views/productos.html";
            
            console.log(entrada);
    }else{
        console.log("Usuario o contraseña INCORRECTOS");
        alert("Usuario o contraseña incorrectos")
    }

    console.log(entrada);
    console.log(verificaUsuario);




}