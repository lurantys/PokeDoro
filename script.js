const pokemonSprites = [
    'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/bulbasaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/ivysaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/venusaur.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/charmander.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/charmeleon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/charizard.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/squirtle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/wartortle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/blastoise.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/pikachu.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/raichu.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/eevee.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/vaporeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/jolteon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/flareon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/espeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/umbreon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/umbreon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/leafeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/leafeon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/glaceon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/glaceon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/sylveon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/sylveon.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/mew.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/mewtwo.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/dragonite.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/growlithe.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/arcanine.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/vulpix.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/ninetales.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/psyduck.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/togepi.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/togepi.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/togetic.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/togetic.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/togekiss.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mareep.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/mareep.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/flaaffy.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/flaaffy.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/ampharos.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/ampharos.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/chikorita.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/chikorita.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/cyndaquil.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/cyndaquil.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/totodile.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/totodile.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/marill.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/marill.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/azumarill.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/azumarill.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/wooper.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/wooper.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/quagsire.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/quagsire.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/mudkip.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/torchic.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/torchic.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/treecko.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/ralts.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/ralts.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/kirlia.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/kirlia.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/gardevoir.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/absol.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/latias.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/latias.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/latios.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/latios.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/lucario.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/zorua.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/zorua.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/zoroark.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/zoroark.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/victini.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/victini.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/snivy.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/snivy.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/oshawott.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/oshawott.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/tepig.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/shiny/tepig.gif'
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
    // Clear timer and reset states
    clearInterval(timer);
    isRunning = false;
    timeLeft = null;
    isBreakTime = false;
    sessionCount = 0;
    
    // Reset to default durations
    workDuration = 25 * 60;
    shortBreakDuration = 5 * 60;
    longBreakDuration = 10 * 60;
    
    // Reset all display elements
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const startBtn = document.getElementById('start-btn');
    const workTimeInput = document.getElementById('work-time');
    const shortBreakInput = document.getElementById('short-break-time');
    const longBreakInput = document.getElementById('long-break-time');
    
    // Reset timer display
    minutesDisplay.textContent = '25';
    secondsDisplay.textContent = '00';
    startBtn.textContent = 'Start';
    
    // Reset input fields
    workTimeInput.value = '25';
    shortBreakInput.value = '5';
    longBreakInput.value = '10';
    
    // Reset timer class and status
    document.querySelector('.timer').classList.remove('break-time');
    document.getElementById('status').textContent = 'Work Time';
    
    // Reset HP bar
    const hpBar = document.querySelector('.hp-remaining');
    const currentHP = document.getElementById('current-hp');
    const maxHP = document.getElementById('max-hp');
    
    hpBar.style.width = '100%';
    hpBar.className = 'hp-remaining';
    currentHP.textContent = '25';
    maxHP.textContent = '25';
}

// Add to script.js
function updateHPBar(timeLeft, totalTime) {
    const hpBar = document.querySelector('.hp-remaining');
    if (!hpBar) return;

    requestAnimationFrame(() => {
        const percentage = (timeLeft / totalTime) * 100;
        hpBar.style.width = `${percentage}%`;
        hpBar.style.transition = 'width 0.5s linear';
        
        updateHPBarColor(percentage, hpBar);
    });
}

function updateHPBarColor(percentage, hpBar) {
    const colors = {
        low: percentage <= 20,
        medium: percentage <= 50,
        high: percentage > 50
    };
    
    hpBar.className = `hp-remaining ${
        colors.low ? 'low' : colors.medium ? 'medium' : ''
    }`;
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
    
    updateHPBar(timeLeft, isBreakTime ? 
        (sessionCount % 3 === 0 ? longBreakDuration : shortBreakDuration) : 
        workDuration);
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

// Update the datetime format in script.js
function updateDateTime() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const day = now.getDate();
    const month = months[now.getMonth()];
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'pm' : 'am';
    
    const suffix = ["th", "st", "nd", "rd"][(day % 10 > 3 ? 0 : day % 10)];
    
    document.getElementById('datetime').innerHTML = 
        `<span class="time">${hours}:${minutes} ${ampm}</span>
         <span class="date">${day}${suffix} of ${month}</span>`;
}

// Add to script.js
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function toggleTaskInput() {
    const inputWrapper = document.querySelector('.task-input-wrapper');
    const currentDisplay = inputWrapper.style.display;
    inputWrapper.style.display = currentDisplay === 'none' ? 'block' : 'none';
    if (currentDisplay === 'none') {
        document.getElementById('task-input').focus();
    }
}

function addTask(text) {
    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.innerHTML = `
            <input type="checkbox" class="task-checkbox" 
                   ${task.completed ? 'checked' : ''} 
                   onclick="toggleTask(${task.id})">
            <span class="task-text ${task.completed ? 'task-completed' : ''}">${task.text}</span>
            <button class="task-delete" onclick="deleteTask(${task.id})">×</button>
        `;
        tasksList.appendChild(taskElement);
    });
}

// Event listener for task input
document.getElementById('task-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const text = e.target.value.trim();
        if (text) {
            addTask(text);
            e.target.value = '';
            toggleTaskInput();
        }
    }
});

// Initial render
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

    updateDateTime();
    setInterval(updateDateTime, 1000);
    renderTasks();
});