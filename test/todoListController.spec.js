describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var todo;

  beforeEach(inject(function($controller) {
    todo = $controller('TodoListController');
  }));

  it('initializes with an empty array', function() {
    expect(todo.list).toBeUndefined();
    expect(todo.term).toBeUndefined();
  });


  describe('when adding a list item', function() {

    var items = [

      { "name": "buy milk" },
      { "name": "walk dog" },
      { "name": "read book"}

    ];

    it('displays list items', function() {
      todo.term = 'bananas';
      todo.doAdd();
      expect(todo.list.items).toEqual(items);
    });

  }); //when adding a list item



}); //TodoListController
