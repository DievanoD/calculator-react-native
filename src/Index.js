import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import About from './pages/About';

import styles from './styles/index';

const Drawer = createDrawerNavigator();

const App = (props) => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' drawerContentOptions={{ activeTintColor: '#2249f5', labelStyle: { fontSize: 18 } }}>
            <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Início' }} />
            <Drawer.Screen name="About" component={About} initialParams={{ title: 'novo' }} options={{ drawerLabel: 'Sobre' }} />
        </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="About" component={About} />
    //   </Stack.Navigator>
    // </NavigationContainer>
);

export default App;