import mongoose from 'mongoose';

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
    name: String,
    estimatedBudget: Number,
    finalCost: Number,
    paid: Number,
});

const TaskSchema = new Schema({
    name: String,
    dueDate: Date,
    completed: Boolean,
    timeFrame: String, // e.g., "10 to 12 months", "last month"
});

const CategorySchema = new Schema({
    name: { type: String, required: true },
    color: String,
    expenses: [ExpenseSchema],
    tasks: [TaskSchema],
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.models.Category || mongoose.model('Category', CategorySchema);
