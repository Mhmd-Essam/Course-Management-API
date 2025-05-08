Dashboard Management Task API
This is a backend API built with Node.js and MongoDB for managing courses in a dashboard management system. The API includes features for course management, including creating, retrieving, and deleting courses. It also allows image uploads for course cover images using Multer.

Table of Contents
Installation

Usage

Endpoints

Dependencies

Environment Variables

License

Installation
Clone this repository:

https://github.com/Mhmd-Essam/Course-Management-API/tree/master
Navigate to the project directory:


cd Dashboard-Mangement-task
Install the dependencies:

npm install
Create a .env file in the root directory and add your environment variables (details below).

Usage
Run the development server using Nodemon:

npm run dev
The server will start and be accessible at http://localhost:5006.

You can now use tools like Postman or Insomnia to interact with the API.

Endpoints
POST /courses
Create a new course. The request body should contain the following fields:

title (string): The title of the course (required).

description (string): A short description of the course (required).

image (file): The cover image for the course (optional, default to 'default.png').

startDate (date): The start date of the course (optional).

endDate (date): The end date of the course (optional).

price (number): The price of the course (required).

Example Request Body:

json

{
  "title": "Node.js for Beginners",
  "description": "Learn Node.js from scratch.",
  "price": 100,
  "startDate": "2025-05-10",
  "endDate": "2025-06-10"
}


GET /courses
Retrieve a list of all courses.

GET /courses/:id
Retrieve a course by its ID.

PUT /courses/:id
Update a course by its ID.

DELETE /courses/:id
Delete a course by its ID.

Dependencies
This project uses the following dependencies:

dotenv: For loading environment variables.

express: Web framework for Node.js.

express-async-handler: For handling asynchronous operations in Express.

joi: For data validation.

mongodb: MongoDB Node.js driver.

mongoose: ODM for MongoDB.

morgan: HTTP request logger middleware.

multer: Middleware for handling multipart/form-data, used for file uploads.

nodemon: A tool that automatically restarts the server during development.

Environment Variables
The project uses environment variables for configuration. Create a .env file in the root directory and add the following:


PORT=5006
MONGODB_URI=mongodb://yourMongoDBURI
PORT: The port the server should listen on.

MONGODB_URI: The connection string to your MongoDB database.

