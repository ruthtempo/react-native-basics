import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home/Home";
import { Flexing } from "../screens/Flex/Flex";
import { Ionicons } from "@expo/vector-icons";

import { StyleGuideMore } from "../screens/StyleGuide/More";
import { StyleGuide } from "../screens/StyleGuide/Details";

const Tab = createBottomTabNavigator();
const StyleGuideStack = createNativeStackNavigator();

//below the nested screens inside tabs . the screens imported from screens, which in turn import from features

function StyleGuideStackScreen() {
  return (
    <StyleGuideStack.Navigator initialRouteName="StyleGuide">
      <StyleGuideStack.Screen name="StyleGuideDetails" component={StyleGuide} />
      <StyleGuideStack.Screen
        name="StyleGuideMore"
        component={StyleGuideMore}
      />
    </StyleGuideStack.Navigator>
  );
}

//below the main tabs

export const NestedTabsNavigation = () => {
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
        <Tab.Screen name="styleguide" component={StyleGuideStackScreen} />
        {/* we call the screen function defined above as a component */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
