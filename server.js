const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

let out_of_the_maze_reviews = [];
let who_moved_my_cheese_reviews = [];
let eat_that_frog_reviews = [];
let the_4_hour_work_week_reviews = [];
let the_alchemist_reviews = [];
let the_subtle_art_of_not_giving_a_fck_reviews = [];

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
       reviews: out_of_the_maze_reviews});
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
        reviews: who_moved_my_cheese_reviews});
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

app.get("/eat-that-frog", function (req, res) {
    res.render("eat-that-frog", {
        styles: ['single_book.css','navbar_and_footer.css'],
        reviews: eat_that_frog_reviews});
});
app.post("/eat-that-frog", function (req, res) {
    const review = {
        name: req.body.user_name,
        email: req.body.user_email,
        review: req.body.user_review
    };
    eat_that_frog_reviews.push(review);
    res.redirect("/eat-that-frog");
});

app.get("/the-subtle-art-of-not-giving-a-fck", function (req, res) {
    res.render("the-subtle-art-of-not-giving-a-fck", {
        styles: ['single_book.css','navbar_and_footer.css'],
        reviews: the_subtle_art_of_not_giving_a_fck_reviews});
});
app.post("/the-subtle-art-of-not-giving-a-fck", function (req, res) {
    const review = {
        name: req.body.user_name,
        email: req.body.user_email,
        review: req.body.user_review
    };
    the_subtle_art_of_not_giving_a_fck_reviews.push(review);
    res.redirect("/the-subtle-art-of-not-giving-a-fck");
});

app.get("/the-4-hour-work-week", function (req, res) {
    res.render("the-4-hour-work-week", {
        styles: ['single_book.css','navbar_and_footer.css'],
        reviews: the_4_hour_work_week_reviews});
});
app.post("/the-4-hour-work-week", function (req, res) {
    const review = {
        name: req.body.user_name,
        email: req.body.user_email,
        review: req.body.user_review
    };
    the_4_hour_work_week_reviews.push(review);
    res.redirect("/the-4-hour-work-week");
});

app.get("/the-alchemist", function (req, res) {
    res.render("the-alchemist", {
        styles: ['single_book.css','navbar_and_footer.css'],
        reviews: the_alchemist_reviews});
});
app.post("/the-alchemist", function (req, res) {
    const review = {
        name: req.body.user_name,
        email: req.body.user_email,
        review: req.body.user_review
    };
    the_alchemist_reviews.push(review);
    res.redirect("/the-alchemist");
});

app.listen(3000, function () {
    console.log("Server started at port: 3000");
});