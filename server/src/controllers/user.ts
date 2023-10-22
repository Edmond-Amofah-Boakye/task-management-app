import UserModel from '../models/user'
import { NextFunction, Request, Response } from "express";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({ message: "enter email and password" });
  }
  try {
    const existEmail = await UserModel.findOne({email})
    if(existEmail){
        res.status(400).json({message: "user alreday exist"})
    }

    const newUser = new UserModel({
        email,
        password
    })

    await newUser.save()

    res.status(201).json({message: "successfully created", data: newUser})

  } catch (error) {
    next(error);
  }
};


export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  try{
    const user = await UserModel.findById(id)
    if(!user) return res.status(404).json({message: "no user found"})

    return res.status(200).json({message: "success", data: user})
    
  }catch(err){
    next(err)
  }
}