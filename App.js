import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const URL = "https://xkcd.com/info.0.json";
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comics App</Text>
      <Text style={styles.title}>powered by XKCD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#fff"
  }
});
