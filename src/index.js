import './style.css';
import ladybug from './images/ladybug.png'
import githubLogo from './images/github-mark-white.png'
import about from './about'
import menu from './menu'
import contact from './contact'
import {checkName, checkEmail, checkPhone} from './formValidation'

function content() {
    const content = document.createElement('div');
    content.classList.add('content');

    content.appendChild(header());
    content.appendChild(main());
    content.appendChild(about());
    content.appendChild(menu());
    content.appendChild(contact());

    return content
}

function setupValidation() {
    const nameInput = document.querySelector('.name')
    const email = document.querySelector('.email')
    const confirm = document.querySelector('.confirm')
    const phoneNumber = document.querySelector('.phone')

    nameInput.addEventListener('input', () => checkName())

    email.addEventListener('input', () => checkEmail())

    confirm.addEventListener('input', () => checkEmail())

    phoneNumber.addEventListener('input', () => checkPhone())
}
    
function header() {
    const header = document.createElement('header');
    header.classList.add('header');

    const engTitleSushi = document.createElement('h1');
    engTitleSushi.textContent = 'SUSHI';
    engTitleSushi.classList.add('sushi');

    const engTitleMushi = document.createElement('span');
    engTitleMushi.textContent = 'MUSHI';
    engTitleMushi.classList.add('mushi');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('jp-name-logo');

    const jpTitleSushi = document.createElement('h1');
    jpTitleSushi.textContent = '寿司';
    jpTitleSushi.classList.add('sushi')

    const jpTitleMushi = document.createElement('span');
    jpTitleMushi.textContent = '虫';
    jpTitleMushi.classList.add('mushi');

    const lady = new Image();
    lady.src = ladybug;
    lady.classList.add('logo');

    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab-div');

    const tabs = document.createElement('ul');
    tabs.classList.add('tabs');

    const about = document.createElement('li');
    about.textContent = 'About'
    about.addEventListener('click', loadAbout);

    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    menu.addEventListener('click', loadMenu);

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.addEventListener('click', loadContact);

    header.appendChild(engTitleSushi);
    engTitleSushi.appendChild(engTitleMushi);
    header.appendChild(logoDiv);
    logoDiv.appendChild(jpTitleSushi);
    jpTitleSushi.appendChild(jpTitleMushi);
    logoDiv.appendChild(lady);
    header.appendChild(tabDiv);
    tabDiv.appendChild(tabs);
    tabs.appendChild(about);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

   return header 
}

function main() {
    const main = document.createElement('main');
    main.classList.add('main')

    return main
}

function footer() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');
    copyright.textContent = '©Jeff Ramos 2023';

    const github = document.createElement('a');
    github.href = 'https://github.com/jeff-ramos-dev'

    const logo = new Image();
    logo.src = githubLogo;
    logo.classList.add('github');

    footer.appendChild(copyright)
    footer.appendChild(github);
    github.appendChild(logo);

    return footer
}

function clearMain() {
    const containers = document.querySelectorAll('.container');
    for (let c of containers) {
        c.style.display = 'none';
    }
    return
}
function loadAbout() {
    clearMain()
    const about = document.querySelector('.about');
    about.style.display = 'grid';
    return
}

function loadMenu() {
    clearMain()
    const menu = document.querySelector('.menu');
    menu.style.display = 'grid';
    return
}

function loadContact() {
    clearMain()
    const contact = document.querySelector('.contact');
    contact.style.display = 'grid';
    return
}

document.body.appendChild(content());
document.body.appendChild(footer());
clearMain()
const logo = document.querySelector('.logo');
logo.addEventListener('click', clearMain);
setupValidation()