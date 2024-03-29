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

// Stabilizzatore orizzontale

var stab_dom1D = INTERVALS(1)(60);
var stab_dom2D = DOMAIN([[0,1],[0,1]])([60,60]);

var stab_or_cp = [[0,0,0],[0,1,6],[0,2,13],[0,1.5,18],[0,0,20],[0,-1.5,18],[0,0,13],[0,0,6],[0,0,0]];

var stab_or_cp_s7 = stab_or_cp.map(function (p) {return [p[0]+26, p[1]/2, p[2]/2+10]});
var stab_or_cp_s6 = stab_or_cp.map(function (p) {return [p[0]+24, p[1], p[2]*17/20+3]});
var stab_or_cp_s5 = stab_or_cp.map(function (p) {return [p[0]+22, p[1], p[2]]});
var stab_or_cp_s4 = stab_or_cp.map(function (p) {return [p[0]+8, p[1], p[2]]});
var stab_or_cp_s3 = stab_or_cp.map(function (p) {return [p[0]+6, p[1], p[2]*19.7/20+0.3]});
var stab_or_cp_s2 = stab_or_cp.map(function (p) {return [p[0]+4, p[1], p[2]*18/20+2]});
var stab_or_cp_s1 = stab_or_cp.map(function (p) {return [p[0]+2, p[1], p[2]*15/20+5]});
var stab_or_cp_c0 = stab_or_cp.map(function (p) {return [p[0], p[1], p[2]*13/20+7]});
var stab_or_cp_d1 = stab_or_cp.map(function (p) {return [p[0]-2, p[1], p[2]*15/20+5]});
var stab_or_cp_d2 = stab_or_cp.map(function (p) {return [p[0]-4, p[1], p[2]*18/20+2]});
var stab_or_cp_d3 = stab_or_cp.map(function (p) {return [p[0]-6, p[1], p[2]*19.7/20+0.3]});
var stab_or_cp_d4 = stab_or_cp.map(function (p) {return [p[0]-8, p[1], p[2]]});
var stab_or_cp_d5 = stab_or_cp.map(function (p) {return [p[0]-22, p[1], p[2]]});
var stab_or_cp_d6 = stab_or_cp.map(function (p) {return [p[0]-24, p[1], p[2]*17/20+3]});
var stab_or_cp_d7 = stab_or_cp.map(function (p) {return [p[0]-26, p[1]/2, p[2]/2+10]});

var stab_or_cc_s7 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_s7);
var stab_or_cc_s6 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_s6);
var stab_or_cc_s5 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_s5);
var stab_or_cc_s4 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_s4);
var stab_or_cc_s3 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_s3);
var stab_or_cc_s2 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_s2);
var stab_or_cc_s1 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_s1);
var stab_or_cc_c0 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_c0);
var stab_or_cc_d1 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_d1);
var stab_or_cc_d2 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_d2);
var stab_or_cc_d3 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_d3);
var stab_or_cc_d4 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_d4);
var stab_or_cc_d5 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_d5);
var stab_or_cc_d6 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_d6);
var stab_or_cc_d7 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,7,7])(stab_or_cp_d7);

DRAW(MAP(stab_or_cc_s7)(stab_dom1D));
DRAW(MAP(stab_or_cc_s6)(stab_dom1D));
DRAW(MAP(stab_or_cc_s5)(stab_dom1D));
DRAW(MAP(stab_or_cc_s4)(stab_dom1D));
DRAW(MAP(stab_or_cc_s3)(stab_dom1D));
DRAW(MAP(stab_or_cc_s2)(stab_dom1D));
DRAW(MAP(stab_or_cc_s1)(stab_dom1D));
DRAW(MAP(stab_or_cc_c0)(stab_dom1D));
DRAW(MAP(stab_or_cc_d1)(stab_dom1D));
DRAW(MAP(stab_or_cc_d2)(stab_dom1D));
DRAW(MAP(stab_or_cc_d3)(stab_dom1D));
DRAW(MAP(stab_or_cc_d4)(stab_dom1D));
DRAW(MAP(stab_or_cc_d5)(stab_dom1D));
DRAW(MAP(stab_or_cc_d6)(stab_dom1D));
DRAW(MAP(stab_or_cc_d7)(stab_dom1D));

var stab = NUBS(S1)(2)([0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,15])([
	[28,0,17],
	stab_or_cc_s7,
	stab_or_cc_s6,
	stab_or_cc_s5,
	stab_or_cc_s4,
	stab_or_cc_s3,
	stab_or_cc_s2,
	stab_or_cc_s1,
	stab_or_cc_c0,
	stab_or_cc_d1,
	stab_or_cc_d2,
	stab_or_cc_d3,
	stab_or_cc_d4,
	stab_or_cc_d5,
	stab_or_cc_d6,
	stab_or_cc_d7,
	[-28,0,17]
	]);

DRAW(MAP(stab)(stab_dom2D));

// Disegno

DRAW(grigliaxy);
DRAW(grigliaxz_ruotata);
DRAW(grigliayz_ruotata);