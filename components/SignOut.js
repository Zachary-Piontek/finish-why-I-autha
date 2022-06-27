

export default function createSignOut(root, { handleSignOut }) {

    root.addEventListener('click', () => {
        handleSignOut();
    });

    return ({ email }) => {
        root.textContent = `Sign out ${email}`;
    };
}