const vornameInput = document.getElementById('vorname');
    const nachnameInput = document.getElementById('nachname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');


    let valid = true;

function changeVorname() {
    if (vornameInput.value.trim() === '') {
        vornameInput.classList.add('error'); 
        vornameInput.classList.remove('valid'); 
        valid = false;
    } else {
        vornameInput.classList.remove('error'); 
        vornameInput.classList.add('valid'); 
    }

}


function changeNachname() {
    if (nachnameInput.value.trim() === '') {
        nachnameInput.classList.add('error'); 
        nachnameInput.classList.remove('valid'); 
        valid = false;
    } else {
        nachnameInput.classList.remove('error'); 
        nachnameInput.classList.add('valid'); 
    }
}

function changeEmail() {

    if (!emailInput.validity.valid) {
        emailInput.classList.add('error'); 
        emailInput.classList.remove('valid'); 
        valid = false;
    } else {
        emailInput.classList.remove('error'); 
        emailInput.classList.add('valid'); 
    }
}

function changeMessage() {
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error'); 
        messageInput.classList.remove('valid'); 
        valid = false;
    } else {
        messageInput.classList.remove('error'); 
        messageInput.classList.add('valid'); 
    }    
}
