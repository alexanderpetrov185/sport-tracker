import * as React from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import $api from "../src/http";

const StatisticScreen = () => {
  const [weight, onChangeWeight] = React.useState("");
  const [weightStatistic, onChangeWeightStatistic] = React.useState("");

  const reloadWeight = () => {
    $api.get("/profile/statistic/").then(({ data }) => {
      onChangeWeightStatistic(data.weightStatistic.map((el) => el));
    });
  };

  React.useEffect(() => reloadWeight(), []);

  const weightCreate = () => {
    $api
      .post("/profile/statistic/weight", {
        date: new Date().toISOString(),
        weight: Number(weight),
      })
      .then((response) => {
        if (response) {
          reloadWeight();
        }
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Ваш вес:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        value={weight}
        placeholder="Введите вес здесь"
        keyboardType="numeric"
      />
      <Button
        mode="elevated"
        style={{ margin: 10 }}
        onPress={() => weightCreate()}
      >
        Обновить вес
      </Button>
      <View>
        <FlatList
          data={weightStatistic}
          renderItem={({ item }) => (
            <Text>{item.date.slice(0, 10) + ": " + item.weight + "кг"}</Text>
          )}
        />
      </View>
    </View>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
