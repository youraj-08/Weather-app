# Weather App

Welcome to the Weather App, a simple web application that allows users to search for the current weather conditions of a specific location. This application is built using Node.js with Express.js on the backend and React on the frontend. It utilizes the OpenWeatherMap API to retrieve weather data and provides a responsive user interface that works seamlessly on both desktop and mobile devices.

## Table of Contents

1. Prerequisites
2. Getting Started
   - Backend Setup
   - Frontend Setup
3. Usage
4. License

## Prerequisites

Before you begin, ensure you have met the following requirements:

### Node.js: 

You need to have Node.js installed on your system. You can download it from https://nodejs.org.

## Getting Started

Follow the steps below to set up and run the Weather App locally on your machine.

### Backend Setup

1. Clone this repository to your local machine using the following command: `git clone` <repository-url>

2. Navigate to the root directory of the project  using:  `cd <path-to-project-root>`
 
3. Install the required Node.js packages by running: `npm install`

4. Obtain an API key from OpenWeatherMap if you don't have one already.

5. Create a .env file in the directory and add your OpenWeatherMap API key as follows:  API_KEY=your-api-key-here

6. Start the backend server by running: `npm start`
   The server will start running on http://localhost:9000.

### Frontend Setup

1. Open a new terminal window.

2. Navigate to the root directory of the project  using:  `cd <path-to-project-root>`

3. Move to the client directory using: `cd client`

4. Install the required Node.js packages by running: `npm install`

5. Start the React development server: `npm start`
   The frontend server will start running on `http://localhost:3000`.


## Usage

**Important Note:** Please ensure that the spelling of the location you enter is exact and correct. If there are spelling errors or the location name is not recognized, it may cause the server to crash, and you will need to restart the server.

1. Open your web browser and go to `http://localhost:3000` to access the Weather App.

2. Enter the name of the location you want to check the weather for in the search bar.

3. Click the "Search" icon.

4. The application will display the current weather conditions, temperature, humidity, wind-speed and an icon representing the weather for the selected location.

5. You can search for weather conditions for different locations by repeating the search process.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for using the Weather App! If you have any questions or encounter any issues, please feel free to [create an issue](<repository-url>/issues) in the repository. Enjoy checking the weather!