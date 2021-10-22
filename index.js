const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello I am so excitec for learning node with nodemon");
});
const users = [
    { id: 0, name: "Ashraful", email: "ashraful@gmail.com", phone: "01743120481" },
    { id: 1, name: "Tajuddin", email: "tajuddinsec1@gmail.com", phone: "01943120481" },
    { id: 2, name: "Alomgir", email: "alomgir@gmail.com", phone: "01943120482" },
    { id: 3, name: "Arafat", email: "arafat@gmail.com", phone: "01943121481" },
    { id: 4, name: "Rifat", email: "rifat@gmail.com", phone: "01944120481" },
    { id: 5, name: "Sumaiya", email: "sumaiya@gmail.com", phone: "01943120581" },
    { id: 6, name: "Ashiqur", email: "ashiq@gmail.com", phone: "01943120485" },
    { id: 7, name: "Toukir", email: "toukir@gmail.com", phone: "01943127481" },

]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {

        res.send(users);
    }
});
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body);
    res.json(newUser);
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});
app.listen(port, () => {
    console.log("listening to port", port);
})