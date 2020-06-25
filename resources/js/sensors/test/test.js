var path = './model.js';


var fs = require('fs');
var vm = require('vm');
var assert = require('assert');

var code = fs.readFileSync(path);
vm.runInThisContext(code);


describe('Points test', function () {
  describe('Add new points', function () {
    it('Should return 1 the size of the list when adding a new point', function () {
        addPoint(1, 1);
        assert.equal(points.length, 1);
    });
    it('Should return 2 the size of the list when adding two points', function () {
        points = [];
        addPoint(1, 1);
        addPoint(25, 30);
        assert.equal(points.length, 2);
    });
    it('Should be the same point added to the list', function () {
        points = [];
        addPoint(100, 100);
        assert.equal(points[0].id, 1);
        assert.equal(points[0].x, 100);
        assert.equal(points[0].y, 100);
    });
  });
  describe('Elimination of points', function () {
    it('Should return 1 the size of the list if its single point is removed', function () {
        points = [];
        addPoint(100, 100);
        deletePoint(1);
        assert.equal(points.length, 0);
    });
    it('Should return 2 the list size if one of the three dots is removeS', function () {
        points = [];
        addPoint(1, 1);
        addPoint(25, 30);
        addPoint(100, 100);
        deletePoint(2);
        assert.equal(points.length, 2);
    });
    it('Should remove the correct point by id', function () {
        points = [];
        addPoint(1, 1);
        addPoint(25, 30);
        deletePoint(1);
        assert.equal(points[0].id, 2);
    });
  });
  describe('Nearby points', function () {
    it('Should return the closest points of the current one', function () {
        points = [];
        addPoint(150, 100); // id 1
        addPoint(50, 100); // id 2
        addPoint(0, 0); // id 3
        addPoint(250, 125); // id 4
        assert.equal(nearbyPoints(points[3])[1].id, 2);
        assert.equal(nearbyPoints(points[3])[2].id, 3);
        assert.equal(nearbyPoints(points[3])[3].id, 4);
    });
  });
});
