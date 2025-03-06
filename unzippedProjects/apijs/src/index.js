// Add your code here
import express from "express";
import cors from "cors";

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
