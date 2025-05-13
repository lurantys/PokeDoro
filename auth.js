// API endpoint - replace with your actual backend URL
const API_URL = 'http://localhost:3000/api';

// Play button sound
function playButtonSound() {
    const sound = document.getElementById('buttonSound');
    if (!sound) return;
    
    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play().catch(error => console.error('Error playing button sound:', error));
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    playButtonSound();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', username);
            window.location.href = 'index.html';
        } else {
            alert('INVALID CREDENTIALS. PLEASE TRY AGAIN.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('AN ERROR OCCURRED. PLEASE TRY AGAIN.');
    }
});

// Handle registration link click
document.getElementById('register-link').addEventListener('click', (e) => {
    e.preventDefault();
    playButtonSound();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('PLEASE ENTER BOTH TRAINER NAME AND PASSWORD');
        return;
    }

    registerUser(username, password);
});

async function registerUser(username, password) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('REGISTRATION SUCCESSFUL! PLEASE LOGIN.');
        } else {
            const data = await response.json();
            alert(data.message || 'REGISTRATION FAILED. PLEASE TRY AGAIN.');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('AN ERROR OCCURRED. PLEASE TRY AGAIN.');
    }
}

// Set random Pokemon on login page
function setRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * (pokemonSprites.length / 2)) * 2;
    const isChromatic = Math.random() < 0.01; // 1% chance
    const pokemonImg = document.querySelector('.sprite');
    const spriteUrl = pokemonSprites[randomIndex + (isChromatic ? 1 : 0)];
    pokemonImg.src = spriteUrl;
}

// Initialize login page
document.addEventListener('DOMContentLoaded', () => {
    setRandomPokemon();
}); 