const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const todo = document.getElementById('todo-text')
const todoList = document.getElementById('todo-list')
const doneList = document.getElementById('done-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	if (!todo.value) {
		alert('Please, add a text to your TODO')
		return;
	}

	addListItem();
	clearInputData();
	increaseTodoListCounter();
	calculateUncheckedCount();
}

function addListItem () {
	const listElement = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('value', todo.value);
	checkbox.addEventListener('click', toggleItemStatus);
	listElement.appendChild(checkbox);
	const text = document.createTextNode(todo.value);
	listElement.appendChild(text);
	todoList.appendChild(listElement);
}

function clearInputData() {
	todo.value = "";
}

function increaseTodoListCounter() {
	itemCountSpan.textContent = todoList.childElementCount + doneList.childElementCount;
}

function calculateUncheckedCount() {
	uncheckedCountSpan.textContent = itemCountSpan.textContent - doneList.childElementCount;
}

function toggleItemStatus() {
	let listItem = this.parentElement;
	if (todoList.contains(listItem)) {
		todoList.removeChild(listItem);
		doneList.appendChild(listItem);
	} else {
		doneList.removeChild(listItem);
		todoList.appendChild(listItem);
	}
	calculateUncheckedCount();
}
