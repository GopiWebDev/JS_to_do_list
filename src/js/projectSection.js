function createProjectsSection() {
  const body = document.querySelector("body");

  const main = document.createElement("main");
  main.id = "container";

  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";

  const projectItems = document.createElement("div");
  projectItems.classList.add("project-items");

  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  const h3 = document.createElement("h3");
  h3.innerText = "Default Project";

  projectItem.appendChild(h3);
  projectItems.appendChild(projectItem);
  projectsContainer.appendChild(projectItems);
  main.appendChild(projectsContainer);

  const form = document.createElement("form");
  form.id = "project-input";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "enter project name";
  input.id = "project-name";

  const submit = document.createElement("input");
  submit.type = "submit";

  form.appendChild(input);
  form.appendChild(submit);
  projectsContainer.appendChild(form);

  body.appendChild(main);
}

export default createProjectsSection;
