import './menu.css'
import nigiriSushi from './images/nigiri-sushi.jpg'
import makiSushi from './images/maki-sushi.jpg'
import ramen from './images/ramen.jpg'
import udon from './images/udon.jpg'
import tempura from './images/tempura.jpg'
import sake from './images/sake.jpg'


export default function menuPage() {
    const container = document.createElement('div');
    container.classList.add('menu');
    container.classList.add('container');

    const menuItems = [
        'Nigiri Sushi',
        'Maki Sushi',
        'Ramen', 
        'Udon',
        'Tempura',
        'Drinks',
    ]

    const menuImages = [
        nigiriSushi,
        makiSushi,
        ramen,
        udon,
        tempura,
        sake
    ]

    for (let i = 0; i < menuItems.length; i++) {
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        itemContainer.id = `item-container${i+1}`;
        itemContainer.style.background = `url(${menuImages[i]})`

        let itemImg = new Image()
        itemImg.classList.add('item');
        itemImg.id = `item-${i+1}`;
        itemImg.src = menuImages[i]

        let itemDesc = document.createElement('p');
        itemDesc.classList.add('item-desc');
        itemDesc.id = `item-desc-${i+1}`;
        itemDesc.textContent = menuItems[i];

        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(itemDesc);
        container.appendChild(itemContainer);
    }
    return container
}