$(document).ready(function() {
    var data = [];

    function actualizarTabla() {
        var tabla = $("#lista tbody");
        tabla.empty();

        for (var i = 0; i < data.length; i++) {
            var producto = data[i];
            var fila = `<tr data-index="${i}">
                            <td>${producto.ID}</td>
                            <td>${producto.Categoria}</td>
                            <td>${producto.Nombre}</td>
                            <td>${producto.Descripcion}</td>
                            <td>
                            <button class="btn btn-primary btn-editar"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-danger btn-eliminar"><i class="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>`;
            tabla.append(fila);
        }
    }

    // Agregar o editar un producto
    $("#agregarEditar").click(function() {
        var id = $("#ID").val();
        var categoria = $("#Categoria").val();
        var nombre = $("#Nombre").val();
        var descripcion = $("#Descripcion").val();
        var editIndex = $("#editIndex").val();

        if (editIndex === "") {
            // Agregar nuevo producto
            data.push({
                ID: id,
                Categoria: categoria,
                Nombre: nombre,
                Descripcion: descripcion
            });
        } else {//inicio Else
            //Se edita un producto que ya existe
            
            data[editIndex].ID = id;
            //Data es el tipo de arreglo, el cual modificara un parametro en especifico llamando "editIndex" cuya propiedad es ID y se le asgina el valor del "id"
            data[editIndex].Categoria = categoria;
            //El arreglo data modificara un valor en especifico llamado categoria
            data[editIndex].Nombre = nombre;
            //El arreglo asigna el nombre del arreglo de nombre
            data[editIndex].Descripcion = descripcion;
            //El arreglo asigna la propiedad de descripción
            $("#editIndex").val(""); //El signo "$" esta seleccionando una libreria de jQuery
            //La propiedad "#editIndex" es un elemento especifico que coincida con el id y ".val("")" establece un valor predeterminado
        }//fin else

        //Limpiar formulario

        $("#ID").val("");
        $("#Categoria").val("");
        $("#Nombre").val("");
        $("#Descripcion").val("");
        
        // Actualizar la tabla
        actualizarTabla();
    });



    $("#lista").on("click", ".btn-eliminar", function() {
        var index = $(this).closest("tr").data("index");
        data.splice(index, 1);
        actualizarTabla();
    });

    // Inicializar la tabla
    actualizarTabla();
});


