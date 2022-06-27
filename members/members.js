// import services and utilities
// *** import needed service methods
import { getUser } from '../services/members-service.js';

let user = null;

import createSignOut from '../components/SignOut.js';

// write handler functions
async function handlePageLoad() {
    // *** get the user
    user = await getUser();
    // *** if there is a **not** user, redirect (use replace) to '../'

    display();
}

async function handleSignOut() {
    // *** call sign out (don't forget call is asynchronous!)
}

// Create each component: 
const SignOut = createSignOut(document.querySelector('#sign-out'), { handleSignOut });

// Roll-up display function that renders (calls with state) each component
function display() {
    SignOut({ email: user.email });
}

// Call display on page load
handlePageLoad();
