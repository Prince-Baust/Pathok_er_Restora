const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render("index", {styles: ['styles.css', 'navbar_and_footer.css']});
});

app.get("/signin", function (req,res) {
   res.render("signIn", {styles: ['signIn.css', 'navbar_and_footer.css']});
});

app.get('/home', function (req, res) {
   res.render("home");
});

app.listen(3000, function () {
    console.log("Server started at port: 3000");
});