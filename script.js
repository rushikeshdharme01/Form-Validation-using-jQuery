$(document).ready(function() {
    $("#togglePassword").click(function() {
const passwordField = $("#password");
const type = passwordField.attr("type") === "password" ? "text" : "password";
passwordField.attr("type", type);

$(this).text(type === "password" ? "Show Password" : "Hide Password");
        

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

        if(!isStrongPassword(password)){
            showMessage("Password must contain uppercase, lowercase, digit, and be 6+ characters with one special charachter.", "error");
            return;

        }

        showMessage("Form submitted successfully!", "success");

    })





});


