// Declaring Types of Pizza Array
var pizzaType = ['Cheese Only', 'Sausage', 'Peperoni', 'Anchovi', 'Italian'];

// Creating parallel array with pizzaCost for pizzaType Array (you can use single array for this)
var pizzaCost = [13.60, 14.50, 14.60, 15.50, 15.75];

// Start Gathering divs so that a for loop can display it's options
var pizzaNumberDiv = document.getElementById('selectAmt');
var pizzaTypeDiv = document.getElementById('selectToppings');

// Displays 1-10 for # of pizzas (This is one way of doing this)
for (i = 1; i <= 10; i++) {
    var opt = document.createElement('option'); //Create a variable creating an option in HTML
    opt.innerHTML = i; //adds i as an option in the dropdown list for every iteration
    pizzaNumberDiv.appendChild(opt); //appends current i as a last option in the list (refer to https://www.w3schools.com/jsref/met_node_appendchild.asp for more info)
}

//Displays pizza types in pizza options (This is your original solution, works great too)
for (i = 0; i <= pizzaType.length - 1; i++) {
    pizzaTypeDiv.innerHTML += '<option>' + pizzaType[i] + '</option>';
}

// Add event listener when submit button is pushed
document.getElementById('review').addEventListener('click', reviewOrder);

// This function gathers all required information from the form and performs calculations
function reviewOrder() {
    // Tax percentage
    var taxPercent = 0.076; //7.6% tax
    //The index number for the pizzaCost parallel Array (finds it by selected name in selectToppings id)
    var indexPrice = pizzaType.indexOf(pizzaTypeDiv.value);
    //Calculates subtotal by multiplying the price by the amount chosen in selectAmt id and rounds it to 2 decimal places
    subtotal  = (pizzaCost[indexPrice] * pizzaNumberDiv.value).toFixed(2);
    //Calculates total by substracting the tax from subtotal and rounds it to 2 decimal places
    total = (subtotal - (subtotal * taxPercent)).toFixed(2);
    showTax = (subtotal * taxPercent).toFixed(2);
    //Gathering divs to display values for preview button
    fName = document.getElementById('fname').value;
    lName = document.getElementById('lname').value;
    eMail = document.getElementById('email').value;
    //Runs replaceForm() function if fields are not empty
    if (fName != 0 && lName != 0 && eMail != 0){
        replaceForm();
    }
}

//Replaces the original form with an order summary
function replaceForm(){
    //gets the order form
    var getForm = document.getElementById('orderForm');
    // Replacing orderForm id with new value
    getForm.innerHTML = 
        "<fieldset> \
            <legend><strong>Cheech's Pizza - Order Confirmation</strong></legend>\
            <label >First Name: </label>" + fName + 
            "<br /> \
            <label>Last Name: </label>" + lName +
            "<br/> \
            <label>Email Address: </label>" + eMail +
            "<br /> \
            <label> \
                Pizzas Ordered: " + pizzaNumberDiv.value +
            "</label> \
            <br /> \
            <label> \
                Topping: " + pizzaTypeDiv.value +
            "</label> \
            <br /> \
            <label>\
                Subtotal: " + "$" + subtotal +
            "</label> \
            <br /> \
            <label> \
                Tax: " + "$" + showTax +
            "</label> \
            <br /> \
            <label> \
                Total: " + "$" + total +
            "</label> \
        </fieldset>";

}
