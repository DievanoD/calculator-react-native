import React, { Component } from 'react';
import Home from './pages/Home';

import styles from './styles/index';

const App = () => (
  <Home />
  // <NavigationContainer>
  //   <Stack.Navigator initialRouteName="Login">
  //     <Stack.Screen name="Login" component={Login} />
  //     <Stack.Screen name="Home" component={Home} />
  //     <Stack.Screen name="About" component={About} />
  //   </Stack.Navigator>
  // </NavigationContainer>
);

export default App;