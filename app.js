const express = require('express');
const ejs = require('ejs')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


const featureTitle = ['Plan Meetings', 'Manage Projects', 'Work Together']
const featureDesc = ['Plan meetings from brainstorming.', 'Track tasks and projects in calender.', 'Chat, organize, and get things done.']
const featureIcon = ['fas fa-video', 'fas fa-clipboard', 'fas fa-users']


app.get('/', function(req, res){
    res.render("home", {iconClass: featureIcon, title: featureTitle, description: featureDesc});
});

app.get('/start', function(req, res){
    res.render('start');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.get('/register', function(req, res){
    res.render('register');
});



app.listen(3000, function(){
    console.log("Server is now listening to requests on localhost:3000");
});