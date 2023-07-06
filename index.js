console.log("Running...");

let str = "";

const numberButtonsBtn = Array.from(document.getElementsByClassName("number"));
const equalsBtn = document.getElementsByClassName("equals")[0];
const operationsBtn = Array.from(document.getElementsByClassName("operation"));
const deleteBtn = document.getElementsByClassName("delete")[0];
const clearAllBtn = document.getElementsByClassName("clear_all")[0];

const calculationScreen = document.getElementsByClassName("operations")[0];
const output = document.getElementsByClassName("output")[0];

function ClearAll() {
  str = "";
  calculationScreen.innerHTML = "";
  output.innerHTML = 0;
}

function UpdateDisplay() {
  calculationScreen.innerHTML = str;
}

function DeleteOneByOne() {
  str = str.substring(0, str.length - 1);
  UpdateDisplay();
}

function Evaluate() {
  if (
    str[str.length - 1] === "+" ||
    str[str.length - 1] === "-" ||
    str[str.length - 1] === "*" ||
    str[str.length - 1] === "/" ||
    str[str.length - 1] === "^"
  ) {
    return console.log("Error");
  }
  output.innerHTML = eval(str);
}

ClearAll();

numberButtonsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    str += button.innerHTML;
    UpdateDisplay();
  });
});

operationsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      str[str.length - 1] === "+" ||
      str[str.length - 1] === "-" ||
      str[str.length - 1] === "*" ||
      str[str.length - 1] === "/" ||
      str[str.length - 1] === "^"
    ) {
      str = str.substring(0, str.length - 1);
    }
    str += button.innerHTML;
    UpdateDisplay();
  });
});

equalsBtn.addEventListener("click", () => Evaluate());
clearAllBtn.addEventListener("click", () => ClearAll());
deleteBtn.addEventListener("click", () => DeleteOneByOne());
