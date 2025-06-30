export function iniciarServicos() {
  const toggleButtons = document.querySelectorAll(".toggle-details-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const detailsId = this.getAttribute("aria-controls");
      const detailsElement = document.getElementById(detailsId);
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      if (detailsElement) {
        if (isExpanded) {
          detailsElement.classList.remove("visible");
          this.setAttribute("aria-expanded", "false");
          this.textContent = "+ Detalhes";
        } else {
          detailsElement.classList.add("visible");
          this.setAttribute("aria-expanded", "true");
          this.textContent = "- Ocultar";
        }
      }
    });
  });
}
