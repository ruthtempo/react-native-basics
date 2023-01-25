import { StyleSheet } from "react-native";

export const stylesFn = () => {
  const standardPadding = {
    padding: 10,
  };

  const standardCard = {
    margin: 10,
    borderRadius: 10,
    ...standardPadding,
  };
  return StyleSheet.create({
    container: {
      height: "100%",
    },
    header: {
      backgroundColor: "blue",
      ...standardPadding,
      alignItems: "center",
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      ...standardPadding,
      color: "white",
    },
    subtitle: {
      textDecorationLine: "underline",
      fontSize: 20,
      ...standardPadding,
      color: "white",
    },
    card: {
      ...standardCard,
      backgroundColor: "gray",
    },
    cardTypes: {
      ...standardCard,
      backgroundColor: "cyan",
      flex: 1,
      alignItems: "center",
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 25,
    },
    button: {
      ...standardPadding,
      borderRadius: 10,
      margin: 5,
      backgroundColor: "purple",
      alignItems: "center",
      width: "50%",
    },
    buttonText: {
      color: "white",
    },
  });
};
