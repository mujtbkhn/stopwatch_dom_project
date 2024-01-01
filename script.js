const timer = document.getElementById('timer');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let intervalId;
let seconds = 0;


const startTimer = () => {

    intervalId = setInterval(() => {
        seconds++;
        const formattedTime = formatTime(seconds);
        timer.textContent = formattedTime;
    }, 1000);
};

const pauseTimer = () => {
    clearInterval(intervalId);
};

const resetTimer = () => {
    clearInterval(intervalId);
    seconds = 0;
    timer.textContent = '00:00:00';
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
};

const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    startTimer();
});

pauseBtn.addEventListener('click', () => {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    pauseTimer();
});

resetBtn.addEventListener('click', () => {
    resetTimer();
});