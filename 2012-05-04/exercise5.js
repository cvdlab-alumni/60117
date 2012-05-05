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

DRAW(ali);

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


// Disegno

DRAW(grigliaxy);
DRAW(grigliaxz_ruotata);
DRAW(grigliayz_ruotata);

DRAW(airstrip);

