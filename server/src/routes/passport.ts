import express, { NextFunction, Request, Response } from 'express'
import passport from 'passport';
const router = express.Router()


router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/signin' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:5173/categories");
  });

router.get('/logout', (req: Request, res: Response, next: NextFunction)=>{
  req.logout((err) => {
    if (err) {
      return res.status(400).json({message: "could not logout"})
    }
    res.redirect('http://localhost:5173/signin');
  });
})





export default router;