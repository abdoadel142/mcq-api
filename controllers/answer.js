const Question = require("../modules/question");
const Answer = require("../modules/answer");


exports.getAnswers = async (req, res, next) => {

    const answer = await Answer.aggregate([
      
       {
           $sample: { size: 5 } 
       }
    ]);
 
    res
      .status(200)
      .json({ message: "success", answer: answer });
  

};
exports.addAnswers= async (req, res, next) => {
  const answers = req.body.answer;
  const question = req.body.question;
  


    const answer = new Answer({
        question: question,
        answer:answers

    });
    await answer.save();
    res
      .status(200)
      .json({ message: "created", answer: answer });
  

};



