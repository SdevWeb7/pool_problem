import express from 'express';
import path from 'path';
import router from "./router.js";
import 'dotenv/config';

const app = express();

app.set('view engine', 'ejs');


app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(router);


app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
});