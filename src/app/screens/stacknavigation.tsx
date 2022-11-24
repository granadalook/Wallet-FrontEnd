import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Registro} from './registro';
import {Login} from './login';
import {Prestamos} from './prestamos';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        options={{
          headerTitle: 'Pantalla No. 1',
        }}
        name="Registro"
        component={Registro}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Pantalla No. 2',
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Prestamos" component={Prestamos} />
    </Stack.Navigator>
  );
};
