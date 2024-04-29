import {pool} from "../database/config.js";

class Story {

   static getAll() {
      return pool.query('SELECT * FROM story').then((res) => {
            return res[0];
         })
         .catch((err) => {
            console.log(err);
         });
   }

   static getOne(id) {
      return pool.query('SELECT * FROM story WHERE id = ?', [id])
         .then((res) => {
            return res[0][0];
         })
         .catch((err) => {
            console.log(err);
         });
   }

   static createStory (title, content) {
      return pool.query('INSERT INTO story (title, content, author, publishTime) VALUES (?, ?, "admin", NOW())', [title, content])
         .then((res) => {
            return res[0];
         })
         .catch((err) => {
            console.log(err);
         });
   }

   static deleteStory (id) {
      return pool.query('DELETE FROM story WHERE id = ?', [id])
         .then((res) => {
            return res[0];
         })
         .catch((err) => {
            console.log(err);
         });
   }

   static updateStory (id, title, content) {
      return pool.query('UPDATE story SET title = ?, content = ?, publishTime = NOW() WHERE id =  ?', [title, content, id])
         .then((res) => {
            return res[0];
         })
         .catch((err) => {
            console.log(err);
         });
   }

}


export default Story;