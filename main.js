document.addEventListener('DOMContentLoaded', () => {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const dropdownList = document.querySelector('.dropdown-list');

    profileDropdown.addEventListener('mouseenter', () => {
        dropdownList.style.display = 'block';
    });

    profileDropdown.addEventListener('mouseleave', () => {
        dropdownList.style.display = 'none';
    });
});