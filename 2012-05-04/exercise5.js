var POLYPOINT = function (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { 
    return [i];
  }));
}

// Griglia di riferimento

var griglia = function (x1,y1,x2,y2,nx,ny) {
  var lineex= STRUCT(
        REPLICA(nx+1)(
          [POLYLINE([[x1,y1],[x1,y2]]),T([0])([(x2-x1)/nx])]
        )
      );
  var lineey = STRUCT(
        REPLICA(ny+1)(
          [POLYLINE([[x1,y1],[x2,y1]]),T([1])([(y2-y1)/ny])]
        )
      );
  return STRUCT([lineex, lineey]);
}

var grigliaxy = COLOR([0,0,1,.5])(griglia(-20,-8,20,6,40,14));
var grigliaxz = COLOR([0,1,0,.5])(griglia(-20,-20,20,10,40,30));
var grigliaxz_ruotata = R([1,2])(PI/2)(grigliaxz);
var grigliayz = COLOR([1,0,0,.5])(griglia(-20,-8,10,6,30,14));
var grigliayz_ruotata = R([0,2])(-PI/2)(grigliayz);

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

// Airstrip

var pista_bianca = STRUCT([
  COLOR([1,1,1])(SIMPLEX_GRID([[1],[1],[1]]))
]);

var pista_cemento = STRUCT([
  COLOR([0.5,0.5,0.5])(SIMPLEX_GRID([[1],[1],[1]]))
]);

var airstrip = STRUCT([
  T([1])([-9]),
  T([0,2])([-43,-76]),
  S([0,2])([20,152])(pista_cemento),
  T([0])([20]),
  S([0,2])([2,152])(pista_bianca),
  T([0])([2]),
  S([0,2])([20,152])(pista_cemento),
  T([0])([20]),
  S([0,2])([2,8])(pista_bianca),

  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),
  T([2])([8]),
  S([0,2])([2,8])(pista_cemento),
  T([2])([8]),
  S([0,2])([2,8])(pista_bianca),

  T([2])([-144]),
  T([0])([2]),
  S([0,2])([20,152])(pista_cemento),
  T([0])([20]),
  S([0,2])([2,152])(pista_bianca),
  T([0])([2]),
  S([0,2])([20,152])(pista_cemento)
]);


// Fusoliera

var fus_dom1D = INTERVALS(1)(60);
var fus_dom2D = DOMAIN([[0,1],[0,1]])([60,60]);

var fus_or_cc_1 = CUBIC_HERMITE(S0)([[0.6,0,0],[-0.6,0,0],[0,8/3,0],[0,-8/3,0]]);
var fus_or_cc_2 = CUBIC_HERMITE(S0)([[-0.6,0,0],[0.6,0,0],[0,-8/3,0],[0,8/3,0]]);

var fus_or_cc_3 = CUBIC_HERMITE(S0)([[1,0,0],[-1,0,0],[0,4,0],[0,-4,0]]);
var fus_or_cc_4 = CUBIC_HERMITE(S0)([[-1,0,0],[1,0,0],[0,-4,0],[0,4,0]]);

var fus_or_cc_5 = CUBIC_HERMITE(S0)([[1,0,-2],[-1,0,-2],[0,4,0],[0,-4,0]]);
var fus_or_cc_6 = CUBIC_HERMITE(S0)([[-1,0,-2],[1,0,-2],[0,-4,0],[0,4,0]]);

var fus_or_cc_7 = CUBIC_HERMITE(S0)([[1,0,-4],[-1,0,-4],[0,4,0],[0,-4,0]]);
var fus_or_cc_8 = CUBIC_HERMITE(S0)([[-1,0,-4],[1,0,-4],[0,-4,0],[0,4,0]]);

var fus_or_cc_9 = NUBS(S0)(2)([0,0,0,1,2,2,2])([[.7,0,-6],[.7,.7,-6],[-.7,.7,-6],[-.7,0,-6]]);
var fus_or_cc_10 = NUBS(S0)(2)([0,0,0,1,2,2,2])([[-.7,0,-6],[-.7,-.7,-6],[.7,-.7,-6],[.7,0,-6]]);

DRAW(MAP(fus_or_cc_1)(fus_dom1D));
DRAW(MAP(fus_or_cc_2)(fus_dom1D));
DRAW(MAP(fus_or_cc_3)(fus_dom1D));
DRAW(MAP(fus_or_cc_4)(fus_dom1D));
DRAW(MAP(fus_or_cc_5)(fus_dom1D));
DRAW(MAP(fus_or_cc_6)(fus_dom1D));
DRAW(MAP(fus_or_cc_7)(fus_dom1D));
DRAW(MAP(fus_or_cc_8)(fus_dom1D));
DRAW(MAP(fus_or_cc_9)(fus_dom1D));
DRAW(MAP(fus_or_cc_10)(fus_dom1D));

var sur5 = NUBS(S1)(2)([0,0,0,1,2,3,3,3])([
  fus_or_cc_1,
  fus_or_cc_3,
  fus_or_cc_5,
  fus_or_cc_7,
  fus_or_cc_9
  ]);

var sur6 = NUBS(S1)(2)([0,0,0,1,2,3,3,3])([
  fus_or_cc_2,
  fus_or_cc_4,
  fus_or_cc_6,
  fus_or_cc_8,
  fus_or_cc_10
  ]);

var fus_up = MAP(sur5)(fus_dom2D);
var fus_dw = MAP(sur6)(fus_dom2D);
var fusoliera = STRUCT([fus_up, fus_dw]);

// Disegno

DRAW(grigliaxy);
DRAW(grigliaxz_ruotata);
DRAW(grigliayz_ruotata);

var ali_model_S_R = R([0,2])(-PI/2)(S([0,1,2])([7.5/36,7.5/36,7.5/36])(ali_model));

var ali = STRUCT([T([1])([4]),ali_model_S_R,T([1,2])([-6,-2.5]),ali_model_S_R]);


var fusoliera_S = S([0,1,2])([2,2,2])(fusoliera);
DRAW(T([2])([9])(fusoliera_S));

DRAW(ali);

DRAW(airstrip);