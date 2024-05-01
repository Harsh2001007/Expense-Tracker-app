import axios from 'axios';
import {BackHandler} from 'react-native';

const BACKEND_URL = 'https://expense-tracker-fb8b2-default-rtdb.firebaseio.com';
export function storeExpenses(expenseData) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export async function fetchResponse() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');
  console.log(response.data);

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
    console.log(expenseObject);
  }

  return expenses;
}
