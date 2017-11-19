# Udacity Front End Dev
Google Developer Scholarship Udacity Front End notes, assignments

## Practice : note to self

- anonymous functions 

## Notes

## HTML

```<!-- Weird..I'll never remember this -->``` - comment in HTML

```<strong></strong>``` to make bold

```<em></em>``` to make italicized

```<sup></sup>``` for subscript

```<strike></strike>``` for crossing off

```<hr></hr>``` for footer page break

```<body style="margin:30px;padding:5px">``` html margins without using css

## Concepts (HTML)

- ```id``` can only be used once per page (should be used sparingly)


## CSS

```/* like C++ */``` is a comment

```p {color: blue;}```

```p``` is the selector

```{color: blue;}``` is the declaration block

## Packages for Sublime (I should be learning Emacs over winter break)

```Emmet```, ```Color Highlighter```, ```Pigments```, ```Sublime Tutor```

- More packages at [packagecontrol.io](https://packagecontrol.io/)

## JS

- list of **falsy** values
  - ```false```
  - ```null```
  - 0
  - ""
  - ```NaN```

- list of some **truthy** values
  - true
  - 42 
  - "pizza"
  - "0"
  - "null"
  - "undefined"
  - ```{}```
  - ```[]```
  
## Ternary

- format => ```condition ? true : false;```
  eg. ```isRaining ? "carry umbrella" : "leave umbrella at home";```
  
## Functions

```
function reverseString(reverseMe){
	var reversed = "";
	for (var i = reverseMe.length - 1; i >= 0; i--){
		reversed += reverseMe[i];	
	}
	return reversed;
}
```
## Hoisting
- Before any JavaScript is executed, all function declarations are **"hoisted"** to the top of their current scope

```
wat-> 
findAverage(5, 9);
function findAverage(x, y){
  var answer = (x + y) / 2;
  return answer;
  // reminds me of prototyping in C++
}
```

## Func Declaration vs Func Expression 

```
function catSays(max)
{
  //blah
};
catSays();
```

vs 

```
var catSays = 
function(max)
{
  //blah
};
catSays();
```
  
## Arrays 

- forEach()

```
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function printDonuts(donut)
{
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
}

donuts.forEach(printDonuts);

==============================
or with inlining: (cleaner)

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut)
{
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
```
- map

```
var myArray = [1,2,3,4,5];
var newArray = myArray.map(function(elem){
  elem = elem + 100;
  return elem;
});
```

## JQuery

- selectors 

```$('tag')```
```$('.class')```
```$('#id')```




 
 





