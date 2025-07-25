$(document).ready(function() {
    $("#togglePassword").click(function() {
const passwordField = $("#password");
const type = passwordField.attr("type") === "password" ? "text" : "password";
passwordField.attr("type", type);

$(this).text(type === "password" ? "Show Password" : "Hide Password");
        

    });

    $("#toggleCnfPassword").click(function() {
        const cnfPasswordField = $("#cnf-password");
        const type = cnfPasswordField.attr("type") === "password" ? "text" : "password";
        cnfPasswordField.attr("type", type);

        $(this).text(type === "password" ? "Show Confirm Password" : "Hide Confirm Password");
    });



    // Prevent non-digit characters in phone input
    $("#phone").on("keypress", function(e) {
        const charCode = e.which ? e.which : e.keyCode;
        // Allow only digits (0-9), charCode 48-57
        if (charCode < 48 || charCode > 57) {
            e.preventDefault();
        }
    });

    // Also prevent pasting non-digit characters
    $("#phone").on("paste", function(e) {
        const pasteData = e.originalEvent.clipboardData.getData('text');
        if (!/^\d+$/.test(pasteData)) {
            e.preventDefault();
        }
    });





    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone);

    }

    function isStrongPassword(password){
        return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    }

    function showMessage(msg, type) {
        const messageBox = $("#message");
        messageBox.removeClass().addClass(`message ${type}`).text(msg).show();
    }


    $("#myForm").submit(function(e) {
        e.preventDefault();
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
        const password = $("#password").val().trim();
        
        if(!name || !email || !phone || !password) {
            showMessage("All fields are required.", "error");
            return;

        }
    
        if(!isValidEmail(email) ){
            showMessage("please enter a valid email address.", "error")
            return;
        }

        if(!isValidPhone(phone)){
            showMessage("Phone number must be 10 digits.", "error");
            return;
        }

        if($("#password").val() !== $("#cnf-password").val()) {
            showMessage("Passwords do not match.", "error");
            return;
        }

        if(!isStrongPassword(password)){
            showMessage("Password must contain uppercase, lowercase, digit, and be 6+ characters with one special charachter.", "error");
            return;

        }



        showMessage("Form submitted successfully!", "success");

    })





});


