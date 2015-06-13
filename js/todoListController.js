myApp.controller('TodoListController', [function() {
  var self = this;

  self.doAdd = function() {
    self.list = {

      "items": [

        { "name": "buy milk" },
        { "name": "walk dog" },
        { "name": "read book"}

      ]


    };

  }; //doAdd



}]); //TodoListController
