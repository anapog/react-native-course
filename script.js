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

	addListItem();
	clearInputData();
	increaseTodoListCounter();
}

function addListItem () {
	const listElement = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('value', todo.value);
	listElement.appendChild(checkbox);
	const text = document.createTextNode(todo.value);
	listElement.appendChild(text);
	list.appendChild(listElement);
}

function clearInputData() {
	todo.value = "";
}

function increaseTodoListCounter() {
	itemCountSpan.textContent = list.childElementCount;
}