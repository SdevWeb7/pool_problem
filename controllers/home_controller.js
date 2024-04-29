import Story from "../models/Story.js";


export const home_controller = (req, res) => {
      Story.getAll().then((stories) => {
            res.render('index', { stories });
         })
         .catch((err) => {
               console.log(err);
         });

};


export const admin_controller = (req, res) => {

      Story.getAll().then((stories) => {
            res.render('admin', { stories });
         })
         .catch((err) => {
               console.log(err);
         });

};


export const update_story_controller = (req, res) => {
   Story.getOne(req.params.id).then((story) => {
      res.render('update_story', { story });
   }).catch((err) => {
      console.log(err);
   });
};