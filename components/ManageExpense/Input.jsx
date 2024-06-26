import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../constants/styles';

export default function Input({label, textInputConfig, style, invalid}) {
  let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primarytext,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primarytext,
    color: GlobalStyles.colors.secondaryPurple,
    padding: 6,
    borderRadius: 6,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: 'crimson',
  },
  invalidInput: {
    backgroundColor: 'pink',
  },
});
