import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../../constants/styles';

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

export default function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalStyles.colors.primaryBlack,
    flex: 1,
  },
});
