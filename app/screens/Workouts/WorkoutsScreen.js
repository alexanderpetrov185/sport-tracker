import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import WorkoutsList from "../../components/WorkoutsList";
import $api from "../../src/http";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const WorkoutsScreen = ({ navigation }) => {
  const [listOfWorkoutsPlan, setListOfWorkoutsPlan] = React.useState();

  React.useEffect(() => {
    $api
      .get("/workoutPlans")
      .then(({ data }) => {
        setListOfWorkoutsPlan(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={listOfWorkoutsPlan}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              navigation.navigate("ChoseWorkoutsScreen", {
                name: item.name,
                id: item.id,
              })
            }
          >
            <WorkoutsList el={item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default WorkoutsScreen;
