const navItem1 = document.getElementById('navItem1');
const navItem2 = document.getElementById('navItem2');
const navItem3 = document.getElementById('navItem3');
const navItem4 = document.getElementById('navItem4');
const navItem5 = document.getElementById('navItem5');
const navItem6 = document.getElementById('navItem6');
const menuCat1 = document.getElementsByClassName('menuCat1');
const menuCat2 = document.getElementsByClassName('menuCat2');
const menuCat3 = document.getElementsByClassName('menuCat3');
const menuCat4 = document.getElementsByClassName('menuCat4');
const menuCat5 = document.getElementsByClassName('menuCat5');
const menuTitle = document.getElementById('menuTitle');
let selectedItem = navItem1;

function selectCategory(event) {
    // Clearing the previously selected category
    selectedItem.classList.remove('navSelected');
    selectedItem = event.target;
    selectedItem.classList.add('navSelected');

    menuCategory = event.target.name;
    menuTitle.textContent = menuCategory;

    // Hide all menu categories
    [menuCat1, menuCat2, menuCat3, menuCat4, menuCat5].forEach(category => {
        Array.from(category).forEach(item => item.style.display = 'none');
    });

    // Show the selected category
    if (event.target === navItem1) {
        Array.from(menuCat1).forEach(item => item.style.display = 'block');
    }
    else if (event.target === navItem2) {
        Array.from(menuCat2).forEach(item => item.style.display = 'block');
    }
    else if (event.target === navItem3) {
        Array.from(menuCat3).forEach(item => item.style.display = 'block');
    }
    else if (event.target === navItem4) {
        Array.from(menuCat4).forEach(item => item.style.display = 'block');
    }
    else if (event.target === navItem5) {
        Array.from(menuCat5).forEach(item => item.style.display = 'block');
    }
}