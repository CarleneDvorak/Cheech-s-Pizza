// Declaring Types of Pizza Array
var pizzaType = ["Cheese Only", "Sausage", "Peperoni", "Anchovi"];
// Creating parallel array with pizzaCost for pizzaType Array
var pizzaCost = [13.60, 14.50, 14.60, 15.50, 15.75];
// Start Gathering divs so that a for loop can display it's options
var pizzaNumberDiv = document.getElementById('amount');
var pizzaTypeDiv = document.getElementById('toppings');

// Displays 1-4 for # of pizzas
for (i = 1; i <= 4; i++) {
    pizzaNumberDiv.innerHTML += "<option>" + i + "</option>";
}

//Displays pizza types in pizza options
for (i = 0; i <= pizzaType.length - 1; i++) {
    pizzaTypeDiv.innerHTML += "<option>" + pizzaType[i] + "</option>";
}


var previewButton = document.getElementById('review');
if (previewButton) {
    var cost = (pizzaCost[indexPrice] * pizzaNumberDiv.value) * .082;
    //Gathering divs to display values for preview button
    var fName = document.getElementById('fName');
    var lName = document.getElementById('lName');
    var pNum = document.getElementById('email');

    //Gathering div to put preview HTML
    var reviewOrder = document.getElementById('review');

    //The index number for the pizzaCost parallel Array
    var indexPrice = pizzaType.indexOf(pizzaTypeDiv.value);

    // The price of the pizza type
    var price = pizzaCost[indexPrice];}

   //NOT ALL OF THESE FUNCTIONS WORK.??

