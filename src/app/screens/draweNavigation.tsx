import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Registro} from './registro';
import {NavBar} from './navBar';
import {MenuLateral} from './lateral';
const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="NavBar"
      drawerContent={props => <MenuLateral {...props} />}>
      <Drawer.Screen name="Registro" component={Registro} />
      <Drawer.Screen name="NavBar" component={NavBar} />
    </Drawer.Navigator>
  );
};
