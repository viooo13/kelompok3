let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    cartCount.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
    totalPriceElement.innerText = totalPrice.toFixed(2);
    
    // Clear the cart list
    cartList.innerHTML = '';

    // Add items to the cart list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - Rp${item.price} x ${item.quantity}`;
        
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeFromCart(item.name);
        li.appendChild(removeButton);
        
        cartList.appendChild(li);
    });
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex > -1) {
        totalPrice -= cart[productIndex].price * cart[productIndex].quantity;
        cart.splice(productIndex, 1);
        updateCart();
    }
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
        let message = 'I want to order:\n';
        cart.forEach(item => {
            message += `${item.name} - Rp${item.price} x ${item.quantity}\n`;
        });
        message += `Total: ${totalPrice.toFixed(2)}`;
        
        const phoneNumber = '081316168942'; // Replace with your WhatsApp number
        const whatsappUrl = `https://wa.me/081316168942?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    }

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
  

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    menuToggle.addEventListener('click', function() {
          navLinks.classList.toggle('active');
    });
    
    // Menambahkan event listener untuk setiap link dalam menu
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
        navLinks.classList.remove('active'); // Menutup menu setelah item diklik
        });
    });
  });
  function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);

  let nama = document.getElementById('gtw1').value
  let alamat = document.getElementById('gtw2').value
  let nomer = document.getElementById('gtw3').value


  function komen() {
    let message = 'I want to order: $${nama}, $${alamat} , $${nomer}\n';

     // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/081316168942?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
} 