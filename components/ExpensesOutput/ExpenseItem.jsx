import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../constants/styles';
import getFormattedDate from '../../utils/date';
import {useNavigation} from '@react-navigation/native';

export default function ExpenseItem({id, description, date, amount}) {
  const navigation = useNavigation();
  function expensePressedHandler() {
    console.log('Expense clicked');
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  }
  return (
    <Pressable
      onPress={expensePressedHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View style={{maxWidth: '70%'}}>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>₹ {amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },

  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.secondaryPurple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: '#808080',
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
  },
  textBase: {
    color: GlobalStyles.colors.primarytext,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 100,
  },
  amount: {
    color: 'black',
    fontWeight: 'bold',
  },
});
