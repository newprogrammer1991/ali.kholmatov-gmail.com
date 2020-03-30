const form = document.querySelector('.search-bar__form')
const lengthInput = form.querySelector('#length');
const limitInput = form.querySelector('#limit');
const btn = form.querySelector('#sub');
[lengthInput, limitInput].forEach((elem) => elem.addEventListener('input', checkValidation));

function checkValidation() {
    if (lengthInput.checkValidity() && limitInput.checkValidity()) {
        btn.disabled = false;
    }
    else { btn.disabled = true }
}

function disableForm() {
    form.classList.toggle('search-bar__form--disabled');
}

function getlimit() { return limitInput.value }

function getLength() { return lengthInput.value }

export { form, disableForm, getlimit, getLength }

