import { View } from "@/components/themed";
import Temperature from "@/components/temperature";
import Ph from "@/components/ph";
import { ScrollView } from "react-native-gesture-handler";

export default function Page() {
  return (
    <ScrollView>
      <View className="flex-1 flex justify-center items-center">
        <Temperature />
        <Ph />
        <Ph />
        <Ph />
        <Ph />
        <Ph />
        <Ph />
      </View>
    </ScrollView>
  );
}
