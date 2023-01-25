import { ScrollView, SafeAreaView } from "react-native";
import { Details } from "../../features/styleguide/Details";
//here we have only thew screen, the logic lives in festur

export const StyleGuide = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Details />
      </ScrollView>
    </SafeAreaView>
  );
};
