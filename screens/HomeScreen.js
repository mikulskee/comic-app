import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
  const [latestNum, setLatestNum] = useState();
  const [data, setData] = useState([]);

  const addItemsToData = item => {
    setData([...data].concat(item));
  };

  const URL = "https://xkcd.com/info.0.json";

  const fetchLatestNumber = async () => {
    const response = await fetch(URL);
    const responseJSON = await response.json();
    return responseJSON.num;
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
    fetchLatestNumber().then(item => {
      setLatestNum(item);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [latestNum]);

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setData([]);

    wait(1000).then(() => {
      fetchData();
      setRefreshing(false);
    });
  }, [refreshing, latestNum]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#abafc2"
  },

  content: {
    paddingHorizontal: 20
  }
});
