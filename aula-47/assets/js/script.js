function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000); //Milésimo de segundos * 1000 = 10 segundos
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

const clock = document.querySelector('.clock');
let seconds = 0;
let timer;

function start() {
    clock.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(function() {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

function pause() {
    clearInterval(timer);
    clock.classList.add('paused');
}

function restart() {
    clock.classList.remove('paused');
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;
}

document.addEventListener('click', function(event) {
    const element = event.target;

    if (element.classList.contains('start')) {
        start();
    }

    if (element.classList.contains('pause')) {
        pause();
    }

    if (element.classList.contains('restart')) {
        restart();
    }
});