
// Example 1: Basic Module Pattern (IIFE)

var counterModule = (function () {
  var count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    }
  };
})();

// ### Example 1: Basic Module Pattern (IIFE)

function createUserModule() {
    var users = [];
  
    return {
      addUser: function (name) {
        users.push(name);
      },
      getUsers: function () {
        return users;
      }
    };
  }
  
  var userModule = createUserModule();


// userModule.js
let users = [];

export function addUser(name) {
  users.push(name);
}

export function getUsers() {
  return users;
}