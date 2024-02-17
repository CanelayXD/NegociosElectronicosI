<!-- Modal -->
<div class="modal fade" id="editaModal" tabindex="-1" aria-labelledby="editaModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editaModalLabel">Editar Producto</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="guardar.php" method="post" enctype="multipart/form-data">
    
        <div class="mb-3">
            <label for="id" class="form-label">Id:</label>
            <input type="number" name="id" id="id" class="form-control" required>
        </div>

        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input type="text" name="nombre" id="nombre" class="form-control" required>
        </div>
        
        <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción:</label>
            <textarea name="descripcion" id="descripcion" class="form-control" rows="3" required></textarea>
        </div>

        <div class="mb-3">
            <label for="precio" class="form-label">Precio:</label>
            <input type="float" name="precio" id="precio" class="form-control" required>
        </div>

        <div class="mb-3">
            <label for="imagen" class="form-label">Imagen:</label>
            <input name="file" name="imagen" id="imagen" class="form-control">
        </div>

        <div class="mb-3">
            <label for="categoria" class="form-label">Categoría:</label>
            <input type="text" name="categoria" id="cat" class="form-control" required>
        </div>

        <div class="col-auto">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> 
        Guardar</button>
        </div>

</form>
      </div>
    </div>
  </div>
</div>