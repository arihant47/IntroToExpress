var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!");	
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
	console.log("Someone made a request to /dog");
	res.send("MEOW!");
});

// app.get("/r/:subredditName", function(req, res){
// 	res.send("Welcome to a SubReddit");
// });

// app.get("/r/:subredditName", function(req, res){
// 	console.log(req.params);
// 	res.send("Welcome to a SubReddit");
// });

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("Welcome to the "+ subreddit.toUpperCase() +" SubReddit");
});

// app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
// 	res.send("Welcome to the comments page");
// });

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
	console.log(req.params);
	res.send("Welcome to the comments page");
});

app.get("*", function(req, res){
	res.send("Invalid Address");
});

// Tell Express to listen for requests (START SERVER)
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});

