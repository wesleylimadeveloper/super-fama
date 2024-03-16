import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { WebView } from "./src/screens/WebView";

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#383838");
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#383838" barStyle="light-content" />
      <WebView />
    </>
  );
}
