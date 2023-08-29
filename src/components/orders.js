import '../styles/orders.scss';

export const Orders = async () => {
    const display = document.getElementById('display-order');
    const findOrderForm = document.getElementById('order-finder');
    
    findOrderForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const orderIDInput = document.getElementById('order-id');
        const orderID = orderIDInput.value;

        if (orderID) {
            try {
                const response = await fetch(`http://localhost:3003/orders/find/${orderID}`);
                if (response.ok) {
                    const order = await response.json();
                    display.innerHTML = `
                        <h2>${order.shippingInfo.name}'s Order Details</h2>
                        <p id="status">status:<strong> ${order.status}</strong></p>
                        <p id="orderid"><strong>Order ID:</strong> ${order._id}</p>
                        <p id="date"><strong>Date:</strong> ${order.date}</p>
                        <p><strong>Items:</strong> ${order.items.join(' - ')}</p>
                        <p><strong>Quantity:</strong> ${order.quantity}</p>
                        <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
                        <!-- Display other order properties as needed -->
                    `;
                } else {
                    display.innerHTML = `Cannot Find Order With ID: ${orderID}`;
                }
            } catch (error) {
                console.error('Error fetching order:', error);
                display.innerHTML = 'An error occurred while fetching the order.';
            }
        } else {
            display.innerHTML = 'Please provide an Order ID.';
        }
    });
};
