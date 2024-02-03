import Login from "@/components/login";
import { Stack } from "expo-router";
import { useState } from "react";

export default function Layout() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
