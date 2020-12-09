/// ------------------ Khai báo LIB Thêm Vào để sử dụng
var express = require('express');
var path = require('path');
var app = express();

/// Engine EJS
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

/// Tham số
const PORT = 8080;

app.use(express.static('public'));

var exHome = require('./controllers/home');
app.get( '/ex', exHome );
/////-----------------------------------
app.get( '/', homePage );
function homePage(req, res) {
	res.render("home");
}

/////-----------------------------------
app.get( '/login', loginPage );
function loginPage(req, res) {	
	console.log("\n ...", req.query.username, req.query.password);
	res.render("login");
}

/*
	
	accsubmit = {
		username : req.query.username,
		password : req.query.password
	}; 
	//console.log(accsubmit);
	*/

/////-----------------------------------
app.get( '/product', productPage );
function productPage(req, res) {
	res.send("product PAGE !");
}

app.get( '/order', orderPage );
function orderPage(req, res) {
	res.send("order PAGE !");
}

app.get( '/report', reportPage );
function reportPage(req, res) {
	res.send("report PAGE !");
}

app.get( '/payment', paymentPage );
function paymentPage(req, res) {
	res.send("payment PAGE !");
}

app.get( '/qr', qrPage );
function qrPage(req, res) {
	res.send("qr PAGE !");
}

/////-----------------------------------
app.listen( PORT, 
    () => {
        console.log(" Server running !");
    }
);

///
// 3: Ecosystem Diagram
// 4: giải thích các bước hoạt động ...
// 5: Network Diagram
// 6: Deployment Diagram + Service Diagram 