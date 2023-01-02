import "react-native-gesture-handler";
import "react-native-paper";
import { StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./Screens/SplashScreen";
import store from "./store";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import MovieScreen from "./Screens/MovieScreen";
import FavouriteScreen from "./Screens/FavouriteScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          hidden={false}
          animated={true}
          backgroundColor="transparent"
          networkActivityIndicatorVisible={false}
          barStyle="dark-content"
        />

        <Stack.Navigator>
          <Stack.Screen
            component={SplashScreen}
            name="splashscreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

function HomeStack() {
  const TabNavigation = createMaterialBottomTabNavigator();
  return (
    <TabNavigation.Navigator
      shifting={false}
      labeled={false}
      activeColor={"black"}
      inactiveColor={"gray"}
      barStyle={{
        backgroundColor: "transparent",
        margin: 0,
        paddingHorizontal: 20,
      }}
    >
      <TabNavigation.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={focused ? 25 : 20}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="heart"
              color={color}
              size={focused ? 25 : 20}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="movie-open"
              color={color}
              size={focused ? 25 : 20}
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
}
