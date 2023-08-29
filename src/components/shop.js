import '../styles/shop.scss';
import { Product } from '../components/product.js';

const imageMap = {};

export const Shop = async () => {
    const shopSelect = document.getElementById('shop-opt');
    const vodkaCont = document.getElementById('shop-container');

    const updateShop = async (selectedValue) => {
        vodkaCont.innerHTML = ''; 

        const inventoryUrl = `http://localhost:3003/inventory/${selectedValue}`;

        try {
            const inventoryResponse = await fetch(inventoryUrl);
            const inventoryData = await inventoryResponse.json();

            await Promise.all(inventoryData.map(async item => {
                const imageUrl = require(`../assets/${item.productIMG}`);
                imageMap[item.productIMG] = imageUrl.default;
            }));

            inventoryData.forEach(item => {
                const itemCont = document.createElement('a');
                itemCont.id = item._id;
                itemCont.className = 'product';
                itemCont.innerHTML = `
                    <img class="product-img" src="${imageMap[item.productIMG]}" alt="bottle">
                    <div id="product-info">
                        <h3 id="product-name">${item.name}</h3>
                        <h4 id="product-price">$${item.price}</h4>
                    </div>
                `;
                itemCont.addEventListener('click', () => Product(selectedValue, itemCont.id)); // Pass a function reference
                vodkaCont.appendChild(itemCont);
            });
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    };

    // Initial fetch using the default selected option
    updateShop(shopSelect.value);

    // Update the shop when the selected option changes
    shopSelect.addEventListener('input', (event) => {
        const selectedValue = event.target.value;
        updateShop(selectedValue);
    });
};
