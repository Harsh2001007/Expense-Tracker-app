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
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLenth: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
