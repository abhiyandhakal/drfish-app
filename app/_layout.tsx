import authAtom from "@/atoms/auth";
import Login from "@/components/login";
import { useAtom } from "jotai";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import colors from "@/constants/colors";
import { useColorScheme } from "react-native";

export default function Layout() {
  const [auth, _setAuth] = useAtom(authAtom);
  const colorScheme = useColorScheme();

  if (!auth.loggedIn) {
    return <Login />;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: colors[colorScheme ?? "dark"].tint,
            },
            drawerStyle: {
              backgroundColor: colors[colorScheme ?? "dark"].background,
            },
            drawerActiveBackgroundColor: colors[colorScheme ?? "dark"].tint,
            drawerInactiveTintColor: colors[colorScheme ?? "dark"].text,
            drawerActiveTintColor: colors[colorScheme ?? "dark"].background,
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="test"
            options={{
              drawerLabel: "Test",
              title: "Test",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
      {/* <Stack */}
      {/*   screenOptions={{ */}
      {/*     headerShown: false, */}
      {/*   }} */}
      {/* /> */}
    </>
  );
}
