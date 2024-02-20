document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get('paymentId');
    if (paymentId) {
      const checkoutOptions = {
        checkoutKey: 'test-checkout-key-399de74b24c940ecaa6007b455f1958f', // Replace!
        paymentId: paymentId,
        containerId: "checkout-container-div",
      };
      const checkout = new Dibs.Checkout(checkoutOptions);
      checkout.on('payment-completed', function (response) {
        console.log(response);
        window.location = 'completed.html';
      });
    } else {
      console.log("Expected a paymentId");   // No paymentId provided, 
      window.location = '/cart';         // go back to cart.html
    }
  });