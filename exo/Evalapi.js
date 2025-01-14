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
// document.querySelector('button').addEventListener('click', contactApi()){    
// };




//! correction 

const userDiv = document.getElementById('userCard');
console.log(userDiv);
const randomUserApi =async ()=>{
    userDiv.innerHTML = '';
    const userData = await fetch('https://randomuser.me/api/');
    console.log(userData);
    const userDataTransformed = await userData.json();
    console.log(userDataTransformed);
    console.log(userDataTransformed.results[0]);
    let myUserData = userDataTransformed.results[0];
    console.log(myUserData.name);
    console.log(myUserData.name.first);

    let userImgUI = document.createElement('img');
    userImgUI.classList.add('card-img-top');
    userImgUI.src = myUserData.picture.large;
    // userImgUI.setAttribute('src',myUserData.picture.large);

    let cardBodyUI = document.createElement('div');
    cardBodyUI.classList.add('card-body');    

    let userName = document.createElement('h5');
    userName.classList.add('card-title');
    userName.innerText =`${myUserData.name.title}. ${myUserData.name.first} ${myUserData.name.last}`;

    let userMail = document.createElement('p');
    userMail.classList.add('card-text');
    userMail.innerText = myUserData.email;

    let userAdress = document.createElement('p');
    userAdress.classList.add('card-text');
    userAdress.innerText = `Adress : ${myUserData.location.street.number} - ${myUserData.location.street.name} (${myUserData.location.city} - ${myUserData.location.country})`;

    let userPhone = document.createElement('p');
    userPhone.classList.add('card-text');
    userPhone.innerText = `Phone : ${myUserData.phone}`;

    let randomBtnUI = document.createElement('a');
    randomBtnUI.classList.add('btn','btn-primary');
    randomBtnUI.innerText = 'Random User';

    
    cardBodyUI.append(userName,userMail,userAdress,userPhone,randomBtnUI);
    userDiv.append(userImgUI,cardBodyUI);
    
    randomBtnUI.addEventListener('click',()=>{
        console.log('Random User Clicked');
        randomUserApi();
    });

}
randomUserApi();


