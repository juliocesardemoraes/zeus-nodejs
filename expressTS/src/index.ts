import express from "express";
import cors from "cors";

// If you want to connect to mongo uncomment the two lines below
// and add the connection string to the .env file

// import { connectToMongo } from "./database/connect.js";
// connectToMongo();

const app = express();
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

// SETUP ROUTES
app.use("/", (req, res) => {
  res.status(200).send({ working: true });
});

app.listen("3000");

export default app;
