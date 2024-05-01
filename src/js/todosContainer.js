import createModal from "./dialogBox";

function createTodosContainer() {
  createModal();
  const main = document.querySelector("main");

  const todosContainer = document.createElement("div");
  todosContainer.id = "todos-container";

  const button = document.createElement("button");
  button.innerText = "Add Todo";

  const dialog = document.querySelector(".modal");
  button.addEventListener("click", () => {
    dialog.show();
  });

  todosContainer.appendChild(button);

  main.appendChild(todosContainer);
}

export default createTodosContainer;
