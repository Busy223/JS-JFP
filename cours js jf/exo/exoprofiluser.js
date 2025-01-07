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


