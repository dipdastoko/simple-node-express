const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from my second node haha hello');
})

const users = [
    { id: 0, name: 'susmita', email: 'shabana@gmail.com' },
    { id: 1, name: 'shabana', email: 'shabana@gmail.com' },
    { id: 2, name: 'shabnoor', email: 'shabana@gmail.com' },
    { id: 3, name: 'suchorite', email: 'shabana@gmail.com' },
    { id: 4, name: 'soniya', email: 'shabana@gmail.com' },
    { id: 5, name: 'srabanti', email: 'shabana@gmail.com' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Fazli');
})

app.listen(port, () => {
    console.log("listening to port,", port)
})
