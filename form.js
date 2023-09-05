function validation() {
    var $errorFlag = true;

    // Username validation
    var username = $('#Username').val();
    if (username == '') {
        $('#Username').siblings('.err-msg').text('Enter Username');
        $errorFlag = false;
    } else {
        $('#Username').siblings('.err-msg').text('');
    }

    // Email validation
    var email = $('#emailAddr').val();
    if (email == '') {
        $('#emailAddr').siblings('.err-msg').text('Enter Email');
        $errorFlag = false;
    } else if (!isValidEmail(email)) {
        $('#emailAddr').siblings('.err-msg').text('Enter Valid Email');
        $errorFlag = false;
    } else {
        $('#emailAddr').siblings('.err-msg').text('');
    }

    // Password validation
    var password = $('#password').val();
    if (password == '') {
        $('#password').siblings('.err-msg').text('Enter password');
        $errorFlag = false;
    } else if (!isStrongPassword(password)) {
        $('#password').siblings('.err-msg').text('Enter strong password');
        $errorFlag = false;
    } else {
        $('#password').siblings('.err-msg').text('');
    }

    // Confirm Password validation
    var confirmPassword = $('#cpassword').val();
    if (confirmPassword == '') {
        $('#cpassword').siblings('.err-msg').text('Confirm your password');
        $errorFlag = false;
    } else if (!passwordsMatch(password, confirmPassword)) {
        $('#cpassword').siblings('.err-msg').text('Passwords do not match');
        $errorFlag = false;
    } else {
        $('#cpassword').siblings('.err-msg').text('');
    }


    // Display popup if there are errors
        if (!$errorFlag) {
            // const popup = document.getElementById("popup");
            // popup.style.display = "block";
        }

        // Return error flag to indicate form validity
        return $errorFlag;
//  this is another function //
}

$("form[name='Register']")

function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isStrongPassword(password) {
    return /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[@#%$])[a-zA-Z0-9@#%$]{8,16}$/.test(password);
}

function passwordsMatch(password, confirmPassword) {
    alert(password === confirmPassword)
    return password === confirmPassword;
}

