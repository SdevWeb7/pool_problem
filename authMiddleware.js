import parseurl from "parseurl";

export const authMiddleware = (req, res, next) => {
   let pathname = parseurl(req).pathname;

   let protectedPath = ['/admin', '/create', '/update', '/delete'];

   //si la session isLogged n'existe pas et que l'url fait partie des urls protégées
   if(!req.session.isLogged && protectedPath.indexOf(pathname) !== -1 ){
      req.flash("error", 'Vous devez être connecté pour accéder à cette page');
      res.redirect('/');
   }
   else{
      next();
   }
}