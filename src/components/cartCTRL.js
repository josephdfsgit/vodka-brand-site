const CART_KEY = 'shoppingCart';

export const addToCart = (item) => {
    const cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item._id);

    if (existingItem) {
        existingItem.qty++;
    } else {
        const newItem = { ...item, qty: 1 };
        cart.push(newItem);
    }

    saveCart(cart);
};

export const removeFromCart = (itemId) => {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== itemId);
    saveCart(updatedCart);
};

export const updateCartItemQty = (itemId, newQty) => {
    const cart = getCart();
    const itemToUpdate = cart.find(item => item.id === itemId);

    if (itemToUpdate) {
        itemToUpdate.qty = newQty;
        saveCart(cart);
    }
};

export const getCart = () => {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
};

const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const emptyCart = () => {
    saveCart([]);
};
