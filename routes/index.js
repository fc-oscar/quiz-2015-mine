var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var author = require('../controllers/author_controller');

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {
		title: 'Quiz'
	});
});

// Autoload de comandos con ids
router.param('quizId', quizController.load);  // autoload :quizId

// Definición de rutas de /quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
//router.get('/quizes/question', quizController.question);
//router.get('/quizes/answer', quizController.answer);

router.get('/author', author.authors);

module.exports = router;