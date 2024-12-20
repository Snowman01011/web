document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Burger', price: 8 },
        { id: 3, name: 'Pasta', price: 12 }
    ];

    const cart = [];

    const menuContainer = document.getElementById('menu-items');
    const cartContainer = document.getElementById('cart-items');

    function renderMenu() {
        menuContainer.innerHTML = '';
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    function renderCart() {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    window.addToCart = function(id) {
        const item = menuItems.find(item => item.id === id);
        cart.push(item);
        renderCart();
    }

    window.removeFromCart = function(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        renderCart();
    }

    renderMenu();
});
