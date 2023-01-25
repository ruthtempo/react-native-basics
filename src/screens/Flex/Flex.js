import { View, Button } from "react-native";
import { stylesFn } from "./styles";

export const Flexing = ({ navigation }) => {
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <View>
        <View style={{ width: 200, height: 200, backgroundColor: "yellow" }} />
      </View>

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          alignSelf: "center",
        }}
      />

      <View style={{ alignItems: "flex-end" }}>
        <View style={{ width: 150, height: 150, backgroundColor: "green" }} />
      </View>
      {/* <Button title="go to home" onPress={() => navigation.navigate("home")} /> */}
    </View>
  );
};
