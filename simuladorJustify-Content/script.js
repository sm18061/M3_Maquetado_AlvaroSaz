const select = document.getElementById("justify");
const container = document.getElementById("flex-container");

select.addEventListener("change", () => {
  const value = select.value;
  container.style.justifyContent = value;
});
