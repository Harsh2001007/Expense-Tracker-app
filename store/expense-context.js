import {createContext, useReducer} from 'react';
import {act} from 'react-test-renderer';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'kreo keyboard',
    amount: 3000,
    date: new Date('2024-04-20'),
  },
  {
    id: 'e2',
    description: 'js book',
    amount: 1000,
    date: new Date('2024-03-20'),
  },
  {
    id: 'e3',
    description: 'watch',
    amount: 900,
    date: new Date('2023-12-28'),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const editableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[editableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[editableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpenseContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }

  return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;
