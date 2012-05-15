// Common
var dom2D = DOMAIN([[0,1],[0,2*PI]])([10,100]);
function TRANSPOSE(matrix) {return Object.keys(matrix[0]).map(function (arr_elem) { return matrix.map(function (arr_r) { return arr_r[arr_elem]; }); });}

// Scacchiera
var caselle = STRUCT(REPLICA(4)([CUBOID([1,1,.2]),T([0])([2])]));
var quadranteDiCaselle = STRUCT(REPLICA(4)([caselle,T([1])([2])]));
var caselleCiano = COLOR([0,1,1,1])(STRUCT([quadranteDiCaselle,T([0,1])([1,1]),quadranteDiCaselle]));
var caselleGialle = COLOR([1,1,0,1])(STRUCT([T([0,1])([1,0]),quadranteDiCaselle,T([0,1])([-1,1]),quadranteDiCaselle]));
var scacchiera = STRUCT([T([0,1,2])([-.5,-.5,-.2]),caselleCiano,caselleGialle]);

// Pedone
var pedone_punticontrollo = [[[0,0,0],[5,0,0],[10,0,0],[17.5,0,0]],[[17.5,0,0],[17.5,0,1],[17.5,0,1.5],[17.5,0,2]],[[17.5,0,2],[16,0,3],[16,0,3],[14.5,0,4]],[[14.5,0,4],[17.5,0,6],[17.5,0,7],[17.5,0,8.5]],[[17.5,0,8.5],[17.5,0,11],[15,0,12.5],[12.5,0,14]],[[12.5,0,14],[11.5,0,15],[11,0,17],[11,0,19]],[[11,0,19],[10.5,0,19],[10,0,19],[9.5,0,19]],[[9.5,0,19],[6,0,26.5],[6,0,33],[7.5,0,40]],[[7.5,0,40],[9,0,40],[9,0,42],[5,0,47]],[[5,0,47],[12,0,53],[13,0,65],[0,0,65]]];
var pedone_profilo = AA(BEZIER(S0))(pedone_punticontrollo);
var pedone_surface = AA(ROTATIONAL_SURFACE)(pedone_profilo);
var pedone_model = STRUCT(CONS(AA(MAP)(pedone_surface))(dom2D));
var pedone = S([0,1,2])([0.25/17.5,0.25/17.5,0.25/17.5])(pedone_model);

// Re
var croce_punticontrollo = [[[0,0,98],[2,0,98],[4,0,98],[6.5,0,98]],[[6.5,0,98],[5,0,99.5],[4,0,101],[3,0,103]],[[3,0,103],[4.5,0,102],[5.5,0,101.5],[6.5,0,101.5]],[[6.5,0,101.5],[6.5,0,102.5],[6.5,0,104.5],[6.5,0,106.5]],[[6.5,0,106.5],[5.5,0,106.5],[4.5,0,106],[3,0,105]],[[3,0,105],[4,0,107],[5,0,108.5],[6.5,0,110]],[[3,0,105],[4,0,107],[5,0,108.5],[6.5,0,110]],[[6.5,0,110],[4,0,110],[2,0,110],[0,0,110]],];
var c1 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [p0[0],p0[1],p0[2]]})});
var c2 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [p0[0],p0[1]+.25,p0[2]]})});
var c3 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [p0[0],p0[1]+.5,p0[2]]})});
var c4 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [p0[0],p0[1]+.75,p0[2]]})});
var c5 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [-p0[0],p0[1],p0[2]]})});
var c6 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [-p0[0],p0[1]+.25,p0[2]]})});
var c7 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [-p0[0],p0[1]+.5,p0[2]]})});
var c8 = croce_punticontrollo.map(function (p) {return p.map(function (p0) {return [-p0[0],p0[1]+.75,p0[2]]})});
var croce_profilo1 = TRANSPOSE(AA(AA(BEZIER(S0)))([c1, c2, c3, c4]));
var croce_surface1 = AA(BEZIER(S1))(croce_profilo1);
var croce_model1 = STRUCT(CONS(AA(MAP)(croce_surface1))(dom2D));
var croce_profilo2 = TRANSPOSE(AA(AA(BEZIER(S0)))([c5, c6, c7, c8]));
var croce_surface2 = AA(BEZIER(S1))(croce_profilo2);
var croce_model2 = STRUCT(CONS(AA(MAP)(croce_surface2))(dom2D));

var re_punticontrollo = [[[0,0,0],[10,0,0],[15,0,0],[22.5,0,0]],[[22.5,0,0],[22.5,0,1],[22.5,0,1.5],[22.5,0,2]],[[22.5,0,2],[21.5,0,3],[21,0,3.5],[20,0,4]],[[20,0,4],[22,0,7],[22.5,0,8],[22.5,0,10]],[[22.5,0,10],[22.5,0,11],[18,0,17],[17.5,0,20]],[[17.5,0,20],[17.5,0,20.5],[17.5,0,21],[17.5,0,22]],[[17.5,0,22],[16,0,22.5],[15,0,23],[14,0,23.5]],[[14,0,23.5],[11.5,0,30],[10,0,35],[8.5,0,46]],[[8.5,0,46],[8,0,52],[7.5,0,55],[8.5,0,66]],[[8.5,0,66],[14,0,66],[15,0,68],[12,0,71]],[[12,0,71],[12,0,71.5],[12,0,72],[12,0,73]],[[12,0,73],[11.5,0,73.5],[10,0,74],[6.5,0,75]],[[6.5,0,75],[6.5,0,76],[6.5,0,76.5],[6.5,0,77]],[[6.5,0,77],[7.5,0,77.5],[7.5,0,78.5],[6.5,0,79]],[[6.5,0,79],[9,0,83],[12,0,88],[14,0,91]],[[14,0,91],[12,0,92.5],[10.5,0,93.5],[4.5,0,95]],[[4.5,0,95],[5,0,96],[5,0,97],[4,0,98]],[[4,0,98],[3,0,98],[2,0,98],[0,0,98]],[[0,0,98],[0,0,100],[0,0,105],[0,0,110]],[[0,0,110],[2,0,110],[2,0,113],[0,0,113]]];
var re_profilo = AA(BEZIER(S0))(re_punticontrollo);
var re_surface = AA(ROTATIONAL_SURFACE)(re_profilo);
var re_model = STRUCT(CONS(AA(MAP)(re_surface))(dom2D));
var re = S([0,1,2])([0.25/17.5,0.25/17.5,0.25/17.5])(STRUCT([re_model, T([1])([-2])(croce_model1), T([1])([-2])(croce_model2)]));

// Torre
var torre_punticontrollo = [[[0,0,0],[5,0,0],[10,0,0],[20,0,0]],[[20,0,0],[20,0,1],[20,0,1.5],[20,0,2]],[[20,0,2],[19.5,0,3],[18.5,0,4],[18,0,5]],[[18,0,5],[19,0,6.5],[20,0,9],[20,0,10]],[[20,0,10],[20,0,12],[15,0,17],[15,0,18]],[[15,0,18],[15,0,18.5],[15,0,19],[15,0,20]],[[15,0,20],[14,0,20],[14,0,21],[15,0,21]],[[15,0,21],[15,0,21.5],[15,0,22],[15,0,23]],[[15,0,23],[14.5,0,23],[14,0,23],[11,0,57]],[[11,0,57],[12,0,57],[12,0,58],[12,0,59]],[[12,0,59],[13,0,59],[14,0,60],[14,0,61]],[[14,0,61],[14.2,0,61],[14.6,0,61],[15,0,61]],[[15,0,61],[15,0,62],[15,0,63],[15,0,67]],[[15,0,67],[14,0,67],[13,0,67],[12,0,67]],[[12,0,67],[12,0,66],[12,0,65],[12,0,64]],[[12,0,64],[10,0,64],[5,0,64],[0,0,64]]];
var torre_profilo = AA(BEZIER(S0))(torre_punticontrollo);
var torre_surface = AA(ROTATIONAL_SURFACE)(torre_profilo);
var torre_model = STRUCT(CONS(AA(MAP)(torre_surface))(dom2D));
var torre = S([0,1,2])([0.25/17.5,0.25/17.5,0.25/17.5])(torre_model);

// Disegno
DRAW(scacchiera);
DRAW(STRUCT([COLOR([0,1,0,1]), T([0,1])([1,3])(pedone), T([0,1])([0,0])(torre), T([0,1])([1,2])(re)]));
DRAW(STRUCT([COLOR([1,0,0,1]), T([0,1])([1,7])(torre), T([0,1])([6,3])(re)]));
