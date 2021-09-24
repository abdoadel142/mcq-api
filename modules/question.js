const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const questionSchema= new Schema({
    question:{
        type: String,
        required: true,
    },
    answers: [{type: Schema.Types.ObjectId}],
    correctAnswer: {
        type: Schema.Types.ObjectId,
    } 

    });
    
    
    module.exports = mongoose.model('Question', questionSchema);