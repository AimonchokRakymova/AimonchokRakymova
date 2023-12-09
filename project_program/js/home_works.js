const gmail_input = document.querySelector("#gmail_input")
const gmail_button = document.querySelector("#gmail_button")
const gmail_result = document.querySelector("#gmail_result")

const regularExp = /^\w+@[A-Za-z]+\.[A-Za-z]+$/

gmail_button.onclick = () => {
    if (regularExp.test(gmail_input.value)) {
        gmail_result.innerHTML = "Правильно!"
    } else {
        gmail_result.innerHTML = "Неправильно!"
    }
}

const child = document.querySelector(".child_block")
let x = 0

const move = () => {
    setTimeout(() => {

        if (x < 449) {
            x += 2
            child.style.left = `${x}px`
            move()
        }

    }, 1)
}

move()