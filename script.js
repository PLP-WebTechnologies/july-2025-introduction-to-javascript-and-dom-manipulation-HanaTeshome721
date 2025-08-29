// A single script file to hold all your JavaScript code.
document.addEventListener('DOMContentLoaded', () => {

    //  Part 1: Mastering JavaScript Basics
    // This section demonstrates variables, user input, and conditionals.
    console.log("--- Part 1: JavaScript Basics ---");

    // Select the button and greeting element
    const greetingButton = document.getElementById('greeting-button');
    const userGreetingElement = document.getElementById('user-greeting');

    // Add a click event listener to the button
    greetingButton.addEventListener('click', () => {
        let username = prompt("What's your name?");

        if (username) {
            userGreetingElement.textContent = `Hello, ${username}! Welcome to the assignment.`;
            console.log(`User entered: ${username}`);
        } else {
            userGreetingElement.textContent = "Please enter your name.";
            console.log("User canceled or entered an empty name.");
        }
    });

    // -------------------------------------------------------------

    // Part 2: JavaScript Functions — The Heart of Reusability
    // This section includes two custom functions.
    console.log("\n--- Part 2: Functions ---");

    // 1. Function to calculate a total with tax.
    function calculateTotal(price, taxRate = 0.08) {
        const total = price * (1 + taxRate);
        return total.toFixed(2); // Return a formatted string
    }

    // 2. Function to toggle a CSS class.
    function toggleClass(elementId, className) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.toggle(className);
            console.log(`Toggled class '${className}' on element with ID '${elementId}'`);
        }
    }

    // Use the function to calculate and display a price
    const basePrice = 50.00;
    const finalPrice = calculateTotal(basePrice);
    document.getElementById('total-price').textContent = `$${finalPrice}`;
    console.log(`The calculated total price is $${finalPrice}`);

    // -------------------------------------------------------------

    // Part 3: JavaScript Loops — Embrace the Power of Repetition!
    // This section demonstrates two examples of loops.
    console.log("\n--- Part 3: Loops ---");
    
    // 1. A for loop to generate list items.
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
    const itemList = document.getElementById('item-list');
    
    for (let i = 0; i < items.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = items[i];
        itemList.appendChild(listItem);
    }
    console.log("Generated list items using a for loop.");

    // 2. An array forEach loop to log each item.
    items.forEach((item, index) => {
        console.log(`Item at index ${index}: ${item}`);
    });

    // -------------------------------------------------------------

    //  Part 4: Mastering the DOM with JavaScript
    // This section features at least three DOM interactions.
    console.log("\n--- Part 4: DOM Manipulation ---");

    // 1. Change the content of the main heading
    const mainHeading = document.getElementById('main-heading');
    mainHeading.textContent = "Mastering JavaScript Fundamentals!";
    console.log("Updated the main heading's text.");

    // 2. Add an event listener to toggle a class on a div
    const toggleButton = document.getElementById('toggle-button');
    const colorBox = document.getElementById('color-box');
    
    toggleButton.addEventListener('click', () => {
        toggleClass('color-box', 'toggled');
        console.log("Toggle button was clicked.");
    });

    // 3. Create a new element and append it to the body
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This is a new paragraph added dynamically using DOM methods.";
    document.querySelector('main').appendChild(newParagraph);
    console.log("Dynamically created and added a new paragraph.");
});
