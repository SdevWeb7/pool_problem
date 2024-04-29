import Story from "../models/Story.js";


export const create_story = (req, res) => {
      Story.createStory(req.body.title, req.body.content).then((result) => {
         res.redirect("/admin")
      }).catch((err) => {
         console.log(err);
         res.redirect("/admin")
      });
}


export const delete_story = (req, res) => {
   Story.deleteStory(req.params.id).then((result) => {
      res.redirect("/admin")
   }).catch((err) => {
      console.log(err);
      res.redirect("/admin")
   });
}




export const update_story = (req, res) => {
   Story.updateStory(req.params.id, req.body.title, req.body.content).then((result) => {
      res.redirect("/admin")
   }).catch((err) => {
      console.log(err);
      res.redirect("/admin")
   });
}
