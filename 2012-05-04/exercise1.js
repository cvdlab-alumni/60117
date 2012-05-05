var POLYPOINT = function (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { 
    return [i];
  }));
}

// Ali

var ali_dom1D = INTERVALS(1)(30);
var ali_dom2D = DOMAIN([[0,1],[0,1]])([15,30]);

var ali_cp_c0 = [[0,0.6,0],[6,2.1,0],[12,3.5,0],[18,4.2,0],[24,4.8,0],[30,4.2,0],[34,3,0],[35,2.6,0],[36,2,0],[37,1.5,0],[38,1,0],[37,1.5,0],[36,2,0],[34,2.4,0],[30,3,0],[24,3,0],[18,3,0],[12,2.5,0],[6,1.5,0],[0,0.6,0]];
var ali_cp_d1 = ali_cp_c0.map(function (p) {return [p[0], p[1], p[2]-6*36/7.5]});
var ali_cp_s1 = ali_cp_c0.map(function (p) {return [p[0], p[1], p[2]+6*36/7.5]});
var ali_cp_d2 = ali_cp_c0.map(function (p) {return [p[0], p[1]+0.5*36/7.5, p[2]-12*36/7.5]});
var ali_cp_s2 = ali_cp_c0.map(function (p) {return [p[0], p[1]+0.5*36/7.5, p[2]+12*36/7.5]});
var ali_cp_d3 = ali_cp_c0.map(function (p) {return [p[0], p[1]+1*36/7.5, p[2]-18*36/7.5]});
var ali_cp_s3 = ali_cp_c0.map(function (p) {return [p[0], p[1]+1*36/7.5, p[2]+18*36/7.5]});
var ali_cpmodel = STRUCT(AA(POLYPOINT)([ali_cp_c0,ali_cp_d1,ali_cp_s1,ali_cp_d2,ali_cp_s2,ali_cp_d3,ali_cp_s3]));

var ali_cc = AA(BEZIER(S0))([ali_cp_d3,ali_cp_d2,ali_cp_d1,ali_cp_c0,ali_cp_s1,ali_cp_s2,ali_cp_s3]);
var ali_ccmodel = STRUCT(CONS(AA(MAP)(ali_cc))(ali_dom1D));

var ali_sup = BEZIER(S1)(ali_cc);
var ali_model = MAP(ali_sup)(ali_dom2D);

// Disegno

DRAW(ali_cpmodel);
DRAW(ali_ccmodel);
DRAW(ali_model);