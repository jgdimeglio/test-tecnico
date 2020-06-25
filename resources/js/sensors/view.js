var current_point;

function pointView(point) {
    new_point = $('<div class="point" id="' + point.id + '"></div>');
    new_point.css('left', point.x - 6);
    new_point.css('top', point.y - 6);
    new_point.click(function() {
        detailsPoint(point);
    })
    $('.sensors').append(new_point);
}

function updatePointView(point) {
    new_point = $('#' + point.id);
    new_point.css('left', point.x - 6);
    new_point.css('top', point.y - 6);
    $('#exampleModal').modal('hide');
}

function removePointView(point) {
    $('#' + point.id).remove();
    $('#exampleModal').modal('hide');
}

function detailsPoint(point) {
    current_point = point;
    $('#update-x').val(current_point.x);
    $('#update-y').val(current_point.y);
    $('#exampleModal').modal();
}

function renderNearbyPoints(nearby_points, nearest_point_limit) {
    for (var i = 0; i < nearby_points.length; i++) {
        if (i >= nearest_point_limit + 1) {
            point = nearby_points[i];
            $('#' + point.id).text('');
        } else {
            if (i != 0) {
                point = nearby_points[i];
                $('#' + point.id).text(i);
            } else {
                point = nearby_points[i];
                $('#' + point.id).text('');
            }
        }

    }
    $('#exampleModal').modal('hide');
}


function validateXY(x, y) {
    if (x > 400 || x < 0) {
        alert("X fuera de rango.");
        return false;
    }
    if (y > 200 || y < 0) {
        alert("Y fuera de rango.");
        return false;
    }
    return true;
}

$(function() {
    $('#new-point').click(function(e) {

        var x = $('#new-x').val();
        var y = $('#new-y').val();

        if (x && y) {
            x = parseInt(x);
            y = parseInt(y);

            if (!validateXY(x, y)) {
                return;
            }

            point = addPoint(x, y);
            pointView(point);

            $('#new-x').val('');
            $('#new-y').val('')
        }
    });

    $('#update-point').click(function(e) {

        var x = $('#update-x').val();
        var y = $('#update-y').val();

        if (x && y) {
            x = parseInt(x);
            y = parseInt(y);

            if (!validateXY(x, y)) {
                return;
            }

            point = updatePoint(current_point.id, x, y);
            updatePointView(point);
        }
    })

    $('#delete-point').click(function(e) {
        deletePoint(current_point.id);
        removePointView(current_point);
    })

    $('#nearby-points').click(function(e) {
        nearby_points = nearbyPoints(current_point);

        nearest_point_limit = $('#nearest-point-limit').val();

        if (nearest_point_limit) {
            nearest_point_limit = parseInt(nearest_point_limit);
            renderNearbyPoints(nearby_points, nearest_point_limit);
        } else {
            alert("Ingrese un límite.");
        }
    })

})