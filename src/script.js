function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Vanilla sponge cake recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeGeneratorForm = document.querySelector("#recipe-generator-form");
recipeGeneratorForm.addEventListener("submit", generateRecipe);
