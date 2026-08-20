const orderForm = document.getElementById("orderForm");
const orderSummary = document.getElementById("orderSummary");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dessert = document.getElementById("dessert").value;
    const quantity = document.getElementById("quantity").value;
    const occasion = document.getElementById("occasion").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    orderSummary.innerHTML = `
        <h3>Order Request Summary</h3>
        <p>Thank you, ${name}!</p>
        <p>You requested ${quantity} ${dessert}(s).</p>
        <p>Occasion: ${occasion}</p>
        <p>Date Needed: ${date}</p>
        <p>Special Request: ${description}</p>
        <p>Corrine can review your request and follow up with you.</p>
    `;
});

orderForm.addEventListener("reset", function() {
    orderSummary.innerHTML = "";
});