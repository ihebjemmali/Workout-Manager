import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import Create from "./components/Create.jsx";

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    $.ajax({
      url: "http://localhost:3000/api/workouts",
      success: (data) => {
        setWorkouts(data);
      },
      error: (err) => {
        console.error("Error fetching workouts:", err);
      },
    });
  }, [refresh]);

  const create = (newWorkout) => {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/workouts",
      data: newWorkout,
      success: () => {
        setRefresh(!refresh);
      },
      error: (err) => {
        console.error("Error adding workout:", err);
      },
    });
  };

  const update = (id, updatedWorkout) => {
    $.ajax({
      type: "PUT",
      url: `http://localhost:3000/api/workouts/${id}`,
      data: updatedWorkout,
      success: () => {
        setRefresh(!refresh);
      },
      error: (err) => {
        console.error("Error updating workout:", err);
      },
    });
  };

  const delet = (id) => {
    $.ajax({
      type: "DELETE",
      url: `http://localhost:3000/api/workouts/${id}`,
      success: () => {
        setRefresh(!refresh);
      },
      error: (err) => {
        console.error("Error deleting workout:", err);
      },
    });
  };

  return (
    <div>
      <h1>Workout List</h1>
      <Create create={create} />
      <List workouts={workouts} delet={delet} update={update} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
