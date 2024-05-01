import renderTodo from "./renderTodo";

function createModal() {
  const main = document.querySelector("main");
  const dialog = document.createElement("dialog");
  dialog.classList.add("modal");

  const form = document.createElement("form");
  form.id = "dialog-form";

  const htmlElement = `<label for="todo-name">Todo Name </label>
  <input type="text" name="todo-name" id="todo-name" />
  <label for="todo-description">Description</label>
  <textarea
    type="text"
    name="todo-description"
    id="todo-description"
    rows="6"
    cols="10"
    placeholder="enter the todo description - max 200 characters"
    maxlength="200"
  ></textarea>
  <label for="date-selector">Due Date</label>
  <input type="date" name="date-selector" id="date-selector" />
  <label for="priority">Priority Level </label>
  <select name="priority" id="priority">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  <label for="notes">Notes</label>
  <textarea name="notes" id="notes" cols="10" rows="5"></textarea>
  <label for="checklist">Checklist</label>
  <div class="checklist-div">
    <input type="text" name="checklist" id="checklist" />
    <button for="checklist-btn">Add</button>
  </div>
  <input type="submit" value="Add todo" />`;

  form.innerHTML = htmlElement;
  dialog.appendChild(form);
  main.appendChild(dialog);

  form.addEventListener("submit", (e) => {
    const todoNameInput = document.querySelector("#todo-name");
    const descriptionInput = document.querySelector("#todo-description");
    const dateInput = document.querySelector("#date-selector");
    const notesInput = document.querySelector("#notes");
    

    e.preventDefault();
    const newTodo = {
      name: todoNameInput.value,
      description: descriptionInput.value,
      date: dateInput.value,
      notes: notesInput.value,
    };
    renderTodo(newTodo);
    dialog.close();
  });
}

export default createModal;
