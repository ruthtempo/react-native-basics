import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SectionList,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { stylesFn } from "./styles";
import { useState } from "react";

const torii = require("../../../assets/torii.png");
const dishesByOrigin = [
  { data: ["Sushi", "Yakitori"], origin: "Tokyo" },
  { data: ["Tempura", "Ramen", "Mochi"], origin: "Nara" },
  { data: ["Yakisoba", "Tonkatsu"], origin: "Osaka" },
];

const Header = ({ styles, setFontSize }) => {
  // another component
  const doTheThing = () => {
    console.log("Algoruthmus");
    setFontSize(30);
  };
  return (
    <View>
      <Text>My App</Text>
      <Image source={torii} style={styles.imageStyle} />
      <TouchableOpacity style={styles.button} onPress={doTheThing}>
        <Text>Increase text size</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Home = ({ navigation }) => {
  const [fontSize, setFontSize] = useState();

  const styles = stylesFn({ fontSize: fontSize });
  // console.log(styles);
  return (
    <View style={styles.container}>
      <SectionList
        sections={dishesByOrigin}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Button title={item} />}
        renderSectionHeader={({ section: { origin } }) => <Text>{origin}</Text>}
        ListHeaderComponent={
          <Header styles={styles} setFontSize={setFontSize} />
        }
        ListFooterComponent={
          <View>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button
              title="go to squares"
              onPress={() => navigation.navigate("squares")}
            />
            <Button
              title="styleguide"
              onPress={() => navigation.navigate("styleguide")}
            />
          </View>
        }
      />

      <StatusBar style="light" />
    </View>
  );
};
