emailjs.init("wbxjhlvzO3XQ4PofF");

// validation form
function checkCredentials(action) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // validate inputs
    if (email === "" || password === "") {
        alert("Both fields are required.");
        return;
    }

    // Check for spaces in the email
    if (email.includes(" ")) {
        alert("Email cannot contain spaces.");
        return;
    }

    // Validate that the email is legitimate
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6 || password.length > 20) {
        alert("Password must be between 6 and 20 characters.");
        return;
    }

    if (password.toLowerCase() === "password") {
        alert("Password cannot be 'password'.");
        return;
    }

    // checks for login vs register
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (action === 'login') {
        if (storedEmail === email && storedPassword === password) {
            alert('Login successful!');
            redirectToHiddenPage();
        } else {
            alert('Invalid email or password.');
        }
    } else if (action === 'register') {
        if (storedEmail === email) {
            alert('An account with this email already exists.');
        } else {
            alert('User created successfully!');
            // Save the email and password in localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            saveToTextFile(email, password);
            redirectToHiddenPage();
        }
    }
}

// sekret page
function redirectToHiddenPage() {
    window.location.href = 'hidden.html';
}

// comment to email
async function submitComment() {
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('commentEmail').value;
    var comment = document.getElementById('comment').value;

    if (firstName === "" || email === "") {
        alert("First Name and Email are required to submit a comment.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (comment === "" || comment.length < 15) {
        alert("Comment cannot be empty and must be at least 15 characters long.");
        return;
    }

    // email the first name and comment
    var commentMessage = `First Name: ${firstName}\nEmail: ${email}\nComment: ${comment}`;

    try {
        const response = await emailjs.send("service_cbwf9hh", "template_dh6bb2i", {
            firstName: firstName,
            email: email,
            comment: commentMessage
        });
        alert('Comment sent successfully!');
        // Clear the form fields
        document.getElementById('comment').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('commentEmail').value = '';
    } catch (error) {
        alert('Failed to send comment');
        console.error('EmailJS error:', error);
    }
}

