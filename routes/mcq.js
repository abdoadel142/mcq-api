var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const questionController = require("../controllers/question");
const answerController = require("../controllers/answer");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/addName", userController.addUser);
router.post("/addQuestion", questionController.addQuestion);
router.put("/updateQuestion", questionController.updateQuestion);
router.get("/Questions", questionController.getQuestions);
router.get("/answers", answerController.getAnswers);
router.get("/correctAnswers", answerController.getCorrectAnswers);


router.post("/addAnswers", answerController.addAnswers);

module.exports = router;
