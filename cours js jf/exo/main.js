import { contactApi } from './exochucknorris.js';
contactApi();
import { writefooter } from './footerchucknorris.js';
writefooter();



//! correction 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { renderNavbar } from './scripts/navbarService';
import { renderFooter } from './scripts/footerService';
import { fetchQuotes } from './scripts/welcomeService'; // Importation du service de bienvenue
import { moduleHello } from './scripts/hello.js';
// import './style.css';

console.log('main');
renderFooter();
renderNavbar();

moduleHello('jojo');

fetchQuotes();