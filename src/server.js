require('express-async-errors')

const migrationsRun = require('./database/sqlite/migrations')

const AppError = require('./utils/AppError')
const uploadConfig = require('./configs/upload')

const express = require('express')
const cors = require('cors')

const routes = require('./routes')


const app = express()
migrationsRun()

app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)
app.use(cors())

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.error(error)

  return res.status(500).json({
    status: 'error',
    message: 'internal server error'
  })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port:  ${PORT}`))
