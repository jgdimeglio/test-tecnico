<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <!-- Styles -->
        <style>
            .sensors{
                width: 400px;
                height: 200px;
                border: 1px solid black;
                margin-left: auto;
                margin-right: auto;
                position: relative;
            }
            .point {
                height: 20px;
                width: 20px;
                background-color: black;
                border-radius: 50%;
                position: absolute;
                cursor: pointer;
                color: white;
                text-align: center;
            }
            .buttons {
                padding: 5px;
                width: 400px;
                margin-left: auto;
                margin-right: auto;
            }
        </style>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <script src="../resources/js/sensors/model.js"></script>
        <script src="../resources/js/sensors/view.js"></script>
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm" style="margin-bottom: 1rem">
            <div class="header-container">
                <a class="navbar-brand" href="https://curriculumya.com/">Mesa de Sensores</a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarCollapse" style="" class="navbar-collapse collapse clearfix">
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="sensors">
            </div>
            <div class="buttons">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="new-x">X (0-400)</label>
                        <input type="number" class="form-control" id="new-x">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="new-y">Y (0-200)</label>
                        <input type="number" class="form-control" id="new-y">
                    </div>
                </div>
                <button type="button" class="btn btn-primary" id="new-point">Agregar</button>
                <p>NOTA: Presione sobre cada punto para ver sus acciones y detalles.<P>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Detalle</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="update-x">X (0-400)</label>
                                <input type="number" class="form-control" id="update-x">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="update-y">Y (0-200)</label>
                                <input type="number" class="form-control" id="update-y">
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger" id="delete-point">Borrar</button>
                        <button type="button" class="btn btn-primary" id="update-point">Actualizar</button>
                        <hr>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="nearest-point-limit">Límite</label>
                                <input type="number" class="form-control" id="nearest-point-limit">
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" id="nearby-points">Cercanos</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>

