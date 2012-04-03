var start = function() {

// var points = [[1,1],[2,1],[2,2],[1,2]];
// var mattonella = POLYLINE(points);
// DRAW(mattonella);

//var cubo = SIMPLEX_GRID([[1],[1],[1]]);

//var triangolo1 = COLOR([1,0,0])(SIMPLICIAL_COMPLEX([[0,0,0],[1,0,0],[1,1,0]])([[0,1,2]]));
//var triangolo2 = COLOR([0,1,0])(SIMPLICIAL_COMPLEX([[0,0,0],[1,1,0],[0,1,0]])([[0,1,2]]));
//var mattonella = STRUCT([triangolo1,triangolo2]);

//var points = [[0,0], [1,1], [2,0], [3,1], [4,0]];
//var polyline = POLYLINE(points);
//DRAW(polyline);

var pavimento = STRUCT([
	T([1])([1])(SIMPLEX_GRID([[1],[1],[1]])),
	T([0])([0])(SIMPLEX_GRID([[39],[1],[1]])),
	T([0,1])([21,1])(SIMPLEX_GRID([[15],[9],[1]])),
	T([0,1])([36,4])(SIMPLEX_GRID([[3],[6],[1]])),
	T([0,1])([39,4])(SIMPLEX_GRID([[8],[12],[1]])),
	T([0,1])([47,4])(SIMPLEX_GRID([[5],[1],[1]])),
	T([0,1])([51,5])(SIMPLEX_GRID([[1],[1],[1]])),
	T([0,1])([1,10])(SIMPLEX_GRID([[8],[12],[1]])),
	T([0,1])([9,10])(SIMPLEX_GRID([[30],[7],[1]]))
]);

//DRAW(S([0,1,2])([.1,.1,.1])(pavimento));
//DRAW(pavimento);

var pilastro_croce = STRUCT([
	T([0,1])([-0.1,-0.02])(SIMPLEX_GRID([[0.08],[0.04],[3]])),
	T([0,1])([-0.02,-0.1])(SIMPLEX_GRID([[0.04],[0.2],[3]])),
	T([0,1])([0.02,-0.02])(SIMPLEX_GRID([[0.08],[0.04],[3]]))
]);

//DRAW(pilastro_croce);

var pilastri = STRUCT([
	T([0,1,2])([26,7,1])(pilastro_croce),
	T([0,1,2])([26,14,1])(pilastro_croce),
	T([0,1,2])([26 + 19 / 3, 7,1])(pilastro_croce),
	T([0,1,2])([26 + 19 / 3, 14,1])(pilastro_croce),
	T([0,1,2])([26 + 2 * 19 / 3, 7,1])(pilastro_croce),
	T([0,1,2])([26 + 2 * 19 / 3, 14,1])(pilastro_croce),
	T([0,1,2])([45,7,1])(pilastro_croce),
	T([0,1,2])([45,14,1])(pilastro_croce)
]);

var pavilion = STRUCT([
	pavimento,
	pilastri
]);

DRAW(pavilion);

}

start();
