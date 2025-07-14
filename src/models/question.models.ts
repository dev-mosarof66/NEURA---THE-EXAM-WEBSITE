import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
    },
    options: [{
        type: String,
        required: true,
    }]

},

    {
        timestamps: true,
    }
)
const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
export default Question;