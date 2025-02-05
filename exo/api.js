const apiDiv = document.querySelector('.apiContacter');
const apiDiv2 = document.querySelector('.apiContact-2');
const apiDiv3 = document.querySelector('.apiContactPokeapi');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');//await permet de faire notre fonction en mode asynchrone cela permet d'avoir une réponse et non une promesse
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed = await response.json();  //on va traduire le json en js en await pour attendre qu'il est bien terminer de transformer avant de passer a la suite
    console.log(dataTransformed);
    console.log(dataTransformed.elevation);
    apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
};
contactApi();

//contact api pokemon


const contactApiSecure =  async () => {
    const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
    console.log(rawData);
    
    // Vérification du statut de la réponse  ||petite sécuriter facile a mettre en place avec if
    if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
        console.error("Erreur lors de la récupération des données : ", rawData.statusText);
        return; // Sortir de la fonction si la réponse n'est pas OK
    }

    const transformedData = await rawData.json();
    console.log(transformedData);
    apiDiv2.innerHTML = transformedData.name.fr;
}

contactApiSecure();


// Version secu ++ avec du TRY CATCH 
const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
        console.log(rawData);
        
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        apiDiv2.innerText = transformedData.name.fr;
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}
contactApiSecurePlus();




const contactApiPoke =  async () => {
    try{
        const pokedata = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
        console.log(pokedata);

        if (!pokedata.ok|| pokedata.status !==200){
            console.error("erreur lors de la recup de données: " , pokedata.statusText);
            return;
        }
        const convertJsonEnJsPokeApi1 = await pokedata.json();
        console.log(convertJsonEnJsPokeApi1);
        console.log(convertJsonEnJsPokeApi1.results);
        console.log(convertJsonEnJsPokeApi1.results[0]);
        
        for(let i = 0 ;i< convertJsonEnJsPokeApi1.results.length ; i++ ){
            let newDiv = document.createElement("div");
            
            // apiDiv3.innerText += convertJsonEnJsPokeApi1.results[i].name ;
            // apiDiv3.innerText += convertJsonEnJsPokeApi1.results[i].url ;
            newDiv.innerText = `Nom: ${convertJsonEnJsPokeApi1.results[i].name}`;
            document.body.appendChild(newDiv); 
        }
            
            
    } catch (error){
        console.error("Erreur lors de l'appel à l'API : ", error);
    }

}

contactApiPoke();


//!correction 
// import DOMPurify from "dompurify";

// de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const pokemonApiContact = async () => {
    const pokemonListe = document.getElementById('pokeList');
    console.log(pokemonListe);
    //Data va récup Toutes les données de l'api
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const pokemonDataTransformed = await pokemonData.json();
    console.log('pokemonDataTransformed',pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    // Boucle pour parcourir le tableau results dans la réponse
    pokemonDataTransformed.results.forEach(unPokemon => {
        let listElement = document.createElement('h3');
        listElement.innerText = unPokemon.name;
        pokemonListe.append(listElement);
    });
};
pokemonApiContact();





const contactApiPoke2 =  async () => {
    try{
        const pokedata2 = await fetch('https://tyradex.vercel.app/api/v1/gen/9');
        console.log(pokedata2);

        if (!pokedata2.ok|| pokedata2.status !==200){
            console.error("erreur lors de la recup de données: " , pokedata2.statusText);
            return;
        }
        const convertJsonEnJsPokeApi2 = await pokedata2.json();
        console.log(convertJsonEnJsPokeApi2);
        console.log(convertJsonEnJsPokeApi2.results);
        console.log(convertJsonEnJsPokeApi2[1].sprites);
        for(let i = 0 ; i< convertJsonEnJsPokeApi2.length ; i++ ){
            let newDivpoke = document.createElement("div");
            let newimgpoke = document.createElement("img");
            newimgpoke.setAttribute("src" , `${convertJsonEnJsPokeApi2[i].sprites.regular}` )
            newDivpoke.innerText = `Name:${convertJsonEnJsPokeApi2[i].name.fr} , Poids: ${convertJsonEnJsPokeApi2[i].weight} , Taille: ${convertJsonEnJsPokeApi2[i].height} , Types: ${convertJsonEnJsPokeApi2[i].types.map((type)=>{
                return type.name;
        })}`;

            document.body.appendChild(newDivpoke); 
            newDivpoke.appendChild(newimgpoke);
        }
            
            
    } catch (error){
        console.error("Erreur lors de l'appel à l'API : ", error);
    }

}

contactApiPoke2();

//!correction 
let divPokemonUI = document.querySelector("#superPokemonList");

const fetchPokemonGen9 = async () => {
    try {
        const response = await fetch("https://tyradex.vercel.app/api/v1/gen/9");
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        console.log(data);
        

        // Générer des cartes pour chaque Pokémon
        data.forEach(pokemon => {
            const cartePokemon = document.createElement('div');
            cartePokemon.classList.add('card','m-3', 'p-3','bg-light');
            cartePokemon.style.width = '18rem';
            cartePokemon.innerHTML = DOMPurify.sanitize(`
              <img src="${pokemon.sprites.regular}" class="card-img-top" alt="${pokemon.name.fr}">
              <div class="card-body">
                <h5 class="card-title">${pokemon.name.fr}</h5>
                <p class="card-text">Type: ${pokemon.types.map(type => type.name).join(', ')}</p>
                <p class="card-text">Poids: ${pokemon.weight}</p>
                <p class="card-text">Taille: ${pokemon.height}</p>
            </div>`);
            divPokemonUI.appendChild(cartePokemon);
            // Ajouter la carte au conteneur
        });
    } catch (error) {
        console.error('Erreur:', error);
    }
}

fetchPokemonGen9();
