const UtilsModule = (function () {
    function validateEmail(email) {
      return email && email.includes("@");
    }
  
    function formatPrice(price) {
      return "$" + price.toFixed(2);
    }
  
    return {
      validateEmail,
      formatPrice
    };
})();