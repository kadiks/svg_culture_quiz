const els = {
  objects: null,
  flags: null,
};

const mapSolution = {
  pizza: "italy",
  baguette: "france",
  temple: "greece",
};

let selectedObject = null;
let selectedFlag = null;

const init = () => {
  els.objects = document.querySelector(".objects");
  els.flags = document.querySelector(".flags");

  els.objects.addEventListener("click", onSelectObject);
  els.flags.addEventListener("click", onSelectFlag);
};

const onSelectFlag = ({ target }) => {
  const el = target.closest(".flag-container");
  if (el === null) {
    return;
  }
  selectedFlag = el.dataset.name;
  //   console.log({ selectedFlag });
  if (mapSolution[selectedObject] === selectedFlag) {
    console.log("win");
    document.querySelector(`[data-name="${selectedObject}"]`).remove();
    document.querySelector(`[data-name="${selectedFlag}"]`).remove();
  } else {
    console.log("lose");
    deselectedObjects();
  }
};

const onSelectObject = ({ target }) => {
  deselectedObjects();

  if (target.closest("svg")) {
    target.closest("svg").setAttribute("class", "selected");
  }
  selectedObject = target.closest(".object-container").dataset.name;
};

const deselectedObjects = () => {
  els.objects.querySelectorAll("svg").forEach((el) => {
    el.setAttribute("class", "");
  });
};

window.addEventListener("load", init);
