import { ScrollView, SafeAreaView } from "react-native";
import { More } from "../../features/styleguide/More";

//here we have only thew screen, the logic lives in festur

export const StyleGuideMore = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <More />
      </ScrollView>
    </SafeAreaView>
  );
};
