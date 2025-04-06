document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("dropdownMenu");
    const dropdownContent = dropdown.querySelector(".dropdown-content");
  
    dropdown.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que la página recargue
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  });
  