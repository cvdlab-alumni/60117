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

DRAW(MAP(sur5)(fus_dom2D));
DRAW(MAP(sur6)(fus_dom2D));

/*

var fus_or_cc_s7 = CUBUC_HERMITE(S0)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_s7);
var fus_or_cc_s6 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_s6);
var fus_or_cc_s5 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_s5);
var fus_or_cc_s4 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_s4);
var fus_or_cc_s3 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_s3);
var fus_or_cc_s2 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_s2);
var fus_or_cc_s1 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_s1);
var fus_or_cc_c0 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_c0);
var fus_or_cc_d1 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_d1);
var fus_or_cc_d2 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_d2);
var fus_or_cc_d3 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_d3);
var fus_or_cc_d4 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_d4);
var fus_or_cc_d5 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_d5);
var fus_or_cc_d6 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_d6);
var fus_or_cc_d7 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(fus_or_cp_d7);

DRAW(MAP(fus_or_cc_s7)(fus_dom1D));
DRAW(MAP(fus_or_cc_s6)(fus_dom1D));
DRAW(MAP(fus_or_cc_s5)(fus_dom1D));
DRAW(MAP(fus_or_cc_s4)(fus_dom1D));
DRAW(MAP(fus_or_cc_s3)(fus_dom1D));
DRAW(MAP(fus_or_cc_s2)(fus_dom1D));
DRAW(MAP(fus_or_cc_s1)(fus_dom1D));
DRAW(MAP(fus_or_cc_c0)(fus_dom1D));
DRAW(MAP(fus_or_cc_d1)(fus_dom1D));
DRAW(MAP(fus_or_cc_d2)(fus_dom1D));
DRAW(MAP(fus_or_cc_d3)(fus_dom1D));
DRAW(MAP(fus_or_cc_d4)(fus_dom1D));
DRAW(MAP(fus_or_cc_d5)(fus_dom1D));
DRAW(MAP(fus_or_cc_d6)(fus_dom1D));
DRAW(MAP(fus_or_cc_d7)(fus_dom1D));

var stab = NUBS(S1)(2)([0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,15])([
  [28,0,17],
  fus_or_cc_s7,
  fus_or_cc_s6,
  fus_or_cc_s5,
  fus_or_cc_s4,
  fus_or_cc_s3,
  fus_or_cc_s2,
  fus_or_cc_s1,
  fus_or_cc_c0,
  fus_or_cc_d1,
  fus_or_cc_d2,
  fus_or_cc_d3,
  fus_or_cc_d4,
  fus_or_cc_d5,
  fus_or_cc_d6,
  fus_or_cc_d7,
  [-28,0,17]
  ]);

DRAW(MAP(stab)(fus_dom2D));
*/

// Disegno

DRAW(grigliaxy);
DRAW(grigliaxz_ruotata);
DRAW(grigliayz_ruotata);
