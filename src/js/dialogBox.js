function createModal() {
  const main = document.querySelector("main");
  const dialog = document.createElement("dialog");

  const form = document.createElement("form");
  form.id = "dialog-form";

  const nameLabel = document.createElement("label");
  nameLabel.for = "todo-name";
  nameLabel.innerText = "Todo Name";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "todo-name";
  nameInput.id = "todo-name";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);

  dialog.appendChild(form);
  main.appendChild(dialog);
}

export default createModal;
