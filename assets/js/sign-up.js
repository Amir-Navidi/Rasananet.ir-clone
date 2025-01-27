var inputs = document.querySelectorAll("input");
for (let input of inputs) {
    input.setAttribute("autocomplete", "off")
    input.setAttribute("onpaste", "return false")
    input.setAttribute("oncopy", "return false")
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

var pswd = document.getElementById("pswd");
var pswdConfirmation = document.getElementById("pswd-confirmation");

document.querySelector(".needs-validation").addEventListener("submit", function () {
    document.querySelector(".mobileNumber").addEventListener("input", function () {
        if (this.value.match(/^09[0-9]{9}$/)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
});

function checkPasswordMatch() {
    if (pswdConfirmation.value === pswd.value) {
        pswdConfirmation.classList.remove('is-invalid');
        pswdConfirmation.classList.add('is-valid');
    } else {
        pswdConfirmation.classList.remove('is-valid');
        pswdConfirmation.classList.add('is-invalid');
    }
};

pswd.addEventListener("input", function () {
    if (pswd.checkValidity()) {
        pswdConfirmation.disabled = false;
    }
    else {
        pswdConfirmation.disabled = true;
        pswdConfirmation.classList.remove("is-valid");
    }
});


setInterval(checkPasswordMatch, 500)

document.querySelector(".pswd-eye").addEventListener("click", function () {
    const pswdEyeIcon = document.querySelector(".pswd-eye i")
    if (pswdEyeIcon.classList.contains("fa-eye")) {
        pswdEyeIcon.classList.remove("fa-eye");
        pswdEyeIcon.classList.add("fa-eye-slash");
        pswd.setAttribute("type", "text")

    } else {
        pswdEyeIcon.classList.remove("fa-eye-slash");
        pswdEyeIcon.classList.add("fa-eye");
        pswd.setAttribute("type", "password")
    }
})

document.querySelector(".pswd-confirmation-eye").addEventListener("click", function () {
    const pswdConfirmationEyeIcon = document.querySelector(".pswd-confirmation-eye i")
    if (pswdConfirmationEyeIcon.classList.contains("fa-eye")) {
        pswdConfirmationEyeIcon.classList.remove("fa-eye");
        pswdConfirmationEyeIcon.classList.add("fa-eye-slash");
        pswdConfirmation.setAttribute("type", "text")

    } else {
        pswdConfirmationEyeIcon.classList.remove("fa-eye-slash");
        pswdConfirmationEyeIcon.classList.add("fa-eye");
        pswdConfirmation.setAttribute("type", "password")
    }
})

function removeNumbers(event) {
    var input = event.target;
    input.value = input.value.replace(/\d/g, '');
}