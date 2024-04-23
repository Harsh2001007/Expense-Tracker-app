import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import IconsButton from '../components/UI/IconsButton';
import {GlobalStyles} from '../constants/styles';
import CustomButton from '../components/UI/CustomButton';
import {ExpenseContext} from '../store/expense-context';

export default function ManageExpense({route, navigation}) {
  const expensesCtx = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

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

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: 'test !!!!',
        amount: 89,
        date: new Date('2024-04-20'),
      });
    } else {
      expensesCtx.addExpense({
        description: 'test',
        amount: 100,
        date: new Date('2024-04-23'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CustomButton style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </CustomButton>
        <CustomButton style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
