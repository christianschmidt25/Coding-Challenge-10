// Task 1: Setup Product HTML Structure
// This task requires a creation of an HTML page that connects with this JS file.

// See index.html for my HTML site with the appropriate structure.

// Task 2 & 3: Add Event Listeners for Product Selection & Handle Stock Availability
// We will now add event listeners for the size dropdown, which will update the price based on the size selected.
// This task also merged the 2nd and 3rd tasks, modifying the stock availability in the same task.

const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");



const purchaseButton = document.getElementById("purchase-button");

function updatePurchaseButton() {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const stockStatus = selectedOption.getAttribute('data-stock');

    if (stockStatus === 'out-of-stock') {
        purchaseButton.disabled = true;
    } else {
        purchaseButton.disabled = false;
    }
}

sizeSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`
})

sizeSelector.addEventListener("change", updatePurchaseButton);

updatePurchaseButton();