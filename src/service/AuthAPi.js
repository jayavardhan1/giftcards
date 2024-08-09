
const apiUrl = 'http://localhost:8080';

//login
export const login = async (email, password) => {
    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',

        },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.json();
};
