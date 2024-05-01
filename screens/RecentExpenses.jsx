import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expense-context';
import {getDateMinusDays} from '../utils/date';
import {fetchResponse} from '../utils/http';

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpenses() {
      const expensesFromApi = await fetchResponse();
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date > date7daysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
}

const styles = StyleSheet.create({});
