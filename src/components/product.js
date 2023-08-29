import '../styles/product.scss';
import { addToCart, getCart, updateCartItemQty } from './cartCTRL.js';

export const Product = async (selectedProduct, ProductID) => {
    try {
        const itemResponse = await fetch(`http://localhost:3003/inventory/${selectedProduct}/${ProductID}`);
        const product = await itemResponse.json();

        const imageUrl = require(`../assets/${product.productIMG}`);

        const productModule = await import('../pages/Product.html');
        const app = document.getElementById('app');
        app.innerHTML = productModule.default;

        const itemName = document.getElementById('item-name');
        const productImg = document.getElementById('product-img');
        const itemPrice = document.getElementById('item-price');
        const itemDescription = document.getElementById('item-description');

        itemName.innerHTML = product.name;
        productImg.src = imageUrl.default;
        itemPrice.innerHTML = `$${product.price}`;
        itemDescription.innerHTML = product.description;

        const addToCartBtn = document.getElementById('add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            const productInfo = {
                id: ProductID, // Use a suitable identifier for your products
                name: product.name,
                price: product.price
            };

            const existingCartItem = getCart().find(item => item.id === productInfo.id);

            if (existingCartItem) {
                updateCartItemQty(productInfo.id, existingCartItem.qty + 1);
            } else {
                productInfo.qty = 1;
                addToCart(productInfo);
            }

            updateCartQtyDisplay();
        });
    } catch (error) {
        console.error('Error loading product:', error);
    }
};

// Function to update the cart quantity display
const updateCartQtyDisplay = () => {
    const cartQty = document.getElementById('cart-qty');
    cartQty.innerHTML = getCart().reduce((totalQty, item) => totalQty + item.qty, 0);
};
