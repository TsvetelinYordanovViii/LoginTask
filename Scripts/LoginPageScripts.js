let removeDelay;

$('#register-option').click(() => {
    const login = $('#login');
    const register = $('#register');

    login.addClass('slide-out-left');
    register.addClass('slide-in-left');

    //Make the sliding out form transparent while the sliding in form visible
    setTimeout(() => {
        login.addClass('slided-out-left');


        register.removeClass('slided-out-right');
        login.removeClass('slide-out-left');
        register.removeClass('slide-in-left');
        //The timer lasts just long enough as the animation + delay.
    }, 1250);
});


$('#login-option').click(() => {
    const login = $('#login');
    const register = $('#register');

    login.addClass('slide-in-right');
    register.addClass('slide-out-right');


    setTimeout(() => {
        register.addClass('slided-out-right');


        login.removeClass('slided-out-left');

        login.removeClass('slide-in-right');
        register.removeClass('slide-out-right');
    }, 1250);
});


$('#login-btn').click(() => {

})

$('#register-btn').click(() => {
    registerUser();
})

registerUser = () => {
    const registrationUsername = document.querySelector('#register-username');
    const registrationEmail = document.querySelector('#register-email');
    const registrationPhone = document.querySelector('#register-phone');
    const registrationPassword = document.querySelector('#register-password');

    let skipFunction = false;

    if (!registrationUsername.checkValidity() || registrationUsername.value.trim() === '') {
        createCustomAlert('failure', 'No username is entered.');
        skipFunction = true;
    }
    else if (!registrationEmail.checkValidity()) {
        createCustomAlert('failure', 'Valid email address is required.');
        skipFunction = true;
    }
    else if (!registrationPhone.checkValidity() || registrationPhone.value.trim() === '') {
        createCustomAlert('failure', 'Phone number is required.');
        skipFunction = true;
    }
    else if (!registrationPassword.checkValidity() || registrationPassword.value.length < 5) {
        createCustomAlert('failure', 'Enter a password with at least 6 characters.');
        skipFunction = true;
    }
    else {
        createCustomAlert('success', `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
        Successfully registered.`);
    }
}

createCustomAlert = (state, message) => {
    const alertMessage = $(`<div class="alert-message border border-3 position-absolute text-color-white rounded-4 p-2 w-75 text-light">${message}</div>`);
    if (state === 'failure') {
        alertMessage.addClass('bg-danger border-danger-subtle');
    }
    else {
        alertMessage.addClass('bg-success border-success-subtle');
    }
    $('#login-column').append(alertMessage);

    removeDelay = setTimeout(() => alertMessage.remove(), 3000);
}
showFieldTooltip = () => {

}

hideFieldTooltip = () => {

}

createRipple = (mouseX, mouseY) => {

}