// projects local storage key
const LOCAL_STORAGE_PROJECT_KEY = "project.todos";
// selected porject id local storage key
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "project.selectedProjectId";

// Projects Elements
// projects ul that contains project lists
const projectsContainer = document.querySelector("[data-projects]");
// new project form
const newProjectForm = document.querySelector("[data-new-project-form]");
// new project input element
const newProjectInput = document.querySelector("[data-new-project-input]");
// delete project button
const deleteProjectBtn = document.querySelector("[data-delete-project-button]");

// Todos Elements
// todo header container that displays the project name
const projectDisplayContainer = document.querySelector(
  "[data-project-display-container]"
);
// todo container which container header and all todos
const projectTitleElement = document.querySelector("[data-project-title]");
// todos container that contains all todos
const todosContainer = document.querySelector("[data-todos]");
// todo template
const todoTemplate = document.querySelector("#todo-template");
const newTodoForm = document.querySelector("[data-new-todo-form]");
const newTodoNameInput = document.querySelector("[data-new-todo-name-input]");
const newTodoDescInput = document.querySelector("[data-new-todo-desc-input]");
const newTodoDueDateInput = document.querySelector(
  "[data-new-todo-date-input]"
);
const newTodoNotesInput = document.querySelector("[data-new-todo-notes-input]");
const newTodoPriorityInput = document.querySelector(
  "[data-new-todo-priority-input]"
);
const clearCompleteTodoBtn = document.querySelector(
  "[data-clear-complete-todos-button]"
);

// loads projects if already exists in local storage or else sets an empty array
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

// adding event listener on projects container
projectsContainer.addEventListener("click", (e) => {
  // checking if the clicked element's tagName is li and setting selected project id to clicked li id and save and render
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.projectId;
    saveAndRender();
  }
});

todosContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    const selectedTodo = selectedProject.todos.find(
      (todo) => todo.id === e.target.id
    );
    selectedTodo.complete = e.target.checked;
    save();
  }
});

clearCompleteTodoBtn.addEventListener("click", (e) => {
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.todos = selectedProject.todos.filter(
    (todo) => !todo.complete
  );
  saveAndRender();
});

// adding click event listener to delete btn
deleteProjectBtn.addEventListener("click", (e) => {
  // filtering out the projects which is not equal to selectedId and setting it to projects array
  projects = projects.filter((project) => project.id !== selectedProjectId);
  //   setting the selectedProjectId to null because we removed it
  selectedProjectId = null;
  //   save and render removes the selectedId project and loads the page
  saveAndRender();
});

newProjectForm.addEventListener("submit", (e) => {
  // preventing default behaviour
  e.preventDefault();
  //  taking input value and assigning to this variable
  const projectName = newProjectInput.value;
  //   checking if projectName is not empty, if empty returns nothing
  if (projectName == null || projectName === "") return;
  //   creating new project with the name
  const project = createProject(projectName);
  //   clearing the input field after submit
  newProjectInput.value = null;
  //   adding the project to projects array and save & rendering
  projects.push(project);
  saveAndRender();
});

newTodoForm.addEventListener("submit", (e) => {
  // preventing default behaviour
  e.preventDefault();
  //  taking input value and assigning to this variable
  const todoName = newTodoNameInput.value;
  const todoDesc = newTodoDescInput.value;
  const todoDueDate = newTodoDueDateInput.value.toString();
  const todoNotes = newTodoNotesInput.value;
  const todoPriority = newTodoPriorityInput.value;

  const todoObj = {
    name: todoName,
    description: todoDesc,
    dueDate: todoDueDate,
    notes: todoNotes,
    priority: todoPriority.toUpperCase(),
  };
  //   checking if projectName is not empty, if empty returns nothing
  if (todoName == null || todoName === "") return;
  //   creating new project with the name
  const todo = createTodo(todoObj);
  //   clearing the input field after submit
  newTodoNameInput.value = null;
  newTodoDescInput.value = null;
  newTodoDueDateInput.value = null;
  newTodoNotesInput.value = null;
  newTodoPriorityInput.value = "low";
  //   adding the project to projects array and save & rendering

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.todos.push(todo);
  saveAndRender();
});

// function that returns an object with unique id and todos container set to empty array
function createProject(name) {
  return {
    name: name,
    // takes the current time and converts to string
    id: Date.now().toString(),
    todos: [],
  };
}

function createTodo(todo) {
  return {
    id: Date.now().toString(),
    name: todo.name,
    description: todo.description,
    dueDate: todo.dueDate,
    notes: todo.notes,
    priority: todo.priority,
    complete: false,
  };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  // saving the item to local storage
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
}

// renders each project by forEach method
function render() {
  // clears already existing elements
  clearElement(projectsContainer);
  //   calling the render projects section
  renderProjects();

  //  this finds the project which has the id equal to selectedProjectId
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  if (selectedProjectId == null) {
    projectDisplayContainer.style.display = "none";
  } else {
    projectDisplayContainer.style.display = "";
    projectTitleElement.innerText = selectedProject.name;
    // clearing existing todos which is html coded
    clearElement(todosContainer);
    // rendering todos only from selected project
    renderTodos(selectedProject);
  }
}

function renderTodos(selectedProject) {
  selectedProject.todos.forEach((todo) => {
    const todoElement = document.importNode(todoTemplate.content, true);
    const checkbox = todoElement.querySelector("input");
    checkbox.id = todo.id;
    checkbox.checked = todo.complete;
    const label = todoElement.querySelector("label");
    label.htmlFor = todo.id;
    const priority = todoElement.querySelector(".priority");
    priority.innerText = `Priority: ${todo.priority}`;

    if (todo.priority.toLowerCase() === "high") {
      label.style.color = "red";
      priority.style.color = "red";
    }
    if (todo.priority.toLowerCase() === "medium") {
      label.style.color = "orange";
      priority.style.color = "orange";
    }
    if (todo.priority.toLowerCase() === "low") {
      label.style.color = "darkgreen";
      priority.style.color = "darkgreen";
    }
    label.append(todo.name);
    const description = todoElement.querySelector(".description");
    description.innerText = `Description: ${todo.description}`;
    const dueDate = todoElement.querySelector(".due-date");
    dueDate.innerText = `Due Date: ${todo.dueDate}`;
    const notes = todoElement.querySelector(".notes");
    notes.innerText = `Notes: ${todo.notes}`;
    todosContainer.appendChild(todoElement);
  });
}

function renderProjects() {
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    // setting data id for selecting purpose
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add("project-name");
    projectElement.innerText = project.name;
    if (project.id === selectedProjectId) {
      projectElement.classList.add("active-project");
    }
    // appending project to projects contianer
    projectsContainer.appendChild(projectElement);
  });
}

// clears if already any elemnts exists like html coded elements
function clearElement(element) {
  // while loop checks if first child exists and removes it
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// calling the render function

export { render };
