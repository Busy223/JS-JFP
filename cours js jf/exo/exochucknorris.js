

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