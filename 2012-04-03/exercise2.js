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

var piscina_grande = STRUCT([
	T([0,1])([1,1])(SIMPLEX_GRID([[20],[9],[0.8]]))
]);

var piscina_piccola = STRUCT([
	T([0,1])([47,5])(SIMPLEX_GRID([[4],[11],[0.8]]))
]);

var pilastro_croce = STRUCT([
	T([0,1])([-0.1,-0.02])(SIMPLEX_GRID([[0.08],[0.04],[3]])),
	T([0,1])([-0.02,-0.1])(SIMPLEX_GRID([[0.04],[0.2],[3]])),
	T([0,1])([0.02,-0.02])(SIMPLEX_GRID([[0.08],[0.04],[3]]))
]);

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

var muro_centrale = STRUCT([
	T([0,1,2])([7.5,15,1])(SIMPLEX_GRID([[19],[0.2],[3]]))
]);

var scale = STRUCT([
	T([0,1])([36,1])(SIMPLEX_GRID([[3/8],[3],[1]])),
	T([0,1])([36 + 3/8,1])(SIMPLEX_GRID([[3/8],[3],[7/8]])),
	T([0,1])([36 + 6/8,1])(SIMPLEX_GRID([[3/8],[3],[6/8]])),
	T([0,1])([36 + 9/8,1])(SIMPLEX_GRID([[3/8],[3],[5/8]])),
	T([0,1])([36 + 12/8,1])(SIMPLEX_GRID([[3/8],[3],[4/8]])),
	T([0,1])([36 + 15/8,1])(SIMPLEX_GRID([[3/8],[3],[3/8]])),
	T([0,1])([36 + 18/8,1])(SIMPLEX_GRID([[3/8],[3],[2/8]])),
	T([0,1])([36 + 21/8,1])(SIMPLEX_GRID([[3/8],[3],[1/8]]))
]);

var panchina_centrale = STRUCT([
	T([0,1,2])([8, 14.28, 1])(SIMPLEX_GRID([REPLICA(8)([0.43,-1.68]),[0.44],[0.40]])),
	T([0,1,2])([8 - 0.08, 14.28 - 0.08, 1 + 0.40])(SIMPLEX_GRID([[0.08 + 15.2 + 0.08],[0.08 + 0.44 + 0.08],[0.1]]))
]);

var pavilion = STRUCT([
	COLOR([1,1,0])(pavimento),
	COLOR([0,1,1])(piscina_grande),
	COLOR([0,1,1])(piscina_piccola),
	COLOR([1,0,0])(pilastri),
	COLOR([1,0,0])(muro_centrale),
	COLOR([0,1,0])(scale),
	COLOR([0,1,0])(panchina_centrale)
]);

DRAW(pavilion);
//DRAW(S([0,1,2])([.1,.1,.1])(pavilion));

}

start();
