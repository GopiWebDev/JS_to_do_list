function renderTodo(newTodo) {
  const todoContainer = document.querySelector("#todos-container");

  const template = document.querySelector("#todo-item-template");
  const templateClone = template.content.cloneNode(true);

  const todoName = templateClone.querySelector("[data-todo-name]");
  todoName.innerText = newTodo.name;

  const todoDescription = templateClone.querySelector(
    "[data-todo-description]"
  );
  todoDescription.innerText = newTodo.description;

  const todoDate = templateClone.querySelector("[data-todo-date]");
  todoDate.innerText = newTodo.date;

  const todoNote = templateClone.querySelector("[data-todo-notes]");
  todoNote.innerText = newTodo.notes;

  todoContainer.appendChild(templateClone);
}

export default renderTodo;
