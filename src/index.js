function handleRecepie(response) {
  console.log("recepie generated");
  new Typewriter("#recepie", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecepie(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let key = "4f2de4faea20e4o3bbf33tf295b054b5";
  let context =
    "You are a spanish cooking expert and you love to cook spanish food. Your mission is to generate a simple and short spanish food recepie in basic HTML. Only indicate the name of the recepie, then the ingredients and then the cooking process without markers. Make sure to follow the user instructions: ";
  let prompt = `User Instructions: Generate a spanish food recepie using ${instructionsInput.value} as key ingredient`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let recepieElement = document.querySelector("#recepie");
  recepieElement.classList.remove("hidden");
  recepieElement.innerHTML = ` <div class="generating">⌛ Generating Spanish Recepie with ${instructionsInput.value} </div>`;

  console.log(`Prompt is ${prompt}`);
  console.log(`Prompt is ${context}`);

  axios.get(url).then(handleRecepie);
}

let recepieFormElement = document.querySelector("#recepie-generation-form");
recepieFormElement.addEventListener("submit", generateRecepie);
