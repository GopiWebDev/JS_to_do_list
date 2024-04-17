const initialize = () => {
  const body = document.querySelector("body");
  const main = document.createElement("main");
  const sideBar = document.createElement("aside");
  sideBar.id = "sidebar";

  const h1 = document.createElement("h1");
  h1.textContent = "Projects";

  const section = document.createElement("section");
  section.id = "projects";

  const div = document.createElement("div");
  div.classList.add("project-item");
  const h3 = document.createElement("h3");
  h3.textContent = "Default Project";

  div.appendChild(h3);
  section.appendChild(div);

  const form = document.createElement("form");
  form.id = "form";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "project-name";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Project";

  form.appendChild(input);
  form.appendChild(addBtn);

  sideBar.appendChild(h1);
  sideBar.appendChild(section);

  sideBar.appendChild(form);

  main.appendChild(sideBar);
  body.append(main);
};

export default initialize;
