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
        showInvalidField(registrationUsername);
        skipFunction = true;
    }
    else if (!registrationEmail.checkValidity()) {
        createCustomAlert('failure', 'Valid email address is required.');
        showInvalidField(registrationEmail);
        skipFunction = true;
    }
    else if (!registrationPhone.checkValidity() || registrationPhone.value.trim() === '') {
        createCustomAlert('failure', 'Phone number is required.');
        showInvalidField(registrationPhone);
        skipFunction = true;
    }
    else if (!registrationPassword.checkValidity() || registrationPassword.value.length < 6) {
        createCustomAlert('failure', 'Enter a password with at least 6 characters.');
        showInvalidField(registrationPassword);
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

showInvalidField = (field) => {
    field.classList.add('invalid-shake');
    field.classList.add('border-danger');

    setTimeout(() => field.classList.remove('invalid-shake'), 1000);
}

createCustomAlert = (state, message) => {
    const alertMessage = $(`<div class="alert-message border border-3 position-absolute rounded-4 p-2 w-75 text-light">${message}</div>`);
    if (state === 'failure') {
        alertMessage.addClass('bg-danger border-danger-subtle');
    }
    else {
        alertMessage.addClass('bg-success border-success-subtle');
    }
    $('#login-column').append(alertMessage);

    setTimeout(() => alertMessage.remove(), 3000);
}

//Since there isn't an easy way to select the input's parent div, I had to manually specify to the event listeners their respective parent div.
//Focus covers the two required scenarios - typing and clicking and as a bonus tabbing through.
//It also has the advantage of not triggering multiple times when writing.

$('#login-username').focus(() => {
    $('input').removeClass('invalid-shake border-danger');
    showFieldTooltip($('#login-username').attr('placeholder'), $('#login-username-container').attr('id'));
});

$('#login-password').focus(() => {
    $('input').removeClass('invalid-shake border-danger');
    showFieldTooltip($('#login-password').attr('placeholder'), $('#login-password-container').attr('id'));
});


$('#register-username').focus(() => {
    $('input').removeClass('invalid-shake border-danger');
    showFieldTooltip($('#register-username').attr('placeholder'), $('#register-username-container').attr('id'));
});


$('#register-email').focus(() => {
    $('input').removeClass('invalid-shake border-danger');
    showFieldTooltip($('#register-email').attr('placeholder'), $('#register-email-container').attr('id'));
});


$('#register-phone').focus(() => {
    $('input').removeClass('invalid-shake border-danger');
    showFieldTooltip($('#register-phone').attr('placeholder'), $('#register-phone-container').attr('id'));
});


$('#register-password').focus(() => {
    $('input').removeClass('invalid-shake border-danger');
    showFieldTooltip($('#register-password').attr('placeholder'), $('#register-password-container').attr('id'));
});

$('input').blur(() => removeFieldTooltips())

showFieldTooltip = (tooltipText, containingDivId) => {
    const tooltip = $(`<div class="tooltip position-absolute rounded-3 p-2 bg-dark text-light z-1 tooltip-slide-up">${tooltipText}</div>`);
    $('#' + containingDivId).prepend(tooltip);
}

removeFieldTooltips = () => {
    const tooltips = $(`.tooltip`);
    tooltips.addClass('tooltip-slide-down')

    setTimeout(() => tooltips.remove(), 1000);
}

hideFieldTooltip = () => {

}

createRipple = (mouseX, mouseY) => {

}