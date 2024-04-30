import createHeader from "./js/header";
import createProjectsSection from "./js/projectSection";
import createTodosContainer from "./js/todosContainer";

function initialize() {
  createHeader();
  createProjectsSection();
  createTodosContainer();
}

export default initialize;
