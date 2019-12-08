import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function DetailsScreen({ navigation }) {
  const rating = navigation.state.params;
  return (
    <View style={styles.container}>
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
    // paddingHorizontal: 20
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
