import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "./src/constants/Colors";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function TapNavigator() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} />
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="SearchScreen" component={SearchScreen} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.BLUE },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.WHITE },
        }}
      >
        <Stack.Screen
          name="Weather"
          component={HomeScreen}
          options={{
            title: "Weather",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
