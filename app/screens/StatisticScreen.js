import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import $api from "../src/http";
import StatisticLineChart from "../components/UI/StatisticLineChart";

const StatisticScreen = () => {
  const [weight, onChangeWeight] = React.useState("");
  const [weightStatistic, onChangeWeightStatistic] = React.useState([
    {
      id: null,
      date: "0000-00-00T00:00:00Z",
      weight: 0,
    },
  ]);

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

  // console.log(weightStatistic);

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
        textColor="white"
        style={{
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: "black",
          borderWidth: 1,
          borderColor: "white",
        }}
        onPress={() => weightCreate()}
      >
        Обновить вес
      </Button>
      <StatisticLineChart data={weightStatistic} />
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
