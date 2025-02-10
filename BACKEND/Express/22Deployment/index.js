const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1><center>Homepage for our APIs | Deployment</center></h1>");
});

// GET --> /api/v1/bootcamps
app.get("/api/v1/bootcamps", (req, res) => {
  const bootcamps = [
    {
      id: 1,
      name: "Devworks Bootcamp",
      description: "Awesome Bootcamp",
    },
    {
      id: 2,
      name: "ModernTech Bootcamp",
      description: "Awesome Bootcamp",
    },
    {
      id: 3,
      name: "Web Developments Bootcamp",
      description: "Awesome Bootcamp",
    },
    {
      id: 4,
      name: "Python Bootcamp",
      description: "Awesome Bootcamp",
    },
    {
      id: 5,
      name: "NodeJS Bootcamp",
      description: "Awesome Bootcamp",
    },
    {
      id: 6,
      name: "Backend Bootcamp",
      description: "Awesome Bootcamp",
    },
  ];

  res.status(200).json({
    success: true,
    data: bootcamps,
    message: "Bootcamps Data Fetched Successfully",
  });
});

// GET --> /api/v1/languages
app.get("/api/v1/languages", (req, res) => {
  const languages = [
    {
      id: 1,
      name: "JavaScript",
      description: "Awesome Language",
    },
    {
      id: 2,
      name: "Python",
      description: "Awesome Language",
    },
    {
      id: 3,
      name: "C++",
      description: "Awesome Language",
    },
    {
      id: 4,
      name: "Java",
      description: "Awesome Language",
    },
    {
      id: 5,
      name: "PHP",
      description: "Awesome Language",
    },
  ];

  res.status(200).json({
    success: true,
    data: languages,
    message: "Languages Data Fetched Successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port:${PORT}`);
});
