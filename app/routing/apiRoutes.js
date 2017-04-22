var friendsArray = require("../data/friends");

module.exports = function(app) {
	//get friends list
    app.get("/api/friends", function(req, res) {
    	res.json(friendsArray);
    });

    //add to friends array
    app.post("/api/friends", function(req, res) {
    	//calc difference between req.body.scores vs friendsArray[i].scores and return res.json(match)

    	friendsArray.push(req.body);
    });
}