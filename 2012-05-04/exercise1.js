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

var domain = INTERVALS(1)(100);
var controls = [[0,0.6],[6,2.1],[12,3.5],[18,4.2],[24,4.8],[30,4.2],[34,3],[35,2.6],[36,2],[37,1.5],[38,1],[37,1.5],[36,2],[34,2.4],[30,3],[24,3],[18,3],[12,2.5],[6,1.5],[0,0.6]];
//var curve = MAP(BEZIER(S0)(controls))(domain);
var curve = STRUCT(
	[MAP(BEZIER(S0)(controls))(domain),griglia(0,0,36,4,6,4)]
	);
var curve2 = R([0,2])([-PI/2])(curve)

DRAW(curve2);
