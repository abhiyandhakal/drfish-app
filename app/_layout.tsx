import authAtom from "@/atoms/auth";
import Login from "@/components/login";
import { Stack } from "expo-router";
import { useAtom } from "jotai";
import { View, Text } from "@/components/themed";

export default function Layout() {
  const [auth, _setAuth] = useAtom(authAtom);

  if (!auth.loggedIn) {
    return <Login />;
  }

  return (
    <>
      <View>
        <Text>Header</Text>
      </View>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
