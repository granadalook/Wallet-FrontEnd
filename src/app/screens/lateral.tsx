import {View, Text, Button} from 'react-native';
import React from 'react';
import {MyDrawerContentComponentProps} from '../interfaces/DrawerContentComponentProps';

export const MenuLateral = ({navigation}: MyDrawerContentComponentProps) => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Este es mi menú lateral</Text>
      <Button
        title="Ir a Pantalla 1"
        onPress={() => navigation.navigate('login')}
      />
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Registro')}
      />
    </View>
  );
};
