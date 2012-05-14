// snapshot 400x300

// Scacchiera

var casella = CUBOID([1,1,.2]);

var filaDiCaselle = STRUCT(REPLICA(4)([casella,T([0])([2])]));
var quadranteDiCaselle = STRUCT(REPLICA(4)([filaDiCaselle,T([1])([2])]));

var caselleCelesti = COLOR([0,1,1,1])(STRUCT([quadranteDiCaselle,T([0,1])([1,1]),quadranteDiCaselle]));
var caselleBianche = COLOR([1,1,0,1])(STRUCT([T([0,1])([1,0]),quadranteDiCaselle,T([0,1])([-1,1]),quadranteDiCaselle]));

var scacchiera = STRUCT([T([0,1,2])([-.5,-.5,-.2]),caselleCelesti,caselleBianche]);

// Pedone

var pedone_dom1D = INTERVALS(1)(20);
var pedone_dom2D = DOMAIN([[0,1],[0,2*PI]])([20,20]);

var pedone_curve0 = BEZIER(S0)([[0,0,0],[5,0,],[10,0,0],[17.5,0,0]]);
var pedone_curve1 = BEZIER(S0)([[17.5,0,0],[17.5,0,1],[17.5,0,1.5],[17.5,0,2]]);
var pedone_curve2 = BEZIER(S0)([[17.5,0,2],[16,0,3],[16,0,3],[14.5,0,4]]);
var pedone_curve3 = BEZIER(S0)([[14.5,0,4],[17.5,0,6],[17.5,0,7],[17.5,0,8.5]]);
var pedone_curve4 = BEZIER(S0)([[17.5,0,8.5],[17.5,0,11],[15,0,12.5],[12.5,0,14]]);
var pedone_curve5 = BEZIER(S0)([[12.5,0,14],[11.5,0,15],[11,0,17],[11,0,19]]);
var pedone_curve6 = BEZIER(S0)([[11,0,19],[10.5,0,19],[10,0,19],[9.5,0,19]]);
var pedone_curve7 = BEZIER(S0)([[9.5,0,19],[6,0,26.5],[6,0,33],[7.5,0,40]]);
var pedone_curve8 = BEZIER(S0)([[7.5,0,40],[9,0,40],[9,0,42],[5,0,47]]);
var pedone_curve9 = BEZIER(S0)([[5,0,47],[12,0,53],[13,0,65],[0,0,65]]);

/*
DRAW(MAP(pedone_curve0)(pedone_dom1D));
DRAW(MAP(pedone_curve1)(pedone_dom1D));
DRAW(MAP(pedone_curve2)(pedone_dom1D));
DRAW(MAP(pedone_curve3)(pedone_dom1D));
DRAW(MAP(pedone_curve4)(pedone_dom1D));
DRAW(MAP(pedone_curve5)(pedone_dom1D));
DRAW(MAP(pedone_curve6)(pedone_dom1D));
DRAW(MAP(pedone_curve7)(pedone_dom1D));
DRAW(MAP(pedone_curve8)(pedone_dom1D));
DRAW(MAP(pedone_curve9)(pedone_dom1D));
*/

// var pedone_profile = STRUCT([pedone_curve1, pedone_curve2]);

var pedone_surface0 = MAP(ROTATIONAL_SURFACE(pedone_curve0))(pedone_dom2D);
var pedone_surface1 = MAP(ROTATIONAL_SURFACE(pedone_curve1))(pedone_dom2D);
var pedone_surface2 = MAP(ROTATIONAL_SURFACE(pedone_curve2))(pedone_dom2D);
var pedone_surface3 = MAP(ROTATIONAL_SURFACE(pedone_curve3))(pedone_dom2D);
var pedone_surface4 = MAP(ROTATIONAL_SURFACE(pedone_curve4))(pedone_dom2D);
var pedone_surface5 = MAP(ROTATIONAL_SURFACE(pedone_curve5))(pedone_dom2D);
var pedone_surface6 = MAP(ROTATIONAL_SURFACE(pedone_curve6))(pedone_dom2D);
var pedone_surface7 = MAP(ROTATIONAL_SURFACE(pedone_curve7))(pedone_dom2D);
var pedone_surface8 = MAP(ROTATIONAL_SURFACE(pedone_curve8))(pedone_dom2D);
var pedone_surface9 = MAP(ROTATIONAL_SURFACE(pedone_curve9))(pedone_dom2D);

var pedone_assembly = STRUCT([pedone_surface0, pedone_surface1,pedone_surface2, pedone_surface3, pedone_surface4, pedone_surface5, pedone_surface6, pedone_surface7, pedone_surface8, pedone_surface9]);

var pedone = S([0,1,2])([0.25/17.5,0.25/17.5,0.25/17.5])(pedone_assembly);

var filaDiPedoni = STRUCT(REPLICA(8)([pedone,T([0])([1])]));


// Disegno

DRAW(scacchiera);

DRAW(STRUCT([T([1])([1]), COLOR([1,0,0,1])(filaDiPedoni)]));

DRAW(STRUCT([T([1])([6]), COLOR([0,1,0,1])(filaDiPedoni)]));