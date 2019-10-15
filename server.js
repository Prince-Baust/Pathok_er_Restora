const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var out_of_the_maze_reviews = [];
var who_moved_my_cheese_reviews = [];
var eat_that_frog_reviews = [];
var the_4_hour_work_week_reviews = [];
var the_alchemist_reviews = [];
var the_subtle_art_of_not_giving_a_fck_reviews = [];

app.get('/', function (req, res) {
    res.render("index", {styles: ['styles.css', 'navbar_and_footer.css']});
});

app.get("/signin", function (req,res) {
   res.render("signIn", {styles: ['signIn.css', 'navbar_and_footer.css']});
});

app.post("/signIn", function (req, res) {
   const cridentials = {
     email: req.body.inputEmail,
     password: req.body.inputPassword
   };
});

app.get("/signup", function (req,res) {
    res.render("signUp", {styles: ['signIn.css', 'navbar_and_footer.css']});
});

app.get('/home', function (req, res) {
   res.render("home", {styles: ['home.css', 'navbar_and_footer.css']});
});

app.get("/out-of-the-maze", function (req, res) {
   res.render("out-of-the-maze", {
       styles: ['single_book.css','navbar_and_footer.css'],
       out_of_the_maze_reviews: out_of_the_maze_reviews});
});

app.post("/out-of-the-maze", function (req, res) {
   const review = {
       name: req.body.user_name,
       email: req.body.user_email,
       review: req.body.user_review
   };
    out_of_the_maze_reviews.push(review);
    res.redirect("/out-of-the-maze");
});

app.get("/who-moved-my-cheese", function (req, res) {
    res.render("who-moved-my-cheese", {
        styles: ['single_book.css','navbar_and_footer.css'],
        who_moved_my_cheese_reviews: who_moved_my_cheese_reviews});
});

app.post("/who-moved-my-cheese", function (req, res) {
    const review = {
        name: req.body.user_name,
        email: req.body.user_email,
        review: req.body.user_review
    };
    who_moved_my_cheese_reviews.push(review);
    res.redirect("/who-moved-my-cheese");
});

app.listen(3000, function () {
    console.log("Server started at port: 3000");
});