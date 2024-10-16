const container = document.getElementById("container")
const divs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
divs.forEach(function(e) {
    let div = document.createElement("div")
    div.className = "square"
    container.appendChild(div)
})