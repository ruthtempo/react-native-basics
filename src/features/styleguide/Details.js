import { View, Image, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Details = () => {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image />
        <Text style={styles.title}>Foxes</Text>
        <Text style={styles.subtitle}>Some facts</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.cardTypes}>
          <Text>white fox</Text>
        </View>
        <View style={styles.cardTypes}>
          <Text>red fox</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Habitat </Text>
        <Text style={styles.paragraph}>
          Foxes usually live in forested areas, though they are also found in
          mountains, grasslands and deserts. They make their homes by digging
          burrows in the ground.
        </Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate("StyleGuideMore");
          }}
        >
          {/* If i want to navigate to a different stack, we cannot navigate but can use LinkTO */}
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
