<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto U1</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/all.min.css" rel="stylesheet">
</head>

<body>

<div class="container py-3">
    <h2 class="text-center">PRODUCTOS</h2>


<div class="row justify-content-end">
<div class="col-auto">
    <a href="#" class="btn btn-primary" data-bs-toggle="modal"
    data-bs-target="#nuevoModal"><i class="fa-solid fa-circle-plus"></i>
    Agregar Producto</a>
</div>
</div>

<table class="table table-sm table-striped table-hover mt-4">
    <thead class="table-dark">
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Imagen</th>
        <th>Categoria</th>
        <th>Acción</th>
    </tr>
    </thead>
<tbody>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>
            <a href="#" class="btn btn-sm btn-warning" data-bs-toggle="modal"
            data-bs-target="#editaModal"><i class="fa-solid fa-pen-to-square"></i></a>
             <a href="#" class="btn btn-sm btn-danger"> <i class="fa-solid fa-trash-can"></i></a>
        </th>
    </tr>
</tbody>
</table>

<?php include 'Agregar.php';?>
<?php include 'Modificar.php';?>

    <script src="js/bootstrap.bundle.min.js"></script>
</body>

</html>