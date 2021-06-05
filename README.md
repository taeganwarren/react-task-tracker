# react-task-tracker

Front-end was built by following along with TraversyMedia's React crash course video here: https://www.youtube.com/watch?v=w7ejDZ8SWv8

After building out the front-end, I decided to create my own back-end for the project using MongoDB and Express and then attempt to dockerize the application.

---
Running with Docker:
* Clone the repository
* Change directory into the client
  * `cd react-task-tracker/client`
* Install dependencies
  * `npm install`
* Change directory into the project root
  * `cd ..`
* Build the front-end
  * `make build-react`
  * This will build the react app and move the build folder to the server folder so it can be included when building the docker image.
* Run the docker-compose.yml file
  * `make up` or `docker-compose up`
  * Builds the docker image and runs the app with a MongoDB container
* Open your brower and navigate to `http://localhost:3000/`
