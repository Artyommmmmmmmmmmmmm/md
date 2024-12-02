function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function guessNumber() {
    const guess = getRandomInt(100) + 1
    let min = 1
    let max = 100
    let num = 0
    let prevNum = 0
    while (num !== guess) {
        prevNum = num
        num = randomIntFromInterval(min, max)
        if (prevNum === num) {
            num = randomIntFromInterval(min, max)
        }
        console.log(`Компьютер 2: пробую число ${num}.`)
        if (num < guess) {
            console.log('Компьютер 1: больше.')
            min = num
        }
        if (num > guess) {
            console.log('Компьютер 1: меньше.')
            max = num
        }
    }
    console.log('Компьютер 1: Угадал!')
}

guessNumber()