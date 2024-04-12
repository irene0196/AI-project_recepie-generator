function generateRecepie(event) {
  event.preventDefault();

  new Typewriter("#recepie", {
    strings: "tortilla",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recepieFormElement = document.querySelector("#recepie-generation-form");
recepieFormElement.addEventListener("submit, generateRecepie");
