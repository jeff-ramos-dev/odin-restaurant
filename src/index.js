import './style.css';
import ladybug from './ladybug.png'
import sushi from './sushi-plate.jpg'

function main() {
    const content = document.createElement('div');
    content.classList.add('content');

    content.appendChild(header())
    content.appendChild(footer())

    return content
}
    
function header() {
    const header = document.createElement('header');
    header.classList.add('header');

    const engTitleSushi = document.createElement('h1');
    engTitleSushi.textContent = 'SUSHI';
    engTitleSushi.classList.add('sushi')

    const engTitleMushi = document.createElement('span');
    engTitleMushi.textContent = 'MUSHI';
    engTitleMushi.classList.add('mushi')

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
    lady.classList.add('logo')

    header.appendChild(engTitleSushi);
    engTitleSushi.appendChild(engTitleMushi);
    header.appendChild(logoDiv);
    logoDiv.appendChild(jpTitleSushi);
    jpTitleSushi.appendChild(jpTitleMushi);
    logoDiv.appendChild(lady);

   return header 
}

function about() {

}

function footer() {
    const footer = document.createElement('footer');
    const ul = document.createElement('ul');
    const credit1 = document.createElement('li');
    const link1a = document.createElement('a');
    const span1 = document.createElement('span');
    const link1b = document.createElement('a');
    const credit2 = document.createElement('li');
    const link2a = document.createElement('a');
    const span2 = document.createElement('span');
    const link2b = document.createElement('a');

    credit1.textContent = 'Photo by '
    link1a.href = "https://unsplash.com/@geraldine_lewa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    link1a.textContent = 'GeraldineLewa '
    span1.textContent = 'on '
    link1b.href = "https://unsplash.com/s/photos/japanese-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    link1b.textContent = 'Unsplash'
    
    credit2.innerHTML = 'Image by '
    link2a.href = "https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=308051"
    link2a.textContent = 'Clker-Free-Vector-Images '
    span2.textContent = 'from '
    link2b.href = "https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=308051"
    link2b.textContent = 'Pixabay'

    footer.appendChild(ul)
    ul.appendChild(credit1)
    credit1.appendChild(link1a)
    credit1.appendChild(span1)
    credit1.appendChild(link1b)
    ul.appendChild(credit2)
    credit2.appendChild(link2a)
    credit2.appendChild(span2)
    credit2.appendChild(link2b)

    return footer
}

document.body.appendChild(main());