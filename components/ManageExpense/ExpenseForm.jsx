import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from './Input';

export default function ExpenseForm() {
  function amountHandler() {
    console.log('button clicked');
  }
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountHandler,
        }}
      />
      <Input label="Date" />
      <Input label="Description" />
    </View>
  );
}

const styles = StyleSheet.create({});
