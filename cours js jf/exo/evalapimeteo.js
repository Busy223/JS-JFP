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
