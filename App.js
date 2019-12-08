import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Header from "./components/Header";
import Card from "./components/Card";

const HomeScreen = ({ navigation }) => {
  const [latestNum, setLatestNum] = useState();
  const [data, setData] = useState([]);

  const addItemsToData = item => {
    setData([...data].concat(item));
  };

  const URL = "https://xkcd.com/info.0.json";

  const fetchLatestNumber = async () => {
    const response = await fetch(URL);
    const responseJSON = await response.json();
    setLatestNum(responseJSON.num);
  };

  const fetchData = () => {
    if (latestNum) {
      let items = [];
      const fetchedObject = async id => {
        const response = await fetch(`https://xkcd.com/${id}/info.0.json`);
        const data = await response.json();
        return data;
      };

      for (i = 1; i < 9; i++) {
        const id = latestNum + 1 - i;
        fetchedObject(id).then(data => {
          items.push(data);
          addItemsToData(items);
        });
      }
    } else return;
  };

  useEffect(() => {
    fetchLatestNumber();
  }, []);

  useEffect(() => {
    fetchData();
  }, [latestNum]);

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={styles.content}>
        {data.map(item => (
          <TouchableOpacity
            key={item.title}
            onPress={() => navigation.navigate("Details", item)}
          >
            <Card item={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  const rating = navigation.state.params;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={{ uri: `${rating.img}` }}
      />
      {/* <View style={styles.img} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 5
    // justifyContent: "center",
    // alignItems: "center"
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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer />;
}
