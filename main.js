// document.addEventListener('DOMContentLoaded', () => {
//     const profileDropdown = document.querySelector('.profile-dropdown');
//     const dropdownList = document.querySelector('.dropdown-list');

//     profileDropdown.addEventListener('mouseenter', () => {
//         dropdownList.style.display = 'block';
//     });

//     profileDropdown.addEventListener('mouseleave', () => {
//         dropdownList.style.display = 'none';
//     });
// });

function increaseQuantity() {
    const input = document.getElementById('quantity');
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;
    updateTotalPrice();
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
    updateTotalPrice();
}

// function updateTotalPrice() {
//     const input = document.getElementById('quantity');
//     const quantity = parseInt(input.value);
//     const totalPriceElement = document.getElementById('price');
//     const totalPrice = unitPrice * quantity;
//     totalPriceElement.textContent = totalPrice;
// }