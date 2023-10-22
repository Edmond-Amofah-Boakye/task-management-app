import { NextFunction, Request, Response } from "express";
import categorySchema from "../models/category";

export const createCategory = async(req:Request, res: Response, next: NextFunction) =>{

    const { name } = req.body
    try {
        const nameExist = await categorySchema.findOne({name})

        if(!name) return res.status(408).json({message: "category name is required"})
        if(nameExist) return res.status(408).json({message: "category already exists, select another one"})
            
        const newCategory = new categorySchema({
            name
        })

        await newCategory.save()
        res.status(201).json({message: "created", data: newCategory})

    } catch (error) {
        next(error)
    }
}



export const getCategory = async (req:Request, res: Response, next: NextFunction) =>{

    const id: string = req.params.id
    try {
        const category = await categorySchema.findById(id)
        if(!category) return res.status(404).json({message: "no category found"})

        res.status(200).json({message: "success", data: category})

    } catch (error) {
        next(error)
    }
}

export const getAllCategories = async(req:Request, res: Response, next: NextFunction) =>{
    try {
        const category = await categorySchema.find({}).exec()
        if(category.length === 0) return res.status(404).json({message: "no categoriesfound"})

        res.status(200).json({message: "success", data: category})
        
    } catch (error) {
        next(error)
    }
}

export const updateCategory = async(req:Request, res: Response, next: NextFunction) =>{
    const id: string = req.params.id
    try {
        const categoryExists = await categorySchema.findById(id)
        if(!categoryExists) return res.status(404).json({message: "no category found"})

        categoryExists.name = req.body.name
        await categoryExists.save()

        res.status(200).json({message: "success", data: categoryExists})

    } catch (error) {
        next(error)
    }
}

export const deleteCategory = async(req:Request, res: Response, next: NextFunction) =>{
    const id: string = req.params.id
    try {
        const categoryExists = await categorySchema.findById(id)
        if(!categoryExists) return res.status(404).json({message: "no category found"})

        await categorySchema.findByIdAndDelete(id)

        res.status(203).json({message: "successfully deleted"})

    } catch (error) {
        next(error)
    }
}

