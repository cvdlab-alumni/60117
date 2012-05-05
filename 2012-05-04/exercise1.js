var dom1D = INTERVALS(1)(30);
var dom2D = DOMAIN([[0,1],[0,1]])([15,30]);

var c0 = [[0,0.6,0],[6,2.1,0],[12,3.5,0],[18,4.2,0],[24,4.8,0],[30,4.2,0],[34,3,0],[35,2.6,0],[36,2,0],[37,1.5,0],[38,1,0],[37,1.5,0],[36,2,0],[34,2.4,0],[30,3,0],[24,3,0],[18,3,0],[12,2.5,0],[6,1.5,0],[0,0.6,0]];
var d1 = c0.map(function (p) {return [p[0], p[1], p[2]-6*36/7.5]});
var s1 = c0.map(function (p) {return [p[0], p[1], p[2]+6*36/7.5]});
var d2 = c0.map(function (p) {return [p[0], p[1]+0.5*36/7.5, p[2]-12*36/7.5]});
var s2 = c0.map(function (p) {return [p[0], p[1]+0.5*36/7.5, p[2]+12*36/7.5]});
var d3 = c0.map(function (p) {return [p[0], p[1]+1*36/7.5, p[2]-18*36/7.5]});
var s3 = c0.map(function (p) {return [p[0], p[1]+1*36/7.5, p[2]+18*36/7.5]});

var POLYPOINT = function (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { 
    return [i];
  }));
}
var curvesPoints = STRUCT(AA(POLYPOINT)([c0,d1,s1,d2,s2,d3,s3]));
DRAW(curvesPoints);

var controls = AA(BEZIER(S0))([d3,d2,d1,c0,s1,s2,s3]);

var curves = STRUCT(CONS(AA(MAP)(controls))(dom1D));

DRAW(curves);

var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(dom2D);
DRAW(surf);