const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const todo = document.getElementById('todo-text')
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	if (!todo.value) {
		alert('Please, add a text to your TODO')
		return;
	}

	if(!list.value) {
		list.value = [];
	}

	const listElement = document.createElement('li');
	const text = document.createTextNode(todo.value);
	listElement.appendChild(text);
	list.appendChild(listElement);
}