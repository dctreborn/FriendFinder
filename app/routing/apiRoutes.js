var friendsArray = require("../data/friends");

module.exports = function(app) {
	//get friends list
    app.get("/api/friends", function(req, res) {
    	res.json(friendsArray);
    });

    //add to friends array
    app.post("/api/friends", function(req, res) {
    	//calc difference between req.body.scores vs friendsArray[i].scores and return res.json(match)
    	//match is the smallest value in the scores array

    	var scores = [];

    	//get difference from sent request scores vs each friend in friendArray
    	for (var i = 0; i < friendsArray.length; i++) {
    		var difference = 0;

    		for (var j = 0; j < friendsArray[i].scores.length; j++) {
    			difference += Math.abs(friendsArray[i].scores[j] - req.body.scores[j]);
    		}
    		scores.push(difference);
    	}
    	
    	//finds smallest number in scores, and returns first index of it
    	var match = scores.indexOf(Math.min.apply(null, scores));
    	
    	//push post request here to prevent getting self as match
    	friendsArray.push(req.body);

    	res.json(friendsArray[match]);
    });
}