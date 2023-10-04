import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import CartPage from "./components/CartPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
      <Stack.Screen name="HomePage" component={TabNavBar} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export const TabNavBar = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Shop" component={HomePage} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: (tabInfo) => (
            <FontAwesome5 name="shopping-bag" size={20} color={tabInfo.focused ? "#000" : "gray"} />
          )
        }}
      />
      <Tab.Screen name="Cart" component={CartPage} 
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: (tabInfo) => (
            <FontAwesome5 name="shopping-cart" size={20} color={tabInfo.focused ? "#000" : "gray"} />
          )}}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store} >
        <StackNav />
      </Provider>
    </NavigationContainer>
  );
};


