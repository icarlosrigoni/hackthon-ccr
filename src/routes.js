import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import DangerPage from './pages/DangerPage';
import HealthPage from './pages/HealthPage';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="DangerPage" component={DangerPage} />
        <AppStack.Screen name="HealthPage" component={HealthPage} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}