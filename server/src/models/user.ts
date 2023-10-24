import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  googleId?: string;
  username?: string;
  email?: string;
  password?: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  googleId: {
    type: String,
  },

  username: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please provide valid email",
    ],
    lowercase: true,
  },

  password: {
    type: String,
    trim: true,
    minlength: [8, "password should not be less than 8 characters"],
    select: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

export default mongoose.model<IUser>("User", UserSchema);
