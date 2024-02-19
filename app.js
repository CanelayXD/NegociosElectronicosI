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
                                <button class="btn btn-primary btn-editar">Editar</button>
                                <button class="btn btn-danger btn-eliminar">Eliminar</button>
                            </td>
                        </tr>`;
            tabla.append(fila);
        }
    }

    // Inicializar la tabla
    actualizarTabla();
});


