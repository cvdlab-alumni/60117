var start = function() {

// Cubo

var cubo = STRUCT([
	SIMPLEX_GRID([[1],[1],[1]])
]);

// Marmo

var marmo = STRUCT([
	cubo
]);

// Granito

var granito = STRUCT([
	cubo
]);

// Alabastro

var alabastro = STRUCT([
	cubo
]);

// Legno

var legno = STRUCT([
	cubo
]);

// Acqua

var acqua = STRUCT([
	cubo
]);

// Acciaio

var acciaio = STRUCT([
	cubo
]);

// Intonaco bianco

var int_bianco = STRUCT([
	cubo
]);

// Intonaco scuro

var int_nero = STRUCT([
	cubo
]);

// Pavimento

var pavimento = STRUCT([
	POLYLINE([[0,0], [39,0], [39,4], [52,4], [52,6],[51,6],[51,5],[47,5],[47,16],[39,16],[39,17],[9,17],[9,22],[1,22],[1,2],[0,2],[0,0]]),
]);

// Scale

var scale = STRUCT([
	POLYLINE([[36,1], [39,1],[39,4],[36,4],[36,1]]),
	POLYLINE([[36,1], [36,4]]),
	POLYLINE([[36 + 1 * 3 / 8, 1], [36 + 1 * 3 / 8, 4]]),
	POLYLINE([[36 + 2 * 3 / 8, 1], [36 + 2 * 3 / 8, 4]]),
	POLYLINE([[36 + 3 * 3 / 8, 1], [36 + 3 * 3 / 8, 4]]),
	POLYLINE([[36 + 4 * 3 / 8, 1], [36 + 4 * 3 / 8, 4]]),
	POLYLINE([[36 + 5 * 3 / 8, 1], [36 + 5 * 3 / 8, 4]]),
	POLYLINE([[36 + 6 * 3 / 8, 1], [36 + 6 * 3 / 8, 4]]),
	POLYLINE([[36 + 7 * 3 / 8, 1], [36 + 7 * 3 / 8, 4]]),
	POLYLINE([[36 + 8 * 3 / 8, 1], [36 + 8 * 3 / 8, 4]]),
]);

// Pavimento e scale

var pavimentazione = STRUCT([
	pavimento,
	scale
]);

// Piscina Grande

var piscina_grande = STRUCT([
	POLYLINE([[1,1], [21,1],[21,10],[1,10],[1,1]]),
]);

// Piscina piccola

var piscina_piccola = STRUCT([
	POLYLINE([[47,5], [51,5],[51,16],[47,16],[47,5]]),
]);

// Piscine

var piscine = STRUCT([
	piscina_grande,
	piscina_piccola
]);

// Pilasto a croce

var pilastro_croce = STRUCT([
	S([0,1])([.02,.02])(POLYLINE([[1,1], [1,5],[-1,5],[-1,1],[-5,1],[-5,-1],[-1,-1],[-1,-5],[1,-5],[1,-1],[5,-1],[5,1],[1,1]])),
]);

// Coppia di pilastri a croce

var pilastro_croce_coppia = STRUCT([
	pilastro_croce,
	T([1])([7])(pilastro_croce)
]);

// Pilasti centrali

var pilastri = STRUCT([
	T([0,1])([26,7]),
	pilastro_croce_coppia,
	T([0])([19/3]),
	pilastro_croce_coppia,
	T([0])([19/3]),
	pilastro_croce_coppia,
	T([0])([19/3]),
	pilastro_croce_coppia
]);

// Muro di sinistra marmo

var muro_sinistra_marmo = STRUCT([
	POLYLINE([[.8,.8],[8,.8],[8,1],[1,1],[1,22],[9,22],[9,16.8],[9.2,16.8],[9.2,22.2],[.8,22.2],[.8,.8]]),
]);

// Muro centrale marmo

var muro_centrale_marmo = STRUCT([
	POLYLINE([[7.5,15],[26.2,15],[26.2,15.2],[7.5,15.2]]),
]);

// Mura in marmo

var mura_in_marmo = STRUCT([
	muro_sinistra_marmo,
	muro_centrale_marmo
]);

// Muro di destra granito

var muro_destra_granito = STRUCT([
	POLYLINE([[41.8,4.8],[51.2,4.8],[51.2,16.2],[37.8,16.2],[37.8,16],[51,16],[51,5],[41.8,5],[41.8,4.8]]),
]);

// Muro centrale granito

var muro_centrale_granito = STRUCT([
	POLYLINE([[25.2,7.8],[34,7.8],[34,8],[25.2,8],[25.2,7.8]]),
]);

// Mura in granito

var mura_in_granito = STRUCT([
	muro_centrale_granito,
	muro_destra_granito
]);

// Muro in alabastro

var muro_alabastro = STRUCT([
	POLYLINE([[37.2,11.8],[42.5, 11.8],[42.5,12],[37.2,12],[37.2,11.8]]),
]);

// Tetto di sinistra

var tetto_sinistra = STRUCT([
	POLYLINE([[0,13],[10,13],[10,23],[0,23],[0,13]]),
]);

// Tetto di destra

var tetto_destra = STRUCT([
	POLYLINE([[24,4],[47,4],[47,17],[24,17],[24,2]]),
]);

// Tetti

var tetti = STRUCT([
	tetto_sinistra,
	tetto_destra
]);

// Interni di sinistra

var interni_sinistra = STRUCT([
	POLYLINE([[4.9,17],[5.1,17],[5.1,22],[4.9,22],[4.9,17]]),
	POLYLINE([[5.1,20.6],[9,20.6],[9,20.8],[5.1,20.8],[5.1,20.8]]),
	POLYLINE([[1,17],[9,17]]),
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
	POLYLINE([[7.92,14.2],[7.92 + 15.36, 14.2 ],[7.92 + 15.36, 14.2 + .59],[7.92, 14.2 + .59],[7.92,14.2]]),
]);

// Pavilion completo

var pavilion = STRUCT([
	
	pavimentazione,
	piscine,
	pilastri,
	mura_in_marmo,
	mura_in_granito,
	muro_alabastro,
	interni,
	panchina_centrale,
	tetti
]);

DRAW(pavilion);

}

start();
