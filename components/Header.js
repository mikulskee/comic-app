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
    paddingVertical: 10
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",

    fontSize: 12
  },
  bold: {
    fontWeight: "bold"
  }
});
