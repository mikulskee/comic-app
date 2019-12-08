import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Card({ item }) {
  return (
    <View style={styles.card}>
      <View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.date}>
            {item.day}.{item.month}.{item.year}
          </Text>
        </View>
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
    borderWidth: 2,
    borderColor: "#cfcc21",
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#040f1f",
    borderRadius: 10
  },
  title: {
    color: "#cfcc21",
    width: 100,
    textAlign: "center",
    fontFamily: "montserrat-bold"
  },
  date: {
    color: "#cfcc21",
    fontSize: 10,
    marginTop: 10,
    width: 100,
    textAlign: "center",
    fontFamily: "montserrat-light"
  }
});
