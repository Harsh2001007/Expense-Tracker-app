import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import IconsButton from '../components/UI/IconsButton';
import {GlobalStyles} from '../constants/styles';
import CustomButton from '../components/UI/CustomButton';
import {ExpenseContext} from '../store/expense-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

export default function ManageExpense({route, navigation}) {
  const expensesCtx = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === editedExpenseId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
    console.log('delete icon clicked');
  }

  function cancelHandler() {
    console.log('cancel clicked');
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      <View style={styles.deleteContainer}>
        {isEditing && (
          <IconsButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.primarytext}
            onpress={deleteExpenseHandler}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.secondaryBlue,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: 'white',
    alignItems: 'center',
  },
});
