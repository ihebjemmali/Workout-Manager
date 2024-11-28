import React from "react";
import ListItem from "./ListItem.jsx";

const List = ({ workouts, delet, update }) => {
  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <ListItem
          key={workout.id}
          workout={workout}
          del={delet}
          update={update}
        />
      ))}
    </div>
  );
};

export default List;
