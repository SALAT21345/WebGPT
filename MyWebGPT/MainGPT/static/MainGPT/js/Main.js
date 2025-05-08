function ClickOnBurgerPanel() {
    console.log("Нажатие на бургер!");
    const SideBar = document.getElementById('SideBar');

    // Проверяем текущее положение через data-атрибут
    const isHidden = SideBar.getAttribute('data-hidden') === 'true';

    if (isHidden) {
        SideBar.style.transform = 'translateX(0)';
        SideBar.setAttribute('data-hidden', 'false');
        console.log("бургер показан");
    } else {
        SideBar.style.transform = 'translateX(-100%)';
        SideBar.setAttribute('data-hidden', 'true');
        console.log("бургер скрыт");
    }
}

document.getElementById("burgerBtn").addEventListener('click', ClickOnBurgerPanel);






