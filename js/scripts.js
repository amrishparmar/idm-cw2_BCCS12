// object definition for each item
var Item = function(letter, word) {
	this.letter = letter;
	this.word = word;
}

var a = [new Item('A', 'placeholder0'), new Item('A', 'placeholder1'), new Item('A', 'placeholder2')];
var b = [new Item('B', 'placeholder0'), new Item('B', 'placeholder1'), new Item('B', 'placeholder2')];
var c = [new Item('C', 'placeholder0'), new Item('C', 'placeholder1'), new Item('C', 'placeholder2')];
var d = [new Item('D', 'placeholder0'), new Item('D', 'placeholder1'), new Item('D', 'placeholder2')];
var e = [new Item('E', 'placeholder0'), new Item('E', 'placeholder1'), new Item('E', 'placeholder2')];
var f = [new Item('F', 'placeholder0'), new Item('F', 'placeholder1'), new Item('F', 'placeholder2')];
var g = [new Item('G', 'placeholder0'), new Item('G', 'placeholder1'), new Item('G', 'placeholder2')];
var h = [new Item('H', 'placeholder0'), new Item('H', 'placeholder1'), new Item('H', 'placeholder2')];
var i = [new Item('I', 'placeholder0'), new Item('I', 'placeholder1'), new Item('I', 'placeholder2')];
var j = [new Item('J', 'placeholder0'), new Item('J', 'placeholder1'), new Item('J', 'placeholder2')];
var k = [new Item('K', 'placeholder0'), new Item('K', 'placeholder1'), new Item('K', 'placeholder2')];
var l = [new Item('L', 'placeholder0'), new Item('L', 'placeholder1'), new Item('L', 'placeholder2')];
var m = [new Item('M', 'placeholder0'), new Item('M', 'placeholder1'), new Item('M', 'placeholder2')];
var n = [new Item('N', 'placeholder0'), new Item('N', 'placeholder1'), new Item('N', 'placeholder2')];
var o = [new Item('O', 'placeholder0'), new Item('O', 'placeholder1'), new Item('O', 'placeholder2')];
var p = [new Item('P', 'placeholder0'), new Item('P', 'placeholder1'), new Item('P', 'placeholder2')];
var q = [new Item('Q', 'placeholder0'), new Item('Q', 'placeholder1'), new Item('Q', 'placeholder2')];
var r = [new Item('R', 'placeholder0'), new Item('R', 'placeholder1'), new Item('R', 'placeholder2')];
var s = [new Item('S', 'placeholder0'), new Item('S', 'placeholder1'), new Item('S', 'placeholder2')];
var t = [new Item('T', 'placeholder0'), new Item('T', 'placeholder1'), new Item('T', 'placeholder2')];
var u = [new Item('U', 'placeholder0'), new Item('U', 'placeholder1'), new Item('U', 'placeholder2')];
var v = [new Item('V', 'placeholder0'), new Item('V', 'placeholder1'), new Item('V', 'placeholder2')];
var w = [new Item('W', 'placeholder0'), new Item('W', 'placeholder1'), new Item('W', 'placeholder2')];
var x = [new Item('X', 'placeholder0'), new Item('X', 'placeholder1'), new Item('X', 'placeholder2')];
var y = [new Item('Y', 'placeholder0'), new Item('Y', 'placeholder1'), new Item('Y', 'placeholder2')];
var z = [new Item('Z', 'placeholder0'), new Item('Z', 'placeholder1'), new Item('Z', 'placeholder2')];

var itemArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var currentIndex = 0;

// helper function to handle mod of negative numbers - snippet from http://stackoverflow.com/a/17323608
function mod(n, m) {
	return ((m % n) + n) % n;
}

function changeItem(direction) {
	var chooseRandom = Math.floor(Math.random() * 3);
	currentIndex = mod(itemArray.length, currentIndex + direction);
	$('#letter').html(itemArray[currentIndex][chooseRandom].letter);
	$('#word').html(itemArray[currentIndex][chooseRandom].word);
}

// choose an 'A' item on page load
$(document).ready(function() {
	changeItem(0);
});

// go to next letter of alphabet
$('#arrow-right').on('click', function(e) {
	changeItem(1);
	e.preventDefault();
});

// go to previous letter of alphabet
$('#arrow-left').on('click', function(e) {
	changeItem(-1, e);
	e.preventDefault();
});