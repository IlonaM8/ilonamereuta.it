
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Ciao, sono Ilona e sto imaparando a programmare!'

let idx = 1
let speed = 200/ speedEl.value

writeText()

function writeText() {
    textEl.innerHTML = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 200 / e.target.value)