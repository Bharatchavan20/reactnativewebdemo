// import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUpScreen";
//  import DashboardScreen from './DashboardScreen'

const linking = {
  prefixes: ["https://mychat.com", "mychat://"],
  config: {
    screens: {
      Home: "",
      Login: "/login",
      Settings: ":id/blog",
    },
  },
};
const Stack = createStackNavigator();

function App() {
  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }
        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
      `}</style>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={LoginScreen} />
          <Stack.Screen name="Register" component={SignUpScreen} />
          <Stack.Screen name="Dashboard" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
