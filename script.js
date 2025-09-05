function mostrarAlerta() {
  alert("Gracias por visitar mi portafolio. Para contactarme, usa mi email o LinkedIn.");
}

const chips = document.querySelectorAll(".chip");
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("activo");
  });
});
