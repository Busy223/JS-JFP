//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };

  const div = document.querySelector("div")
  const username = document.createElement("h2");
  username.innerText = userData.name;
  div.appendChild(username);
  div.style.backgroundColor = "linear-gradient(45deg, #690d14, #EF54CC)";

const usermail = document.createElement("p");
usermail.innerText = userData.email;
div.appendChild(usermail);


const userage = document.createElement("p");
userage.innerText = userData.age;
div.appendChild(userage);


const userdob = document.createElement("p");
userdob.innerText = userData.dob;
div.appendChild(userdob);

const useract = document.createElement("p");
useract.innerText = userData.active;
div.appendChild(useract);

const userimg = document.createElement("img");
userimg.setAttribute("src", 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg');div.insertBefore(userimg,username);



//!correction
//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
// const userData = {
//   name: 'John SEAGAL',
//   email: 'john.doe@example.com',
//   age: 25,
//   dob: '08/02/1989',
//   active: true,
//   img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
// };

   // JS qui va customiser la div du profile utilisateur
// let divUser = document.querySelector('.userProfile');
// console.log(divUser);
// divUser.style.backgroundColor = `#4158D0`;
// divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
// divUser.style.color = `white`;
// divUser.style.width = '500px';
// divUser.style.margin = 'auto';
// divUser.style.padding = '2rem';
//JS crée une image, renseigne la src , modif taille
// const imgTemplate = document.createElement('img');
// imgTemplate.src = userData.img;
//   imgTemplate.style.height = '500px';
//   imgTemplate.style.width = '500px';
// imgTemplate.className='img-fluid';
// divUser.append(imgTemplate);
// JS crée le titre du name
// const nameTemplate = document.createElement('h1');//phase 1 creation
// nameTemplate.innerText = userData['name'];
// divUser.append(nameTemplate);
// JS crée le titre du email
// const emailTemplate = document.createElement('h2');//phase 1 creation
// emailTemplate.innerText = userData.email;
// divUser.append(emailTemplate);
// JS crée le titre du age

// const ageTemplate = document.createElement('h3');//phase 1 creation
//   ageTemplate.innerText = userData.age;
//   divUser.append(ageTemplate);
// JS crée le titre du dob
// const dobTemplate = document.createElement('h4');//phase 1 creation
// dobTemplate.innerText = userData.dob;
// divUser.append(dobTemplate);
// JS crée le titre du active
// const activeTemplate = document.createElement('h5');//phase 1 creation
// activeTemplate.innerText = userData.active;
// divUser.append(activeTemplate);

//!Version un peu plus opti (mais on peut opti encore plus )

//   -------------------------------VERSION OPTIMISEE -------------------------------????

// function applyStyles(element) {
//   element.style.backgroundColor = `background-color: #4158D0`;
//   element.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
//   element.style.color = `white`;
//   element.style.width = '500px';
//   element.style.margin = 'auto';
//   element.style.padding = '2rem';
// }

// function createAndAppendElement(tag, text, parentElement) {
//   const element = document.createElement(tag);
//   element.innerText = text;
//   parentElement.append(element);
// }

// let divUser = document.querySelector('.userProfile');
// applyStyles(divUser);

// const imgTemplate = document.createElement('img');
// imgTemplate.src = userData.img;
// imgTemplate.className = 'img-fluid';
// divUser.append(imgTemplate);

// createAndAppendElement('h1', userData.name, divUser);
// createAndAppendElement('h2', userData.email, divUser);
// createAndAppendElement('h3', userData.age, divUser);
// createAndAppendElement('h4', userData.dob, divUser);
// createAndAppendElement('h5', userData.active, divUser);
// createAndAppendElement('h5', '44 rue du truc', divUser);