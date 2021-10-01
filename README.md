## Application for Brainhub

<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A simple app with frontend implemented in React and connected with a simple API written in Node.js with data saved in DB (PostgreSQL).

The application allows a user to add an event to the database, with the following fields:
* First name (required)
* Last name (required)
* Email (required, valid email address)
* Event date (required, simple date picker)
* 
### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [React.js](https://reactjs.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [SuperTest](https://www.npmjs.com/package/supertest)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

*npm
*node.js

### Installation

1. Clone the repo 
  ```sh
  git clone https://github.com/karolinadebowska/Brainhub-application.git
  ```
2. Navigate to the root folder
  ```sh
  cd Brainhub-application
  ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Navigate to node-postgres folder
 ```sh
   cd node-postgres
   ```
5. Run the PostgreSQL database
   ```sh
   node index.js
   ```
6. Open another terminal window and navigate to the root directory of the project (Brainhub-application). Now you can run the application.
 ```sh
   npm start
   ```
   
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### Testing

To run the tests, go to the root directory of the project (Brainhub-application) and launches the test runner.
```sh
   npm test
   ```
   
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<!-- CONTACT -->
## Contact

Karolina Dębowska - [LinkedIn](https://www.linkedin.com/in/karolinadebowska/) - kbdebowska@gmail.com

Portfolio: [https://karolinadebowska.github.io/](https://karolinadebowska.github.io/)
