// background.js
let timer;
let isRunning = false;
let timeLeft = 25 * 60; // Initialize with default work duration
let isBreakTime = false;
let workDuration = 25 * 60;
let shortBreakDuration = 5 * 60;
let longBreakDuration = 10 * 60;
let sessionCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.action) {
        case 'startTimer':
            startTimer();
            break;
        case 'pauseTimer':
            pauseTimer();
            break;
        case 'resetTimer':
            resetTimer();
            break;
        case 'getState':
            sendResponse({
                isRunning,
                timeLeft,
                isBreakTime,
                sessionCount,
                workDuration,
                shortBreakDuration,
                longBreakDuration
            });
            return true; // Required for async response
    }
});

function startTimer() {
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateBadge();
            // Notify popup if open
            chrome.runtime.sendMessage({
                action: 'tick',
                timeLeft: timeLeft,
                isBreakTime: isBreakTime
            });
        } else {
            handleTimerComplete();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    updateBadge();
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = workDuration;
    isBreakTime = false;
    sessionCount = 0;
    updateBadge();
    // Notify popup about reset
    chrome.runtime.sendMessage({
        action: 'tick',
        timeLeft: workDuration,
        isBreakTime: false
    });
}

function handleTimerComplete() {
    if (isBreakTime) {
        timeLeft = workDuration;
        isBreakTime = false;
    } else {
        sessionCount++;
        if (sessionCount % 4 === 0) {
            timeLeft = longBreakDuration;
        } else {
            timeLeft = shortBreakDuration;
        }
        isBreakTime = true;
    }
    updateBadge();
}

function updateBadge() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const text = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    chrome.action.setBadgeText({ text });
    chrome.action.setBadgeBackgroundColor({ color: isBreakTime ? '#4CAF50' : '#666' });
}