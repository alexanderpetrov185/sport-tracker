import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

const StatisticLineChart = ({ data }) => {
  // data формирует не отсортированный по дате ответ
  const weight = data.map((el) => el.weight);
  const date = data.map((el) => el.date.slice(5, 10));
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#023047`,
    labelColor: (opacity = 1) => `#333`,
    strokeWidth: 2,

    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  const dataToChart = {
    labels: date.slice(-6),
    datasets: [
      {
        data: weight.slice(-6),
        strokeWidth: 2,
      },
    ],
    legend: ["Ваш вес"], // optional
  };

  return (
    <View>
      <Text style={styles.header}>График веса</Text>
      <LineChart
        data={dataToChart}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default StatisticLineChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
