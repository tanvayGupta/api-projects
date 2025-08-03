import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.API_KEY;
const port = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  res.locals.weatherLon = "Unknown"; // 👈 globally available in all views
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/getWeather", async (req, res) => {
  try {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    const response = await fetch(api_url);
    const weatherData = await response.json();
    const weatherLon = weatherData.weather[0].description;

    res.render("index", { weatherLon: weatherLon });
  } catch (error) {
    // console.error("Error fetching weather data:", error);
    res.render("index", { weatherLon: "Error fetching data" });
  }
});

// app.post("/getWeather", (req, res) => {
//   console.log("POST request received!");
//   res.send("Weather route hit");
// });

app.listen(port, () => {
  console.log("Hey, I'm listening!");
});
