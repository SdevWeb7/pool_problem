import { upload } from "./images.js";


export const uploadMiddleware = (req, res, next) => {
   upload(req, res, (err) => {
      if (err) {
         console.log(err);
         res.redirect("/admin");
         return;
      }
   });
   next();
}