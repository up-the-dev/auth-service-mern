/*
Author :  Umesh Pawar
Date Created: 27-10-23
Ticket № :  http://172.16.0.36/browse/SIM-2
Reviewed by : 
Date Reviewed : 
Objectives : This code creates an instance of the Express.js framework. This instance is created in a separate file to promote modularity and reusability, allowing it to be imported in other parts of the application where server capabilities are needed.,
*/

import express, { Express } from "express";

// Creating an instance of the express application.
const App: Express = express();

// Exporting the App so it can be used in other modules.
export default App;
