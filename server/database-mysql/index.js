const mysql = require("mysql2");

// Database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "fitness",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

const selectAll = (callback) => {
  const sql = "SELECT * FROM workouts";
  connection.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

const addWorkout = (workout, callback) => {
  const sql = "INSERT INTO workouts SET ?";
  connection.query(sql, workout, callback);
};

const updateWorkout = (id, updatedWorkout, callback) => {
  const sql =
    "UPDATE workouts SET category = ?, name = ?, description = ?, duration = ?, difficulty = ?, calories_burned = ?, image_url = ? WHERE id = ?";
  const values = [
    updatedWorkout.category,
    updatedWorkout.name,
    updatedWorkout.description,
    updatedWorkout.duration,
    updatedWorkout.difficulty,
    updatedWorkout.calories_burned,
    updatedWorkout.image_url,
    id,
  ];
  connection.query(sql, values, (err, results) => {
    callback(err, results);
  });
};

const removeWorkout = (id, callback) => {
  const sql = "DELETE FROM workouts WHERE id = ?";
  connection.query(sql, id, (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  selectAll,
  addWorkout,
  updateWorkout,
  removeWorkout,
};
