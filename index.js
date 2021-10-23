const { application } = require('express');
const cors = require('cors');
const express = require('express');
const app = express(); 

const port = 5000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello I am new Learner from my second node server and Express. Are you Excited get ready api make again update');
});

const users = [
    {id: 1, name:'manna', email: 'manna@gmail.com', phone: '01929891273'},
    {id: 2, name:'riyaz', email: 'riyaz@gmail.com', phone: '01929831273'},
    {id: 3, name:'alomgir', email: 'alomgir@gmail.com', phone: '01929834273'},
    {id: 4, name:'Shahin alom', email: 'Shahin@gmail.com', phone: '01929831273'},
    {id: 5, name:'Rubel', email: 'Rubel@gmail.com', phone: '01929491273'},
    {id: 6, name:'Salman sah', email: 'Salman@gmail.com', phone: '019298341273'},
    {id: 7, name:'Sakib Khan', email: 'Sakib@gmail.com', phone: '019293491273'},
    {id: 8, name:'Bappi', email: 'Bappi@gmail.com', phone: '01929891273'},
    {id: 9, name:'Bapparaz', email: 'Bapparaz@gmail.com', phone: '019298491273'},
]

// use query parameter
app.get('/users', (req, res) => {
    const search =  req.query.search;
    if(search){
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(result)
    }
    else{
        res.send(users)
    }   
    
});


// app.method
app.post('/users', (req, res) => { 
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the data', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})


app.get('/users', (req, res) => {
    res.send(users); 
});

// dynamic api
app.get('/users/:id', (req, res) => {
    // console.log(req.params.id); 
    const id = req.params.id; 
    const user = users[id]; 
    res.send(user) 
});



app.get('/fruits', (req, res) => {
    console.log('mango', 'apple', 'banana');
})

app.listen(port, () => {
    console.log('Listening port ', port);
})