import { NextFunction } from 'express';
import categorySchema from '../models/category'
import mongoose, { Document } from "mongoose";

interface ITaskSchema extends Document{
    title: string;
    description: string;
    dueDate?: Date;
    status: string;
    category: mongoose.Types.ObjectId
}



const TaskSchema = new mongoose.Schema<ITaskSchema>({
    title:{
        type: String,
        required: true,
        trim: true
    },

    description:{
        type: String,
        required: true,
        trim: true
    },

    dueDate:{
        type: Date
    },

    status:{
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },
    
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }

}, {timestamps: true})

export default mongoose.model<ITaskSchema>("Task", TaskSchema)


