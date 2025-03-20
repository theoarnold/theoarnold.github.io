let seconds = parseInt(localStorage.getItem('timeSpent')) || 0;
let counterId = null;
let startTime = Date.now();

function updateCounter() {
    if (seconds >= 10000) {
        seconds = 0;
        startTime = Date.now(); // Reset start time when counter resets
    }
    document.getElementById('counter').textContent = `Visited for ${seconds} seconds`;
}

function saveTime() {
    // Calculate actual elapsed time
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    seconds += elapsedSeconds;
    localStorage.setItem('timeSpent', seconds.toString());
    startTime = Date.now(); // Reset start time after saving
}

function startCounter() {
    if (!counterId) {
        startTime = Date.now();
        counterId = setInterval(() => {
            const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
            seconds += elapsedSeconds;
            startTime = Date.now();
            updateCounter();
        }, 1000);
    }
}

function stopCounter() {
    if (counterId) {
        clearInterval(counterId);
        counterId = null;
        saveTime(); // Save when stopping
    }
}

// Handle visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopCounter();
    } else {
        startCounter();
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    stopCounter();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initial display and start
    updateCounter();
    startCounter();
});