import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import WorkoutsList from "../../components/WorkoutsList/WorkoutsList";
import $api from "../../src/http";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
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
    <View style={{ flex: 1 }}>
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
            <WorkoutsList el={item.name} id={item.id} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default WorkoutsScreen;
