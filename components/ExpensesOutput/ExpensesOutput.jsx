import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../../constants/styles';

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
