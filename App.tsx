import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import {GlobalStyles} from './constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsButton from './components/UI/IconsButton';

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();
  function ExpensesOverview() {
    return (
      <BottomTab.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {backgroundColor: GlobalStyles.colors.secondaryBlue},
          headerTintColor: GlobalStyles.colors.primarytext,
          tabBarStyle: {backgroundColor: GlobalStyles.colors.secondaryBlue},
          tabBarActiveTintColor: 'white',
          headerRight: ({tintColor}) => (
            <IconsButton
              icon="plus"
              size={24}
              color={tintColor}
              onpress={() => {
                console.log('plus clicked');
                navigation.navigate('ManageExpense');
              }}
            />
          ),
        })}>
        <BottomTab.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent Expenses',
            tabBarIcon: ({color, size}) => (
              <Icon name="history" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({color, size}) => (
              <Icon name="list" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
  return (
    <>
      <StatusBar backgroundColor={'red'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.secondaryBlue},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
