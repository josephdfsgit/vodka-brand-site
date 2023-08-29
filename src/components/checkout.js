import '../styles/checkout.scss';
import { getCart, emptyCart } from './cartCTRL';

export const Checkout = async () => {
    let cartTotal = 0;
    let cartQty = 0;
    const finalCart = getCart();
    const cartCont = document.getElementById('final-cart');
    const Total = document.getElementById('total');
    const Amount = document.getElementById('amount');

    // Clear any existing content in the cart container
    cartCont.innerHTML = '';

    finalCart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <p>x${item.qty}</p>
        `;
        cartQty += item.qty;
        cartTotal = cartTotal += (item.price * item.qty);
        cartCont.appendChild(cartItem);
    });
    cartTotal = cartTotal * 1.13;
    Total.innerHTML = `$${cartTotal.toFixed(2)}`;
    Amount.innerHTML = `qty: ${cartQty}`;

    const today = new Date().toLocaleDateString('en-US');
    const form = document.getElementById('shipping-info');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(form); // Gather form data

        // Prepare the data to be sent to the server
        const orderData = {
            items: finalCart.map(item => item.name),
            ids: finalCart.map(item => item.id),
            quantity: cartQty,
            subtotal: cartTotal,
            total: cartTotal,
            date: today,
            shippingInfo: {
                name: formData.get('name'),
                email: formData.get('email'),
                address: formData.get('address'),
                city: formData.get('city'),
                state: formData.get('state'),
                zip: formData.get('zip')
            },
            paymentInfo: {
                cname: formData.get('cname'),
                ccnum: formData.get('ccnum'),
                expdate: formData.get('expdate'),
                cvv: formData.get('cvv')
            }
        };

        try {
            // Send the POST request using fetch
            const response = await fetch('http://localhost:3003/orders/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
        
            const responseData = await response.json();
            
            if (response.ok && responseData._id) {
                console.log('Order saved successfully:', responseData);
                window.location.href = '/checkedout';
                emptyCart();
            } else {
                console.log('Order validation failed or response data is not as expected:', responseData);
                // Handle this scenario, like showing an error message to the user
            }
        } catch (error) {
            console.error('Error saving order:', error);
            // Handle errors, e.g., show an error message to the user
        }        
    });
};
