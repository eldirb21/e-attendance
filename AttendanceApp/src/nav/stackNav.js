import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {stackdata} from './data-nav';

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {stackdata.map((x, i) => {
        return <Stack.Screen key={i} name={x.name} component={x.component} />;
      })}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackNav;
