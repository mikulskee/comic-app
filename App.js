import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
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
      {data.map(item => (
        <Text key={item.num} style={styles.title}>
          {item.title}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#000"
  },
  title: {
    color: "#fff"
  }
});
