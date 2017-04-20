var friendsArray = require("../data/friends");

module.exports = function(app) {
	//get friends list
    app.get("/api/friends", function(req, res) {
    	res.json(friendsArray);
    });

    //add to friends array
    app.post("/api/friends", function(req, res) {
    	friendsArray.push(req.body);
    });
}