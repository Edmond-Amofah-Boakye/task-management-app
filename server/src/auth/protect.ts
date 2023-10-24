import { NextFunction, Request, Response } from "express";

const protect = (req: Request, res: Response, next: NextFunction) => {
    req.user ? next() : res.status(401).json({message: "Not Authorized"})
};

export default protect;
