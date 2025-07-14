import mongoose from 'mongoose';


const studentSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    exams:[
        
    ]

}, {
    timestamps: true,
});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;
