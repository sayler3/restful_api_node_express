const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const PORT = 5000;

//what happens when you change to /api ?
// app.get("/api", (req, res) => {
//     console.log("This route has been hit");
//     // res.send("<h1>Hello world api</h1>");
//     res.json({
//         msg: "success",
//         status: 200,
//         data: { user: "Thomas", title: "Instuctor"}
//     });

//     app.get("/api/todos", (req, res) => {
//         console.log("hiii");
//         res.json({ todos: ["things", "another thing"]});
//     })
// });

//set up to recieve JSON and string data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routes as middleware
app.use("/api", apiRoutes);

//server listening
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));