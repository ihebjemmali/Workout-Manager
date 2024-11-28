DROP DATABASE IF EXISTS fitness;

CREATE DATABASE fitness;

USE fitness;

CREATE TABLE workouts (
    id INT AUTO_INCREMENT PRIMARY KEY,   
    category ENUM('cardio', 'strength'),  
    name VARCHAR(255) NOT NULL,           
    description TEXT NOT NULL,            
    duration INT NOT NULL,                
    difficulty ENUM('beginner', 'intermediate', 'advanced'),  
    calories_burned INT,                  
    image_url VARCHAR(255)                
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/