import axios from 'axios';

export function storeExpenses(expenseData) {
  axios.post(
    'https://expense-tracker-fb8b2-default-rtdb.firebaseio.com/expenses.json',
    expenseData,
  );
}
