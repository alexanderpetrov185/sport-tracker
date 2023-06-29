import { View } from "react-native";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory-native";

const StatisticLineChart = ({ data }) => {
  const dataToChart = data.map((el) => {
    return {
      x: el.date.slice(5, 10),
      y: el.weight,
    };
  });

  return (
    <View>
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar style={{ data: { fill: "#c43a31" } }} data={dataToChart} />
      </VictoryChart>
    </View>
  );
};

export default StatisticLineChart;
