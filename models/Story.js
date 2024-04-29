import pool from "../database/config.js";

class Story {

   static getAll() {
      return pool.query('SELECT * FROM story').then((res) => {
            return res.rows;
         })
         .catch((err) => {
            console.log(err);
         });
   }
}


export default Story;