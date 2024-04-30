function createHeader() {
  const body = document.querySelector("body");

  const header = document.createElement("header");
  header.id = "header";
  const h1 = document.createElement("h1");
  h1.innerText = "TODO LIST";

  header.appendChild(h1);
  body.appendChild(header);
}

export default createHeader;
