(function (global) {
    'use strict';
  
    var MyApp = global.MyApp || {};
  
    MyApp.namespace = function (ns) {
      var parts = ns.split('.');
      var current = MyApp;
  
      parts.forEach(part => {
        if (!current[part]) current[part] = {};
        current = current[part];
      });
  
      return current;
    };
  
    // Create structure
    MyApp.namespace('utils.array');
    MyApp.namespace('utils.string');
    MyApp.namespace('plugins');
  
    MyApp.core = {
      version: '2.0.0',
      name: 'MyApp Library'
    };
  
    global.MyApp = MyApp;
  
  })(this);