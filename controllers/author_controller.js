// GET /quizes/question
exports.authors = function(req, res) {
	res.render('author', {author: "Óscar Fernández C.", image: "mordisquitos_128px.png"});
};