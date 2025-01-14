

export const contactApi = async () => {
    console.log("contactApi");
    const title = document.querySelector('.text-center');
    try {
        const recupApi = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(recupApi);
        if (!recupApi.ok || recupApi.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", recupApi.statusText);
            return;
        }

        const transformedData = await recupApi.json();
        console.log(transformedData);


        title.textContent = transformedData.value


    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
};

// contactApi();

//!correction 
export  async function fetchQuotes  () {
    let mainTitle = document.querySelector('h1');
    
    // Vérifie si l'URL est celle de la page d'accueil
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        // if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {

        //Data va récup Toutes les données de l'api de Chuck Norris
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);
        console.log(response.ok);
        console.log(response.status);
        //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
        const dataTransformed = await response.json();
        console.log(dataTransformed);
        mainTitle.innerText = dataTransformed.value; // Affiche la blague
    }
};

// SALE NOOB ya aucune Gestion d'erreur JEff (note a soi meme)