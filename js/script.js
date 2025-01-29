document.addEventListener('DOMContentLoaded', function() {
    const ageVerification = document.getElementById('age-verification');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.addEventListener('click', function() {
        ageVerification.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        alert('You must be 21 or older to access this site.');
        window.close();
    });
});

function showPopup(title, description, price) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupPrice = document.getElementById('popup-price');

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupPrice.textContent = price;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function addToCart() {
    alert('Item added to cart');
    closePopup();
}