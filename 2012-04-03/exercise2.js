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
	T([1])([1])(marmo),
	S([0])([39])(marmo),
	T([0,1])([21,1])(S([0,1])([15,9])(marmo)),
	T([0,1])([36,4])(S([0,1])([3,6])(marmo)),
	T([0,1])([39,4])(S([0,1])([8,12])(marmo)),
	T([0,1])([47,4])(S([0])([5])(marmo)),
	T([0,1])([51,5])(marmo),
	T([0,1])([1,10])(S([0,1])([8,12])(marmo)),
	T([0,1])([9,10])(S([0,1])([30,7])(marmo)),
	T([0,1])([.8,2])(S([0,1])([.2,20.2])(marmo)),
	T([0,1])([1,22])(S([0,1])([8,.2])(marmo)),
	T([0,1])([9,17])(S([0,1])([.2,5.2])(marmo)),
	T([0,1])([39,16])(S([0,1])([12.2,.2])(marmo)),
	T([0,1])([51,6])(S([0,1])([.2,10])(marmo)),
	T([0,1])([1,1])(S([0,1,2])([20,9,.2])(marmo)),
	T([0,1])([47,5])(S([0,1,2])([4,11,.2])(marmo))
]);

// Scale

var scalino = STRUCT([
	S([0,1])([3/8,3])(marmo)
]);

var scale = STRUCT([
	T([0,1])([36,1]),
	scalino,
	T([0])([3/8]),
	S([2])([7/8])(scalino),
	T([0])([3/8]),
	S([2])([6/8])(scalino),
	T([0])([3/8]),
	S([2])([5/8])(scalino),
	T([0])([3/8]),
	S([2])([4/8])(scalino),
	T([0])([3/8]),
	S([2])([3/8])(scalino),
	T([0])([3/8]),
	S([2])([2/8])(scalino),
	T([0])([3/8]),
	S([2])([1/8])(scalino)
]);

// Pavimento e scale

var pavimentazione = STRUCT([
	pavimento,
	scale
]);

// Piscina Grande

var piscina_grande = STRUCT([
	T([0,1])([1,1])(S([0,1,2])([20,9,.6])(acqua))
]);

// Piscina piccola

var piscina_piccola = STRUCT([
	T([0,1])([47,5])(S([0,1,2])([4,11,.6])(acqua))
]);

// Piscine

var piscine = STRUCT([
	piscina_grande,
	piscina_piccola
]);

// Pilasto a croce

var pilastro_croce = STRUCT([
	S([0,1,2])([.02,.1,3])(acciaio),
	T([0])([.02]),
	S([0,1,2])([.08,.02,3])(acciaio),
	R([2])([PI/2]),
	S([0,1,2])([.02,.1,3])(acciaio),
	T([0])([.02]),
	S([0,1,2])([.08,.02,3])(acciaio),
	R([2])([PI/2]),
	S([0,1,2])([.02,.1,3])(acciaio),
	T([0])([.02]),
	S([0,1,2])([.08,.02,3])(acciaio),
	R([2])([PI/2]),
	S([0,1,2])([.02,.1,3])(acciaio),
	T([0])([.02]),
	S([0,1,2])([.08,.02,3])(acciaio)
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
	T([0,1])([1,.8])(S([0,1,2])([7,.2,3])(marmo)),
	T([0,1])([.8,.8])(S([0,1,2])([.2,21.4,3])(marmo)),
	T([0,1])([1,22])(S([0,1,2])([8,.2,3])(marmo)),
	T([0,1])([9,16.8])(S([0,1,2])([.2,1.8,3])(marmo)),
	T([0,1])([9,16.8 + 1.8])(S([0,1,2])([.2,1.8,2])(marmo)),
	T([0,1,2])([9,16.8 + 1.8,2.5])(S([0,1,2])([.2,1.8,.5])(marmo)),
	T([0,1])([9,16.8 + 1.8 + 1.8])(S([0,1,2])([.2,1.8,3])(marmo))
]);

// Muro centrale marmo

var muro_centrale_marmo = STRUCT([
	T([0,1])([7.5,15])(S([0,1,2])([19,.2,3])(marmo))
]);

// Mura in marmo

var mura_in_marmo = STRUCT([
	muro_sinistra_marmo,
	muro_centrale_marmo
]);

// Muro di destra granito

var muro_destra_granito = STRUCT([
	T([0,1])([37.8,16])(S([0,1,2])([13.4,.2,3])(granito)),
	T([0,1])([51,5])(S([0,1,2])([.2,11,3])(granito)),
	T([0,1])([41.8,4.8])(S([0,1,2])([9.4,.2,3])(granito))
]);

// Muro centrale granito

var muro_centrale_granito = STRUCT([
	T([0,1])([25.2,7.2])(S([0,1,2])([8.8,.2,3])(granito)),
]);

// Mura in granito

var mura_in_granito = STRUCT([
	muro_centrale_granito,
	muro_destra_granito
]);

// Muro in alabastro

var muro_alabastro = STRUCT([
	T([0,1])([37.2,11.8])(S([0,1,2])([5.3,.2,3])(alabastro))
]);

// Tetto di sinistra

var tetto_sinistra = STRUCT([
	T([0,1])([.4,13.4])(S([0,1,2])([9.2,9.2,.3])(int_bianco))
]);

// Tetto di destra

var tetto_destra = STRUCT([
	T([0,1])([24,4])(S([0,1,2])([23,13,.3])(int_bianco))
]);

// Tetti

var tetti = STRUCT([
	tetto_sinistra,
	tetto_destra
]);

// Sovratetto di sinistra

var sovratetto_sinistra = STRUCT([
	T([0,1])([.35,13.35])(S([0,1,2])([9.3,9.3,.1])(int_nero))
]);

// Sovratetto di destra

var sovratetto_destra = STRUCT([
	T([0,1])([23.95,3.95])(S([0,1,2])([23.1,13.1,.1])(int_nero))
]);

// Sovratetti

var sovratetti = STRUCT([
	sovratetto_sinistra,
	sovratetto_destra
]);

// Interni di sinistra

var interni_sinistra = STRUCT([
	T([0,1])([4.9,17])(S([0,1,2])([.2,2.1,3])(legno)),
	T([0,1,2])([4.9,19.1,2])(S([0,1,2])([.2,.8,1])(legno)),
	T([0,1])([4.9,19.9])(S([0,1,2])([.2,2.1,3])(legno)),

	T([0,1])([5.1,20.6])(S([0,1,2])([.5,.2,3])(legno)),
	T([0,1,2])([5.1 + .5,20.6,2])(S([0,1,2])([.8,.2,1])(legno)),
	T([0,1])([5.1 + .5 + .8,20.6])(S([0,1,2])([2.6,.2,3])(legno)),

	T([0,1,2])([6.9,20.8,2])(S([0,1,2])([.2,.8,1])(legno)),
	T([0,1])([6.9,20.8 + .8])(S([0,1,2])([.2,.4,3])(legno))
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
	T([0,1])([8, 14.28])(SIMPLEX_GRID([REPLICA(8)([0.43,-1.68]),[0.44],[0.40]])),
	T([0,1,2])([8 - 0.08, 14.28 - 0.08, 0.40])(S([0,1,2])([0.08 + 15.2 + 0.08,0.08 + 0.44 + 0.08,.1])(marmo))
]);

// Pavilion completo

var pavilion = STRUCT([
	
	pavimentazione,
	T([2])([.2]),
	piscine,
	T([2])([.8]),
	pilastri,
	mura_in_marmo,
	mura_in_granito,
	muro_alabastro,
	interni,
	panchina_centrale,
	T([2])([3]),
	tetti,
	T([2])([.3]),
	sovratetti
]);

DRAW(pavilion);

}

start();
