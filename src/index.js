// index.js
import './style.scss';
import { handleLocation, route } from './components/router.js';
import { getCart } from './components/cartCTRL.js';

const menuBtn = document.getElementById('menu-btn');
const sideNav = document.body.querySelector(".navigation");
let navSwitch = true;

menuBtn.addEventListener('click', sideNavSwitch);

function sideNavSwitch() {
    if (navSwitch) {
        sideNav.style.display = "none";
        navSwitch = false;
    } else {
        sideNav.style.display = "flex";
        navSwitch = true;
    }
}

window.route = route;

// Load the initial page content based on the current URL
handleLocation();

// Get the cart item count and update the cart-qty element
const cartQty = document.getElementById('cart-qty');
cartQty.innerHTML = getCart().reduce((totalQty, item) => totalQty + item.qty, 0);
