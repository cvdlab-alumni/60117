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

// Disegno

DRAW(grigliaxy);
DRAW(grigliaxz_ruotata);
DRAW(grigliayz_ruotata);
