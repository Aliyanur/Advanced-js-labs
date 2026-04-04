(function () {
    'use strict';
  
    MyApp.namespace('plugins.storage');
  
    MyApp.plugins.storage.local = {
      set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      },
      get(key) {
        return JSON.parse(localStorage.getItem(key));
      }
    };
  
    // Plugin register
    MyApp.plugins.register = function (namespace, plugin) {
      var parts = namespace.split('.');
      var current = MyApp;
  
      parts.forEach(p => {
        if (!current[p]) current[p] = {};
        current = current[p];
      });
  
      Object.assign(current, plugin);
    };
  
  })();