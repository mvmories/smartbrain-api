const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'slb4ever4',
    database : 'smartbrain'
  }
});

app.use(express.json());
app.use(cors());

// SIGN-IN
app.post('/signin', (req, res)=> { signin.handleSignin(req, res, db, bcrypt) })
// REGISTER
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
// GET USERS
app.get('/', (req, res) => {res.send(database.users)})
// GET USER:id
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
// ENTRIES UPDATE
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
// API CALL
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })


app.listen(3001, () => {
  console.log('app is running on port 3001')
})
