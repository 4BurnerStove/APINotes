const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')
const 

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersController = new UsersController()

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

userRoutes.post('/', usersController.create)
userRoutes.put('/', ensureAuthenticated, usersController.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (req, res) =>  )

module.exports = userRoutes

// Exemplo de middleware
// function myMiddleware(req, res, next) {
//   if (req.body.isAdmin) {
//     return res.json({ message: 'user unauthorized' })
//   }

//   next()
// }

// userRoutes.use(myMiddleware)
