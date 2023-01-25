import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Flexing } from "../screens/Flex/Flex";
import { Home } from "../screens/Home/Home";
import { Styleguide } from "../screens/StyleGuide/Styleguide";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={false}
        initialRouteName="home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#d1eac3",
            width: 300,
          },
        }}
      >
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="squares" component={Flexing} />
        <Drawer.Screen name="styleguide" component={Styleguide} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
