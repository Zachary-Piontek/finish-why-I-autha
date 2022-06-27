// import services and utilities
// *** import needed service methods

// import component creators
import createAuthForm from './components/AuthForm.js';
import createAuthError from './components/AuthError.js';

let errorMessage = '';

// write handler functions
async function handlePageLoad() {
    // *** get the user

    // *** if there is a user, redirect (use replace) to './members'

    display();
}

async function handleSignIn(email, password) {
    // *** remove next line after verifying credentials are working
    console.log(email, password);

    const response = null; // *** ? (don't forget call is asynchronous!)
    checkAuth(response);
}

async function handleSignUp(email, password) {
    // *** remove next line after verifying credentials are working
    console.log(email, password);

    const response = null; // *** ? (don't forget call is asynchronous!)
    checkAuth(response);
}

function checkAuth(response) {
    // *** remove next line after verifying user is being returned
    console.log(response.user);

    if (response?.error) {
        // *** 
        // 1. console.log the response.error
        // 2. set the errorMessage state from response.error.message
        // (keep this line👇 before console.log)
        // eslint-disable-next-line no-console

        display();
    }
    else {
        // *** redirect (use replace) to './members'
    }
}

// Create each component: 
const SignInForm = createAuthForm(document.querySelector('#sign-in'), { handleAuth: handleSignIn });

const SignUpForm = createAuthForm(document.querySelector('#sign-up'), { handleAuth: handleSignUp });

const AuthError = createAuthError(document.querySelector('#auth-error'));

function display() {
    SignInForm();
    SignUpForm();
    AuthError({ errorMessage });
}

// Call display or page load
handlePageLoad();
