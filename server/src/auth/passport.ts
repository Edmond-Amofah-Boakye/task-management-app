import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "../models/user";

const OAuthConfig = () => {
  //passport configuration
  passport.use(
    new GoogleStrategy(
      {
        clientID: `${process.env.CLIENT_ID}`,
        clientSecret: `${process.env.CLIENT_SECRET}`,
        callbackURL: "/auth/google/callback",
      },

      //save to database if authentication is successful
      async function (accessToken, refreshToken, profile, cb) {        
          try {
            const userExist = await userModel.findOne({ googleId: profile.id });
            if(userExist) return cb(null, userExist);

            const newUser = new userModel({
              googleId: profile?.id,
              username: profile?.displayName,
            });

            //save user to database 
            await newUser.save();
            cb(null, newUser);
            
          } catch (error) {
            console.log(error);
          }
      }
    )
  )};


  //serialize to save user id to database
  passport.serializeUser((user:any, done) => {
    return done(null, user._id);
  });


  //deserialize to attache user to req.user
  passport.deserializeUser(async function (id: string, done) {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
       return done(error, null)
    }

});

export default OAuthConfig;
