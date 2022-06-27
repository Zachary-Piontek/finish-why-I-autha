

export default function createAuthError(root) {

    return ({ errorMessage }) => {
        root.textContent = errorMessage;
    };
}