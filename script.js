const container = document.getElementById("container")
const changeAmount = document.getElementById("change-amount")

function makeGrid() {
for (i = 0; i < 16; i++) {
        const column = document.createElement("div")
        column.className = "column"
        container.appendChild(column)
    

for (j = 0; j < 16; j++) {
        const row = document.createElement("div")
        row.className = "row"
        column.appendChild(row)
        row.textContent = ''
        row.addEventListener("mouseover", function() 
            {row.style.backgroundColor = "black"})
}}
}
makeGrid()

changeAmount.addEventListener("click", function() {
    let amount = prompt("How many squares per side? Cannot be more than 100.")
    let num = parseInt(amount)
  
    if (amount > 100 || amount < 0) {
        alert("invalid number.")
    } else if (amount <= 100) {

        function newGrid() {
            document.getElementById('container').innerHTML = '';
            for (i = 0; i < num; i++) {
                    const column = document.createElement("div")
                    column.className = "column"
                    container.appendChild(column)
                    column.textContent = ''
            
            for (j = 0; j < num; j++) {
                    const row = document.createElement("div")
                    row.className = "row"
                    column.appendChild(row)
                    row.textContent = ''
                    row.addEventListener("mouseover", function() 
                        {row.style.backgroundColor = "black"})
            }}
            }
            newGrid()
    }
})  

