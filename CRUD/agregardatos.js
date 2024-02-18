document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("Formulario");
    const lista = document.getElementById("Lista");

    formulario.addEventListener("submit", function(event){ // Cambiamos el evento de click a submit
        event.preventDefault();

        const producto = document.getElementById("Producto").value;
        const descripcion = document.getElementById("Descripcion").value;
        const precio = document.getElementById("Precio").value;
        const imagen = document.getElementById("Imagen").value;
        const categoria = document.getElementById("Categoria").value;

        const elemento = document.createElement("li");
        elemento.textContent = `Producto: ${producto}, Descripción: ${descripcion}, Precio: ${precio}, Imagen: ${imagen}, Categoría: ${categoria}`;

        lista.appendChild(elemento);

        formulario.reset();
    });
});
