let button = document.getElementById('button');
let image = document.getElementById('image');
let pokeNumber = document.getElementById('number');
let pokeName = document.getElementById('name');
let pokeType = document.getElementById('type'); // Ajout d'un élément pour le type
let pokeStats = document.getElementById('stats'); // Assurez-vous que cet élément existe

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    try {
        let data = await fetch(requestString);
        let response = await data.json();
        console.log(response);

        // Mise à jour de l'image, numéro, nom et type du Pokémon
        image.src = response.sprites.front_default;
        pokeNumber.textContent = `${response.id}`;
        pokeName.textContent = response.name;
        pokeType.textContent = response.types.map(typeInfo => typeInfo.type.name).join(', '); // Affichage du type

        // Affichage des statistiques de base
        pokeStats.innerHTML = response.stats.map(statInfo => `<p>${statInfo.stat.name}: ${statInfo.base_stat}</p>`).join('');
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
};

changePokemon();
button.addEventListener('click', changePokemon); // Ajout de l'événement pour le bouton click
