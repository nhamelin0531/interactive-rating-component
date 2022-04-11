// Here comes the fun part
const form = document.querySelector('form')
const rating = document.querySelector('.rating')
const buttons = document.querySelectorAll('.button-flex button')
const thankYou = document.querySelector('.thank')
const span = document.querySelector('.value-location')

const handleSubmit = e => {
    e.preventDefault()
    const value = document.querySelector('.orange').value   // We're gonna get the value by selecting the "Unique class" created by the forEach loop
    rating.classList.add('hide')
    thankYou.classList.remove('hide')
    thankYou.classList.add('show')
    span.innerText = value

}

// Handles the clicking of the submit button
form.addEventListener('submit', handleSubmit)

// Function that removes the "unique classes" from the 1-5 buttons
const removeState = () => {
    buttons.forEach(button => {
        button.classList.remove('orange')
        button.classList.remove('prev-hover')
    })
}
// Handles the clicking of the 1-5 buttons
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        removeState()
        button.classList.add('orange')
        if(buttons[i - 1]) {
            buttons[i - 1].classList.toggle('prev-hover')
        }
    })
})