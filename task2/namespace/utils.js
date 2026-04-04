(function () {
    'use strict';
  
    MyApp.namespace('utils.array');
    MyApp.namespace('utils.string');
  
    MyApp.utils.array.unique = arr => [...new Set(arr)];
  
    MyApp.utils.array.shuffle = arr => {
      let a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
  
    MyApp.utils.string.capitalize = str =>
      str.charAt(0).toUpperCase() + str.slice(1);
  
  })();