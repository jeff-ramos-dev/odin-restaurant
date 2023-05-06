function checkName() {
    const nameValidation = /[^A-Z-]/i
    const nameInput = document.querySelector('.name')
    const nameError = document.querySelector('.name-error')
    if (nameError.textContent) {
        nameError.textContent = ""
    }

    if (nameValidation.test(nameInput.value) && nameInput.value.length > 0) {
        nameError.textContent = "please use alphabet characters only"
        nameInput.classList.remove("validated")
        nameInput.classList.add("error")
    } else if (nameInput.classList.contains("error")) {
       nameInput.classList.remove("error") 
       nameInput.classList.add("validated")
       nameError.textContent = ""
    }

    if (nameInput.value.length > 24) {
        nameInput.value = nameInput.value.slice(0, -1)
        nameError.textContent = "*Name limit is 24 characters"
    } else if (nameInput.classList.contains('error') &&
    !nameValidation.test(nameInput.value) ||
    nameInput.value.length === 0) {
        nameInput.classList.remove('error')
        nameError.textContent = ""

        if (!nameInput.classList.contains("validated"))
        nameInput.classList.add("validated")
    }

    if (!nameInput.classList.contains("error")) {
        nameInput.classList.add("validated")
    }

    if (nameInput.classList.contains("validated") && nameInput.value.length === 0) {
        nameInput.classList.remove("validated")
    }

    if (nameInput.classList.contains("validated")) {
        return true
    } else {
        return false
    }
}

function checkEmail() {
    const emailValidation = /\w+@\w+[.]\w{3}/
    const email = document.querySelector('.email')
    const confirm = document.querySelector('.confirm')
    const emailError = document.querySelector('.email-error')
    const confirmError = document.querySelector('.confirm-error')
    if (email.value.length > 0) {
        if (email.value === confirm.value) {
            confirm.classList.remove("error")
            confirm.classList.add("validated")
            confirmError.textContent = ""
        } else {
            confirm.classList.remove("validated")
            confirm.classList.add("error")
            confirmError.textContent = "*Emails do not match"
        }

        if (!emailValidation.test(email.value)) {
            emailError.textContent = "*Please enter a valid email"
            email.classList.remove("validated")
            email.classList.add("error")
        } else {
            email.classList.remove("error")
            emailError.textContent = ""
            email.classList.add("validated")
        }
    }

    if (email.classList.contains('validated') && confirm.classList.contains('validated')) {
        return true
    } else {
        return false
    }
}

function checkPhone() {
    const phoneNumber = document.querySelector('.phone')
    const phoneError = document.querySelector('.phone-error')
    if (phoneNumber.value.length > 0) {
        if (phoneNumber.validity.valid) {
            phoneNumber.classList.remove("error")
            phoneNumber.classList.add("validated")
            phoneError.textContent = ""
        } else {
            phoneNumber.classList.remove("validated")
            phoneNumber.classList.add("error")
            phoneError.textContent = "*Please enter a valid phone number"
        }
    } else {
        phoneNumber.classList.remove("validated")
    }

    if (phoneNumber.classList.contains('validated')) {
        return true
    } else {
        return false
    }
}

export {
    checkName,
    checkEmail,
    checkPhone
}