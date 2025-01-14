const cardmeteo = document.querySelector('.cardMeteo');
const cardtitle = document.querySelector('.cardMeteo__titre');
const cardinfo = document.querySelector('i');


const contactApi = async () => {
    try {
        const recupApi = await fetch('https://prevision-meteo.ch/services/json/toulouse');
        console.log(recupApi);
        if (!recupApi.ok || recupApi.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", recupApi.statusText);
            return;
        }

        const transformedData = await recupApi.json();
        console.log(transformedData);

        const info = document.createElement('div');
            info.style.maxHeight = "300px" ;
            info.style.width = "200px" ;
            info.style.marginTop = "16px" ;
            info.style.marginBottom = "16px" ;
            info.style.padding = "16px 12px 24px 12px" ;
            info.style.border ="3px, solid, grey";//oublie avant la pause rajout apres la pause
        cardinfo.appendChild(info);

        function addInfo(){
            info.textContent = ` Aujourdui le temps est :  ${transformedData.fcst_day_0.condition}  et la température est de   ${transformedData.current_condition.tmp} °C  T° Max =  ${transformedData.fcst_day_0.tmax}  T° Min =  ${transformedData.fcst_day_0.tmin}`
            text.appendChild(info);
        }

        function bouton(){
            document.querySelector("button").setAttribute("class", "button_cardMeteo")

            document.querySelector("button").addEventListener("mousedown", function() {
                document.querySelector("button").style.backgroundColor = "orange";
            });
            
            document.querySelector("button").addEventListener("mouseup", function() {
                document.querySelector("button").style.backgroundColor = "";
            });


            document.querySelector("button").addEventListener("click", function() {
                contactApi();
                addInfo();
            });
        }
        bouton();
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
};

contactApi();


//! correction

//Variable et Recup des éléments html
let meteo;
let infoMet;
let button = document.getElementsByTagName("button")[0];
let cardMeteo = document.getElementsByClassName("cardMeteo")[0];


//crée une div, avant le bouton, qui affichera les infos météos
let info = document.createElement("div");
info.style.height = "300px";
info.style.width = "200px";
info.style.margin = "16px 0";
info.style.border = "3px solid grey";
info.style.padding = "16px 12px 24px";
cardMeteo.insertBefore(info, button);


//FONCTIONS
//ajoute une class au bouton qui va changer sa couleur en vert
function bouton() {
    button.classList.add("button__cardMeteo");
}

//affiche les infos météos
function addInfo() {
    cardMeteo.getElementsByTagName("div")[0].innerText = infoMet;
}

//récupère les infos météos dans une variable (affiché dans la div précédente de addInfo())
function infoMeteo() {
    let tmax = meteo.fcst_day_0.tmax;
    let tmin = meteo.fcst_day_0.tmin;
    let tcurrent = meteo.current_condition.tmp;
    let condition = meteo.current_condition.condition;

    infoMet = `Aujourd'hui le temps est : ${condition}, et la température est de ${tcurrent}°C
    T° Max = ${tmax} - T° Min = ${tmin}`;

    console.log(infoMet);
}


//INTERACTION ET API
//change la couleur du bouton en restant appuyé dessus
button.addEventListener("mousedown", (event) => {
    button.style.backgroundColor = "orange";
})

//annule l'interaction précédente
document.addEventListener("mouseup", (event) => {
    button.style.backgroundColor = "";
})

//demande les infos météos au service web, et exécute les fonctions permettant leur affichage
button.addEventListener("click", (event) => {
    fetch("https://prevision-meteo.ch/services/json/toulouse")
    .then((response) => {
            return response.json();
        })
        .then((value) => {
            meteo = value;
            console.log(value);
            infoMeteo();
            bouton();
            addInfo();
        })
        .catch((error) => {
            console.log(error);
        });
})