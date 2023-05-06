import './about.css'

export default function aboutPage() {
    const container = document.createElement('div');
    container.classList.add('about');
    container.classList.add('container')

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = "Hiroki's passion for sushi-making started in his family's sushi restaurant, where he watched his father and grandfather create traditional dishes with precision and care. After training with renowned chefs and becoming head chef at a prestigious restaurant, Hiroki fulfilled his lifelong dream of opening his own sushi restaurant in 2015."
    
    const desc2 = document.createElement('p');
    desc2.classList.add('desc');
    desc2.textContent = "Sushimushi quickly became known for its exceptional quality and innovative dishes, while its bug theme ('mushi' means bug in japanese) and decor have won over diners with its unique charm."

    container.appendChild(desc);
    container.appendChild(desc2);
    
    return container
}