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
