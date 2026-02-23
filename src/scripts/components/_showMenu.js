
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches(".nav__list > li > a");

  if (!isDropdownButton && e.target.closest(".nav__list") != null) return;

  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.nextElementSibling;
    currentDropdown.classList.toggle("show");
  }

  document.querySelectorAll(".sub-menu.show").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("show");
  });
});
