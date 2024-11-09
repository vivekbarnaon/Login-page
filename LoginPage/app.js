let signUpBtn = document.querySelectorAll('.signUpbtn'); // Updated to match HTML case
let signInBtn = document.querySelectorAll('.signinbtn');                                                 
let nameField = document.querySelectorAll('.namefield');                                             
let title = document.querySelectorAll('.title');
let underline = document.querySelectorAll('.underline');
let text = document.querySelectorAll('.text');                                                                                                                                                                                                                  

// Sign In button functionality
signInBtn.forEach((btn, index) => {  
    btn.addEventListener('click', () => {    
        // Set maxHeight to 0 for the corresponding nameField
        nameField[index].style.maxHeight = '0';

        // Update title text to "Sign In" for each title element
        title.forEach(t => {
            t.innerHTML = 'Sign In';
        });

        // Set "Lost Password" text for each element in the text NodeList
        text.forEach(t => {
            t.innerHTML = 'Lost Password';
        });

        // Add 'active' class to sign-in buttons and remove from sign-up buttons
        signUpBtn.forEach(signUp => {
            signUp.classList.remove('active');
        });
        signInBtn.forEach(signIn => {
            signIn.classList.add('active');
        });

        // Move underline to indicate the "Sign In" tab
        underline.forEach(u => {
            u.style.transform = 'translateX(35px)';
        });
    });                                                                                                    
});

// Sign Up button functionality
signUpBtn.forEach((btn, index) => {  
    btn.addEventListener('click', () => {    
        // Set maxHeight for the corresponding nameField
        nameField[index].style.maxHeight = '60px';

        // Update title text to "Sign Up" for each title element
        title.forEach(t => {
            t.innerHTML = 'Sign Up';
        });

        // Add 'active' class to sign-up buttons and remove from sign-in buttons
        signUpBtn.forEach(signUp => {
            signUp.classList.add('active');
        });
        signInBtn.forEach(signIn => {
            signIn.classList.remove('active');
        });

        // Move underline back to indicate the "Sign Up" tab
        underline.forEach(u => {
            u.style.transform = 'translateX(0)';
        });
        text.forEach(t => {
            t.innerHTML = 'Password Suggestion';
        });
    });                                                                                                    
});
