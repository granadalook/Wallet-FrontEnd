import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Registro} from './registro';
import {Pagos} from './pagos';
import {Prestamos} from './prestamos';
import {Login} from './login';
import {Home} from './home';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="REGISTRO" component={Registro} />
      <Tab.Screen name="PAGOS" component={Pagos} />
      <Tab.Screen name="PRESTAMOS" component={Prestamos} />
      <Tab.Screen name="login" component={Login} />
      <Tab.Screen name="HOME" component={Home} />
    </Tab.Navigator>
  );
}

export const NavBar = () => {
  return <MyTabs />;
};
