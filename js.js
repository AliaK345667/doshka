document.getElementById('add-wish-button').addEventListener('click', function() {
    const wishInput = document.getElementById('wish-input');
    const wishText = wishInput.value;
    
    if (wishText.trim() !== "") {
        const wishList = document.getElementById('wish-list');
        const newWish = document.createElement('li');
        newWish.textContent = wishText;
        wishList.appendChild(newWish);
        
        wishInput.value = "";
    }
});
