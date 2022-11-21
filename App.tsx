import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Contraseña} from './src/app/screens/contraseña';
import {Home} from './src/app/screens/home';
import {Login} from './src/app/screens/login';
import {NavBar} from './src/app/screens/navBar';
import {Pagos} from './src/app/screens/pagos';
import {Prestamos} from './src/app/screens/prestamos';
import {Registro} from './src/app/screens/registro';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Container Principal</Text>
      </View>
      <View>
        <NavBar />
      </View>
      <View>
        <Home />
      </View>
      <View>
        <Login />
      </View>
      <View>
        <Prestamos />
      </View>
      <View>
        <Registro />
      </View>
      <View>
        <Pagos />
      </View>
      <View>
        <Contraseña />
      </View>
    </SafeAreaView>
  );
};

export default App;
