import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router as keywordsRouter } from "./keywords.js";
import { router as conditionsRouter } from "./conditions.js";

const app = express();
const PORT = 3000;
const WEB = "web";

app.use(cors());
app.use("/keywords", keywordsRouter);
app.use("/conditions", conditionsRouter);
app.use(express.static(WEB));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
