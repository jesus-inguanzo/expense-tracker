let expenses = []
let total = 0

function addExpense() {

  let desc = document.getElementById("description").value
  let amount = Number(document.getElementById("amount").value)

  expenses.push({ desc, amount })

  total += amount

  document.getElementById("total").textContent = total

  let li = document.createElement("li")
  li.textContent = desc + " - $" + amount

  document.getElementById("expenseList").appendChild(li)

}