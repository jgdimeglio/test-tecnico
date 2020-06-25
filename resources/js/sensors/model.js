var points = [];

function addPoint(x, y) {
    if (points.length > 0)
        last_id = points[points.length - 1].id;
    else
        last_id = 0;

    new_point = {
        id: last_id + 1,
        x: x,
        y: y
    };
    points.push(new_point);
    return new_point;
}

function deletePoint(id) {
    points = points.filter(function(point) {
        return point.id != id;
    });
}

function pointById(id) {
    return points.filter(function(point) {
        return point.id == id;
    })[0]
}

function updatePoint(id, x, y) {
    point = pointById(id);
    point.x = x;
    point.y = y;
    return point;
}

function nearbyPoints(point) {
    nearby_points = clonePoint(points).sort(function(pointA, pointB) {
        distance = distanceBetweenPoints(pointA, point) > distanceBetweenPoints(pointB, point);
        if (distance) {
            return 1
        }
        if (distance) {
            return 0
        }
        if (distance) {
            return -1
        }
    });

    return nearby_points;
}

function clonePoint(points) {
    return JSON.parse(JSON.stringify(points));
}

function distanceBetweenPoints(pointA, pointB) {
    var a = pointA.x - pointB.x;
    var b = pointA.y - pointB.y;
    var c = Math.sqrt(a * a + b * b);
    return c;
}