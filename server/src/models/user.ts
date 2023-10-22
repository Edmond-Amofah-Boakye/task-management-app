import mongoose, { Document  } from "mongoose";
import bcrypt from 'bcryptjs'

interface IUser extends Document{
    email: string;
    password: string;
}


const UserSchema = new mongoose.Schema<IUser>({
    email:{
        type: String,
        trim: true,
        required: [true, "email is required"],
        unique: true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Please provide valid email",
          ],
          lowercase: true,
    },

    password:{
        type: String,
        trim: true,
        required: [true, "password is required"],
        minlength: [8, "password should not be less than 8 characters"],
        select: false
    }
})


UserSchema.pre("save", async function(next){
  if(this.password && this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10)
  }
})


export default mongoose.model<IUser>("User", UserSchema)