function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-request");

  let apiKey = "at0a18b31ff9827b40242c3f5270f8ob";
  let prompt = `User instructions: Generate a recipe for ${userInput.value}`;
  let context =
    "You are professional baker and you like to share some to share some cake recipes. Generate a short cake recipe with ingredients according to user request below. Your response should be in basic <HTML> with headings in bold and each line separated with <br />. Do not include html and punctuation mark at beginning and at the end of recipe. Make the headings bold";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log("Prompt:${prompt}");
  console.log("Context:${context}");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeGeneratorForm = document.querySelector("#recipe-generator-form");
recipeGeneratorForm.addEventListener("submit", generateRecipe);
