var inr = 1;
var usd = 69.58;
var sgd = 51.35;
var inpcur = "inr";
var outcur = "inr" ;
var inp,out;

function inp_cur(){
	inpcur = document.getElementById('inp-cur').value;
}

function out_cur(){	
	outcur = document.getElementById('out-cur').value;
}

function convert(){

	var input = parseInt(document.getElementById('input').value);

	// FOR INPUT

	if(inpcur=="inr")
		inp = input;
	else if(inpcur=="sgd")
		inp = input*sgd;
	if(inpcur=="usd")
		inp = input*usd;

	// FOR OUTPUT

	if(outcur=="inr")
		out=inp;
	else if(outcur=="sgd")
		out=inp/sgd;
	else if(outcur=="usd")
		out=inp/usd;

	out = Math.round(out*100)/100;
	document.getElementById('output').value = out;

}