// Mensaje de bienvenida
console.log("Bienvenido a Pizza Hot");

// Mostrar información en un contenedor
function mostrarPizza(nombre, precio) {
    const info = document.getElementById("info-pizza");
    info.innerHTML = `<h4>${nombre}</h4><p>Precio: ${precio}</p>`;
}
