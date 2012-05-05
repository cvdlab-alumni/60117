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

// Stabilizzatori

var dom1D = INTERVALS(1)(30);
var dom2D = DOMAIN([[0,1],[0,1]])([15,30]);

var c0 = [[0,0.6,0],[6,2.1,0],[12,3.5,0],[18,4.2,0],[24,4.8,0],[30,4.2,0],[34,3,0],[35,2.6,0],[36,2,0],[37,1.5,0],[38,1,0],[37,1.5,0],[36,2,0],[34,2.4,0],[30,3,0],[24,3,0],[18,3,0],[12,2.5,0],[6,1.5,0],[0,0.6,0]];
var d1 = c0.map(function (p) {return [p[0], p[1], p[2]-6*36/7.5]});
var s1 = c0.map(function (p) {return [p[0], p[1], p[2]+6*36/7.5]});
var d2 = c0.map(function (p) {return [p[0], p[1]+0.5*36/7.5, p[2]-12*36/7.5]});
var s2 = c0.map(function (p) {return [p[0], p[1]+0.5*36/7.5, p[2]+12*36/7.5]});
var d3 = c0.map(function (p) {return [p[0], p[1]+1*36/7.5, p[2]-18*36/7.5]});
var s3 = c0.map(function (p) {return [p[0], p[1]+1*36/7.5, p[2]+18*36/7.5]});

var curvesPoints = STRUCT(AA(POLYPOINT)([c0,d1,s1,d2,s2,d3,s3]));
//DRAW(curvesPoints);

var controls = AA(BEZIER(S0))([d3,d2,d1,c0,s1,s2,s3]);


var curves = STRUCT(CONS(AA(MAP)(controls))(dom1D));

//DRAW(curves);

var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(dom2D);
//DRAW(surf);

var profilo_inscala = S([0,1,2])([7.5/36,7.5/36,7.5/36])(surf);
var ala = R([0,2])(-PI/2)(profilo_inscala);
var ali = STRUCT([T([1])([4]),ala,T([1,2])([-6,-2.5]),ala]);
// DRAW(ali);


// Profilo

var dom1D = INTERVALS(1)(60);
var dom2D = DOMAIN([[0,1],[0,1]])([60,60]);

var controls1 = [[0,0,0],[0,0,20],[5,0,20],[-5,0,0]]; // p0, p1, t0, t1
var c1 = CUBIC_HERMITE(S0)(controls1);
var curve1 = MAP(c1)(dom1D);
//DRAW(curve1);

var controls11 = [[0,2,0],[0,2,20],[5,0,20],[-5,0,0]]; // p0, p1, t0, t1
var c11 = CUBIC_HERMITE(S0)(controls11);
var curve11 = MAP(c11)(dom1D);
//DRAW(curve11);

var controls2 = [[0,2,0],[0,5,0],[0,6,2],[0,10,15],[0,10,20],[0,2,20]];
var knots2 = [0,0,0,1,2,3,4,4,4];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(dom1D);
//DRAW(curve2);

var controls33 = [[0,2,0],[0,2,20],[-5,0,20],[5,0,0]]; // p0, p1, t0, t1
var c33 = CUBIC_HERMITE(S0)(controls33);
var curve33 = MAP(c33)(dom1D);
//DRAW(curve33);

var controls3 = [[0,0,0],[0,0,20],[-5,0,20],[5,0,0]]; // p0, p1, t0, t1
var c3 = CUBIC_HERMITE(S0)(controls3);
var curve3 = MAP(c3)(dom1D);
//DRAW(curve3);



var curvesPoints = STRUCT(AA(POLYPOINT)([controls1,controls2,controls3]));
//DRAW(curvesPoints);


var s12h = CUBIC_HERMITE(S1)([c1,c2,[0,.01,0],[-0.1,0,0]]);
var surface12h = MAP(s12h)(dom2D);
//DRAW(surface12h);

/*
var s12 = BEZIER(S1)([c1,c11,c2,c33,c3]);
var surf = MAP(s12)(dom2D);
DRAW(surf);

var s12 = BEZIER(S1)([c1,c11,c2,c3]);
var surf = MAP(s12)(dom2D);
DRAW(surf);


var controls = [c1,c11,c2,c33,c3];
var nubs = NUBS(S1)(3)([0,0,0,1,1,1,2,2,2])(controls);
var model = MAP(nubs)(dom2D);
DRAW(model);

*/

var c0 = BEZIER(S0)(c0);

var curvesPoints = POLYPOINT([c0]);
DRAW(curvesPoints);


// Disegno

DRAW(grigliaxy);
DRAW(grigliaxz_ruotata);
DRAW(grigliayz_ruotata);

