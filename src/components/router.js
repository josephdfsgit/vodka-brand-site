export const route = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: () => import('../pages/404.html'),
    "/": () => import('../pages/Home.html'),
    "/shop": () => import('../pages/Shop.html'),
    "/photos": () => import('../pages/Photos.html'),
    "/orders": () => import('../pages/Orders.html'),
    "/contact": () => import('../pages/Contact.html'),
    "/about": () => import('../pages/About.html'),
    "/cart": () => import('../pages/Cart.html'),
    "/checkout": () => import('../pages/Checkout.html'),
    "/checkedout":() => import('../pages/OrderSent.html'),
    "/message":() => import('../pages/Message.html')
};

export const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    try {
        const htmlModule = await route();
        const html = htmlModule.default;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const targetContainer = document.getElementById('app');
        targetContainer.innerHTML = '';

        while (tempDiv.firstChild) {
            targetContainer.appendChild(tempDiv.firstChild);
        }
        
        // Load the appropriate JavaScript module based on the route
        switch (path) {
            case '/':
                const { Home } = await import('./home.js');
                Home();
                break;
            case '/shop':
                const { Shop } = await import('./shop.js');
                Shop();
                break;
            case '/orders':
                const { Orders } = await import('./orders.js');
                Orders();
                break;
            case '/photos':
                const { Photos } = await import('./photos.js');
                Photos();
                break;
            case '/contact':
                const { Contact } = await import('./contact.js');
                Contact();
                break;
            case '/about':
                const { About } = await import('./about.js');
                About();
                break;
            case '/cart':
                const { Cart } = await import('./cart.js');
                Cart();
                break;
            case '/checkout':
                const { Checkout } = await import('./checkout.js');
                Checkout();
                break;
            case '/checkedout':
                const { OrderSent } = await import('./orderSent.js');
                OrderSent();
                break;
            case '/message':
                const { messageSent } = await import('./message.js');
                messageSent();
                break;
            default:
                break;
        }
    } catch (error) {
        console.error('Error loading HTML content:', error);
    }
};

window.onpopstate = handleLocation;
