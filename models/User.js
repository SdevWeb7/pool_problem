import { pool } from "../database/config.js";
import { compareSync, hashSync } from "bcrypt";

class User {

   static create(username, password) {
      const pass = hashSync(password, 10);
      return pool.query("INSERT INTO user (username, password) VALUES (?, ?)", [username, pass]);
   }

   static login(username, password){
      return pool.query("SELECT * FROM user WHERE username = ?", [username])
         .then(([rows]) => {
            if (!rows[0].password || !compareSync(password, rows[0].password)) {
               throw new Error();
            }
            return rows[0];
         })
   }
}

export default User;