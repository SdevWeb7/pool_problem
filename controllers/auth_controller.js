import User from "../models/User.js";


export const subscribe = (req, res) => {
      User.create(req.body.username, req.body.password).then(() => {
            req.flash('success', 'Votre compte a bien été créé');
            req.session.isLogged = true;
            res.redirect('/');
      })
}

export const login = (req, res) => {
      User.login(req.body.username, req.body.password).then((result) => {
            req.session.isLogged = true;
            req.session.user = result;
            req.flash('success', 'Vous êtes connecté');
            res.redirect('/');
      }).catch(() => {
            req.flash('error', 'Mauvais identifiants');
            res.redirect('/');
      })
}

export const logout = (req, res) => {
      req.session.destroy();
      res.redirect('/');
}