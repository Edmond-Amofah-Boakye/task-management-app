import { NextFunction, Request, Response } from "express";
import taskSchema from "../models/task";
import categorySchema from "../models/category"
import mongoose from "mongoose";


//create a task
export const createTask = async(req:Request, res: Response, next: NextFunction) =>{
    interface ICreateTask {
        title: string;
        description: string;
        dueDate: Date
    }
    const { title, description, dueDate }: ICreateTask = req.body

    const id: string = req.params.id
    try {
        const categoryExists = await categorySchema.findById(id)
        if(!categoryExists) return res.status(404).json({mmessage: "no category found"})

        const titleExist = await taskSchema.findOne({title})
        if(!title || !description) return res.status(408).json({message: "title and description fileds are required"})
        if(titleExist) return res.status(408).json({message: "title already exists, select another one"})
            
        const newCategory = new taskSchema({
           title,
           description,
           dueDate,
           category: id
        })

        await newCategory.save()

        categoryExists.tasks.push(newCategory._id)
        await categoryExists.save()

        res.status(201).json({message: "created", data: newCategory})

    } catch (error) {
        next(error)
    }
}


//get a task
export const getTask = async (req:Request, res: Response, next: NextFunction) =>{

    const id: string = req.params.id
    try {
        const taskExist = await taskSchema.findById(id)
        if(!taskExist) return res.status(404).json({message: "no task found"})

        res.status(200).json({message: "success", data: taskExist})

    } catch (error) {
        next(error)
    }
}



//get all task
export const getAllTask = async(req:Request, res: Response, next: NextFunction) =>{
    try {
        const tasks = await taskSchema.find({}).exec()
        if(tasks.length === 0) return res.status(404).json({message: "no tasks found"})

        res.status(200).json({message: "success", data: tasks})
        
    } catch (error) {
        next(error)
    }
}




//updating task
interface ITaskUpdate {
    title?: string;
    description?: string;
    dueDate?: Date;
    status?: string;
  }


const allowedFields: (keyof ITaskUpdate)[] = ['title', 'description', 'dueDate', 'status'];


export const updateTask = async (req: Request, res: Response, next: NextFunction) => {

  const taskId = req.params.id;

  const update: Partial<ITaskUpdate> = {}; 

  for (const field of allowedFields) {
    if (req.body[field]) {
      update[field] = req.body[field];
    }
  }

  try {
  
const updatedTask = await taskSchema.findByIdAndUpdate(taskId, update, {
      new: true, 
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(updatedTask);

  } catch (error) {
     next(error);
  }
};




//deleting task
export const deleteTask= async(req:Request, res: Response, next: NextFunction) =>{
    const id: string = req.params.id
    try {
        const taskExists = await taskSchema.findById(id)
        if(!taskExists) return res.status(404).json({message: "no task found"})

        const categoryID = taskExists.category;
        
        const deleteTaskID = await categorySchema.findOneAndUpdate(categoryID, {$pull:{tasks: id}})
        if(!deleteTaskID) return res.status(404).json({message: "no task found in this category"})
        
       
        await taskSchema.findByIdAndDelete(id)
        res.status(203).json({message: "successfully deleted"})

    } catch (error) {
        next(error)
    }
}

