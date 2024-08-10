export const loginUser = async (username, password) => {
    const url = "https://stagingapi.lifestylerewards.com.au/auth";

    const data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);
    data.append('grant_type', 'password');

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'clientId': 'aa941c6a-a3c8-4a8d-aa43-e92205685b4b',
            'Cache-Control': 'no-cache',
        },
        body: data.toString(),
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result; // Process the result as needed
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Handle the error as needed
    }
};

