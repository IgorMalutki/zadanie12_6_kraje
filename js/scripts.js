// scripts.js

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
	
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
   		$('<li>').text('Country Name : '+ item.name).appendTo(countriesList);
		$('<li>').text('Capital City : '+ item.capital).appendTo(countriesList);
		$('<li>').text('Population : ' + item.population).appendTo(countriesList);
		$('<li>').text('Currency : ' + item.currencies).appendTo(countriesList);
		$('</br>').appendTo(countriesList);
	});
}






/* zadanie 12_5 cytaty

var prefix = "https://cors-anywhere.herokuapp.com/";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
    //$.getJSON(quoteUrl, createTweet);
	$.getJSON(prefix + quoteUrl, createTweet);
	$.ajaxSetup({ cache: false });
}

function createTweet(input) {
    var data = input[0];
	//console.log(data);
    var quoteText = $(data.content).text().trim();
    var quoteAuthor = data.title;
	var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;
	
    if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
    }

if (tweetText.length > 140) {
    getQuote();
} else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    $('.quote').text(quoteText);
    $('.author').text("Author: " + quoteAuthor);
    $('.tweet').attr('href', tweet);
}
$('.tweet').attr('href', tweet);
}

$(document).ready(function() {
    getQuote();
    $('.trigger').click(function() {
        getQuote();
    })
});





/* 12.4 JQuery

var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
$.ajax({
	method: 'GET',
	url: url, //here's a weird construction, but on the left we have the name of the parameter, and to the right is the name of the variable that holds the value
	success: function(res) {
		$paragraph.text(res.value.joke);
	}

});
}









/* zadanie 12.4 joke 


var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

getJoke();






/*  CWICZENIE 



function Person(name) {
	this.name = name;
	this.sayHello = function() {
		console.log("Hello " + name + "!");
    };
}
var p1 = new Person("Jan");
var p2 = new Person("Zbigniew");


p1.sayHello() // Hello Jan!
p2.sayHello() // Hello Zbigniew!


function Person2(name) {
	var name = name;
	var sayHello = function() {
		console.log("Hello " + name + "!");
    };
	return{name:name,sayHello:sayHello};
}

var p3 = Person2('TYRTY');
p3.sayHello();

var person = {
	name: "Jan",
	sayHello: function() {
	console.log("Hello "  + name + "!");
    }
}
person.sayHello();





/* zadanie 11_5 

var something = 0;

function doSomething() {
  something = 1;
  console.log(something);

  var something = 2; // deklaracja wewnątrz funkcji!!!
  console.log(something);
}

doSomething();
console.log(something);									

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
	var self = this;
	this.$element = $('<button>');
	this.$element.text(this.text);
	this.$element.click(function() {
		alert(self.text);
		});
	$('body').append(this.$element);
	}
}

var btn1 = new Button('Hello!');
btn1.create();


/*  zadanie 11_4
function Phone(brand, price, color, screen_size, cover_color,  ) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen_size = screen_size;
	this.cover_color = cover_color; 
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and cover's color is " + this.cover_color + ".");
}

Phone.prototype.goodPrice = function() {
	if ( this.price/this.screen_size < 200) {
	console.log ( "Price " + this.price + " for that size " + this.	screen_size + "' is ok " )
	}  else {  console.log ( "Brand " + this.brand + " is too expensive " )
	} 
}

var iPhone6S = new Phone("Apple", 2250, "silver", 5, "blue");
var GalaxyS6 = new Phone("Samsung", 900, "gold", 6, "dark-gold");
iPhone6S.printInfo();
iPhone6S.goodPrice();
GalaxyS6.printInfo();
GalaxyS6.goodPrice();

/*  zadanie 10_3

var carouselList = $("#carousel ul");


$(function(){
	//setInterval(changeSlide, 3000); 
});

function changeSlideLeft() {
	carouselList.fadeToggle({'marginLeft':-400}, 500, moveFirstSlide);	
}

function changeSlideRight() {
	carouselList.animate({'marginRight': -400}, 500, moveLastSlide);	
}


function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);	
	carouselList.css({marginLeft:0});
	//console.log(firstItem);
	//console.log(lastItem);
}

function moveLastSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	firstItem.before(lastItem);	
	carouselList.css({marginRight:0});
	//console.log(firstItem);
	//console.log(lastItem);
}


$('i.fa-chevron-left').click(function() {
changeSlideLeft();
console.log("ok-right");
});

$('i.fa-chevron-right').click(function() {
changeSlideRight();
console.log("ok-right");
});

*/

/* zadanie 10_2

var paragraphs = $('p');
paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
	$(element).append(button)
	console.log(index)
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
	console.log(this);
});

$("span:even").css('color', 'red');
$("span:odd").css('color', 'blue');

var span = $("span");
    span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

*/





/*$(function(){
  var p = $( '<p></p>' ),
      pWithText = $( '<p>Hi Hi!</p>' ),
      pWithClass = $( '<p class="greeting">Hi!</p>' ); 
  console.log(p);
  console.log(pWithText);
  console.log(pWithClass);
  
  $("body").append(pWithText);
  $("body").append(pWithClass);
  
});



$(function(){
  var paragraphs = $('p').css('color', 'red');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0);
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'blue');
});





function color(element) {
    //element.style.backgroundColor='red'
    alert("Greetings from the element <div> with class " + element.className + " :)")
    //element.style.backgroundColor = ''
}

function checkOnclickEvent(param) {
	
	console.log(param);
	var element = document.createElement('li');
	var number = document.getElementsByTagName('li');
	element.innerHTML = ('item ' +number.length);
	param.appendChild(element);
	console.log(element);
}
var listElem = document.getElementById('list');
console.log(listElem);
buttonElem = document.getElementById('addElem');
console.log(buttonElem);
buttonElem.addEventListener('click', function() {
  checkOnclickEvent(listElem)
});



function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});




var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);
for ( i = 1 ; i <= withButtonClass.lenght; i++) {
	alert(+innertext);
}


console.log(document); // or window.document

console.log(window);

window.onload = function() {
  console.log('The page is fully loaded.');
  // the rest of the script
}

console.log(location);
//window.location = 'http://www.kodilla.pl';


var navigation = document.getElementById('nav');
console.log(navigation);


var withMenuItemsClass = document.getElementsByClassName('menuItem');
console.log(withMenuItemsClass);


var menu = document.getElementById('footer');
var withMenuItemsClassInNav = menu.getElementsByClassName('menuItem');
console.log(withMenuItemsClassInNav);

var itemsByTagName = document.getElementsByTagName('li');
console.log(itemsByTagName);


var navigation = document.getElementById('nav');
console.log(navigation.nextElementSibling);

//var newElem = document.createElement('p');
//newElem.innerHTML = 'The text inside the p tag, which is under newElem';
//console.log(newElem);


var navigation = document.getElementById('nav');
var newElem = document.createElement('p');
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
navigation.appendChild(newElem);

var menu = document.getElementById('nav');
menu.className += ' navbar-right';
console.log(menu.className);


var navigation = document.getElementsByClassName('menuItem');
console.log(navigation[0].style);
navigation[0].style.background = 'red';
navigation[0].style.padding = '50px';
console.log(navigation[0].style);


drawTree();

function drawTree (h) {
	var h = prompt ('Jak duża ma być choinka?');
	if ( h > 0 ) {
		for ( var i = 1; i <= h ; i++) {
			var star = '';
			for ( var j = 1; j <= i ; j++) {
				star += '*';
			}
		console.log(star);
		}
	}  else alert ('Zła wysokość choinki ');
}




for ( var k = 0 ; k < 10 ; k++) {

    console.log('The value of k is now: ' + k);

    if (k > 5) {
        continue;
    }

    console.log('Instruction at the end of the loop ');
}


var array = ['HTML', 5, 'World', 9.99, {name: 'Piotr'}, 99];
console.log(array.length); // It will display 6

var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var namesWithoutOla = names.filter(function(name) {
    console.log('name in filter: ' + name);
    return name != 'Ola';
});

console.log(namesWithoutOla);

var keywords = 'red, green, blue, yellow, pink, orange, white';
var keywordsArray = keywords.split(', ');
keywordsArray.map( function(element) {
console.log('#tag-' + element);
} );


var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
console.log(dinosaurUpperCase);
var textChanged = text.replace('Velociraptor',dinosaurUpperCase);
console.log(textChanged);
//var halfOfTextChanged = (textChanged.length)/2;
//console.log(halfOfTextChanged);
var firstHalfOfTextChanged = textChanged.substr(0,(textChanged.length)/2);
console.log(firstHalfOfTextChanged);

function getTriangleArea (a,h) {
	var a = prompt('Podaj wartość podstawy trójkąta');
	var h = prompt('Podaj wartość wysokości trójkąta');
	if ((a <=0) || (h <=0 )) { 
		alert ('Wprowadzona wartość jest mniejsza od zera - błąd !');
		return 'Nieprawidłowe dane';
	} else 
		return ( a*h/2) ;
}

var triangle1Area = getTriangleArea();
alert('Pole trójkąta to : '+ triangle1Area);
//console.log(getTriangleArea());
console.log(triangle1Area);

var arrayMen = ['Tomek','Krzysiek','Piotr','Paweł','Norbert','Kacper'];
var arrayWomen = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var arrayWomenAndMen = arrayMen.concat(arrayWomen);
console.log(arrayWomenAndMen);
var newName = 'Marian';
var isIn = arrayWomenAndMen.indexOf(newName);
if (isIn < 0) {
	arrayWomenAndMen.push(newName);
	console.log(arrayWomenAndMen);
} else {
	alert('Imię'+ newName +' występuje już w tablicy na pozycji numer: '+ isIn );
} */