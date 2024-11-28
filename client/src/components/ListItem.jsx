import React, { useState } from "react";

const ListItem = ({ workout, del, update }) => {
  const [name, setName] = useState(workout.name);
  const [description, setDescription] = useState(workout.description);
  const [duration, setDuration] = useState(workout.duration);
  const [imageUrl, setImageUrl] = useState(workout.image_url);

  const handleUpdate = () => {
    const updatedWorkout = {
      name,
      description,
      duration,
      image_url: imageUrl,
    };
    update(workout.id, updatedWorkout);
  };

  return (
    <div className="workout-item">
      <img
        src={workout.image_url}
        alt={workout.name}
        className="workout-image"
      />
      <div className="workout-info">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={handleUpdate}>Save</button>
      </div>
      <button onClick={() => del(workout.id)}>Delete</button>
    </div>
  );
};

export default ListItem;
