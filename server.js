const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var reviews = [];

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
        reviews: reviews});
});

app.post("/out-of-the-maze", function (req, res) {
   const review = {
       name: req.body.user_name,
       email: req.body.user_email,
       review: req.body.user_review
   };
   reviews.push(review);
    res.redirect("/out-of-the-maze");
});

app.listen(3000, function () {
    console.log("Server started at port: 3000");
});