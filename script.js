function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

function toggleMenu() {
    const modal = document.getElementById('menu-modal');
    modal.style.visibility = modal.style.visibility === 'visible' ? 'hidden' : 'visible';
}

// Function to close the menu
function closeMenu() {
    const modal = document.getElementById('menu-modal');
    modal.style.visibility = 'hidden';
}