import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Flexing } from "../screens/Flex/Flex";
import { Home } from "../screens/Home/Home";
import { Styleguide } from "../screens/StyleGuide/Styleguide";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="squares" component={Flexing} />
        <Stack.Screen name="styleguide" component={Styleguide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
