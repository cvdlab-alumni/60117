var domain = DOMAIN([[1,5]])([4])
DRAW(domain)
var domain2 = DOMAIN([[1,5],[1,3]])([4,2])
DRAW(domain2)
var domain3 = DOMAIN([[1,5],[1,3],[0,1]])([4,2,1])
DRAW(domai3)

var domain4 = DOMAIN([[0,10]])([10]);
var mapping = function (p){
	var u = p[0];
	return [u,1];
}
var mapped = MAP(mapping)(domain4);
DRAW(domain4)

var domain5 = DOMAIN([[0,10]])([10]);
var mapping = function (p){
	var u = p[0];
	return [u,u];
}
var mapped = MAP(mapping)(domain5);
DRAW(domain5);

var domain6 = DOMAIN([[0,2*PI]])([10]);
var mapping = function (p){
	var u = p[0];
	return [u,sin[p]];
}
var mapped = MAP(mapping)(domain6);
COLOR([1,0,0])(domain6)
DRAW(domain6);