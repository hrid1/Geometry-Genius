// console.log("Okay");

function valueById(id) {
  const inputText = document.getElementById(id);
  const inputValue = parseFloat(inputText.value);
  inputText.value = "";
  return inputValue;
}

function createNewRow(name, area) {

  area = area.toFixed(2);
  const areaTable = document.getElementById("area-table");
  const newRow = document.createElement("tr");
  const slNo = areaTable.children.length;

  newRow.innerHTML = `
      <td>${slNo + 1}.${name}</td>
       <td> ${area} cm<sup>2</sup></td>
      <td> <button  class="btn-sm b p-">Covert to m<sup>2</sup></button></td> 
  `;

  areaTable.appendChild(newRow);
}

// trianlge

document.getElementById("calculate-btn").addEventListener("click", (event) => {
  const name = "Trinanle";
  const h = valueById("base");
  const b = valueById("height");

  const area = 0.5 * h * b;
  createNewRow(name, area);
});

// reactangle

function reactangleArea() {
  const name = "Reactangle";
  const l = valueById("rectangle-l");
  const w = valueById("rectangle-w");

  const area = l * w;
  createNewRow(name, area);
}
// Paralleogram

function paralleogramArea() {
  const name = "Parralelogram";
  const h = valueById("paralleogram-h");
  const b = valueById("paralleogram-b");

  const area = h * b;
  createNewRow(name, area);
}


// rhombus
function rhombosArea () {

  const name = "Rhombos";
  const d1 = valueById('rhombus-d1');
  const d2 = valueById('rhombus-d2');
  
  const area = 0.5 * d1 * d2;
  createNewRow(name, area);
}
// pentagon
function pentagonArea () {

  const name = "Pentagon";
  const b = valueById('pentagon-b');
  const p = valueById('pentagon-p');
  
  const area = 0.5 * p * b;
  createNewRow(name, area);
}
// pentagon
function ElipseArea () {

  const name = "Elipse";
  const a = valueById('ellipse-a');
  const b = valueById('ellipse-b');

  const area = 3.14 * a * b;
  console.log(area);
  createNewRow(name, area);
}