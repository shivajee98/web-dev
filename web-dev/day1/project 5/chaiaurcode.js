const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let bgChanger;
function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

start.addEventListener('click', function() {
    bgChanger = setInterval(changeBackgroundColor, 50)
})


stop.addEventListener('click', function() {
    clearInterval(bgChanger)
})







