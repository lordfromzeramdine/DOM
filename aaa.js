document.addEventListener("DOMContentLoaded", function() {
    // Slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".slides");
        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Shopping cart functionality
    const cart = [];
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const totalElement = document.getElementById('total');
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(itemElement);
            total += item.price;
        });
        totalElement.innerText = total.toFixed(2);
    }

    window.addToCart = addToCart;
});
