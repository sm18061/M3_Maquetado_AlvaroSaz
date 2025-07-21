const select = document.getElementById("direction");
const container = document.getElementById("flex-container");
const axisLabels = document.getElementById("axis-labels");

select.addEventListener("change", () => {
  const direction = select.value;
  container.style.flexDirection = direction;

  // Actualizar visualización de los ejes
  if (direction.includes("row")) {
    axisLabels.innerHTML = `
      <span class="main-axis">↔ Eje Principal (Horizontal)</span>
      <span class="cross-axis">↕ Eje Transversal (Vertical)</span>
    `;
  } else {
    axisLabels.innerHTML = `
      <span class="main-axis">↕ Eje Principal (Vertical)</span>
      <span class="cross-axis">↔ Eje Transversal (Horizontal)</span>
    `;
  }
});
