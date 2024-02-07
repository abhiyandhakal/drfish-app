import { Text, View } from "@/components/themed";
import { Link } from "expo-router";
import colors from "@/constants/colors";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export default function Page() {
  const [temperature, setTemperature] = useState("14");
  const [tempReview, setTempReview] = useState<{
    color: "red" | "green" | "blue";
    message: string;
  }>({
    color: "green",
    message: "Temperature is normal",
  });
  const colorscheme = useColorScheme();

  useEffect(() => {
    const interval = setInterval(() => {
      updateTemperature();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (Number(temperature) > 20) {
      setTempReview({ color: "red", message: "Temperature is too high" });
    } else if (Number(temperature) < 10) {
      setTempReview({ color: "blue", message: "Temperature is too low" });
    } else {
      setTempReview({ color: "green", message: "Temperature is normal" });
    }
  }, [temperature]);

  function updateTemperature() {
    // range
    const range = { min: 4, max: 25 };

    // Base temperature
    const baseTemperature = (range.max - range.min) / 2 + range.min;
    const fluctuation = Math.random() * 2 - 1; // Generate random fluctuation within [-1, 1]

    // Add fluctuation to base temperature
    const temperature = baseTemperature + fluctuation;
    setTemperature(
      Math.min(range.max, Math.max(range.min, temperature)).toFixed(2),
    );
  }

  return (
    <View className="flex-1 flex justify-center items-center p-4">
      <View
        className="flex justify-center items-center gap-2 h-fit w-full rounded-lg shadow py-2"
        style={{
          backgroundColor: colors[colorscheme ?? "dark"].backgroundSecondary,
        }}
      >
        <Text
          className="text-2xl font-semibold"
          style={{ color: colors[colorscheme ?? "dark"].red }}
        >
          Temperature
        </Text>
        <Text className="text-5xl font-bold">{temperature}°C</Text>
        <Text
          className="text-base"
          style={{
            color: colors[colorscheme ?? "dark"][tempReview.color],
            textShadowColor: colors[colorscheme ?? "dark"][tempReview.color],
            textShadowRadius: 16,
          }}
        >
          {tempReview.message}
        </Text>
      </View>
    </View>
  );
}
