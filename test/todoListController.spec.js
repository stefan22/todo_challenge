describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var todo;

  beforeEach(inject(function($controller) {
    todo = $controller('TodoListController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(todo.listItems).toBeUndefined();
    expect(todo.listTerm).toBeUndefined();
  });

  it('should have no items to begin with', function() {
    expect(todo.listItems.length).toBe(0);
  });



});
