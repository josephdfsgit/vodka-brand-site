// cart.js
import '../styles/cart.scss';
import { getCart, removeFromCart, updateCartItemQty } from './cartCTRL.js';

export const Cart = async () => {
    const table = document.getElementById('item-table');
    const cart = getCart();
    table.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-items';
        cartItem.innerHTML = `
            <p class="item-names">${item.name}</p>
            <input class="item-qty" type="number" value="${item.qty}" min="1">
            <p class="item-price">$${item.price}</p>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '-';
        cartItem.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => {
            removeFromCart(item.id);
            updateDisplays();
            setTimeout(() => {
                location.reload();
            }, 100);
        });

        const qtyInput = cartItem.querySelector('.item-qty');
        qtyInput.addEventListener('change', () => {
            const newQty = parseInt(qtyInput.value);
            if (newQty >= 1) {
                updateCartItemQty(item.id, newQty);
                updateDisplays();
                location.reload();
            }
        });

        table.appendChild(cartItem);
    });

    updateDisplays();
};

// Function to update the cart quantity display
const updateDisplays = () => {
    const SubTotal = document.getElementById('subtotal');
    const Total = document.getElementById('total');
    const TotalQty = document.getElementById('total-qty');
    const cart = getCart();
    
    const subtotalAmount = cart.reduce((total, item) => total + (item.qty * item.price), 0);
    const taxRate = 0.13; 
    const totalAfterTax = subtotalAmount * (1 + taxRate);

    SubTotal.innerHTML = `$${subtotalAmount.toFixed(2)}`;
    Total.innerHTML = `$${totalAfterTax.toFixed(2)}`;
    TotalQty.innerHTML = cart.reduce((totalQty, item) => totalQty + item.qty, 0);
};