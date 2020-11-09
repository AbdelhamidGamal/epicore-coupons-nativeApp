import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import messaging from "@react-native-firebase/messaging";

import ItemCard from "./src/components/itemCard";

export default function App() {
  // React.useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <View style={styles.container}>
      <ItemCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
