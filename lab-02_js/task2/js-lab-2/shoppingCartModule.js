const ShoppingCart = (function () {

    let basket = [];
    let total = 0;
  
    function _validateItem(item) {
      return item &&
             typeof item.name === "string" &&
             item.name.length > 0 &&
             typeof item.price === "number" &&
             item.price > 0;
    }
  
    function _calculateTotal() {
      total = basket.reduce((sum, item) => sum + item.price, 0);
    }
  
    return {
      addItem: function(item) {
        if (!_validateItem(item)) {
          console.error("Invalid item");
          return;
        }
        basket.push(item);
        _calculateTotal();
      },
  
      getItemCount: function() {
        return basket.length;
      },
  
      getTotal: function() {
        return `$${total.toFixed(2)}`;
      }
    };
  
  })();