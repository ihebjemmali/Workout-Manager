const express = require("express");
const cors = require("cors");

const {
  selectAll,
  addWorkout,
  updateWorkout,
  removeWorkout,
} = require("./database-mysql/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use("/images", express.static("images"));
app.use(cors());

app.get("/api/workouts", function (req, res) {
  selectAll((err, workouts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(workouts);
    }
  });
});

app.post("/api/workouts", function (req, res) {
  const newWorkout = req.body;
  addWorkout(newWorkout, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({ message: "Workout added successfully" });
    }
  });
});

app.put("/api/workouts/:id", function (req, res) {
  const id = req.params.id;
  const updatedWorkout = req.body;
  updateWorkout(id, updatedWorkout, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: "Workout updated successfully" });
    }
  });
});

app.delete("/api/workouts/:id", function (req, res) {
  const id = req.params.id;
  removeWorkout(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: "Workout removed successfully" });
    }
  });
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});
