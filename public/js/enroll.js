document.getElementById('enrollment-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const country = params.get('country');
    const course = params.get('course');

    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!firstName || !lastName || !email) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    let API_BASE;

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        API_BASE = 'http://localhost:3000';
    } else {
        API_BASE = 'https://your-deployed-backend-url.com'; // Change later
    }

    try {
        const response = await fetch(`${API_BASE}/enroll?course=${course}&country=${country}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email })
        });
        const data = await response.json();
        document.body.innerHTML = `
            <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;">
                <h2>${data.message}</h2>
                <a href="index.html" style="margin-top:20px;text-decoration:none;">
                    <button style="padding:10px 20px;font-size:1rem;">Return to Homepage</button>
                </a>
            </div>
        `;
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.')
    }
});