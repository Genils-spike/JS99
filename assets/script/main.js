/* Récupération des differents éléments dans le code HTML */

/* Création des différentes variables qui vont être utilisées et affichées*/
function units(price, level, bonus, value){
	this.price = price;
	this.level = level;
	this.bonus = bonus;
	this.value = (value + bonus) * level;
}
	/* Bonus, niveaux et prix du Clickeur */
var leClickeur = new units(10, 0, 0, 1);

	/* Bonus, niveaux et prix de BMO */
var bmo = new units(100, 0, 3, 0)
	
	/*création des variables de clique et de Gold per second*/
var clickValue = 1;
var GPS = 0;
var gold = 0;

	/*affichages des valeurs à 0*/
document.getElementById("gold").innerHTML = gold;
document.getElementById("clickeurLevel").innerHTML = leClickeur.level;
document.getElementById("clickeurPrice").innerHTML = leClickeur.price;
document.getElementById("bmoLevel").innerHTML = bmo.level;
document.getElementById("bmoPrice").innerHTML = bmo.price;

/*Créations des différentes intéraction avec la pages HTML*/

function incrementValue(){
	gold += clickValue;
	document.getElementById("gold").innerHTML = gold;
};

function levelClick(){

	if(gold >= leClickeur.price){
		leClickeur.level += 1;
		leClickeur.value = leClickeur.level;
		clickValue += leClickeur.value;
		gold -= leClickeur.price;
		leClickeur.price = Math.ceil(leClickeur.price * 1.8);
		document.getElementById("gold").innerHTML = gold;
		document.getElementById("clickeurLevel").innerHTML = leClickeur.level;
		document.getElementById("clickeurPrice").innerHTML = leClickeur.price;
	}
	else{
		alert("pas assez d'argent")
	}
};

function bmoClick(){

	if(gold >= bmo.price){
		bmo.level += 1;
		bmo.value = bmo.bonus * bmo.level;
		GPS += bmo.value;
		gold -= bmo.price;
		bmo.price = Math.ceil(bmo.price * 1.8);
		document.getElementById("gold").innerHTML = gold;
		document.getElementById("bmoLevel").innerHTML = bmo.level;
		document.getElementById("bmoPrice").innerHTML = bmo.price;
	}
	else{
		alert("pas assez d'argent")
	}
};

setInterval(function(){
	gold += GPS;
	document.getElementById("gold").innerHTML = gold;
}, 1000);