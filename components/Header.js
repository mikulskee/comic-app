import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Comic App</Text>
      <Text style={styles.subtitle}>
        powered by <Text style={styles.bold}>xkcd</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: "#040f1f"
  },
  title: {
    color: "#cfcc21",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 46,
    fontFamily: "rancho-regular"
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "montserrat-light"
  },
  bold: {
    fontWeight: "bold"
  }
});
