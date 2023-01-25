import { NavigationContainer } from "@react-navigation/native";
import { Flexing } from "../screens/Flex/Flex";
import { Home } from "../screens/Home/Home";
import { Styleguide } from "../screens/StyleGuide/styleguide";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "home") {
              iconName = focused ? "ios-home" : "home-outline";
            } else if (route.name === "squares") {
              iconName = focused ? "ios-square" : "square-outline";
            } else if (route.name === "styleguide") {
              iconName = focused ? "brush" : "brush-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="squares" component={Flexing} />
        <Tab.Screen name="styleguide" component={Styleguide} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
