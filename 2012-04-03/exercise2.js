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
	T([0,1])([9,17])(SIMPLEX_GRID([[.2],[5.2],[1]])),
	T([0,1])([39,16])(SIMPLEX_GRID([[12.2],[.2],[1]])),
	T([0,1])([51,6])(SIMPLEX_GRID([[.2],[10],[1]])),
	T([0,1])([1,1])(SIMPLEX_GRID([[20],[9],[0.2]])),
	T([0,1])([47,5])(SIMPLEX_GRID([[4],[11],[0.2]]))
]);

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

// Pavimento e scale

var pavimentazione = STRUCT([
	pavimento,
	scale
]);

// Piscina Grande

var piscina_grande = STRUCT([
	T([0,1,2])([1,1,.2])(SIMPLEX_GRID([[20],[9],[0.6]]))
]);

// Piscina piccola

var piscina_piccola = STRUCT([
	T([0,1,2])([47,5,.2])(SIMPLEX_GRID([[4],[11],[0.6]]))
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

// Muro di sinistra marmo

var muro_sinistra_marmo = STRUCT([
	T([0,1,2])([1,.8,1])(SIMPLEX_GRID([[7],[.2],[3]])),
	T([0,1,2])([.8,.8,1])(SIMPLEX_GRID([[.2],[21.4],[3]])),
	T([0,1,2])([1,22,1])(SIMPLEX_GRID([[8],[.2],[3]])),
	T([0,1,2])([9,16.8,1])(SIMPLEX_GRID([[.2],[1.8],[3]])),
	T([0,1,2])([9,16.8 + 1.8,1])(SIMPLEX_GRID([[.2],[1.8],[2,-.5,.5]])),
	T([0,1,2])([9,16.8 + 1.8 + 1.8,1])(SIMPLEX_GRID([[.2],[1.8],[3]]))
]);

// Muro centrale marmo

var muro_centrale_marmo = STRUCT([
	T([0,1,2])([7.5,15,1])(SIMPLEX_GRID([[19],[0.2],[3]]))
]);

// Mura in marmo

var mura_in_marmo = STRUCT([
	muro_sinistra_marmo,
	muro_centrale_marmo
]);

// Muro di destra granito

var muro_destra_granito = STRUCT([
	T([0,1,2])([37.8,16,1])(SIMPLEX_GRID([[13.4],[.2],[3]])),
	T([0,1,2])([51,5,1])(SIMPLEX_GRID([[.2],[11],[3]])),
	T([0,1,2])([41.8,4.8,1])(SIMPLEX_GRID([[9.4],[.2],[3]]))
]);

// Muro centrale granito

var muro_centrale_granito = STRUCT([
	T([0,1,2])([25.2,7.2,1])(SIMPLEX_GRID([[8.8],[.2],[3]])),
]);

// Mura in granito

var mura_in_granito = STRUCT([
	muro_centrale_granito,
	muro_destra_granito
]);

// Muro in alabastro

var muro_alabastro = STRUCT([
	T([0,1,2])([37.2,11.8,1])(SIMPLEX_GRID([[5.3],[.2],[3]])),
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

// Panchina centrale

var panchina_centrale = STRUCT([
	T([0,1,2])([8, 14.28, 1])(SIMPLEX_GRID([REPLICA(8)([0.43,-1.68]),[0.44],[0.40]])),
	T([0,1,2])([8 - 0.08, 14.28 - 0.08, 1 + 0.40])(SIMPLEX_GRID([[0.08 + 15.2 + 0.08],[0.08 + 0.44 + 0.08],[0.1]]))
]);

// Pavilion completo

var pavilion = STRUCT([
	
	COLOR([1,1,0])(pavimentazione),
	COLOR([0,1,1])(piscine),
	COLOR([.5,.5,.5])(pilastri),
	COLOR([1,0,0])(mura_in_marmo),
	COLOR([.5,0,.5])(mura_in_granito),
	COLOR([.2,.2,.5])(muro_alabastro),
	COLOR([.8,.52,.25])(interni),
//	COLOR([0,0,1])(tetti),
//	COLOR([1,0,1])(sovratetti),
	COLOR([0,1,0])(panchina_centrale)
]);

DRAW(pavilion);
//DRAW(S([0,1,2])([.1,.1,.1])(pavilion));

}

start();
