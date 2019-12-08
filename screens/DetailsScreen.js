import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function DetailsScreen({ navigation }) {
  const rating = navigation.state.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.back}
      >
        <Image source={require("../assets/back.png")} />
      </TouchableOpacity>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={{ uri: `${rating.img}` }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212"
  },

  back: {
    marginTop: 20,
    padding: 20,
    width: 60,
    height: 60
    // backgroundColor: "pink"
  },
  title: {
    color: "#fff"
  },
  content: {
    marginTop: 20
  },
  img: {
    flex: 1,
    resizeMode: "contain"
  }
});
