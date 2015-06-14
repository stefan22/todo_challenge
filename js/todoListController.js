myApp.controller('TodoListController', ['$resource', function($resource) {

  var self = this;

  self.allItems = [];

  self.doAdd = function() {
    self.listResult = {

      "items": [
        {"name": self.listTerm }
      ]

    };

    self.allItems.push(self.listTerm);
    
    console.log(self.listTerm);
    console.log(self.allItems);
  };

console.log(self.allItems);

}]); //TodoListController
