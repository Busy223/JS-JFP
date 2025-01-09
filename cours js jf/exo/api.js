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
        const modifdata = await pokedata.json();
        console.log(modifdata);
        console.log(modifdata.results);
        console.log(modifdata.results[0]);
        
        for(let i = 0 ;i< modifdata.results.length ; i++ ){
            let newDiv = document.createElement("div");
            
            // apiDiv3.innerText += modifdata.results[i].name ;
            // apiDiv3.innerText += modifdata.results[i].url ;
            newDiv.innerText = `Nom: ${modifdata.results[i].name}
            `;
            document.body.appendChild(newDiv); 
        }
            
            
    } catch (error){
        console.error("Erreur lors de l'appel à l'API : ", error);
    }

}

contactApiPoke();


const contactApiPoke2 =  async () => {
    try{
        const pokedata2 = await fetch('https://tyradex.vercel.app/api/v1/gen/9');
        console.log(pokedata2);

        if (!pokedata2.ok|| pokedata2.status !==200){
            console.error("erreur lors de la recup de données: " , pokedata.statusText);
            return;
        }
        const modifdata2 = await pokedata2.json();
        console.log(modifdata2);
        console.log(modifdata2.results);
        console.log(modifdata2[1].sprites);
        
        for(let i = 0 ; i< modifdata2.length ; i++ ){
            let newDiv = document.createElement("div");
            let newimg = document.createElement("img");
            newimg.setAttribute("src" , `${modifdata2[i].sprites.regular}` )
            newDiv.innerText = `Name:${modifdata2[i].name.fr} , Poids: ${modifdata2[i].weight} , Taille: ${modifdata2[i].height} , Types: ${modifdata2[i].types.name}`;
            
            document.body.appendChild(newDiv); 
            newDiv.appendChild(newimg);
        }
            
            
    } catch (error){
        console.error("Erreur lors de l'appel à l'API : ", error);
    }

}

contactApiPoke2();

