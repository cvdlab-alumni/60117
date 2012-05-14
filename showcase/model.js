// Scacchiera

var caselle = STRUCT(REPLICA(4)([CUBOID([1,1,.2]),T([0])([2])]));
var quadranteDiCaselle = STRUCT(REPLICA(4)([caselle,T([1])([2])]));

var caselleCelesti = COLOR([0,1,1,1])(STRUCT([quadranteDiCaselle,T([0,1])([1,1]),quadranteDiCaselle]));
var caselleBianche = COLOR([1,1,0,1])(STRUCT([T([0,1])([1,0]),quadranteDiCaselle,T([0,1])([-1,1]),quadranteDiCaselle]));

var scacchiera = STRUCT([T([0,1,2])([-.5,-.5,-.2]),caselleCelesti,caselleBianche]);

// Pedone

var pedone_punticontrollo = [[[0,0,0],[5,0,],[10,0,0],[17.5,0,0]],[[17.5,0,0],[17.5,0,1],[17.5,0,1.5],[17.5,0,2]],[[17.5,0,2],[16,0,3],[16,0,3],[14.5,0,4]],[[14.5,0,4],[17.5,0,6],[17.5,0,7],[17.5,0,8.5]],[[17.5,0,8.5],[17.5,0,11],[15,0,12.5],[12.5,0,14]],[[12.5,0,14],[11.5,0,15],[11,0,17],[11,0,19]],[[11,0,19],[10.5,0,19],[10,0,19],[9.5,0,19]],[[9.5,0,19],[6,0,26.5],[6,0,33],[7.5,0,40]],[[7.5,0,40],[9,0,40],[9,0,42],[5,0,47]],[[5,0,47],[12,0,53],[13,0,65],[0,0,65]]];

var pedone_profilo = AA(BEZIER(S0))(pedone_punticontrollo);
var pedone_profilo_model = STRUCT(CONS(AA(MAP)(pedone_profilo))(INTERVALS(1)(20)));

var pedone_surface = AA(ROTATIONAL_SURFACE)(pedone_profilo);
var pedone_surface_model = STRUCT(CONS(AA(MAP)(pedone_surface))(DOMAIN([[0,1],[0,2*PI]])([10,40])));

var pedone = S([0,1,2])([0.25/17.5,0.25/17.5,0.25/17.5])(pedone_surface_model);
var filaDiPedoni = STRUCT(REPLICA(8)([pedone,T([0])([1])]));

// Disegno

DRAW(scacchiera);
DRAW(STRUCT([T([1])([1]), COLOR([1,0,0,1])(filaDiPedoni), T([1])([5]), COLOR([0,1,0,1])(filaDiPedoni)]));