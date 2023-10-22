import mongoose, { Document } from "mongoose";

interface ICategory extends Document {
    name: string;
    tasks: mongoose.Types.ObjectId[]
}

const CategorySchema = new mongoose.Schema<ICategory>({
    name:{
        type: String,
        required: [true, "name is required"],
        unique: true
    },

    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
}, {timestamps: true})

export default mongoose.model<ICategory>("Category", CategorySchema)

