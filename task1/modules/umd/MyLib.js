(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery', 'underscore'], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory(require('jquery'), require('underscore'));
    } else {
      root.MyLib = factory(root.jQuery, root._);
    }
  }(this, function ($, _) {
    'use strict';
  
    var MyLib = {};
  
    MyLib.namespace = function (ns) {
      var parts = ns.split('.');
      var parent = MyLib;
  
      for (var i = 0; i < parts.length; i++) {
        if (!parent[parts[i]]) {
          parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
      }
  
      return parent;
    };
  
    MyLib.namespace('utils.array');
    MyLib.namespace('events');
  
    MyLib.utils.array.unique = arr => [...new Set(arr)];
  
    // Event system
    MyLib.events.EventEmitter = function () {
      this.events = {};
    };
  
    MyLib.events.EventEmitter.prototype.on = function (event, handler) {
      (this.events[event] = this.events[event] || []).push(handler);
    };
  
    MyLib.events.EventEmitter.prototype.emit = function (event, data) {
      (this.events[event] || []).forEach(h => h(data));
    };
  
    return MyLib;
  }));