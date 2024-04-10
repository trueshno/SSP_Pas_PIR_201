import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./components/start-screen/StartScreen";
import SecondScreen from "./components/second-screen/SecondScreen";
import ThirdScreen from "./components/third-screen/ThirdScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={StartScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen name="Third" component={ThirdScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="First" component={StartScreen} />
        <Drawer.Screen name="Second" component={SecondScreen} />
        <Drawer.Screen name="Third" component={ThirdScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}