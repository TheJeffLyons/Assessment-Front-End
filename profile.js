
function favColor() {
    alert(`I love the color red!`)
}

function favPlace() {
    alert(`My favorite place is my home!`)
}

function favRitual() {
    alert(`Watching the Dallas Cowboys play every Sunday!`)
}

document.getElementById(`color`).addEventListener("click", favColor)
document.getElementById(`place`).addEventListener("click", favPlace)
document.getElementById(`ritual`).addEventListener("click", favRitual)