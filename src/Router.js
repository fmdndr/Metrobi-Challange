import React from 'react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//Pages
import {Main, ArrayFilter, Timer, Layout, Brackets, Egg} from './pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={sideBarMenu}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function sideBarMenu() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Home" component={Main} />
      <Drawer.Screen name="Array" component={ArrayFilter} />
      <Drawer.Screen name="Timer" component={Timer} />
      <Drawer.Screen name="Layout" component={Layout} />
      <Drawer.Screen name="Brackets" component={Brackets} />
      <Drawer.Screen name="Egg" component={Egg} />
    </Drawer.Navigator>
  );
}

export default Router;
