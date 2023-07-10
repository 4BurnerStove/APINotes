const { Router, request } = require('express')

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersController = new UsersController()

const userRoutes = Router()

userRoutes.post('/', usersController.create)
userRoutes.put('/', ensureAuthenticated, usersController.update)

module.exports = userRoutes

// Exemplo de middleware
// function myMiddleware(req, res, next) {
//   if (req.body.isAdmin) {
//     return res.json({ message: 'user unauthorized' })
//   }

//   next()
// }

// userRoutes.use(myMiddleware)
