import { Text, View } from "@/components/themed";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import colors from "@/constants/colors";

export default function Page() {
  return (
    <View className="flex-1 flex justify-center items-center">
      <Text className="text-xl">React Native First Page</Text>
      <Link href="/test">
        <Text lightColor={colors.light.link} darkColor={colors.dark.link}>
          Go To Test Page
        </Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
