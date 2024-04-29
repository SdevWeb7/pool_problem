import express from 'express';
import path from 'path';
import router from "./router.js";
import 'dotenv/config';
import { flashMiddleware } from "./flashMiddleware.js";
import { authMiddleware } from "./authMiddleware.js";
import session from "express-session";
import { uploadMiddleware } from "./uploadMiddleware.js";

const app = express();

app.set('view engine', 'ejs');


app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
      secret: process.env.APP_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }
   })
);
app.use(flashMiddleware);
app.use(authMiddleware);
app.use(uploadMiddleware);

app.use(router);

app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
});