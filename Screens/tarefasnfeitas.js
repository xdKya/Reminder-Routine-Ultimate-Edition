import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const tarefas = require("./temp_tarefas.json");

export default class TarefasNaoFeitas extends Component {
  renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemContainerTitle}>
          {" "}
          <TouchableOpacity style={styles.button}>
            <Image
              style={{
                resizeMode: "contain",
                width: 50,
                height: 50,
                alignSelf: "center",
                justifyContent: "center",
              }}
              source={require("../assets/v.png")}
            />
          </TouchableOpacity>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>

        <Text style={styles.itemText}>Hora: {item.hour}</Text>
        <Text style={styles.itemText}>{item.description}</Text>
        <Text style={styles.itemText}>Nivel de urgência: {item.urgency}</Text>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.conteiner}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.titleImage}
            source={require("../assets/relogio.png")}
          />
          <Text style={styles.titleText}>Reminder Routine</Text>
        </View>
        <FlatList
          data={tarefas}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#FAA4AD",
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#A7C7E7",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    border: "2px solid black",
    borderTopColor: "transparent",
  },
  titleImage: { width: 80, height: 80, margin: 5 },
  titleText: { fontFamily: "Bungee Inline", fontSize: 35, margin: 5 },
  itemContainer: {
    backgroundColor: "pink",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    padding: 5,
  },
  itemContainerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    alignSelf: "center",
    textAlign: "center",
    marginLeft: 10,
    fontFamily: "Bungee Inline",
    fontSize: 20,
    color: "darkred",
  },
  itemText: {
    textAlign: "center",
    fontFamily: "Bungee Inline",
    fontSize: 15,
    color: "darkred",
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
