describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var todo;

  var items;


  beforeEach(inject(function($controller) {
    todo = $controller('TodoListController');

    items = [
      { "name": "shoes" }
    ];

  }));

  it('initializes with an empty array', function() {
    expect(todo.listResult).toBeUndefined();
    expect(todo.listTerm).toBeUndefined();
  });


  describe('when adding a list item', function() {


    it('displays new item', function() {
      todo.listTerm = 'shoes';
      todo.doAdd();
      expect(todo.listResult.items).toEqual(items);
    });

    it('stores item into array', function() {
      // todo.allItems.push(items);
      todo.listTerm = "shoes";
      todo.doAdd();
      expect(todo.allItems.length).toEqual(1);
    });

  }); //when adding a list item



}); //TodoListController
