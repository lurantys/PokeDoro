const pokemonSprites = [
    'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/pikachu.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/eevee.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/mew.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/vulpix.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/clefairy.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/jigglypuff.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mareep.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/mareep.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/wooper.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/wooper.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/umbreon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/umbreon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/espeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/glaceon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/glaceon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/leafeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/leafeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/flareon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/vaporeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/jolteon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/sylveon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/sylveon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/meowth.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/psyduck.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/growlithe.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/ponyta.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/slowpoke.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/squirtle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/charmander.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/bulbasaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/dratini.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/snorlax.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/mudkip.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/totodile.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/totodile.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/chikorita.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/chikorita.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/cyndaquil.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/cyndaquil.gif'
];

let isDarkMode = localStorage.getItem('darkMode') === 'true';

let timer;
let isRunning = false;
let timeLeft;
let isBreakTime = false;
let originalWorkDuration;

let workDuration = 25 * 60;
let shortBreakDuration = 5 * 60;
let longBreakDuration = 10 * 60;
let sessionCount = 0;

// Add this function after the existing variables in script.js
function playLevelUpSound() {
    const sound = document.getElementById('levelUpSound');
    if (!sound) {
        console.error('Sound element not found');
        return;
    }

    // Reset sound to start and set volume
    sound.currentTime = 0;
    sound.volume = 0.5;

    // Play sound with promise handling
    const playPromise = sound.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('Sound played successfully');
            })
            .catch(error => {
                console.error('Error playing sound:', error);
                // Improved error messaging
                if (error.name === 'NotAllowedError') {
                    console.log('Please interact with the page first');
                } else if (error.name === 'NotFoundError') {
                    console.error('Audio file not found');
                }
                // Fallback: try playing after user interaction
                document.addEventListener('click', () => {
                    sound.play().catch(e => console.error('Fallback play failed:', e));
                }, { once: true });
            });
    }
}

// Update startTimer function by removing opacity changes
function startTimer() {
    const startBtn = document.getElementById('start-btn');
    const minutesInput = document.getElementById('minutes');
    
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = 'Pause';
        minutesInput.readOnly = true; // Disable input without changing appearance
        
        if (!timeLeft) {
            workDuration = parseInt(document.getElementById('work-time').value) * 60;
            shortBreakDuration = parseInt(document.getElementById('short-break-time').value) * 60;
            longBreakDuration = parseInt(document.getElementById('long-break-time').value) * 60;
            
            timeLeft = isBreakTime ? 
                (sessionCount % 3 === 0 ? longBreakDuration : shortBreakDuration) : 
                workDuration;
        }
        
        timer = setInterval(updateTimer, 1000);
    } else {
        isRunning = false;
        startBtn.textContent = 'Start';
        minutesInput.readOnly = false; // Re-enable input
        clearInterval(timer);
    }
}

// Update resetTimer function by removing opacity reset
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = null;
    isBreakTime = false;
    sessionCount = 0;
    
    const minutesInput = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const startBtn = document.getElementById('start-btn');
    
    minutesInput.readOnly = false; // Re-enable input
    minutesInput.value = 25;
    secondsDisplay.textContent = '00';
    startBtn.textContent = 'Start';
    document.querySelector('.timer').classList.remove('break-time');
}

// Modify the updateTimer function to play sound during transitions
function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        isRunning = false;
        isBreakTime = !isBreakTime;
        
        const minutesInput = document.getElementById('minutes');
        const statusEl = document.getElementById('status');
        
        playLevelUpSound(); // Play sound at transition

        if (isBreakTime) {
            sessionCount++;
            timeLeft = sessionCount % 3 === 0 ? longBreakDuration : shortBreakDuration;
            document.querySelector('.timer').classList.add('break-time');
            statusEl.textContent = sessionCount % 3 === 0 ? 'Long Break' : 'Short Break';
        } else {
            // Use original duration when returning to work time
            timeLeft = workDuration;
            minutesInput.value = workDuration / 60;
            document.querySelector('.timer').classList.remove('break-time');
            statusEl.textContent = 'Work Time';
        }
        
        startTimer();
        return;
    }
    
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Replace the existing toggleDarkMode function
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark-mode');
}

// Fix the setRandomPokemon function
function setRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * (pokemonSprites.length / 2)) * 2;
    const isChromatic = Math.random() < 0.01; // 1% chance
    const pokemonImg = document.querySelector('.sprite'); // Changed from .logo to .sprite
    pokemonImg.src = pokemonSprites[randomIndex + (isChromatic ? 1 : 0)];
}

// Add this function to script.js
function playButtonSound() {
    const sound = document.getElementById('buttonSound');
    if (!sound) return;
    
    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play().catch(error => console.error('Error playing button sound:', error));
}

// Add this function to script.js
function startBackgroundMusic() {
    const bgMusic = document.getElementById('backgroundMusic');
    if (!bgMusic) return;
    
    bgMusic.volume = 0.1; // 90% lower volume
    
    // Play music with promise handling
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.error('Error playing background music:', error);
            // Try playing on first user interaction
            document.addEventListener('click', () => {
                bgMusic.play().catch(e => console.error('Background music autoplay failed:', e));
            }, { once: true });
        });
    }
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    setRandomPokemon();
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // Get all buttons
    const buttons = document.querySelectorAll('button');
    
    // Add click listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', playButtonSound);
    });

    // Start background music on first user interaction
    document.addEventListener('click', () => {
        startBackgroundMusic();
    }, { once: true });
});