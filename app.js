let button = document.getElementById('button');
let image = document.getElementById('image');
let pokeNumber = document.getElementById('number');
let pokeName = document.getElementById('name');
let pokeType = document.getElementById('type'); // Ajout d'un élément pour le type

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString); 

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `${response.id}`;
    pokeName.textContent = response.name;
    pokeType.textContent = response.types.map(typeInfo => typeInfo.type.name).join(', '); // Affichage du type
}

changePokemon();
button.addEventListener('click', changePokemon);// Ajout des éléments HTML pour les statistiques
let pokeStats = document.getElementById('stats'); // Assurez-vous d'avoir un élément avec l'ID 'stats' dans votre HTML

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString); 

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `${response.id}`;
    pokeName.textContent = response.name;
    pokeType.textContent = response.types.map(typeInfo => typeInfo.type.name).join(', '); // Affichage du type

    // Affichage des statistiques de base
    pokeStats.innerHTML = response.stats.map(statInfo => `<p>${statInfo.stat.name}: ${statInfo.base_stat}</p>`).join('');
}

changePokemon();
button.addEventListener('click', changePokemon);


/* let button = document.getElementById('button');

const changePokemon = () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // Remplacer math par Math
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    fetch(requestString)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

button.addEventListener('click', changePokemon); */


