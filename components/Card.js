import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Card({ item }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
          source={{ uri: item.img }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#121212",
    borderRadius: 10
  },
  title: {
    color: "white",
    width: 100,
    textAlign: "center",
    fontFamily: "montserrat-bold"
  }
});
