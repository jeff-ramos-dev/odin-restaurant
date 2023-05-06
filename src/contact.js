import './form.css';

export default function menuPage() {
    const container = document.createElement('div');
    container.classList.add('contact');
    container.classList.add('container');

    const form = document.createElement('form');
    form.method = 'get';
    form.classList.add('form');
    const inputs = document.createElement('div');
    inputs.classList.add('inputs');
    const formTitle = document.createElement('h2');
    formTitle.classList.add('form-title');
    formTitle.textContent = 'Contact Us!';

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('input');
    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = "Name";
    const nameInput = document.createElement('input');
    nameInput.classList.add('field', 'name');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'name';
    nameInput.required = true
    const nameError = document.createElement('p');
    nameError.classList.add('error-message', 'name-error');

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('input')
    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.classList.add('field', 'email');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.required = true;
    const emailError = document.createElement('p');
    emailError.classList.add('error-message', 'email-error');

    const confirmDiv = document.createElement('div');
    confirmDiv.classList.add('input');
    const confirmLabel = document.createElement('label');
    confirmLabel.for = 'confirm';
    confirmLabel.textContent = 'Confirm Email';
    const confirmInput = document.createElement('input');
    confirmInput.classList.add('field', 'confirm');
    confirmInput.type = 'email';
    confirmInput.name = 'confirm';
    confirmInput.id = 'confirm';
    confirmInput.required = true;
    const confirmError = document.createElement('p');
    confirmError.classList.add('error-message', 'confirm-error');

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('input');
    const phoneLabel = document.createElement('label');
    phoneLabel.for = 'phone';
    phoneLabel.textContent = 'Phone Number';
    const phoneInput = document.createElement('input');
    phoneInput.classList.add('field', 'phone');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.id = 'phone';
    phoneInput.pattern = "^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
    phoneInput.required = true;
    const phoneError = document.createElement('p');
    phoneError.classList.add('error-message', 'phone-error');

    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('input');
    const subjectLabel = document.createElement('label');
    subjectLabel.for = 'subject';
    subjectLabel.textContent = 'Subject';
    const subjectInput = document.createElement('input');
    subjectInput.classList.add('field', 'subject');
    subjectInput.type = 'text';
    subjectInput.name = 'subject';
    subjectInput.id = 'subject';
    subjectInput.required = true;
    const subjectError = document.createElement('p');
    subjectError.classList.add('error-message', 'subject-error');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('input');
    const messageLabel = document.createElement('label');
    messageLabel.for = 'message';
    messageLabel.textContent = "Message";
    const messageInput = document.createElement('textarea');
    messageInput.classList.add('field', 'message');
    messageInput.name = 'message';
    messageInput.id = 'message';
    messageInput.required = true;
    const messageError = document.createElement('p');
    messageError.classList.add('error-message', 'message-error');

    container.appendChild(form)
    form.appendChild(inputs)
    inputs.appendChild(formTitle)
    inputs.appendChild(nameDiv);
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameError);
    inputs.appendChild(emailDiv);
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    emailDiv.appendChild(emailError);
    inputs.appendChild(confirmDiv);
    confirmDiv.appendChild(confirmLabel);
    confirmDiv.appendChild(confirmInput);
    confirmDiv.appendChild(confirmError);
    inputs.appendChild(phoneDiv);
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneInput);
    phoneDiv.appendChild(phoneError);
    inputs.appendChild(subjectDiv);
    subjectDiv.appendChild(subjectLabel);
    subjectDiv.appendChild(subjectInput);
    subjectDiv.appendChild(subjectError);
    inputs.appendChild(messageDiv);
    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageInput);
    messageDiv.appendChild(messageError);

    return container
}