// const http = require("http");
// const express = require("express");
// const app = express();
// const PORT = 3001;

// const students = [{
//     id: 1,
//     name: "John",
//     email: "john@gmail.com",
//     contact: 9898989898
// },
// {
//     id: 2,
//     name: "Ravi",
//     email: "ravi@gmail.com",
//     contact: 9898989898
// },
// {
//     id: 3,
//     name: "Surya",
//     email: "surya@gmail.com",
//     contact: 9898989898
// }];

// app.use(express.json())


// app.get("/api/v1/students", (req, res) => {
//     res.json({ status: "Students returned successfully", students: students })
// })



const http = require("http");
const express = require("express");
const app = express();
const PORT = 3001;

const students = [{
    id: 1,
    name: "chakri",
    email: "chakri@gmail.com",
    contact: 9898989898
},
{
    id: 2,
    name: "laks",
    email: "laks@gmail.com",
    contact: 9898989898
},
{
    id: 3,
    name: "bhaskar",
    email: "bhaskar@gmail.com",
    contact: 9898989898
}];

app.use(express.json())

app.get("/api/v1/students", (req, res) => {
    res.json({ status: "Students returned successfully", students: students })
})

app.post("/api/v1/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json({ status: "Student added successfully", student: newStudent });
})

app.delete("/api/v1/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const index = students.findIndex(student => student.id === studentId);
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        res.json({ status: "Student deleted successfully", student: deletedStudent[0] });
    } else {
        res.status(404).json({ error: "Student not found" });
    }
})

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});









// const http = require('http');
// const express = require("express");
// const app = express();
// const PORT = 3001;

// let currentSignal = "red";

// app.get("/traffic-signal", (req, res) => {
//   res.json({ signal: currentSignal });
// });

// app.post("/traffic-signal/change", (req, res) => {
//   const { signal } = req.body;
//   if (signal === "red" || signal === "green" || signal === "yellow") {
//     currentSignal = signal;
//     res.json({ status: "Signal changed successfully", signal: currentSignal });
//   } else {
//     res.status(400).json({ error: "Invalid signal" });
//   }
// });

// app.listen(PORT, () => {
//   console.log("Server is running on PORT: " + PORT);
// });






// 






// const http = require('http');
// const express = require("express");
// const app = express();
// const PORT = 3001;
// app.use(express.json())
// let currentSignal = "green";

// app.get("/traffic-signal", (req, res) => {
//   res.json({ signal: currentSignal });
// });

// app.post("/traffic-signal/change", (req, res) => {
//   const { signal } = req.body;
//   if (signal === "green" || signal === "red" || signal === "yellow") {
//     currentSignal = signal;
//     res.json({ status: "Signal changed successfully", signal: currentSignal });
//   } else {
//     res.status(400).json({ error: "Invalid signal" });
//   }
// });

// app.listen(PORT, () => {
//   console.log("Server is running on PORT: " + PORT);
// });




// const { add, sub, name } = require('./AddSubExample');
// const PORT = 3000;

// console.log('Hello World!');

// console.log(add(10, 30));
// console.log(sub(20, 10));
// console.log(name);

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   if (req.url === '/') {
//     console.log('Home Page');
//     res.write('<h2>Home Page</h2>');
//   } else if (req.url === '/about') {
//     console.log('About Page');
//     res.write('<h2>About Page</h2>');
//   } else if (req.url === '/contact-us') {
//     console.log('Contact Page');
//     res.write('<h2>Contact Page</h2>');
//   } else {
//     console.log('Other pages');
//     res.write('<h2>Page not Found</h2>');
//   }
//   res.end();
// });

// server.listen(PORT, () => {
//   console.log('Server is running on Port:' + PORT);
// });
