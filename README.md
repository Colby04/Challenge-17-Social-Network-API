# Challenge-17-Social-Network-API

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#APIEndpoints)
- [Users](#Users)
- [Thoughts](#Thoughts)
- [Reactions](#Reactions)
- [Friends](#Friends)
- [Technologies Used](#technologiesused)
- [License](#license)
- [Links](#Links)

# Description
The Social Network API is a backend application for a social network web app. It uses MongoDB and Mongoose to handle large amounts of unstructured data, allowing users to share thoughts, react to friends’ thoughts, and manage their friend lists.

This API demonstrates the implementation of CRUD operations for users, thoughts, reactions, and friendships, with a focus on backend development.

# Installation
 1. Clone the repository:
    - git clone <repository-url>

2. Navigate to the project directory:
    - cd Challenge-17-Social-Network-API
    
3. Install dependencies:
    - npm install

4. Set up the database:
    - Ensure MongoDB is installed and running locally or use a MongoDB Atlas connection.
    - Update the connection string in config/connection.js if necessary.

5. Start the server:    
    - npm start
    - The server will run on http://localhost:3001 by default.

# Usage
Use Insomnia or a similar API client to test the API endpoints. The following actions can be performed:

 - Create, read, update, and delete users and thoughts.
 - Add reactions to thoughts.
 - Add and remove friends from a user's friend list.

 # API Endpoints
- Base URL
        http://localhost:3001/api

## Users

| Method | Endpoint       | Description                      |
|--------|------------------|----------------------------------|
| GET    | /users           | Retrieve all users.              |
| GET    | /users/:userId   | Retrieve a single user by ID.    |
| POST   | /users           | Create a new user.               |
| PUT    | /users/:userId   | Update a user by ID.             |
| DELETE | /users/:userId   | Delete a user by ID and their associated data. |

## Thoughts

| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| GET    | /thoughts            | Retrieve all thoughts.           |
| GET    | /thoughts/:thoughtId | Retrieve a single thought by ID. |
| POST   | /thoughts            | Create a new thought.            |
| PUT    | /thoughts/:thoughtId | Update a thought by ID.          |
| DELETE | /thoughts/:thoughtId | Delete a thought by ID.          |

## Reactions

| Method | Endpoint                             | Description                      |
|--------|--------------------------------------|----------------------------------|
| POST   | /thoughts/:thoughtId/reactions       | Add a reaction to a thought.     |
| DELETE | /thoughts/:thoughtId/reactions/:reactionId | Remove a reaction by ID.         |

## Friends

| Method | Endpoint                             | Description                      |
|--------|--------------------------------------|----------------------------------|
| POST   | /users/:userId/friends/:friendId     | Add a friend to the user's friend list. |
| DELETE | /users/:userId/friends/:friendId     | Remove a friend from the user's friend list. |

## Technologies Used
- Node.js: JavaScript runtime environment.
- Express.js: Web framework for Node.js.
- MongoDB: NoSQL database for unstructured data.
- Mongoose: MongoDB object modeling for Node.js.
- Insomnia: API testing.

## License
This project is licensed under the MIT License.

## GitHub Link and URL
- GitHub: Colby04
- Email: cjcodes2024@gmail.com
- Repo Link: https://github.com/Colby04/Challenge-17-Social-Network-API.git
- Screen Recording: https://youtu.be/glqdvX_JBAg
- [![Watch the video](https://img.youtube.com/vi/glqdvX_JBAg/0.jpg)](https://www.youtube.com/watch?v=<glqdvX_JBAg) 
