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

const BlocksBtnOnSideBar = document.getElementsByClassName("BlocksBtnOnSideBar");

for (let block of BlocksBtnOnSideBar) {
    block.addEventListener("mouseover", () => {
        block.classList.remove("BlocksBtnOnSideBar_NotHover");
        block.classList.add("BlocksBtnOnSideBar_Hover");
    });

    block.addEventListener("mouseout", () => {
        block.classList.remove("BlocksBtnOnSideBar_Hover");
        block.classList.add("BlocksBtnOnSideBar_NotHover");
    });
}

const BlockNewChat = document.getElementById("BlockNewChat");

BlockNewChat.addEventListener("click", (event) => {

    var IsActive = false;
    if (event.target === BlockNewChat) return;
    
    const childBlocks = document.querySelectorAll(".ChildBlockCreateNewChat");
    
    for (let block of childBlocks) {
        if (block.style.display === 'none') {
            block.style.display = 'block'; 
            IsActive = true;
            block.style.transition = '0.5s';
        } else {
            block.style.display = 'none'; 
        }
    }

    if(IsActive == true)
    {
        document.getElementById("BlockRemoveChat").style.transform = "translateY(30px)";
        document.getElementById("BlockSettings").style.transform = "translateY(30px)";
        document.getElementById("BlockSettings").style.transition = '0.5s';
        document.getElementById("BlockRemoveChat").style.transition = '0.5s';

    }
    if(IsActive == false)
    {
        document.getElementById("BlockRemoveChat").style.transform = "translateY(0px)";
        document.getElementById("BlockSettings").style.transform = "translateY(0)";
    }
});