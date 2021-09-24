const Question = require("../modules/question");
exports.getQuestions = async (req, res, next) => {

      const questions = await Question.aggregate([
        {
            $lookup:
              {
                from: "answers",
                localField: "answers",
                foreignField: "_id",
                as: "answers"
              }
         },
         {
             $sample: { size: 5 } 
         }
      ])
   
      res
        .status(200)
        .json({ message: "success", questions: questions });
    
  
  };

exports.addQuestion = async (req, res, next) => {
  const name = req.body.name;
  const answers = req.body.answers || "";
    const question = new Question({
        question: name,

    });
    await question.save();
    res
      .status(200)
      .json({ message: "created", question: question });
  

};

exports.updateQuestion = async (req, res, next) => {
    const id = req.body.question;
    const answers = req.body.answers;
    const correctAnswer = req.body.correctAnswer;
      const question = await Question.findByIdAndUpdate({
          _id: id
      },
      {$set: {"answers": answers, "correctAnswer":correctAnswer}},);
      await question.save();
      res
        .status(200)
        .json({ message: "created", question: question });
    
  
  };


