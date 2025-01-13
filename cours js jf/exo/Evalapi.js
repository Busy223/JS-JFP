const card = document.querySelector('.card');

const contactApi = async () => {
    try {
        const recupApi = await fetch('https://randomuser.me/api/');
        console.log(recupApi);
        if (!recupApi.ok || recupApi.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", recupApi.statusText);
            return;
        }

        const transformedData = await recupApi.json();
        console.log(transformedData);

        const user = transformedData.results[0];
        if (!user) {
            console.error("Aucun utilisateur trouvé");
            return;
        }


        const cardrandom = document.createElement('div');
        cardrandom.classList.add('card', 'm-3', 'p-3', 'bg-light');
        cardrandom.innerHTML = DOMPurify.sanitize(`
            <img src="${user.picture.medium}" class="card-img-top" alt="random image">
            <div class="card-body">
                <h5 class="card-title">${user.gender}</h5>
                <p class="card-nom"> ${user.name.first}</p>
                <p class="card-prenom"> ${user.name.last}</p>
                <p class="card-adress"> ${user.location.street.number} ${user.location.street.name}</p>
                <p class="card-tel"> ${user.phone}</p>
                <button id="myButton" class="btn btn-primary" onclick="history.go(0)">go somewhere</button></div>`);
        card.appendChild(cardrandom);

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
};

contactApi();





//ne fonctionne pas  donc try de on click sur le bouton 
document.querySelector('button').addEventListener('click', contactApi()){
    
};
