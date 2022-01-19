let parrafoDelPokemon1 = document.getElementById('poke1');
let parrafoDelPokemon2 = document.getElementById('poke2');
let parrafoDelPokemon3 = document.getElementById('poke3');

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(respuesta => respuesta.json())
  .then(respuestaDePokemon1 => {
    parrafoDelPokemon1.innerHTML = `
      <p>Nombre: ${respuestaDePokemon1.name}</p>
      <p>Peso: ${respuestaDePokemon1.weight}</p>
      <img src=${respuestaDePokemon1.sprites.front_shiny} />
    `;

    // CREAR ELEMENTO HTML LISTA <ul></ul>
    let abilitiesListElement = document.createElement('ul');
    // ITERAMOS EL ARRAY DE abilities DE NUESTRO POKEMON
    respuestaDePokemon1.abilities.forEach(function(ability) {
      // AGREGANDO AL ELEMENTO <ul> CADA HABILIDAD
      // Y CADA HABILIDAD LA METIMOS DENTRO DE UN ELEMENTO <li>
      abilitiesListElement.innerHTML = abilitiesListElement.innerHTML + `
        <li>${ability.ability.name}</li>
      `;
    });
    // METEMOS EL ELEMENTO <ul> Y SUS RESPECTIVOS ELEMENTOS <li>
    // DENTRO DEL PARRAFO PRINCIPAL DONDE YA ESTAN DENTRO EL PARRAFO
    // DEL NOMBRE, PESO Y SU IMAGEN
    parrafoDelPokemon1.appendChild(abilitiesListElement);
  })
