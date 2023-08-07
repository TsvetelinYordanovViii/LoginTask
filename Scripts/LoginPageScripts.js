let removeDelay;
let alertMessage;

$("#register-option").click(() => {
    $("#login").addClass("slide-out-left");
    $("#register").addClass("slide-in-left");
});


$("#login-btn").click(() => {

})

$("#register-btn").click(() => {
    registerUser();
})

registerUser = () => {
    const registrationUsername = document.querySelector('#register-username');
    const registrationEmail = document.querySelector('#register-email');
    const registrationPhone = document.querySelector('#register-phone');
    const registrationPassword = document.querySelector('#register-password');

    let skipFunction = false;

    if (!registrationUsername.checkValidity() || registrationUsername.value.trim() === "") {
        createCustomAlert('failure', 'No username is entered.');
        skipFunction = true;
    }
    else if (!registrationEmail.checkValidity()) {
        createCustomAlert('failure', 'Valid email address is required.');
        skipFunction = true;
    }
    else if (!registrationPhone.checkValidity() || registrationPhone.value.trim() === "") {
        createCustomAlert('failure', 'Phone number is required.');
        skipFunction = true;
    }
    else if (!registrationPassword.checkValidity() || registrationPassword.value.length < 5) {
        createCustomAlert('failure', 'Enter a password with at least 6 characters.');
        skipFunction = true;
    }
    else {
        createCustomAlert('success', 'Successfully registered.');
    }
}

createCustomAlert = (state, message) => {
    alertMessage = $(`<div class="alert-message border border-3 position-absolute text-color-white rounded-4 p-2 w-100">${message}</div>`);
    if (state === 'failure') {
        alertMessage.addClass('bg-danger border-danger-subtle');
        alert("test2");
    }
    else {
        alertMessage.addClass('bg-success border-success-subtle');

        alert("test3");
    }
    $('#login-column').append(alertMessage);

    removeDelay = setTimeout(3000, () => removeAlert(alertMessage));
}

removeCustomAlert = (alert) => {
    alert.remove();
}

showFieldTooltip = () => {

}

hideFieldTooltip = () => {

}

createRipple = (mouseX, mouseY) => {

}