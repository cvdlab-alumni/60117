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

// Disegno

DRAW(grigliaxy);
DRAW(grigliaxz_ruotata);
DRAW(grigliayz_ruotata);
