import axios from 'axios';
import {BackHandler} from 'react-native';

const BACKEND_URL = 'https://expense-tracker-fb8b2-default-rtdb.firebaseio.com';
export function storeExpenses(expenseData) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export function fetchResponse() {
  axios.get(BACKEND_URL + '/expense.json');
}
