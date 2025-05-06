function placeOrder() {
    const items = document.querySelectorAll('#menu input');
    let summary = "<h3>Order Summary:</h3><ul>";
    let total = 0;
    let hasItems = false;

    items.forEach((input, index) => {
      const quantity = parseInt(input.value);
      const price = parseFloat(input.dataset.price);
      const label = input.previousElementSibling.textContent;

      if (quantity > 0) {
        hasItems = true;
        const itemTotal = quantity * price;
        total += itemTotal;
        summary += `<li>${label} x ${quantity} = Ksh.${itemTotal.toFixed(2)}</li>`;
      }
    });

    summary += "</ul>";
    summary += `<strong>Total: Ksh.${total.toFixed(2)}</strong>`;

    document.getElementById('order-summary').innerHTML = hasItems ? summary : "<p>Please select at least one item.</p>";
  }