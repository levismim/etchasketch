const container = document.getElementById("container")
let divs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const changeAmount = document.getElementById("change-amount")

changeAmount.addEventListener("click", function() {
    let amount = prompt("How many squares per side? Cannot be more than 100.")
    if (amount > 100 || amount < 0) {
        alert("invalid number.")
    } else if (amount <= 100) {
        return amount;
    }
})  

for (let i = 0; i <= 16; i++) {
    divs.forEach(function() {
        let div = document.createElement("div")
        div.className = "square"
        container.appendChild(div)
        div.addEventListener("mouseover", function() 
            {div.style.backgroundColor = "lightblue"})
    })
}

