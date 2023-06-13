import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import WorkoutsList from "../../components/WorkoutsList/WorkoutsList";
import $api from "../../src/http";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 20,
  },
});

const ChoseWorkoutsScreen = ({ route, navigation }) => {
  const [listOfWorkouts, setListOfWorkouts] = React.useState();
  const id = route.params.id;

  React.useEffect(() => {
    $api
      .get(`/workoutPlans/${id}`)
      .then(({ data }) => {
        setListOfWorkouts(data.workouts);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
          onPress={() =>
            navigation.navigate("ChoseDaysScreen", {
              id: id,
            })
          }
        >
          Выбрать
        </Button>
        <FlatList
          data={listOfWorkouts}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.navigate("ExercisesScreen", {
                  name: item.name,
                  id: item.id,
                })
              }
            >
              <WorkoutsList
                el={item.customName}
                id={item.id}
                wokoutNum={listOfWorkouts.indexOf(item)}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ChoseWorkoutsScreen;
