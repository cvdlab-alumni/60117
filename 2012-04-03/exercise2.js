var start = function() {

// Pavimento

var pavimento = STRUCT([
	T([1])([1])(SIMPLEX_GRID([[1],[1],[1]])),
	T([0])([0])(SIMPLEX_GRID([[39],[1],[1]])),
	T([0,1])([21,1])(SIMPLEX_GRID([[15],[9],[1]])),
	T([0,1])([36,4])(SIMPLEX_GRID([[3],[6],[1]])),
	T([0,1])([39,4])(SIMPLEX_GRID([[8],[12],[1]])),
	T([0,1])([47,4])(SIMPLEX_GRID([[5],[1],[1]])),
	T([0,1])([51,5])(SIMPLEX_GRID([[1],[1],[1]])),
	T([0,1])([1,10])(SIMPLEX_GRID([[8],[12],[1]])),
	T([0,1])([9,10])(SIMPLEX_GRID([[30],[7],[1]])),
	T([0,1])([.8,2])(SIMPLEX_GRID([[.2],[20.2],[1]])),
	T([0,1])([1,22])(SIMPLEX_GRID([[8],[.2],[1]])),
	T([0,1])([9,17])(SIMPLEX_GRID([[.2],[5.2],[1]]))
	
]);

// Piscina Grande

var piscina_grande = STRUCT([
	T([0,1])([1,1])(SIMPLEX_GRID([[20],[9],[0.8]]))
]);

// Piscina piccola

var piscina_piccola = STRUCT([
	T([0,1])([47,5])(SIMPLEX_GRID([[4],[11],[0.8]]))
]);

// Piscine

var piscine = STRUCT([
	piscina_grande,
	piscina_piccola
]);

// Pilasto centrale a croce

var pilastro_croce = STRUCT([
	T([0,1])([-0.1,-0.02])(SIMPLEX_GRID([[0.08],[0.04],[3]])),
	T([0,1])([-0.02,-0.1])(SIMPLEX_GRID([[0.04],[0.2],[3]])),
	T([0,1])([0.02,-0.02])(SIMPLEX_GRID([[0.08],[0.04],[3]]))
]);

// Pilasti centrali

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

// Muro centrale

var muro_centrale = STRUCT([
	T([0,1,2])([7.5,15,1])(SIMPLEX_GRID([[19],[0.2],[3]]))
]);

// Muro di sinistra

var muro_sinistra = STRUCT([
	T([0,1,2])([1,.8,1])(SIMPLEX_GRID([[7],[.2],[3]])),
	T([0,1,2])([.8,.8,1])(SIMPLEX_GRID([[.2],[21.4],[3]])),
	T([0,1,2])([1,22,1])(SIMPLEX_GRID([[8],[.2],[3]])),
	T([0,1,2])([9,16.8,1])(SIMPLEX_GRID([[.2],[1.8],[3]])),
	T([0,1,2])([9,16.8 + 1.8,1])(SIMPLEX_GRID([[.2],[1.8],[2,-.5,.5]])),
	T([0,1,2])([9,16.8 + 1.8 + 1.8,1])(SIMPLEX_GRID([[.2],[1.8],[3]]))
]);

// Mura

var mura = STRUCT([
	muro_sinistra,
	muro_centrale
]);

// Tetto di sinistra

var tetto_sinistra = STRUCT([
	T([0,1,2])([.4,13.4,4])(SIMPLEX_GRID([[9.2],[9.2],[.3]]))
]);

// Tetto di destra

var tetto_destra = STRUCT([
	T([0,1,2])([24,4,4])(SIMPLEX_GRID([[23],[13],[.3]]))
]);

// Tetti

var tetti = STRUCT([
	tetto_sinistra,
	tetto_destra
]);

// Sovratetto di sinistra

var sovratetto_sinistra = STRUCT([
	T([0,1,2])([.35,13.35,4.3])(SIMPLEX_GRID([[9.3],[9.3],[.1]]))
]);

// Sovratetto di destra

var sovratetto_destra = STRUCT([
	T([0,1,2])([23.95,3.95,4.3])(SIMPLEX_GRID([[23.1],[13.1],[.1]]))
]);

// Sovratetti

var sovratetti = STRUCT([
	sovratetto_sinistra,
	sovratetto_destra
]);

// Interni di sinistra

var interni_sinistra = STRUCT([
	T([0,1,2])([4.9,17,1])(SIMPLEX_GRID([[.2],[2.1],[3]])),
	T([0,1,2])([4.9,19.1,1])(SIMPLEX_GRID([[.2],[.8],[-2,1]])),
	T([0,1,2])([4.9,19.9,1])(SIMPLEX_GRID([[.2],[2.1],[3]])),

	T([0,1,2])([5.1,20.6,1])(SIMPLEX_GRID([[.5],[.2],[3]])),
	T([0,1,2])([5.1 + .5,20.6,1])(SIMPLEX_GRID([[.8],[.2],[-2,1]])),
	T([0,1,2])([5.1 + .5 + .8,20.6,1])(SIMPLEX_GRID([[2.6],[.2],[3]])),

	T([0,1,2])([6.9,20.8,1])(SIMPLEX_GRID([[.2],[.8],[-2,1]])),
	T([0,1,2])([6.9,20.8 + .8,1])(SIMPLEX_GRID([[.2],[.4],[3]])),
]);

// Interni

var interni = STRUCT([
	interni_sinistra
]);

// Vetrate sinistra
/*
var interni_sinistra = STRUCT([
	T([0,1,2])([4.9,17,1])(SIMPLEX_GRID([[.2],[2.1],[3]])),
	T([0,1,2])([4.9,19.1,1])(SIMPLEX_GRID([[.2],[.8],[-2,1]])),
	T([0,1,2])([4.9,19.9,1])(SIMPLEX_GRID([[.2],[2.1],[3]])),

	T([0,1,2])([5.1,20.6,1])(SIMPLEX_GRID([[.5],[.2],[3]])),
	T([0,1,2])([5.1 + .5,20.6,1])(SIMPLEX_GRID([[.8],[.2],[-2,1]])),
	T([0,1,2])([5.1 + .5 + .8,20.6,1])(SIMPLEX_GRID([[2.6],[.2],[3]])),

	T([0,1,2])([6.9,20.8,1])(SIMPLEX_GRID([[.2],[.8],[-2,1]])),
	T([0,1,2])([6.9,20.8 + .8,1])(SIMPLEX_GRID([[.2],[.4],[3]])),
]);
*/
// Vetrate

// Scale

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

// Panchina centrale

var panchina_centrale = STRUCT([
	T([0,1,2])([8, 14.28, 1])(SIMPLEX_GRID([REPLICA(8)([0.43,-1.68]),[0.44],[0.40]])),
	T([0,1,2])([8 - 0.08, 14.28 - 0.08, 1 + 0.40])(SIMPLEX_GRID([[0.08 + 15.2 + 0.08],[0.08 + 0.44 + 0.08],[0.1]]))
]);

// Pavilion completo

var pavilion = STRUCT([
	
	COLOR([1,1,0])(pavimento),
	COLOR([0,1,1])(piscine),
	COLOR([.5,.5,.5])(pilastri),
	COLOR([1,0,0])(mura),
	COLOR([.8,.52,.25])(interni),
	COLOR([0,0,1])(tetti),
	COLOR([1,0,1])(sovratetti),
	COLOR([0,1,0])(scale),
	COLOR([0,1,0])(panchina_centrale)
]);

DRAW(pavilion);
//DRAW(S([0,1,2])([.1,.1,.1])(pavilion));

}

start();
