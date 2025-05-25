let expenses = [];
let TotalAmount = 0;


const categorySelect = document.getElementById('category-select')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const TotalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('please enter a  valid amount');
        return;
    }
    if (date === '') {
        alert('please select a date');
        return;
    }
    expenses.push({ category, amount, date })

    TotalAmount += amount;
    TotalAmountCell.textContent = TotalAmount;

    const newRow = expenseTableBody.insertRow();


    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deletebtn = document.createElement('button');

    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click', function() {
        expenses.splice(
            expenses.indexOf(expense), 1
        );

        TotalAmount = expense.amount;
        TotalAmountCell.textContent = TotalAmount;

        expenseTableBody.removeChild(newRow);

    })

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deletebtn);
});

for (const expense of expenses) {
    TotalAmount += amount;
    TotalAmountCell.textContent = TotalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deletebtn = document.createElement('button');

    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click', function() {
        expenses.splice(
            expenses.indexOf(expense), 1
        );

        TotalAmount = expense.amount;
        TotalAmountCell.textContent = TotalAmount;

        expenseTableBody.removeChild(newRow);

    })

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deletebtn);

}