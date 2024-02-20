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
        } else {
            
        }

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


