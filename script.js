document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var isValid = true;

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var mobile = document.getElementById('mobile');

    if (name.value.trim().length < 5) {
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.trim() === '') {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    var mobileNumberPattern = /^\d{10}$/;
    if (!mobileNumber.value.match(mobileNumberPattern)) {
        mobileNumber.classList.add('is-invalid');
        document.getElementById('mobileNumberError').style.display = 'block';
        isValid 
    }

     /*if (date.value.trim() === '') {
        document.getElementById('dateError').style.display = 'block';
        isValid = false;
    } else {
        var enteredDate = new Date(date.value);
        var currentDate = new Date();
        if (enteredDate > currentDate) {
            document.getElementById('dateError').style.display = 'block';
            isValid = false;
        } else {
            date.classList.remove('is-invalid');
        }
    }*/
        if (date.value === '') {
            date.classList.add('is-invalid');
            document.getElementById('dateError').style.display = 'block';
            isValid = false;
        } else {
            date.classList.remove('is-invalid');
            document.getElementById('dateError').style.display = 'none';
        }
    

    if (isValid) {
        // Submit the form if all validations pass
        this.submit();
    }
});


/*
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var isValid = true;

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var mobileNumber = document.getElementById('mobileNumber');
    var date = document.getElementById('date');

    // Reset error messages
    document.querySelectorAll('.error').forEach(function(element) {
        element.style.display = 'none';
    });

    if (name.value.trim().length < 5) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.trim() === '') {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    var mobileNumberPattern = /^\d{10}$/;
    if (!mobileNumber.value.match(mobileNumberPattern)) {
        document.getElementById('mobileNumberError').style.display = 'block';
        isValid = false;
    } else {
        mobileNumber.classList.remove('is-invalid');
    }

    if (date.value.trim() === '') {
        document.getElementById('dateError').style.display = 'block';
        isValid = false;
    } else {
        var enteredDate = new Date(date.value);
        var currentDate = new Date();
        if (enteredDate > currentDate) {
            document.getElementById('dateError').style.display = 'block';
            isValid = false;
        } else {
            date.classList.remove('is-invalid');
        }
    }

    if (isValid) {
        // Submit the form if all validations pass
        this.submit();
    }
});
*/