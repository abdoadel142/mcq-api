const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const answerSchema= new Schema({

    answer:{
        type: String,
        required: true,
    },
    question:{ type: Schema.Types.ObjectId,}

    });
    
    module.exports = mongoose.model('Answer', answerSchema);